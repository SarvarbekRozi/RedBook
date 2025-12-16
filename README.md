# Qizil Kitob - O'zbekiston

O'zbekiston Qizil Kitobidagi xavf ostidagi hayvonlar va o'simliklar haqida interaktiv web-sayt.

## Xususiyatlar

- 🐅 Xavf ostidagi hayvonlar ro'yxati (12 ta tur)
- 🌸 Xavf ostidagi o'simliklar ro'yxati (12 ta tur)
- 📱 To'liq responsive dizayn
- 🎨 Zamonaviy va chiroyli interfeys
- ⚡ Tez va samarali (Nuxt 3)
- 🎯 Kategoriyalar bo'yicha filtrlash
- 📖 Har bir tur haqida batafsil ma'lumot

## Texnologiyalar

- **Nuxt 3** - Vue.js framework
- **Vue 3** - Progressive JavaScript framework
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety

## O'rnatish va ishga tushirish

```bash
# Bog'liqliklarni o'rnatish
npm install

# Development serverini ishga tushirish
npm run dev

# Brauzerda ochish: http://localhost:3000
```

## Production

```bash
# Production uchun build qilish
npm run build

# Production serverini ishga tushirish
npm run preview
```

## Loyiha strukturasi

```
redbook/
├── app.vue                  # Asosiy komponent
├── nuxt.config.ts          # Nuxt konfiguratsiya
├── tailwind.config.js      # Tailwind konfiguratsiya
├── layouts/
│   └── default.vue         # Asosiy layout va navigatsiya
├── pages/
│   ├── index.vue           # Bosh sahifa
│   ├── haqida.vue          # Loyiha haqida
│   ├── hayvonlar/
│   │   ├── index.vue       # Hayvonlar ro'yxati
│   │   └── [id].vue        # Hayvon tafsilotlari
│   └── osimliklar/
│       ├── index.vue       # O'simliklar ro'yxati
│       └── [id].vue        # O'simlik tafsilotlari
└── composables/
    ├── useAnimals.ts       # Hayvonlar ma'lumotlari
    └── usePlants.ts        # O'simliklar ma'lumotlari
```

## Sahifalar

- **Bosh sahifa** - Loyiha haqida umumiy ma'lumot va kategoriyalar
- **Hayvonlar** - Xavf ostidagi hayvonlar ro'yxati va tafsilotlari
- **O'simliklar** - Xavf ostidagi o'simliklar ro'yxati va tafsilotlari
- **Loyiha haqida** - Qizil Kitob haqida ma'lumot va statistika

## Litsenziya

© 2025 Qizil Kitob. Barcha huquqlar himoyalangan.
"# RedBook" 
