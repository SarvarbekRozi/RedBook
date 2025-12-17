<template>
  <div>
    <section class="relative text-white h-screen overflow-hidden">
      <!-- Background Slider -->
      <div class="absolute inset-0">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          :class="['absolute inset-0 transition-opacity duration-1000', currentSlide === index ? 'opacity-100' : 'opacity-0']"
        >
          <img :src="slide.image" :alt="slide.title" class="w-full h-full object-cover"/>
        </div>
        <div class="absolute inset-0 bg-gradient-to-br from-green-900/40 via-emerald-800/50 to-teal-900/40"></div>
      </div>

      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-0 left-0 w-96 h-96 bg-green-300 rounded-full filter blur-3xl animate-pulse"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div class="text-center w-full">
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in drop-shadow-2xl">
            Qizil Kitob
          </h1>
          <p class="text-xl md:text-3xl mb-4 text-white font-semibold max-w-3xl mx-auto drop-shadow-lg animate-fade-in-delay">
            {{ slides[currentSlide].title }}
          </p>
          <p class="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-fade-in-delay-2">
            {{ slides[currentSlide].description }}
          </p>

          <!-- Chiroyli Tugmalar -->
          <div class="flex flex-wrap gap-6 justify-center mb-12 animate-fade-in-delay-3">
            <NuxtLink
              to="/hayvonlar"
              class="group relative overflow-hidden bg-gradient-to-r from-red-600 to-red-700 text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-110 transform"
            >
              <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div class="relative flex items-center gap-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
                <span>Hayvonlar</span>
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </NuxtLink>
            <NuxtLink
              to="/osimliklar"
              class="group relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-700 text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 transform"
            >
              <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div class="relative flex items-center gap-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span>O'simliklar</span>
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </NuxtLink>
          </div>

          <!-- Statistika -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-in-delay-4">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform">
              <div class="text-4xl font-bold text-white mb-1">24</div>
              <div class="text-sm text-white/80">Jami turlar</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform">
              <div class="text-4xl font-bold text-white mb-1">12</div>
              <div class="text-sm text-white/80">Hayvonlar</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform">
              <div class="text-4xl font-bold text-white mb-1">12</div>
              <div class="text-sm text-white/80">O'simliklar</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform">
              <div class="text-4xl font-bold text-white mb-1">100%</div>
              <div class="text-sm text-white/80">Muhofaza</div>
            </div>
          </div>

          <!-- Slider Dots -->
          <div class="flex gap-2 justify-center mt-12">
            <button
              v-for="(slide, index) in slides"
              :key="index"
              @click="currentSlide = index"
              :class="[
                'w-3 h-3 rounded-full transition-all duration-300',
                currentSlide === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
              ]"
            ></button>
          </div>
        </div>
      </div>

      <!-- Navigation Arrows -->
      <button
        @click="prevSlide"
        class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        @click="nextSlide"
        class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Mashhur turlar
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Muhofaza ostidagi turlar</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            O'zbekistonda yashaydigan eng noyob va xavf ostidagi turlar bilan tanishing
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div class="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <div class="aspect-w-16 aspect-h-12 bg-gray-200">
              <img src="https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=800&q=80" alt="Qorqiz" class="w-full h-80 object-cover"/>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div class="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold inline-block mb-3">Xavf ostida</div>
              <h3 class="text-2xl font-bold mb-2">Qorqiz (Sneg leopardi)</h3>
              <p class="text-sm text-gray-200 mb-4">Markaziy Osiyo tog'larining noyob yirtqichi</p>
              <NuxtLink to="/hayvonlar/3" class="inline-flex items-center text-white font-semibold hover:gap-2 gap-1 transition-all">
                Batafsil
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </NuxtLink>
            </div>
          </div>

          <div class="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <div class="aspect-w-16 aspect-h-12 bg-gray-200">
              <img src="https://images.unsplash.com/photo-1551775899-4c8fea948a6c?w=800&q=80" alt="Bukhoro bug'usi" class="w-full h-80 object-cover"/>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div class="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold inline-block mb-3">Juda yuqori</div>
              <h3 class="text-2xl font-bold mb-2">Bukhoro bug'usi</h3>
              <p class="text-sm text-gray-200 mb-4">Amudaryo havzasining endemik turi</p>
              <NuxtLink to="/hayvonlar/7" class="inline-flex items-center text-white font-semibold hover:gap-2 gap-1 transition-all">
                Batafsil
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </NuxtLink>
            </div>
          </div>

          <div class="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <div class="aspect-w-16 aspect-h-12 bg-gray-200">
              <img src="https://images.unsplash.com/photo-1490718720478-364a07a997cd?w=800&q=80" alt="Qizil lola" class="w-full h-80 object-cover"/>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div class="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold inline-block mb-3">Xavf ostida</div>
              <h3 class="text-2xl font-bold mb-2">Qizil lola</h3>
              <p class="text-sm text-gray-200 mb-4">Dunyo bo'ylab mashhur bezatish o'simligi</p>
              <NuxtLink to="/osimliklar/3" class="inline-flex items-center text-white font-semibold hover:gap-2 gap-1 transition-all">
                Batafsil
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Nima uchun muhim?</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Har bir tur tabiatdagi muvozanatning muhim qismidir
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-red-100 hover:scale-105 transform">
            <div class="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Ma'lumot bazasi</h3>
            <p class="text-gray-600">
              Xavf ostidagi turlar haqida to'liq va ishonchli ma'lumotlar to'plami
            </p>
          </div>

          <div class="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100 hover:scale-105 transform">
            <div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Muhofaza</h3>
            <p class="text-gray-600">
              Biologik xilma-xillikni saqlash va yo'qolib ketish xavfini kamaytirish
            </p>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:scale-105 transform">
            <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Ta'lim</h3>
            <p class="text-gray-600">
              Jamiyatda ekologik ong va tabiatni asrash madaniyatini shakllantirish
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Tabiat manzaralari
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">O'zbekiston tabiati</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Xavf ostidagi turlar yashab turgan go'zal tabiiy muhitlar
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" alt="Tog'lar" class="w-full h-64 object-cover"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h4 class="text-white font-bold text-lg">Tog'lar</h4>
            </div>
          </div>
          <div class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80" alt="O'rmonlar" class="w-full h-64 object-cover"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h4 class="text-white font-bold text-lg">O'rmonlar</h4>
            </div>
          </div>
          <div class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80" alt="Daryolar" class="w-full h-64 object-cover"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h4 class="text-white font-bold text-lg">Daryolar</h4>
            </div>
          </div>
          <div class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600&q=80" alt="Dashtlar" class="w-full h-64 object-cover"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h4 class="text-white font-bold text-lg">Dashtlar</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Kategoriyalar</h2>
          <p class="text-xl text-gray-600">O'zbekiston Qizil Kitobidagi turlar</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <NuxtLink
            to="/hayvonlar"
            class="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
          >
            <div class="absolute inset-0">
              <img src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=1200&q=80" alt="Hayvonlar" class="w-full h-full object-cover"/>
              <div class="absolute inset-0 bg-gradient-to-br from-red-600/90 to-red-900/90 group-hover:from-red-500/90 group-hover:to-red-800/90 transition-all duration-500"></div>
            </div>
            <div class="relative p-10 text-white">
              <div class="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border-2 border-white/40">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <h3 class="text-4xl font-bold mb-4">Hayvonlar</h3>
              <p class="text-white/90 mb-6 text-lg">Xavf ostidagi hayvonlar turlari ro'yxati va ular haqida batafsil ma'lumotlar</p>
              <span class="inline-flex items-center text-white font-bold text-lg group-hover:gap-3 gap-2 transition-all">
                Batafsil
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </NuxtLink>

          <NuxtLink
            to="/osimliklar"
            class="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
          >
            <div class="absolute inset-0">
              <img src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1200&q=80" alt="O'simliklar" class="w-full h-full object-cover"/>
              <div class="absolute inset-0 bg-gradient-to-br from-green-600/90 to-green-900/90 group-hover:from-green-500/90 group-hover:to-green-800/90 transition-all duration-500"></div>
            </div>
            <div class="relative p-10 text-white">
              <div class="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border-2 border-white/40">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 class="text-4xl font-bold mb-4">O'simliklar</h3>
              <p class="text-white/90 mb-6 text-lg">Xavf ostidagi o'simlik turlari ro'yxati va ular haqida batafsil ma'lumotlar</p>
              <span class="inline-flex items-center text-white font-bold text-lg group-hover:gap-3 gap-2 transition-all">
                Batafsil
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="relative py-20 overflow-hidden">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80" alt="Tabiat" class="w-full h-full object-cover"/>
        <div class="absolute inset-0 bg-gradient-to-r from-green-900/95 via-emerald-800/90 to-teal-900/95"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-white mb-4">
            🌍 Tabiatni muhofaza qilish
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Tabiatni birga asraylik</h2>
          <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Har birimizning harakatlarimiz kelajak avlodlar uchun yashil sayyoramizni saqlashda muhim ahamiyatga ega
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform">
            <div class="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4 text-center">Jamiyat</h3>
            <p class="text-white/90 text-center">
              Xalqimizda tabiatni asrash madaniyatini shakllantirish
            </p>
          </div>

          <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform">
            <div class="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4 text-center">Muhofaza</h3>
            <p class="text-white/90 text-center">
              Xavf ostidagi turlarni himoya qilish va saqlash
            </p>
          </div>

          <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform">
            <div class="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4 text-center">Kelajak</h3>
            <p class="text-white/90 text-center">
              Avlodlar uchun boy biologik xilma-xillikni saqlash
            </p>
          </div>
        </div>

        <div class="text-center">
          <NuxtLink
            to="/haqida"
            class="group inline-flex items-center gap-3 bg-white text-green-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-2xl hover:shadow-white/50 hover:scale-105 transform"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Loyiha haqida</span>
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Slider ma'lumotlari
const slides = ref([
  {
    image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=1920&q=80',
    title: 'Tog\'li hududlardagi yovvoyi hayvonlar',
    description: 'Qorqiz, silovsisi va boshqa noyob turlarni muhofaza qilamiz'
  },
  {
    image: 'https://images.unsplash.com/photo-1490718720478-364a07a997cd?w=1920&q=80',
    title: 'Go\'zal va noyob o\'simliklar',
    description: 'Qizil lola, eremurus va boshqa endemik o\'simliklarimiz'
  },
  {
    image: 'https://images.unsplash.com/photo-1551775899-4c8fea948a6c?w=1920&q=80',
    title: 'Biologik xilma-xillikni saqlash',
    description: 'Bukhoro bug\'usi, arhari va boshqa kamyob turlar'
  },
  {
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1920&q=80',
    title: 'Tabiatni birga asraylik',
    description: 'Har bir tur kelajak avlodlar uchun muhim'
  }
])

const currentSlide = ref(0)
let intervalId = null

// Slider funksiyalari
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? slides.value.length - 1 : currentSlide.value - 1
}

// Auto-play
onMounted(() => {
  intervalId = setInterval(() => {
    nextSlide()
  }, 5000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})

useHead({
  title: 'Qizil Kitob - O\'zbekiston',
  meta: [
    { name: 'description', content: 'O\'zbekiston hududidagi xavf ostidagi hayvonlar va o\'simliklar haqida ma\'lumot' }
  ]
})
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-fade-in-delay {
  animation: fade-in 1s ease-out 0.2s both;
}

.animate-fade-in-delay-2 {
  animation: fade-in 1s ease-out 0.4s both;
}

.animate-fade-in-delay-3 {
  animation: fade-in 1s ease-out 0.6s both;
}

.animate-fade-in-delay-4 {
  animation: fade-in 1s ease-out 0.8s both;
}
</style>
