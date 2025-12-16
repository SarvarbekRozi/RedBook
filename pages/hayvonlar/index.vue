<template>
  <div>
    <section class="bg-gradient-to-br from-red-500 to-red-700 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Xavf ostidagi hayvonlar</h1>
        <p class="text-xl text-red-100 max-w-2xl">
          O'zbekiston Qizil Kitobiga kiritilgan hayvonlar ro'yxati
        </p>
      </div>
    </section>

    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <div class="flex flex-wrap gap-3">
            <button
              @click="selectedCategory = null"
              :class="[
                'px-6 py-3 rounded-full font-medium transition-all duration-300',
                selectedCategory === null
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              Barchasi ({{ animals.length }})
            </button>
            <button
              v-for="category in categories"
              :key="category"
              @click="selectedCategory = category"
              :class="[
                'px-6 py-3 rounded-full font-medium transition-all duration-300',
                selectedCategory === category
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              {{ category }} ({{ getAnimalsByCategory(category).length }})
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink
            v-for="animal in filteredAnimals"
            :key="animal.id"
            :to="`/hayvonlar/${animal.id}`"
            class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:scale-105 transform"
          >
            <div class="p-6">
              <div class="flex items-start justify-between mb-4">
                <div class="text-6xl">{{ animal.image }}</div>
                <span
                  :class="[
                    'px-3 py-1 rounded-full text-xs font-semibold',
                    getThreatColor(animal.threat)
                  ]"
                >
                  {{ animal.threat }}
                </span>
              </div>

              <h3 class="text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                {{ animal.name }}
              </h3>
              <p class="text-sm text-gray-500 italic mb-3">{{ animal.latinName }}</p>

              <div class="space-y-2 mb-4">
                <div class="flex items-center text-sm text-gray-600">
                  <svg class="w-4 h-4 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                  </svg>
                  {{ animal.category }}
                </div>
                <div class="flex items-center text-sm text-gray-600">
                  <svg class="w-4 h-4 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                  {{ animal.status }}
                </div>
              </div>

              <p class="text-gray-600 text-sm line-clamp-3 mb-4">
                {{ animal.description }}
              </p>

              <span class="inline-flex items-center text-red-600 font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                Batafsil ma'lumot
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </NuxtLink>
        </div>

        <div v-if="filteredAnimals.length === 0" class="text-center py-20">
          <div class="text-6xl mb-4">🔍</div>
          <h3 class="text-2xl font-bold text-gray-900 mb-2">Hech narsa topilmadi</h3>
          <p class="text-gray-600">Tanlangan kategoriyada hayvonlar mavjud emas</p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-4">Yordam bering!</h2>
              <p class="text-gray-600 mb-6">
                Har birimiz tabiatni asrashda o'z hissamizni qo'sha olamiz. Xavf ostidagi hayvonlarni himoya qilish uchun:
              </p>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">Tabiat qo'riqxonalarini hurmat qiling</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">Noqonuniy ovchilikka qarshi turing</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">Ekologik tashkilotlarni qo'llab-quvvatlang</span>
                </li>
              </ul>
            </div>
            <div class="text-center">
              <div class="text-8xl mb-4">🌍</div>
              <p class="text-xl font-semibold text-gray-800">Tabiatni asrash - barchamizning mas'uliyatimiz</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { animals, getAnimalsByCategory, categories } = useAnimals()
const selectedCategory = ref(null)

const filteredAnimals = computed(() => {
  if (selectedCategory.value === null) {
    return animals
  }
  return getAnimalsByCategory(selectedCategory.value)
})

const getThreatColor = (threat) => {
  const colors = {
    'Juda yuqori': 'bg-red-100 text-red-800',
    'Yuqori': 'bg-orange-100 text-orange-800',
    'O\'rtacha': 'bg-yellow-100 text-yellow-800',
    'Past': 'bg-green-100 text-green-800'
  }
  return colors[threat] || 'bg-gray-100 text-gray-800'
}

useHead({
  title: 'Hayvonlar - Qizil Kitob',
  meta: [
    { name: 'description', content: 'O\'zbekiston Qizil Kitobidagi xavf ostidagi hayvonlar ro\'yxati' }
  ]
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
