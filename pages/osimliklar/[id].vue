<template>
  <div v-if="plant">
    <section class="bg-gradient-to-br from-green-500 to-green-700 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NuxtLink to="/osimliklar" class="inline-flex items-center text-green-100 hover:text-white mb-6 transition-colors">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Ortga qaytish
        </NuxtLink>
        <div class="flex items-center gap-6">
          <div class="text-8xl">{{ plant.image }}</div>
          <div>
            <h1 class="text-4xl md:text-5xl font-bold mb-2">{{ plant.name }}</h1>
            <p class="text-xl text-green-100 italic">{{ plant.latinName }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2">
            <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Umumiy ma'lumot</h2>
              <p class="text-gray-700 text-lg leading-relaxed">
                {{ plant.description }}
              </p>
            </div>

            <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-6">O'sish joyi</h2>
              <div class="flex items-start">
                <svg class="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
                <p class="text-gray-700 text-lg">{{ plant.habitat }}</p>
              </div>
            </div>

            <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Tahdidlar</h2>
              <ul class="space-y-3">
                <li v-for="(threat, index) in plant.threats" :key="index" class="flex items-start">
                  <svg class="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700 text-lg">{{ threat }}</span>
                </li>
              </ul>
            </div>

            <div class="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg p-8 border border-green-100">
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Muhofaza choralari</h2>
              <div class="flex items-start">
                <svg class="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <p class="text-gray-700 text-lg">{{ plant.conservation }}</p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-1">
            <div class="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Holati</h3>
              <div class="space-y-6">
                <div>
                  <p class="text-sm text-gray-500 mb-2">Kategoriya</p>
                  <div class="flex items-center">
                    <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                    </svg>
                    <p class="font-semibold text-gray-900">{{ plant.category }}</p>
                  </div>
                </div>

                <div>
                  <p class="text-sm text-gray-500 mb-2">Holat</p>
                  <p class="font-semibold text-gray-900">{{ plant.status }}</p>
                </div>

                <div>
                  <p class="text-sm text-gray-500 mb-2">Xavf darajasi</p>
                  <span
                    :class="[
                      'inline-block px-4 py-2 rounded-full text-sm font-semibold',
                      getThreatColor(plant.threat)
                    ]"
                  >
                    {{ plant.threat }}
                  </span>
                </div>

                <div>
                  <p class="text-sm text-gray-500 mb-2">Populyatsiya</p>
                  <p class="font-semibold text-gray-900">{{ plant.population }}</p>
                </div>
              </div>

              <div class="mt-8 pt-8 border-t border-gray-200">
                <h4 class="font-semibold text-gray-900 mb-4">Ulashing</h4>
                <div class="flex gap-3">
                  <button class="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    <svg class="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button class="flex-1 bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors">
                    <svg class="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Boshqa o'simliklar</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <NuxtLink
            v-for="relatedPlant in relatedPlants"
            :key="relatedPlant.id"
            :to="`/osimliklar/${relatedPlant.id}`"
            class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 transform"
          >
            <div class="p-6">
              <div class="text-5xl mb-4">{{ relatedPlant.image }}</div>
              <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                {{ relatedPlant.name }}
              </h3>
              <p class="text-sm text-gray-500 italic">{{ relatedPlant.latinName }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <div class="text-6xl mb-4">❌</div>
      <h2 class="text-3xl font-bold text-gray-900 mb-2">O'simlik topilmadi</h2>
      <NuxtLink to="/osimliklar" class="text-green-600 hover:text-green-700 font-semibold">
        Ro'yxatga qaytish
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { plants, getPlantById } = usePlants()

const plantId = computed(() => parseInt(route.params.id))
const plant = computed(() => getPlantById(plantId.value))

const relatedPlants = computed(() => {
  if (!plant.value) return []
  return plants
    .filter(p => p.id !== plant.value.id && p.category === plant.value.category)
    .slice(0, 4)
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
  title: plant.value ? `${plant.value.name} - Qizil Kitob` : 'O\'simlik topilmadi',
  meta: [
    { name: 'description', content: plant.value?.description || 'O\'simlik topilmadi' }
  ]
})
</script>
