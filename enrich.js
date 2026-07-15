// ============================================================
// ResipiLokal.com — RECIPE ENRICHMENT ENGINE
// Loaded AFTER data.js. Generates per-recipe guidance content
// (tips, mistakes, storage, reheating, kitchen tools, nutrition
// estimate, FAQ) from the recipe's category and ingredients, plus
// real ingredient substitutions scanned from each recipe's own
// ingredient list and "best for" tags from its category/tags.
// This is original site content, written for ResipiLokal — not
// copied from the source creator's caption or video.
// All values marked "Anggaran" (estimate) in the UI.
// ============================================================

const ENRICH = {
  "Lauk": {
    tips: {
      bm: [
        "Perap lebih lama (30 minit hingga semalaman) untuk rasa yang lebih meresap.",
        "Gunakan api sederhana supaya rempah tidak hangit dan rasa lebih sekata.",
        "Rasa dan betulkan perasa (garam, gula) di akhir masakan, bukan di awal.",
      ],
      en: [
        "Marinate longer (30 minutes to overnight) for deeper flavour.",
        "Cook on medium heat so the spices do not burn and the flavour stays even.",
        "Taste and adjust seasoning (salt, sugar) at the end of cooking, not the start.",
      ],
    },
    mistakes: {
      bm: [
        "Jangan tuang santan ketika api terlalu tinggi — santan mudah pecah minyak dan berketul.",
        "Jangan tinggalkan rempah tumis tanpa dikacau — ia cepat hangit dan jadi pahit.",
      ],
      en: [
        "Do not add coconut milk over very high heat — it splits and curdles easily.",
        "Do not leave sautéing spices unstirred — they burn and turn bitter quickly.",
      ],
    },
    storage: {
      bm: "Simpan dalam bekas kedap udara di dalam peti sejuk sehingga 3 hari, atau bekukan sehingga 2 bulan.",
      en: "Store in an airtight container in the fridge for up to 3 days, or freeze for up to 2 months.",
    },
    reheat: {
      bm: "Panaskan semula di atas dapur dengan api perlahan atau microwave 1-2 minit. Tambah sedikit air jika kuah terlalu pekat.",
      en: "Reheat on the stove over low heat or microwave for 1-2 minutes. Add a splash of water if the gravy has thickened.",
    },
    tools: ["Kuali / Wok", "Blender", "Papan pemotong", "Pisau dapur", "Senduk"],
    macros: [0.30, 0.25, 0.45],
    bestFor: {
      bm: ["Makan malam keluarga", "Bekal kerja/sekolah"],
      en: ["Family dinners", "Meal prep for work/school"],
    },
  },
  "Nasi": {
    tips: {
      bm: [
        "Guna nasi sejuk semalaman untuk nasi goreng — hasilnya tidak berketul dan tidak lembik.",
        "Api besar adalah kunci nasi goreng berbau 'wok hei' macam kedai.",
        "Basuh beras sehingga air jernih untuk nasi yang lebih gebu.",
      ],
      en: [
        "Use day-old cold rice for fried rice — it stays fluffy instead of clumping.",
        "High heat is the key to restaurant-style 'wok hei' aroma.",
        "Rinse rice until the water runs clear for fluffier results.",
      ],
    },
    mistakes: {
      bm: [
        "Jangan gunakan nasi panas terus dari periuk — ia terlalu lembap dan jadi lembik bila digoreng.",
        "Jangan penuhkan kuali dengan nasi sekali gus — masak secara berperingkat supaya panas kekal tinggi.",
      ],
      en: [
        "Do not use rice straight from the pot while hot — it is too moist and turns mushy when fried.",
        "Do not overcrowd the pan with rice — cook in batches so the heat stays high.",
      ],
    },
    storage: {
      bm: "Sejukkan cepat dan simpan dalam peti sejuk sehingga 2 hari. Jangan biar nasi di suhu bilik lebih 2 jam.",
      en: "Cool quickly and refrigerate for up to 2 days. Do not leave rice at room temperature for more than 2 hours.",
    },
    reheat: {
      bm: "Panaskan semula sehingga betul-betul panas menggelegak / berwap sepenuhnya sebelum makan.",
      en: "Reheat until piping hot and fully steaming before eating.",
    },
    tools: ["Periuk nasi", "Kuali / Wok", "Senduk nasi", "Papan pemotong", "Pisau dapur"],
    macros: [0.15, 0.60, 0.25],
    bestFor: {
      bm: ["Hidangan utama", "Perayaan/kenduri"],
      en: ["Main meals", "Festive gatherings"],
    },
  },
  "Mee & Pasta": {
    tips: {
      bm: [
        "Jangan masak mee terlalu lama — angkat ketika 'al dente' kerana ia akan terus masak dalam kuali.",
        "Simpan sedikit air rebusan pasta untuk memekatkan sos.",
        "Gaul mee dengan sedikit minyak selepas direbus supaya tidak melekat.",
      ],
      en: [
        "Do not overcook the noodles — remove them at 'al dente' as they keep cooking in the pan.",
        "Save some pasta water to loosen and bind the sauce.",
        "Toss boiled noodles with a little oil so they do not stick.",
      ],
    },
    mistakes: {
      bm: [
        "Jangan gaul mee/pasta dengan sos terlalu awal sebelum sedia dihidang — ia akan melekat dan sejuk.",
        "Jangan buang semua air rebusan — sedikit air berkanji membantu sos melekat pada mee.",
      ],
      en: [
        "Do not toss noodles/pasta with sauce too early — they clump and go cold.",
        "Do not discard all the pasta water — a little starchy water helps the sauce cling.",
      ],
    },
    storage: {
      bm: "Simpan dalam bekas kedap udara di dalam peti sejuk sehingga 2 hari. Kuah dan mee lebih baik disimpan berasingan.",
      en: "Store in an airtight container in the fridge for up to 2 days. Keep noodles and sauce separate if possible.",
    },
    reheat: {
      bm: "Panaskan di kuali dengan sedikit air atau microwave 1-2 minit.",
      en: "Reheat in a pan with a splash of water or microwave for 1-2 minutes.",
    },
    tools: ["Periuk", "Kuali / Wok", "Penapis / Colander", "Penyepit", "Senduk"],
    macros: [0.18, 0.55, 0.27],
    bestFor: {
      bm: ["Masakan pantas waktu sibuk", "Makan tengah hari"],
      en: ["Quick weeknight meals", "Lunch"],
    },
  },
  "Sup": {
    tips: {
      bm: [
        "Reneh dengan api kecil lebih lama untuk kuah yang lebih manis dan pekat rasanya.",
        "Buang buih di permukaan semasa mereneh untuk kuah yang jernih.",
        "Tambah perasa sedikit demi sedikit — kuah akan pekat dan masin bila menyusut.",
      ],
      en: [
        "Simmer low and slow for a sweeter, deeper broth.",
        "Skim the foam off the surface while simmering for a clear soup.",
        "Season gradually — the broth concentrates as it reduces.",
      ],
    },
    mistakes: {
      bm: [
        "Jangan biarkan kuah mendidih kuat sepanjang masa — ia jadi keruh, bukan jernih.",
        "Jangan garamkan kuah terlalu awal — rasa akan berubah pekat bila kuah menyusut.",
      ],
      en: [
        "Do not let the broth boil hard the whole time — it turns cloudy instead of clear.",
        "Do not salt the broth too early — the flavour concentrates as it reduces.",
      ],
    },
    storage: {
      bm: "Sejukkan sepenuhnya dan simpan dalam peti sejuk sehingga 3 hari, atau bekukan sehingga 3 bulan.",
      en: "Cool completely and refrigerate for up to 3 days, or freeze for up to 3 months.",
    },
    reheat: {
      bm: "Didihkan semula di atas dapur sehingga menggelegak sebelum dihidang.",
      en: "Bring back to a rolling boil on the stove before serving.",
    },
    tools: ["Periuk besar", "Senduk", "Penapis", "Papan pemotong", "Pisau dapur"],
    macros: [0.30, 0.35, 0.35],
    bestFor: {
      bm: ["Cuaca sejuk/hujan", "Bila kurang sihat"],
      en: ["Rainy/cold days", "Comfort food when unwell"],
    },
  },
  "Sambal": {
    tips: {
      bm: [
        "Tumis sambal sehingga betul-betul naik minyak — ini rahsia sambal tahan lama dan tak berbau mentah.",
        "Guna api kecil dan kacau selalu supaya sambal tidak hangit di dasar kuali.",
        "Rebus cili kering dahulu supaya sambal lebih lembut dan warna lebih cantik.",
      ],
      en: [
        "Sauté the sambal until the oil separates ('naik minyak') — the secret to sambal that keeps well with no raw taste.",
        "Use low heat and stir often so the sambal does not burn at the bottom.",
        "Boil dried chilies first for a smoother texture and richer colour.",
      ],
    },
    mistakes: {
      bm: [
        "Jangan tumis dengan api besar — cili mudah hangus dan pahit sebelum sempat naik minyak.",
        "Jangan masukkan garam terlalu awal — tumis dahulu sehingga wangi baru perasakan.",
      ],
      en: [
        "Do not use high heat — the chilli burns and turns bitter before the oil separates.",
        "Do not salt too early — sauté until fragrant first, then season.",
      ],
    },
    storage: {
      bm: "Masukkan ke dalam balang bersih dan kering. Tahan sehingga 2 minggu dalam peti sejuk, lebih lama jika minyak menutup permukaan.",
      en: "Store in a clean, dry jar. Keeps up to 2 weeks refrigerated, longer if a layer of oil covers the surface.",
    },
    reheat: {
      bm: "Boleh dimakan sejuk atau panaskan seketika di kuali.",
      en: "Enjoy cold or warm briefly in a pan.",
    },
    tools: ["Blender / Lesung", "Kuali", "Balang kaca", "Senduk kayu"],
    macros: [0.10, 0.35, 0.55],
    bestFor: {
      bm: ["Tambahan rasa pelbagai hidangan", "Stok simpanan dapur"],
      en: ["A flavour boost for other dishes", "A pantry staple to keep on hand"],
    },
  },
  "Seafood": {
    tips: {
      bm: [
        "Jangan masak seafood terlalu lama — sotong dan udang cukup 2-3 minit sahaja, jika tidak ia akan liat.",
        "Lumur ikan dengan garam dan kunyit, biarkan 10 minit untuk buang hanyir.",
        "Pastikan minyak betul-betul panas sebelum menggoreng supaya tidak melekat.",
      ],
      en: [
        "Do not overcook seafood — squid and prawns need only 2-3 minutes or they turn rubbery.",
        "Rub fish with salt and turmeric, rest 10 minutes to remove any fishy smell.",
        "Make sure the oil is properly hot before frying so nothing sticks.",
      ],
    },
    mistakes: {
      bm: [
        "Jangan rendam seafood terlalu lama dalam air — tekstur jadi lembik dan rasa jadi tawar.",
        "Jangan masukkan seafood terlalu awal dalam kuah — masukkan last sekali supaya tidak liat.",
      ],
      en: [
        "Do not soak seafood in water for too long — the texture turns mushy and bland.",
        "Do not add seafood too early into a gravy — add it last so it does not turn rubbery.",
      ],
    },
    storage: {
      bm: "Terbaik dimakan segera. Jika perlu, simpan dalam peti sejuk dan habiskan dalam masa 1-2 hari.",
      en: "Best eaten fresh. If needed, refrigerate and finish within 1-2 days.",
    },
    reheat: {
      bm: "Panaskan sekejap sahaja dengan api sederhana — pemanasan berlebihan menjadikan seafood liat.",
      en: "Reheat only briefly over medium heat — overheating makes seafood rubbery.",
    },
    tools: ["Kuali / Wok", "Penyepit", "Papan pemotong", "Pisau dapur", "Pengukus (jika stim)"],
    macros: [0.40, 0.20, 0.40],
    bestFor: {
      bm: ["Majlis istimewa", "Penggemar makanan laut"],
      en: ["Special occasions", "Seafood lovers"],
    },
  },
  "Kuih": {
    tips: {
      bm: [
        "Ikut sukatan dengan tepat — kuih tradisional sensitif pada nisbah tepung dan cecair.",
        "Guna santan segar untuk rasa lemak yang lebih sedap.",
        "Pastikan air kukusan sudah mendidih sebelum kuih dimasukkan.",
      ],
      en: [
        "Follow measurements precisely — traditional kuih is sensitive to flour-to-liquid ratios.",
        "Use fresh coconut milk for the best rich flavour.",
        "Make sure the steamer water is boiling before the kuih goes in.",
      ],
    },
    mistakes: {
      bm: [
        "Jangan buka penutup kukusan berulang kali — wap terganggu dan kuih tidak masak sekata.",
        "Jangan tuang adunan terlalu penuh dalam acuan — kuih perlu ruang untuk naik/kembang.",
      ],
      en: [
        "Do not keep lifting the steamer lid — it disrupts the steam and cooks the kuih unevenly.",
        "Do not overfill the mould — the kuih needs room to rise/expand.",
      ],
    },
    storage: {
      bm: "Kuih bersantan tahan 1-2 hari pada suhu bilik yang sejuk, atau 3-4 hari dalam peti sejuk.",
      en: "Coconut-based kuih keeps 1-2 days at cool room temperature, or 3-4 days refrigerated.",
    },
    reheat: {
      bm: "Kukus semula 5 minit untuk kelembutan asal. Elakkan microwave terlalu lama.",
      en: "Re-steam for 5 minutes to restore softness. Avoid long microwaving.",
    },
    tools: ["Pengukus", "Loyang", "Penimbang dapur", "Whisk", "Ayak tepung"],
    macros: [0.06, 0.60, 0.34],
    bestFor: {
      bm: ["Jamuan/potluck", "Minum petang"],
      en: ["Potlucks/gatherings", "Afternoon tea"],
    },
  },
  "Kek": {
    tips: {
      bm: [
        "Pastikan semua bahan berada pada suhu bilik sebelum mula membancuh.",
        "Jangan overmix adunan selepas tepung dimasukkan — cukup sekadar sebati.",
        "Uji kematangan dengan lidi: cucuk di tengah, jika keluar bersih kek sudah masak.",
      ],
      en: [
        "Bring all ingredients to room temperature before mixing.",
        "Do not overmix once the flour goes in — mix just until combined.",
        "Test with a skewer: insert into the centre; if it comes out clean, the cake is done.",
      ],
    },
    mistakes: {
      bm: [
        "Jangan buka pintu oven terlalu awal — kek boleh kempis sebelum betul-betul masak.",
        "Jangan overmix adunan — gluten berlebihan menjadikan kek keras, bukan lembut.",
      ],
      en: [
        "Do not open the oven door too early — the cake can collapse before it is fully set.",
        "Do not overmix the batter — excess gluten makes the cake tough instead of soft.",
      ],
    },
    storage: {
      bm: "Simpan dalam bekas kedap udara: 2-3 hari suhu bilik atau seminggu dalam peti sejuk. Boleh dibekukan sehingga 2 bulan.",
      en: "Store in an airtight container: 2-3 days at room temperature or a week refrigerated. Freezes well up to 2 months.",
    },
    reheat: {
      bm: "Biarkan kek sejuk beku kembali ke suhu bilik, atau microwave 10-15 saat untuk tekstur lembut.",
      en: "Let chilled cake come back to room temperature, or microwave 10-15 seconds for a soft texture.",
    },
    tools: ["Oven / Air fryer", "Loyang", "Mixer / Whisk", "Penimbang dapur", "Spatula"],
    macros: [0.07, 0.55, 0.38],
    bestFor: {
      bm: ["Jamuan/potluck", "Hari jadi/perayaan"],
      en: ["Potlucks/gatherings", "Birthdays/celebrations"],
    },
  },
  "Dessert": {
    tips: {
      bm: [
        "Sejukkan dalam peti sejuk sekurang-kurangnya 2 jam untuk tekstur dan rasa terbaik.",
        "Guna bahan berkualiti (coklat, susu, buah segar) — rasa pencuci mulut sangat bergantung padanya.",
        "Kurangkan gula ikut citarasa — kebanyakan resepi boleh ditolak 10-20% gula.",
      ],
      en: [
        "Chill for at least 2 hours for the best texture and flavour.",
        "Use quality ingredients (chocolate, milk, fresh fruit) — desserts depend on them.",
        "Adjust sugar to taste — most recipes work with 10-20% less.",
      ],
    },
    mistakes: {
      bm: [
        "Jangan hidang sebelum cukup sejuk — kebanyakan dessert perlu masa untuk 'set' dengan betul.",
        "Jangan gunakan buah/santan terlalu sejuk terus dari peti — boleh menjadikan tekstur berketul.",
      ],
      en: [
        "Do not serve before it is properly chilled — most desserts need time to set.",
        "Do not use fruit/coconut milk straight from the fridge — it can make the texture clumpy.",
      ],
    },
    storage: {
      bm: "Simpan bertutup dalam peti sejuk sehingga 3 hari. Dessert beku simpan dalam freezer sehingga 2 minggu.",
      en: "Store covered in the fridge for up to 3 days. Frozen desserts keep up to 2 weeks in the freezer.",
    },
    reheat: {
      bm: "Kebanyakan dessert dimakan sejuk. Untuk dessert panas, microwave 15-30 saat sahaja.",
      en: "Most desserts are served cold. For warm desserts, microwave just 15-30 seconds.",
    },
    tools: ["Mangkuk adunan", "Whisk", "Penimbang dapur", "Bekas / Cup hidangan", "Peti sejuk"],
    macros: [0.06, 0.58, 0.36],
    bestFor: {
      bm: ["Penutup majlis", "Waktu santai petang"],
      en: ["Ending a meal", "A relaxed afternoon treat"],
    },
  },
  "Minuman": {
    tips: {
      bm: [
        "Guna ais secukupnya — terlalu banyak ais mencairkan rasa minuman.",
        "Larutkan gula/sirap dalam sedikit air panas dahulu supaya tidak mendap.",
        "Hidang segera selepas dibancuh untuk rasa paling segar.",
      ],
      en: [
        "Use just enough ice — too much dilutes the drink.",
        "Dissolve sugar/syrup in a little hot water first so it does not settle.",
        "Serve immediately after mixing for the freshest taste.",
      ],
    },
    mistakes: {
      bm: [
        "Jangan tambah ais sebelum gula/sirap larut sepenuhnya — rasa jadi tidak sekata.",
        "Jangan blend terlalu lama — ais cair dan minuman jadi cair sebelum sempat dihidang.",
      ],
      en: [
        "Do not add ice before the sugar/syrup fully dissolves — the flavour ends up uneven.",
        "Do not blend for too long — the ice melts and the drink turns watery before serving.",
      ],
    },
    storage: {
      bm: "Terbaik dihidang segera. Boleh simpan dalam peti sejuk sehingga 24 jam (tanpa ais).",
      en: "Best served fresh. Can be refrigerated up to 24 hours (without ice).",
    },
    reheat: {
      bm: "Kacau semula dan tambah ais baru sebelum hidang.",
      en: "Stir again and add fresh ice before serving.",
    },
    tools: ["Blender", "Jug / Balang", "Penapis", "Gelas hidangan"],
    macros: [0.04, 0.88, 0.08],
    bestFor: {
      bm: ["Hari panas", "Berbuka puasa"],
      en: ["Hot days", "Breaking fast (buka puasa)"],
    },
  },
  "Sarapan": {
    tips: {
      bm: [
        "Sediakan bahan malam sebelumnya supaya pagi lebih pantas.",
        "Guna api sederhana-rendah untuk telur yang lembut dan tidak hangit.",
        "Roti bakar lebih sedap disapu mentega semasa masih panas.",
      ],
      en: [
        "Prep ingredients the night before for a faster morning.",
        "Use medium-low heat for soft, unburnt eggs.",
        "Toast tastes best buttered while still hot.",
      ],
    },
    mistakes: {
      bm: [
        "Jangan masak telur di atas api tinggi — bahagian bawah cepat hangit sementara atas belum masak.",
        "Jangan tinggalkan roti dalam toaster terlalu lama sambil buat kerja lain — mudah hangus.",
      ],
      en: [
        "Do not cook eggs on high heat — the bottom burns before the top is set.",
        "Do not leave toast in the toaster while doing something else — it burns quickly.",
      ],
    },
    storage: {
      bm: "Kebanyakan menu sarapan terbaik dimakan segera. Overnight oats tahan 2-3 hari dalam peti sejuk.",
      en: "Most breakfast dishes are best fresh. Overnight oats keep 2-3 days refrigerated.",
    },
    reheat: {
      bm: "Panaskan di kuali atau toaster untuk kembalikan tekstur rangup; microwave untuk telur dan oat.",
      en: "Reheat in a pan or toaster to restore crispness; microwave works for eggs and oats.",
    },
    tools: ["Pan leper", "Toaster", "Spatula", "Mangkuk", "Whisk"],
    macros: [0.20, 0.45, 0.35],
    bestFor: {
      bm: ["Sarapan pagi cepat", "Bekal sekolah"],
      en: ["Quick breakfasts", "School lunchboxes"],
    },
  },
  "Western": {
    tips: {
      bm: [
        "Rehatkan daging/ayam 5 minit selepas dimasak supaya jus tidak keluar bila dipotong.",
        "Panaskan pan sehingga betul-betul panas untuk 'sear' yang cantik.",
        "Sukat perasa dengan jitu — masakan western bergantung pada garam dan lada yang cukup.",
      ],
      en: [
        "Rest meat/chicken 5 minutes after cooking so the juices stay in when sliced.",
        "Get the pan properly hot for a good sear.",
        "Season precisely — western dishes depend on adequate salt and pepper.",
      ],
    },
    mistakes: {
      bm: [
        "Jangan potong daging sejurus selepas masak — biarkan rehat dahulu supaya jus tidak terkeluar.",
        "Jangan penuhkan pan semasa 'sear' — daging akan terkukus, bukan garing.",
      ],
      en: [
        "Do not slice meat right after cooking — let it rest so the juices stay in.",
        "Do not crowd the pan while searing — the meat steams instead of browning.",
      ],
    },
    storage: {
      bm: "Simpan dalam bekas kedap udara dalam peti sejuk sehingga 3 hari. Simpan sos berasingan jika boleh.",
      en: "Store in an airtight container in the fridge for up to 3 days. Keep sauces separate if possible.",
    },
    reheat: {
      bm: "Oven/air fryer 160°C selama 5-8 minit untuk kembalikan rangup; microwave untuk sos dan mash.",
      en: "Oven/air fryer at 160°C for 5-8 minutes to restore crispness; microwave for sauces and mash.",
    },
    tools: ["Pan leper / Grill pan", "Air fryer / Oven", "Penyepit", "Papan pemotong", "Pisau chef"],
    macros: [0.28, 0.35, 0.37],
    bestFor: {
      bm: ["Percubaan masakan gaya baharu", "Majlis kecil-kecilan"],
      en: ["Trying a new style of cooking", "Small get-togethers"],
    },
  },
};

const ENRICH_DEFAULT = ENRICH["Lauk"];

function getEnrichProfile(recipe) {
  return ENRICH[recipe.category] || ENRICH_DEFAULT;
}

// ── Total time ("15 minit" + "30 minit" -> "45 minit") ──────
function getTotalTime(recipe) {
  const p = parseInt(recipe.prep_time, 10) || 0;
  const c = parseInt(recipe.cook_time, 10) || 0;
  const t = p + c;
  if (!t) return "";
  if (t >= 60) {
    const h = Math.floor(t / 60), m = t % 60;
    return h + " jam" + (m ? " " + m + " minit" : "");
  }
  return t + " minit";
}

// ── Nutrition estimate per serving ──────────────────────────
function getNutrition(recipe) {
  const kcal = recipe.calories || 350;
  const m = getEnrichProfile(recipe).macros; // [protein, carb, fat] energy ratio
  return {
    kcal: kcal,
    protein: Math.round((kcal * m[0]) / 4),
    carbs: Math.round((kcal * m[1]) / 4),
    fat: Math.round((kcal * m[2]) / 9),
  };
}

// ── Tips / mistakes / storage / reheat ───────────────────────
function getTips(recipe, lang) {
  return getEnrichProfile(recipe).tips[lang === "en" ? "en" : "bm"];
}
function getMistakes(recipe, lang) {
  return getEnrichProfile(recipe).mistakes[lang === "en" ? "en" : "bm"];
}
function getStorage(recipe, lang) {
  return getEnrichProfile(recipe).storage[lang === "en" ? "en" : "bm"];
}
function getReheat(recipe, lang) {
  return getEnrichProfile(recipe).reheat[lang === "en" ? "en" : "bm"];
}

// ── "Best for" tags — category baseline + tag-based extras ──
function getBestFor(recipe, lang) {
  const en = lang === "en";
  const out = getEnrichProfile(recipe).bestFor[en ? "en" : "bm"].slice();
  const tags = (recipe.tags || []).join("|").toLowerCase();
  if (tags.indexOf("ramadan") !== -1) out.push(en ? "Ramadan iftar" : "Juadah berbuka puasa");
  if (tags.indexOf("raya") !== -1) out.push(en ? "Raya open house" : "Juadah Hari Raya");
  if (tags.indexOf("viral tiktok") !== -1) out.push(en ? "Trying a viral recipe" : "Nak cuba resepi viral");
  if (tags.indexOf("air fryer") !== -1) out.push(en ? "Lower-oil cooking" : "Masakan kurang minyak");
  // dedupe, cap at 4
  const seen = {}, deduped = [];
  for (let i = 0; i < out.length; i++) {
    const k = out[i].toLowerCase();
    if (!seen[k]) { seen[k] = true; deduped.push(out[i]); }
    if (deduped.length >= 4) break;
  }
  return deduped;
}

// ── Ingredient substitutions — scanned from the recipe's own
//    ingredient list, so this is genuinely per-recipe rather than
//    a fixed per-category block. ────────────────────────────
const SUBSTITUTES = [
  { match: /santan/i, bm: "Santan → susu sejat (evaporated milk) + sedikit minyak masak untuk versi lebih ringan.", en: "Coconut milk → evaporated milk + a little cooking oil for a lighter version." },
  { match: /gula melaka/i, bm: "Gula melaka → gula perang boleh digunakan, tapi rasa karamel gula melaka agak sukar ditiru sepenuhnya.", en: "Palm sugar (gula melaka) → brown sugar works, though it won't fully match the caramel depth." },
  { match: /cili padi|cili api/i, bm: "Cili padi → kurangkan kuantiti atau guna cili boh untuk versi kurang pedas.", en: "Bird's eye chilli → use less, or swap in chilli paste for a milder version." },
  { match: /cili kering/i, bm: "Cili kering → cili boh (paste sedia guna) untuk versi lebih pantas.", en: "Dried chilli → ready-made chilli paste for a quicker version." },
  { match: /asam jawa/i, bm: "Air asam jawa → boleh guna jus limau nipis sebagai gantian pantas.", en: "Tamarind water → fresh lime juice works as a quick substitute." },
  { match: /kerisik/i, bm: "Kerisik → kelapa parut yang disangai sendiri di kuali kering sehingga perang keemasan.", en: "Kerisik (toasted coconut) → toast grated coconut in a dry pan until golden brown." },
  { match: /daun pandan/i, bm: "Daun pandan → jika tiada, boleh ditinggalkan; hanya aromanya sahaja akan berkurang.", en: "Pandan leaf → can be left out if unavailable; only the aroma will be milder." },
  { match: /ikan bilis/i, bm: "Ikan bilis → ikan bilis serbuk atau kiub stok ayam sebagai gantian pantas.", en: "Dried anchovies (ikan bilis) → anchovy powder or a chicken stock cube as a quick swap." },
  { match: /\budang\b/i, bm: "Udang → boleh gantikan dengan ketam atau sotong ikut citarasa.", en: "Prawns → crab or squid can be swapped in depending on preference." },
  { match: /\bayam\b/i, bm: "Ayam → guna bahagian dada untuk rendah lemak, atau paha untuk hasil lebih juicy.", en: "Chicken → use breast for a leaner result, or thigh for juicier meat." },
  { match: /\bdaging\b/i, bm: "Daging lembu → boleh gantikan dengan daging kambing atau ayam untuk versi lebih ringan dan pantas.", en: "Beef → can be swapped for mutton, or chicken for a lighter, faster version." },
  { match: /cendawan/i, bm: "Cendawan → jenis lain seperti cendawan butang atau tiram boleh diguna jika jenis asal tiada.", en: "Mushroom → button or oyster mushroom works if the original type isn't available." },
  { match: /keju/i, bm: "Keju → cheddar dan mozzarella biasanya boleh saling menggantikan mengikut apa yang ada.", en: "Cheese → cheddar and mozzarella can generally be swapped for each other." },
  { match: /serai/i, bm: "Serai segar → serbuk serai boleh digunakan, tapi kurangkan sukatan sedikit.", en: "Fresh lemongrass → lemongrass powder works, but use a smaller amount." },
  { match: /lengkuas/i, bm: "Lengkuas → halia boleh jadi gantian pantas walaupun rasa sedikit berbeza.", en: "Galangal → ginger is a quick substitute, though the flavour differs slightly." },
  { match: /tauhu/i, bm: "Tauhu → tempe boleh digunakan untuk tekstur yang berbeza tapi sama-sama sedap.", en: "Tofu → tempeh gives a different but equally tasty texture." },
  { match: /telur itik/i, bm: "Telur itik → telur ayam biasa boleh digunakan, hanya rasa sedikit kurang gebu.", en: "Duck egg → regular chicken egg works, just slightly less rich." },
  { match: /susu cair/i, bm: "Susu cair → santan atau susu sejat boleh diguna untuk hasil yang lebih kaya.", en: "Liquid milk → coconut milk or evaporated milk gives a richer result." },
  { match: /tepung gandum|tepung serba/i, bm: "Tepung gandum → tepung serbaguna (all-purpose) boleh digunakan sebagai gantian umum.", en: "Wheat flour → all-purpose flour is a general substitute." },
  { match: /kunyit hidup/i, bm: "Kunyit hidup → serbuk kunyit boleh digunakan, guna kira-kira 1/2 sudu kecil bagi setiap ibu jari kunyit segar.", en: "Fresh turmeric → turmeric powder works, use about 1/2 tsp per thumb-sized piece." },
  { match: /daun limau purut/i, bm: "Daun limau purut → daun kari boleh digunakan sebagai gantian aroma jika tiada.", en: "Kaffir lime leaf → curry leaf can substitute for aroma if unavailable." },
  { match: /kicap pekat/i, bm: "Kicap pekat → kicap manis biasa + sedikit gula boleh digunakan sebagai gantian.", en: "Thick soy sauce → regular sweet soy sauce plus a little sugar works as a substitute." },
];

function getSubstitutes(recipe, lang) {
  const en = lang === "en";
  const text = (recipe.ingredients || []).join(" | ");
  const out = [];
  const seen = {};
  for (let i = 0; i < SUBSTITUTES.length; i++) {
    const rule = SUBSTITUTES[i];
    if (rule.match.test(text)) {
      const val = en ? rule.en : rule.bm;
      if (!seen[val]) { seen[val] = true; out.push(val); }
    }
    if (out.length >= 3) break;
  }
  if (!out.length) {
    out.push(en
      ? "Bahan-bahan boleh dilaraskan mengikut apa yang ada di dapur anda — masakan Malaysia biasanya fleksibel dari segi bahan."
      : "Bahan-bahan boleh dilaraskan mengikut apa yang ada di dapur anda — masakan Malaysia biasanya fleksibel dari segi bahan.");
  }
  return out;
}

// ── Kitchen tools (with shopping links) ──────────────────────
function getTools(recipe) {
  const base = getEnrichProfile(recipe).tools.slice();
  const t = (recipe.title + " " + recipe.title_en).toLowerCase();
  if (t.indexOf("air fryer") !== -1 || t.indexOf("airfryer") !== -1) {
    if (base.indexOf("Air fryer") === -1) base.unshift("Air fryer");
  }
  if (t.indexOf("periuk nasi") !== -1 || t.indexOf("rice cooker") !== -1) base.unshift("Periuk nasi");
  if (t.indexOf("blender") !== -1) base.unshift("Blender");
  if (t.indexOf("oven") !== -1) base.unshift("Oven");
  // dedupe, max 6
  const seen = {}, out = [];
  for (let i = 0; i < base.length; i++) {
    const k = base[i].toLowerCase();
    if (!seen[k]) { seen[k] = true; out.push(base[i]); }
    if (out.length >= 6) break;
  }
  return out;
}

// ── FAQ generator (bilingual) ────────────────────────────────
function getFAQ(recipe, lang) {
  const en = lang === "en";
  const total = getTotalTime(recipe);
  const nut = getNutrition(recipe);
  const faq = [];
  faq.push({
    q: en ? "How long does this recipe take?" : "Berapa lama masa untuk resepi ini?",
    a: en
      ? "Around " + recipe.prep_time.replace("minit", "minutes") + " of prep and " + recipe.cook_time.replace("minit", "minutes") + " of cooking — about " + total.replace("jam", "hour(s)").replace("minit", "minutes") + " in total (estimate)."
      : "Lebih kurang " + recipe.prep_time + " penyediaan dan " + recipe.cook_time + " memasak — jumlah anggaran " + total + ".",
  });
  faq.push({
    q: en ? "How many people does it serve?" : "Untuk berapa orang resepi ini?",
    a: en
      ? "This recipe serves about " + recipe.servings + ". Simply multiply the ingredients to cook for more."
      : "Resepi ini untuk anggaran " + recipe.servings + " orang. Gandakan bahan untuk hidangan lebih ramai.",
  });
  faq.push({
    q: en ? "Is this recipe difficult?" : "Susah tak resepi ini?",
    a: en
      ? "Difficulty level: " + recipe.difficulty + ". " + (recipe.difficulty === "Mudah" ? "Very beginner-friendly!" : recipe.difficulty === "Sederhana" ? "Manageable for most home cooks — just follow the steps in order." : "Take your time and prepare all ingredients before starting.")
      : "Tahap kesukaran: " + recipe.difficulty + ". " + (recipe.difficulty === "Mudah" ? "Sangat sesuai untuk yang baru belajar memasak!" : recipe.difficulty === "Sederhana" ? "Boleh dibuat oleh kebanyakan orang — ikut langkah satu persatu." : "Ambil masa dan sediakan semua bahan sebelum mula."),
  });
  faq.push({
    q: en ? "How many calories per serving?" : "Berapa kalori untuk satu hidangan?",
    a: en
      ? "Approximately " + nut.kcal + " kcal per serving (estimate based on typical ingredients — actual values vary with brands and portions)."
      : "Anggaran " + nut.kcal + " kcal satu hidangan (berdasarkan bahan tipikal — nilai sebenar berbeza ikut jenama dan sukatan).",
  });
  faq.push({
    q: en ? "Where can I watch the original video?" : "Di mana boleh tonton video asal?",
    a: en
      ? "The original video is embedded on this page (or linked to the chef's official TikTok). Full credit to the original creator."
      : "Video asal dipaparkan di halaman ini (atau dipautkan ke TikTok rasmi chef). Kredit penuh kepada pencipta asal.",
  });
  return faq;
}
