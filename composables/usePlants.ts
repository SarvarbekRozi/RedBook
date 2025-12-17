export const usePlants = () => {
  const plants = [
    {
      id: 1,
      name: "Zarafshon juvasi",
      latinName: "Allium caeruleum",
      category: "Gullash o'simliklari",
      status: "Xavf ostida",
      threat: "Yuqori",
      description: "Go'zal moviy gulli noyob juvalar turi. Zarafshon va Turkiston tog'larida o'sadi. Bezatish o'simligi sifatida juda qadrlanadi.",
      habitat: "Tog'li hududlar, 1500-3000 m balandlikda, qoyali yonbag'irlar",
      population: "Kamayib bormoqda",
      threats: ["Begona yig'ish", "Yashash joyining buzilishi", "Chorvachilik"],
      conservation: "Botanika bog'larida ko'paytirish, mahalliy aholiga tushuntirish ishlari",
      image: "🌸",
      imageUrl: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80"
    },
    {
      id: 2,
      name: "Eremurus (Shirach)",
      latinName: "Eremurus spectabilis",
      category: "Gullash o'simliklari",
      status: "Xavf ostida",
      threat: "Yuqori",
      description: "Bahor faslida uzun gulpoyali go'zal o'simlik. Ildizlari xalq tabobatida ishlatiladi, bu esa ularning sonini kamayishiga olib kelgan.",
      habitat: "Tog' etaklari, dasht, 500-2500 m balandlikda",
      population: "Keskin kamaymoqda",
      threats: ["Ildizlarini yig'ish", "Yashash joyining buzilishi", "Begona yig'ish"],
      conservation: "Yig'ishga ta'qiq, botanika bog'larida ko'paytirish",
      image: "🌺",
      imageUrl: "https://images.unsplash.com/photo-1597690897844-426f42a10a0b?w=800&q=80"
    },
    {
      id: 3,
      name: "Qizil lola",
      latinName: "Tulipa greigii",
      category: "Gullash o'simliklari",
      status: "Xavf ostida",
      threat: "Yuqori",
      description: "Dunyo bo'ylab mashhur bezatish o'simligi. O'zbekiston - uning vatani. Qizil gulli, barglarida qora dog'lar bor.",
      habitat: "Tog' etaklari, qoyali joylar, 1000-2500 m",
      population: "Juda kamaygan",
      threats: ["Begona piyozlarni qazib olish", "Yashash joyining buzilishi", "Gullarni uzish"],
      conservation: "Qattiq muhofaza qilinadigan hududlar, ko'paytirish dasturlari",
      image: "🌷",
      imageUrl: "https://images.unsplash.com/photo-1490718720478-364a07a997cd?w=800&q=80"
    },
    {
      id: 4,
      name: "Kauffman lolasi",
      latinName: "Tulipa kaufmanniana",
      category: "Gullash o'simliklari",
      status: "Xavf ostida",
      threat: "O'rtacha",
      description: "Erta bahorda gullaydi, 'suv nilufarining lolasi' deb ham ataladi. Toshkent atrofi tog'larida o'sadi.",
      habitat: "Tog' etaklari, 1200-2200 m balandlikda",
      population: "Barqaror, lekin kuzatuvda",
      threats: ["Bezatish uchun yig'ish", "Shahar yaqinligi"],
      conservation: "Tabiat yodgorliklari, botanika bog'lari",
      image: "🌷",
      imageUrl: "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=800&q=80"
    },
    {
      id: 5,
      name: "Unabi (Chinor)",
      latinName: "Ziziphus jujuba",
      category: "Daraxtlar",
      status: "Kuzatuvda",
      threat: "O'rtacha",
      description: "Qadimiy madaniy o'simlik. Mevasi shifo xususiyatlariga ega. Yovvoyi populyatsiyalari kamaymoqda.",
      habitat: "Issiq hududlar, vodiyalar, 200-1000 m",
      population: "Madaniy shaklda ko'p, yovvoyi kam",
      threats: ["Yashash joyining yo'qolishi", "Yerlarni ishlov berish"],
      conservation: "Genetik fondni saqlash, ko'paytirish",
      image: "🌳",
      imageUrl: "https://images.unsplash.com/photo-1565011523534-747a8601f10a?w=800&q=80"
    },
    {
      id: 6,
      name: "Amudaryo toli",
      latinName: "Populus pruinosa",
      category: "Daraxtlar",
      status: "Xavf ostida",
      threat: "Juda yuqori",
      description: "Amudaryo bo'ylarida o'sadigan noyob tol turi. Tog'ay ekotizimining asosiy daraxtlaridan biri.",
      habitat: "Daryo bo'ylaridagi tog'aylar",
      population: "Keskin kamaymoqda",
      threats: ["Suv resurslarining kamayishi", "Daraxt kesish", "Tog'aylarning yo'qolishi"],
      conservation: "Tog'aylarni tiklash dasturlari, muhofaza qilinadigan hududlar",
      image: "🌳",
      imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
    },
    {
      id: 7,
      name: "Zarafshon archasi",
      latinName: "Juniperus seravschanica",
      category: "Daraxtlar",
      status: "Xavf ostida",
      threat: "Yuqori",
      description: "Uzoq umr ko'radigan archa turi. Ba'zi daraxtlar 1000 yoshdan oshgan. Qimmatbaho yog'och manbai.",
      habitat: "Tog'li o'rmonlar, 1500-3500 m balandlikda",
      population: "Kamaymoqda",
      threats: ["Kesish", "O'tin uchun foydalanish", "O't yong'inlari"],
      conservation: "O'rmon xo'jaligi nazorati, zapovedniklar",
      image: "🌲",
      imageUrl: "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80"
    },
    {
      id: 8,
      name: "Farg'ona pistasi",
      latinName: "Pistacia vera",
      category: "Daraxtlar va butalar",
      status: "Xavf ostida",
      threat: "Yuqori",
      description: "Yovvoyi pista - madaniy pistaning ajdodi. Yong'oqlari ozuqaviy va shifobaxsh.",
      habitat: "Tog' yonbag'irlari, 1000-2000 m",
      population: "Kamaymoqda",
      threats: ["Yong'oq yig'ish", "Kesish", "Chorvachilik"],
      conservation: "Botanika bog'larida ko'paytirish, qo'riqxonalar",
      image: "🌳",
      imageUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80"
    },
    {
      id: 9,
      name: "Beqara (Qovoq darakht)",
      latinName: "Platanus orientalis",
      category: "Daraxtlar",
      status: "Kuzatuvda",
      threat: "O'rtacha",
      description: "Ulkan va go'zal daraxt. Uzoq umr ko'radi, ba'zilari 500-1000 yoshga yetadi. Ko'chalarni bezashda ishlatiladi.",
      habitat: "Daryo bo'ylari, vodiylar",
      population: "Madaniy shaklda ko'p, yovvoyi kam",
      threats: ["Suv tanqisligi", "Shaharlar kengayishi"],
      conservation: "Qadimiy daraxtlarni muhofaza qilish",
      image: "🌳",
      imageUrl: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80"
    },
    {
      id: 10,
      name: "Qizil kitob iridasi",
      latinName: "Iris korolkowii",
      category: "Gullash o'simliklari",
      status: "Xavf ostida",
      threat: "Yuqori",
      description: "Noyob oq-binafsha gulli iris turi. Faqat O'zbekistonda uchraydi (endemik).",
      habitat: "Tog' etaklari, 800-1500 m balandlikda",
      population: "Juda kam",
      threats: ["Begona yig'ish", "Yashash joyining qisqarishi"],
      conservation: "Botanika bog'larida ko'paytirish, qattiq nazorat",
      image: "🌸",
      imageUrl: "https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?w=800&q=80"
    },
    {
      id: 11,
      name: "Issiqko'l atirguli",
      latinName: "Rosa kokanica",
      category: "Gullash o'simliklari",
      status: "Xavf ostida",
      threat: "O'rtacha",
      description: "Xushbo'y pushti gulli it burun turi. Tog' hududlarida o'sadi.",
      habitat: "Tog' yonbag'irlari, 1500-2500 m",
      population: "Kamaymoqda",
      threats: ["Chorvachilik", "Yashash joyining buzilishi"],
      conservation: "Qo'riqxonalar, ekologik turizm",
      image: "🌹",
      imageUrl: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=800&q=80"
    },
    {
      id: 12,
      name: "Turkiston zarang",
      latinName: "Ferula jaeschkeana",
      category: "Dorivor o'simliklar",
      status: "Xavf ostida",
      threat: "Juda yuqori",
      description: "Katta o'lchamli dorivor o'simlik. Ildizi va sharbati tibbiyotda ishlatiladi. Bu sababli qoqa qilib yig'ilgan.",
      habitat: "Tog' etaklari, dasht, 800-2000 m",
      population: "Keskin kamaygan",
      threats: ["Ildizlarini qazish", "Dorivor xom ashyo yig'ish", "Yashash joyining buzilishi"],
      conservation: "Yig'ishga qat'iy ta'qiq, sun'iy ko'paytirish",
      image: "🌿",
      imageUrl: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80"
    }
  ]

  const getPlantById = (id: number) => {
    return plants.find(plant => plant.id === id)
  }

  const getPlantsByCategory = (category: string) => {
    return plants.filter(plant => plant.category === category)
  }

  const categories = [...new Set(plants.map(plant => plant.category))]

  return {
    plants,
    getPlantById,
    getPlantsByCategory,
    categories
  }
}
