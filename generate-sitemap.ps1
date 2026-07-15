# Regenerates sitemap.xml from the actual pages present in the repo.
# Run after adding/removing recipes or chefs, then re-bake and commit.
$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot

$base = 'https://www.resepilokal.com'
$today = Get-Date -Format 'yyyy-MM-dd'

function Entry($loc, $lastmod, $freq, $priority) {
  return "  <url>`n       <loc>$loc</loc>`n       <lastmod>$lastmod</lastmod>`n       <changefreq>$freq</changefreq>`n       <priority>$priority</priority>`n  </url>"
}

$entries = @()

# Core static pages
$entries += Entry "$base/" $today 'daily' '1.0000'
$entries += Entry "$base/chefs.html" $today 'weekly' '0.8000'
$entries += Entry "$base/search.html" $today 'weekly' '0.8000'
$entries += Entry "$base/categories.html" $today 'weekly' '0.8000'
foreach ($p in @('about', 'faq', 'contact', 'privacy', 'terms', 'affiliate-disclosure')) {
  $entries += Entry "$base/$p.html" $today 'monthly' '0.3000'
}

# Chef pages
Get-ChildItem 'chef' -Filter '*.html' -File | Sort-Object Name | ForEach-Object {
  $lastmod = $_.LastWriteTime.ToString('yyyy-MM-dd')
  $entries += Entry "$base/chef/$($_.Name)" $lastmod 'weekly' '0.7000'
}

# Recipe pages
Get-ChildItem 'resepi' -Filter '*.html' -File | Sort-Object Name | ForEach-Object {
  $lastmod = $_.LastWriteTime.ToString('yyyy-MM-dd')
  $entries += Entry "$base/resepi/$($_.Name)" $lastmod 'weekly' '0.6000'
}

$xml = "<?xml version=`"1.0`" encoding=`"UTF-8`"?>`n<urlset xmlns=`"http://www.sitemaps.org/schemas/sitemap/0.9`">`n`n" + ($entries -join "`n`n") + "`n`n</urlset>`n"

Set-Content -Path 'sitemap.xml' -Value $xml -NoNewline -Encoding utf8
Write-Host ("Wrote sitemap.xml with " + $entries.Count + " URLs")
