export const useAnimals = () => {
  const animals = [
    {
      id: 1,
      name: "Turon yo'lbarsi",
      latinName: "Panthera tigris virgata",
      category: "Sutemizuvchilar",
      status: "Yo'qolib ketgan",
      threat: "Juda yuqori",
      description: "Turon yo'lbarsi O'rta Osiyoda yashagan eng yirik yirtqich hayvonlardan biri bo'lgan. 1970-yillarda to'liq yo'qolib ketgan.",
      habitat: "Daryo bo'ylaridagi qamishzorlar, tog'li o'rmonlar",
      population: "Yo'qolib ketgan (1970-yillar)",
      threats: ["Ovchilik", "Yashash joyining yo'qolishi", "O'lja kamayishi"],
      conservation: "Tarixiy tur sifatida qayd etilgan",
      image: "🐅",
      imageUrl: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&q=80"
    },
    {
      id: 2,
      name: "Qizil yo'lbars",
      latinName: "Panthera tigris altaica",
      category: "Sutemizuvchilar",
      status: "Juda kam",
      threat: "Juda yuqori",
      description: "Dunyodagi eng yirik mushuklardan biri. Hozirda O'zbekistonda uchramaydi, lekin qayta tiklash dasturlari rejalashtirilmoqda.",
      habitat: "Qalin o'rmonlar, tog'li hududlar",
      population: "0 (O'zbekistonda)",
      threats: ["Yashash joyining yo'qolishi", "Noqonuniy ovchilik"],
      conservation: "Qayta tiklash dasturlari",
      image: "🐅",
      imageUrl: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=800&q=80"
    },
    {
      id: 3,
      name: "Qorqiz (Sneg leopardi)",
      latinName: "Panthera uncia",
      category: "Sutemizuvchilar",
      status: "Xavf ostida",
      threat: "Yuqori",
      description: "Markaziy Osiyo tog'larining noyob yirtqichi. Go'zal mo'ynasi tufayli ovchilar nishoniga aylanib qolgan.",
      habitat: "Tog'li hududlar, 2000-5000 m balandlikda",
      population: "20-30 ta (O'zbekistonda)",
      threats: ["Noqonuniy ovchilik", "O'lja kamayishi", "Yashash joyining tanqisligi"],
      conservation: "Zapovedniklar, ovchilikka ta'qiq",
      image: "🐆",
      imageUrl: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=800&q=80"
    },
    {
      id: 4,
      name: "Turkiston silovsisi",
      latinName: "Lynx lynx isabellinus",
      category: "Sutemizuvchilar",
      status: "Xavf ostida",
      threat: "Yuqori",
      description: "O'rta Osiyo tog'larida yashaydigan noyob mushuk oilasiga mansub yirtqich hayvon.",
      habitat: "Tog'li o'rmonlar, 1500-3000 m balandlikda",
      population: "50-100 ta",
      threats: ["Ovchilik", "Yashash joyining qisqarishi", "O'lja kamayishi"],
      conservation: "Tabiat qo'riqxonalari, ta'qiqlar",
      image: "🐈",
      imageUrl: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=800&q=80"
    },
    {
      id: 5,
      name: "Qizil tulki",
      latinName: "Vulpes vulpes",
      category: "Sutemizuvchilar",
      status: "Kuzatuvda",
      threat: "O'rtacha",
      description: "O'zbekiston hududida keng tarqalgan, biroq ayrim populyatsiyalari kamayib bormoqda.",
      habitat: "Dasht, tog' etaklari, cho'llar",
      population: "Noma'lum",
      threats: ["Mo'ynasi uchun ovchilik", "Zaharli moddalar"],
      conservation: "Ovchilik chegaralanishi",
      image: "🦊",
      imageUrl: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=800&q=80"
    },
    {
      id: 6,
      name: "Markaziy Osiyo arhari (tog' qo'chqori)",
      latinName: "Ovis ammon polii",
      category: "Sutemizuvchilar",
      status: "Xavf ostida",
      threat: "Yuqori",
      description: "Dunyodagi eng yirik yovvoyi qo'chqor turi. Juda katta va go'zal shoxlari bor.",
      habitat: "Tog'li hududlar, 3000-5000 m balandlikda",
      population: "300-400 ta",
      threats: ["Ovchilik", "Chorva bilan ozuqa uchun raqobat", "Yashash joyining qisqarishi"],
      conservation: "Zakazniklar, ovchilikka qat'iy ta'qiq",
      image: "🐏",
      imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80"
    },
    {
      id: 7,
      name: "Bukhoro bug'usi",
      latinName: "Cervus elaphus bactrianus",
      category: "Sutemizuvchilar",
      status: "Xavf ostida",
      threat: "Juda yuqori",
      description: "Endemik tur, faqat Amudaryo havzasida uchraydi. 1900-yillarda deyarli yo'qolib ketgan edi.",
      habitat: "Daryo bo'ylaridagi tog'aylar",
      population: "800-1000 ta",
      threats: ["Yashash joyining yo'qolishi", "Noqonuniy ovchilik"],
      conservation: "Maxsus zakazniklar, nazorat ostida ko'paytirish",
      image: "🦌",
      imageUrl: "https://images.unsplash.com/photo-1551775899-4c8fea948a6c?w=800&q=80"
    },
    {
      id: 8,
      name: "Qoramag'iz ayiq",
      latinName: "Ursus arctos isabellinus",
      category: "Sutemizuvchilar",
      status: "Xavf ostida",
      threat: "Yuqori",
      description: "Tyan-Shan va Pomir-Oloy tog'larida yashaydigan noyob ayiq turi.",
      habitat: "Tog'li o'rmonlar, 2000-4000 m balandlikda",
      population: "100-150 ta",
      threats: ["Ovchilik", "Odamlar bilan to'qnashuv", "Yashash joyining qisqarishi"],
      conservation: "Zapovedniklar, ovchilikka ta'qiq",
      image: "🐻",
      imageUrl: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=800&q=80"
    },
    {
      id: 9,
      name: "Saker (Itelgi)",
      latinName: "Falco cherrug",
      category: "Qushlar",
      status: "Xavf ostida",
      threat: "Yuqori",
      description: "Yirik yirtqich qush, qushotchilikda juda qadrlanadi. Bu sababli noqonuniy ovchilik kuchli.",
      habitat: "Dasht, cho'l, tog' etaklari",
      population: "500-1000 ta",
      threats: ["Noqonuniy tutish va savdo", "Elektr uzatish liniyalari", "Zaharlanish"],
      conservation: "Noqonuniy savdoga qarshi kurash, nazorat",
      image: "🦅",
      imageUrl: "https://images.unsplash.com/photo-1551731409-2f7b6a3c3de8?w=800&q=80"
    },
    {
      id: 10,
      name: "Oq burgut",
      latinName: "Aquila heliaca",
      category: "Qushlar",
      status: "Xavf ostida",
      threat: "Yuqori",
      description: "Noyob va go'zal yirtqich qush. Dunyoda soni tez kamayib bormoqda.",
      habitat: "Dasht, o'rmon-dasht",
      population: "200-300 ta",
      threats: ["Yashash joyining yo'qolishi", "Elektr uzatish liniyalari", "Ovlanish"],
      conservation: "Muhofaza qilinadigan hududlar, monitoring",
      image: "🦅",
      imageUrl: "https://images.unsplash.com/photo-1520087619250-584c0cbd35e8?w=800&q=80"
    },
    {
      id: 11,
      name: "Kulrang jurrav",
      latinName: "Grus grus",
      category: "Qushlar",
      status: "Kuzatuvda",
      threat: "O'rtacha",
      description: "Go'zal ko'chmanchi qush. O'zbekiston orqali ko'chib o'tadi va qishlaydi.",
      habitat: "Suv havzalari atrofi, botqoqliklar",
      population: "Ko'chib o'tuvchi qush",
      threats: ["Yashash joylarining qurib qolishi", "Ovlanish"],
      conservation: "Suv havzalarini saqlash",
      image: "🐦",
      imageUrl: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&q=80"
    },
    {
      id: 12,
      name: "Oq laylak",
      latinName: "Ciconia ciconia",
      category: "Qushlar",
      status: "Kuzatuvda",
      threat: "Past",
      description: "Xalq orasida muqaddas hisoblangan qush. Bahor kelishining belgisi.",
      habitat: "Qishloqlar, suv havzalari yaqini",
      population: "Juda ko'p",
      threats: ["Elektr uzatish liniyalari", "Zaharli kimyoviy moddalar"],
      conservation: "Uyalarini saqlash, xalq orasida targ'ibot",
      image: "🦢",
      imageUrl: "https://images.unsplash.com/photo-1597090993780-d1cbe5c9e8e6?w=800&q=80"
    }
  ]

  const getAnimalById = (id: number) => {
    return animals.find(animal => animal.id === id)
  }

  const getAnimalsByCategory = (category: string) => {
    return animals.filter(animal => animal.category === category)
  }

  const categories = [...new Set(animals.map(animal => animal.category))]

  return {
    animals,
    getAnimalById,
    getAnimalsByCategory,
    categories
  }
}
