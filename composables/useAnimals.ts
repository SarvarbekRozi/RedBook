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
      image: "🐅"
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
      image: "🐅"
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
      image: "🐆"
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
      image: "🐈"
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
      image: "🦊"
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
      image: "🐏"
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
      image: "🦌"
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
      image: "🐻"
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
      image: "🦅"
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
      image: "🦅"
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
      image: "🐦"
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
      image: "🦢"
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
