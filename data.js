// ============================================================
// ResipiLokal.com — DATA FILE
// ✅ TO ADD A NEW CHEF: copy one chef object and fill in the details
// ✅ TO ADD A NEW RECIPE: copy one recipe object and fill in the details
// ============================================================

// ── CHEFS ────────────────────────────────────────────────────
const CHEFS = [
  {
    id: "khairul-aming",
    name: "Khairul Aming",
    slug: "khairul-aming",
    image: "https://i.imgur.com/8pQnH4L.jpg", // replace with real photo URL
    cover: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    bio: "Chef & content creator terkenal Malaysia. Dikenali dengan resepi mudah, bahan simple tapi sedap gila. Viral di TikTok & YouTube dengan jutaan pengikut.",
    bio_en: "Malaysia's most famous recipe content creator. Known for simple ingredients, easy steps, and incredibly delicious results. Viral on TikTok & YouTube with millions of followers.",
    followers: "5.2M",
    recipes_count: 3,
    tiktok: "https://www.tiktok.com/@khairulaming",
    youtube: "https://www.youtube.com/@KhairulAming",
    speciality: ["Lauk", "Nasi", "Simple & Cepat"],
    verified: true,
  },
  {
    id: "azie-kitchen",
    name: "Azie Kitchen",
    slug: "azie-kitchen",
    image: "https://i.imgur.com/9mZkQ2P.jpg", // replace with real photo URL
    cover: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&q=80",
    bio: "Azie Kitchen terkenal dengan resepi kek, kuih muih dan masakan tradisional Malaysia yang sentiasa jadi kegemaran ramai.",
    bio_en: "Azie Kitchen is famous for cakes, traditional kuih, and classic Malaysian cooking loved by generations.",
    followers: "3.8M",
    recipes_count: 3,
    tiktok: "https://www.tiktok.com/@aziekitchen",
    youtube: "https://www.youtube.com/@AzieKitchen",
    speciality: ["Kek", "Kuih", "Masakan Tradisional"],
    verified: true,
  },
  {
    id: "che-sayang",
    name: "Che Sayang",
    slug: "che-sayang",
    image: "https://i.imgur.com/3kLmN8Q.jpg", // replace with real photo URL
    cover: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
    bio: "Che Sayang berkongsi resepi kampung yang autentik dan penuh nostalgia. Masakan yang terus ke hati.",
    bio_en: "Che Sayang shares authentic kampung-style recipes full of nostalgia and heartwarming flavours.",
    followers: "1.2M",
    recipes_count: 3,
    tiktok: "https://www.tiktok.com/@chesayang",
    youtube: "",
    speciality: ["Masakan Kampung", "Tradisional", "Sedap & Jimat"],
    verified: true,
  },
];

// ── RECIPES ──────────────────────────────────────────────────
// category options: "Lauk", "Nasi", "Kuih", "Kek", "Minuman", "Dessert", "Sup", "Sambal", "Seafood"
// ⚠️ tiktok_embed: paste the full TikTok embed URL like https://www.tiktok.com/embed/v2/VIDEOID

const RECIPES = [

  // ── KHAIRUL AMING ──
  {
    id: "ka-ayam-masak-merah",
    chef_id: "khairul-aming",
    title: "Ayam Masak Merah",
    title_en: "Red Spiced Chicken",
    thumbnail: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80",
    category: "Lauk",
    tags: ["Ayam", "Pedas", "Raya Special"],
    prep_time: "15 minit",
    cook_time: "30 minit",
    servings: 4,
    difficulty: "Sederhana",
    description: "Ayam masak merah versi Khairul Aming — warna cantik, rasa kaya, dan mudah dibuat walaupun untuk orang yang baru belajar masak.",
    description_en: "Khairul Aming's version of Red Spiced Chicken — beautiful colour, rich flavour, easy enough for beginners.",
    ingredients: [
      "1 ekor ayam, potong 12",
      "4 sudu besar pes cili",
      "3 ulas bawang putih, kisar",
      "2 biji bawang besar, hiris",
      "1 tin tomato",
      "2 sudu besar sos tomato",
      "Garam & gula secukup rasa",
      "Minyak untuk menumis",
      "Daun bawang & cili untuk hiasan"
    ],
    ingredients_en: [
      "1 whole chicken, cut into 12",
      "4 tbsp chili paste",
      "3 cloves garlic, blended",
      "2 onions, sliced",
      "1 can tomatoes",
      "2 tbsp tomato sauce",
      "Salt & sugar to taste",
      "Oil for sautéing",
      "Spring onion & chili for garnish"
    ],
    steps: [
      "Goreng ayam hingga separuh masak. Ketepikan.",
      "Tumis bawang besar hingga layu, masukkan bawang putih dan pes cili.",
      "Tumis hingga naik minyak dan wangi.",
      "Masukkan tin tomato dan sos tomato. Kacau rata.",
      "Masukkan ayam, garam dan gula. Kacau sebati.",
      "Masak dengan api sederhana selama 15 minit hingga kuah pekat.",
      "Hiaskan dengan daun bawang dan hidangkan."
    ],
    tiktok_embed: "https://www.tiktok.com/embed/v2/7100000000000000000", // ⚠️ Replace with real TikTok video ID
    featured: true,
    popular: true,
  },
  {
    id: "ka-nasi-goreng-kampung",
    chef_id: "khairul-aming",
    title: "Nasi Goreng Kampung",
    title_en: "Kampung Fried Rice",
    thumbnail: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80",
    category: "Nasi",
    tags: ["Nasi", "Simple", "10 Minit"],
    prep_time: "5 minit",
    cook_time: "10 minit",
    servings: 2,
    difficulty: "Mudah",
    description: "Resepi nasi goreng kampung paling simple dari Khairul Aming. Sesuai untuk sarapan atau makan tengah hari.",
    description_en: "Khairul Aming's simplest kampung fried rice recipe. Perfect for breakfast or lunch.",
    ingredients: [
      "2 pinggan nasi sejuk",
      "2 biji telur",
      "3 sudu besar pes cili atau sambal belacan",
      "Ikan bilis goreng segenggam",
      "Sayur kangkung atau sawi",
      "Kicap manis secukup rasa",
      "Garam secukupnya",
      "Minyak untuk menumis"
    ],
    ingredients_en: [
      "2 plates cold rice",
      "2 eggs",
      "3 tbsp chili paste or sambal belacan",
      "A handful of fried anchovies",
      "Kangkung or mustard greens",
      "Sweet soy sauce to taste",
      "Salt to taste",
      "Oil for frying"
    ],
    steps: [
      "Panaskan minyak dalam kuali atas api tinggi.",
      "Masukkan pes cili, tumis hingga wangi.",
      "Pecahkan telur, kacau separuh masak.",
      "Masukkan nasi, kacau rata dengan telur.",
      "Tambah kicap manis dan garam, kacau lagi.",
      "Masukkan sayur dan ikan bilis, kacau sebentar.",
      "Hidangkan panas-panas dengan telur goreng di atas."
    ],
    tiktok_embed: "https://www.tiktok.com/embed/v2/7200000000000000000", // ⚠️ Replace with real TikTok video ID
    featured: false,
    popular: true,
  },
  {
    id: "ka-sambal-udang",
    chef_id: "khairul-aming",
    title: "Sambal Udang Petai",
    title_en: "Prawn Sambal with Petai",
    thumbnail: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
    category: "Sambal",
    tags: ["Udang", "Pedas", "Petai"],
    prep_time: "10 minit",
    cook_time: "20 minit",
    servings: 3,
    difficulty: "Sederhana",
    description: "Sambal udang petai yang kaya dengan rempah dan cukup pedas. Makan dengan nasi panas memang tak boleh berhenti!",
    description_en: "Rich and spicy prawn sambal with petai beans. Eaten with hot rice, you simply can't stop!",
    ingredients: [
      "300g udang, kupas",
      "1 papan petai",
      "5 sudu besar pes cili",
      "2 biji bawang besar",
      "4 ulas bawang putih",
      "1 sudu teh belacan bakar",
      "Gula, garam, asam jawa secukup rasa"
    ],
    ingredients_en: [
      "300g prawns, peeled",
      "1 bunch petai beans",
      "5 tbsp chili paste",
      "2 onions",
      "4 cloves garlic",
      "1 tsp toasted belacan",
      "Sugar, salt, tamarind to taste"
    ],
    steps: [
      "Kisar bawang besar, bawang putih dan belacan.",
      "Tumis kisar bersama pes cili hingga naik minyak.",
      "Masukkan udang, kacau hingga bertukar warna.",
      "Masukkan petai, kacau sebati.",
      "Perasakan dengan gula, garam dan asam jawa.",
      "Masak hingga kuah pekat dan hidangkan."
    ],
    tiktok_embed: "https://www.tiktok.com/embed/v2/7300000000000000000", // ⚠️ Replace with real TikTok video ID
    featured: false,
    popular: false,
  },

  // ── AZIE KITCHEN ──
  {
    id: "ak-kek-coklat-moist",
    chef_id: "azie-kitchen",
    title: "Kek Coklat Moist",
    title_en: "Moist Chocolate Cake",
    thumbnail: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    category: "Kek",
    tags: ["Kek", "Coklat", "Viral"],
    prep_time: "20 minit",
    cook_time: "45 minit",
    servings: 8,
    difficulty: "Sederhana",
    description: "Resepi kek coklat moist paling terkenal dari Azie Kitchen. Lembut, moist dan rasa coklat yang kaya. Dah buat berjuta kali oleh peminat!",
    description_en: "Azie Kitchen's most famous moist chocolate cake recipe. Soft, moist and rich in chocolate flavour. Made millions of times by fans!",
    ingredients: [
      "2 cawan tepung gandum",
      "2 cawan gula",
      "3/4 cawan serbuk koko",
      "2 sudu teh baking soda",
      "1 sudu teh garam",
      "2 biji telur",
      "1 cawan buttermilk",
      "1 cawan air panas",
      "1/2 cawan minyak masak",
      "2 sudu teh esen vanilla"
    ],
    ingredients_en: [
      "2 cups all-purpose flour",
      "2 cups sugar",
      "3/4 cup cocoa powder",
      "2 tsp baking soda",
      "1 tsp salt",
      "2 eggs",
      "1 cup buttermilk",
      "1 cup hot water",
      "1/2 cup cooking oil",
      "2 tsp vanilla essence"
    ],
    steps: [
      "Panaskan oven pada 175°C. Gris dan lapik loyang.",
      "Ayak tepung, gula, serbuk koko, baking soda dan garam.",
      "Dalam bekas lain, pukul telur, buttermilk, minyak dan vanilla.",
      "Gaul bahan basah ke dalam bahan kering hingga sebati.",
      "Tambah air panas perlahan-lahan, kacau rata.",
      "Tuang adunan ke dalam loyang.",
      "Bakar 45 minit atau hingga lidi bersih bila cucuk.",
      "Sejukkan sebelum dihias dengan ganache coklat."
    ],
    tiktok_embed: "https://www.tiktok.com/embed/v2/7400000000000000000", // ⚠️ Replace with real TikTok video ID
    featured: true,
    popular: true,
  },
  {
    id: "ak-kuih-lapis",
    chef_id: "azie-kitchen",
    title: "Kuih Lapis Pelangi",
    title_en: "Rainbow Layered Kuih",
    thumbnail: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80",
    category: "Kuih",
    tags: ["Kuih", "Tradisional", "Warna-Warni"],
    prep_time: "30 minit",
    cook_time: "60 minit",
    servings: 20,
    difficulty: "Susah",
    description: "Kuih lapis pelangi yang cantik dan lembut. Resepi warisan yang dijaga dengan teliti oleh Azie Kitchen.",
    description_en: "Beautiful and soft rainbow layered kuih. A heritage recipe carefully preserved by Azie Kitchen.",
    ingredients: [
      "500g tepung beras",
      "200g tepung sagu",
      "800ml santan",
      "400ml air",
      "400g gula",
      "1 sudu teh garam",
      "Pewarna makanan pelbagai warna"
    ],
    ingredients_en: [
      "500g rice flour",
      "200g sago flour",
      "800ml coconut milk",
      "400ml water",
      "400g sugar",
      "1 tsp salt",
      "Various food colouring"
    ],
    steps: [
      "Gaul tepung beras, tepung sagu, santan, air, gula dan garam hingga sebati.",
      "Tapis adunan dan bahagikan kepada beberapa bahagian.",
      "Warnakan setiap bahagian dengan warna yang berbeza.",
      "Panaskan loyang yang sudah digris dalam pengukus.",
      "Tuang lapisan pertama, kukus 5 minit hingga set.",
      "Ulang sehingga semua lapisan habis.",
      "Kukus lapisan terakhir 15 minit.",
      "Sejukkan sepenuhnya sebelum dipotong."
    ],
    tiktok_embed: "https://www.tiktok.com/embed/v2/7500000000000000000", // ⚠️ Replace with real TikTok video ID
    featured: false,
    popular: true,
  },
  {
    id: "ak-rendang-tok",
    chef_id: "azie-kitchen",
    title: "Rendang Tok",
    title_en: "Traditional Rendang Tok",
    thumbnail: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80",
    category: "Lauk",
    tags: ["Daging", "Raya", "Tradisional"],
    prep_time: "20 minit",
    cook_time: "90 minit",
    servings: 6,
    difficulty: "Sederhana",
    description: "Rendang Tok versi Perak yang autentik dari Azie Kitchen. Kering, hitam dan penuh rempah yang meresap dalam.",
    description_en: "Authentic Perak-style Rendang Tok from Azie Kitchen. Dry, dark and full of deeply infused spices.",
    ingredients: [
      "1kg daging lembu, potong dadu",
      "1 liter santan pekat",
      "10 biji cili kering",
      "5 ulas bawang putih",
      "3 biji bawang besar",
      "2 batang serai",
      "1 inci lengkuas",
      "Kerisik dari 1 biji kelapa",
      "Garam dan gula secukup rasa"
    ],
    ingredients_en: [
      "1kg beef, diced",
      "1 litre thick coconut milk",
      "10 dried chilies",
      "5 cloves garlic",
      "3 onions",
      "2 stalks lemongrass",
      "1 inch galangal",
      "Toasted coconut from 1 coconut",
      "Salt and sugar to taste"
    ],
    steps: [
      "Kisar cili kering, bawang putih, bawang besar, serai dan lengkuas.",
      "Masak daging bersama rempah kisar dan santan.",
      "Kacau selalu atas api sederhana.",
      "Bila santan mula kering, kacau lebih kerap.",
      "Masukkan kerisik, garam dan gula.",
      "Terus masak hingga rendang kering dan berminyak.",
      "Proses ini mengambil masa 1.5 hingga 2 jam."
    ],
    tiktok_embed: "https://www.tiktok.com/embed/v2/7600000000000000000", // ⚠️ Replace with real TikTok video ID
    featured: false,
    popular: false,
  },

  // ── CHE SAYANG ──
  {
    id: "cs-gulai-tempoyak",
    chef_id: "che-sayang",
    title: "Gulai Ikan Tempoyak",
    title_en: "Fish Curry with Tempoyak",
    thumbnail: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&q=80",
    category: "Lauk",
    tags: ["Ikan", "Tempoyak", "Kampung"],
    prep_time: "15 minit",
    cook_time: "25 minit",
    servings: 4,
    difficulty: "Mudah",
    description: "Gulai ikan tempoyak asli dari Che Sayang. Rasa masam fermentasi durian yang unik bercampur dengan lemak santan. Masakan kampung yang tak lekang.",
    description_en: "Authentic fish tempoyak curry from Che Sayang. The unique sour fermented durian flavour mixed with rich coconut milk. A timeless kampung dish.",
    ingredients: [
      "500g ikan patin atau ikan keli",
      "3 sudu besar tempoyak",
      "400ml santan",
      "5 biji cili padi",
      "3 batang serai, dititik",
      "2 helai daun kunyit",
      "1 sudu teh serbuk kunyit",
      "Garam secukup rasa"
    ],
    ingredients_en: [
      "500g catfish or river fish",
      "3 tbsp tempoyak (fermented durian)",
      "400ml coconut milk",
      "5 bird's eye chilies",
      "3 stalks lemongrass, bruised",
      "2 turmeric leaves",
      "1 tsp turmeric powder",
      "Salt to taste"
    ],
    steps: [
      "Didihkan santan bersama serai dan daun kunyit.",
      "Masukkan tempoyak dan cili padi, kacau rata.",
      "Tambah serbuk kunyit dan garam.",
      "Masukkan ikan, masak dengan api sederhana.",
      "Jangan kacau terlalu kerap agar ikan tidak hancur.",
      "Masak 15 minit hingga ikan masak dan kuah pekat.",
      "Hidangkan panas dengan nasi putih."
    ],
    tiktok_embed: "https://www.tiktok.com/embed/v2/7700000000000000000", // ⚠️ Replace with real TikTok video ID
    featured: true,
    popular: true,
  },
  {
    id: "cs-bubur-lambuk",
    chef_id: "che-sayang",
    title: "Bubur Lambuk Tradisional",
    title_en: "Traditional Bubur Lambuk",
    thumbnail: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80",
    category: "Sup",
    tags: ["Bubur", "Ramadan", "Tradisional"],
    prep_time: "20 minit",
    cook_time: "40 minit",
    servings: 6,
    difficulty: "Sederhana",
    description: "Bubur lambuk tradisional yang biasa dihidangkan waktu Ramadan. Resepi turun temurun dari Che Sayang yang penuh rempah dan berkhasiat.",
    description_en: "Traditional bubur lambuk usually served during Ramadan. Che Sayang's generational recipe full of spices and nutrients.",
    ingredients: [
      "2 cawan beras",
      "200g daging cincang",
      "1.5 liter air",
      "400ml santan",
      "2 batang serai",
      "3cm halia",
      "1 sudu teh serbuk lada hitam",
      "Bawang goreng, daun sup & daun bawang untuk hiasan"
    ],
    ingredients_en: [
      "2 cups rice",
      "200g minced meat",
      "1.5 litres water",
      "400ml coconut milk",
      "2 stalks lemongrass",
      "3cm ginger",
      "1 tsp black pepper powder",
      "Fried shallots, celery & spring onion for garnish"
    ],
    steps: [
      "Rebus beras dalam air bersama serai dan halia.",
      "Masak hingga beras hancur dan menjadi bubur.",
      "Masukkan daging cincang, kacau rata.",
      "Tuang santan, kacau perlahan.",
      "Perasakan dengan garam dan lada hitam.",
      "Masak lagi 10 minit hingga pekat.",
      "Hiaskan dengan bawang goreng, daun sup dan daun bawang."
    ],
    tiktok_embed: "https://www.tiktok.com/embed/v2/7800000000000000000", // ⚠️ Replace with real TikTok video ID
    featured: false,
    popular: true,
  },
  {
    id: "cs-masak-lemak-cili-api",
    chef_id: "che-sayang",
    title: "Masak Lemak Cili Api Ayam",
    title_en: "Spicy Coconut Chicken",
    thumbnail: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80",
    category: "Lauk",
    tags: ["Ayam", "Pedas", "Lemak"],
    prep_time: "10 minit",
    cook_time: "30 minit",
    servings: 4,
    difficulty: "Mudah",
    description: "Masak lemak cili api ayam versi kampung dari Che Sayang. Kuning, lemak dan pedas yang betul-betul meresap.",
    description_en: "Kampung-style spicy coconut chicken from Che Sayang. Yellow, rich and deeply spiced.",
    ingredients: [
      "1 ekor ayam kampung, potong",
      "600ml santan",
      "10 biji cili padi kuning",
      "3 ulas bawang putih",
      "1 inci kunyit hidup",
      "2 batang serai",
      "Garam secukup rasa"
    ],
    ingredients_en: [
      "1 free-range chicken, cut",
      "600ml coconut milk",
      "10 yellow bird's eye chilies",
      "3 cloves garlic",
      "1 inch fresh turmeric",
      "2 stalks lemongrass",
      "Salt to taste"
    ],
    steps: [
      "Kisar cili padi, bawang putih dan kunyit hidup.",
      "Didihkan santan bersama rempah kisar dan serai.",
      "Masukkan ayam bila santan mula mendidih.",
      "Masak atas api sederhana, kacau selalu.",
      "Perasakan dengan garam.",
      "Masak hingga ayam empuk dan kuah pekat.",
      "Hidangkan dengan nasi putih panas."
    ],
    tiktok_embed: "https://www.tiktok.com/embed/v2/7900000000000000000", // ⚠️ Replace with real TikTok video ID
    featured: false,
    popular: false,
  },
];

// ── HELPER FUNCTIONS ─────────────────────────────────────────
// These help all other pages find the data they need easily

function getChefById(id) {
  return CHEFS.find(c => c.id === id);
}

function getRecipesByChef(chefId) {
  return RECIPES.filter(r => r.chef_id === chefId);
}

function getRecipeById(id) {
  return RECIPES.find(r => r.id === id);
}

function getFeaturedRecipes() {
  return RECIPES.filter(r => r.featured);
}

function getPopularRecipes() {
  return RECIPES.filter(r => r.popular);
}

function getRecipesByCategory(category) {
  return RECIPES.filter(r => r.category === category);
}

function searchRecipes(query) {
  const q = query.toLowerCase();
  return RECIPES.filter(r =>
    r.title.toLowerCase().includes(q) ||
    r.title_en.toLowerCase().includes(q) ||
    r.tags.some(t => t.toLowerCase().includes(q)) ||
    r.category.toLowerCase().includes(q) ||
    getChefById(r.chef_id)?.name.toLowerCase().includes(q)
  );
}

// ── CATEGORIES ───────────────────────────────────────────────
const CATEGORIES = [
  { id: "lauk", name: "Lauk-Pauk", emoji: "🍛" },
  { id: "nasi", name: "Nasi", emoji: "🍚" },
  { id: "kuih", name: "Kuih-Muih", emoji: "🟡" },
  { id: "kek", name: "Kek & Bakeri", emoji: "🎂" },
  { id: "sup", name: "Sup & Bubur", emoji: "🥣" },
  { id: "sambal", name: "Sambal", emoji: "🌶️" },
  { id: "seafood", name: "Seafood", emoji: "🦐" },
  { id: "minuman", name: "Minuman", emoji: "🥤" },
  { id: "dessert", name: "Dessert", emoji: "🍮" },
];