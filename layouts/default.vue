<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <nav class="bg-white shadow-lg sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <NuxtLink to="/" class="flex items-center space-x-3 group">
            <div class="bg-gradient-to-br from-red-500 to-red-700 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h1 class="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Qizil Kitob</h1>
            </div>
          </NuxtLink>

          <button @click="toggleMenu" class="md:hidden text-gray-700 hover:text-red-600 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="hidden md:flex items-center space-x-2">
            <NuxtLink
              to="/"
              class="px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-red-50 hover:text-red-600"
              :class="$route.path === '/' ? 'bg-red-50 text-red-600' : 'text-gray-700'"
            >
              Bosh sahifa
            </NuxtLink>
            <NuxtLink
              to="/hayvonlar"
              class="px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-red-50 hover:text-red-600"
              :class="$route.path.startsWith('/hayvonlar') ? 'bg-red-50 text-red-600' : 'text-gray-700'"
            >
              Hayvonlar
            </NuxtLink>
            <NuxtLink
              to="/osimliklar"
              class="px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-red-50 hover:text-red-600"
              :class="$route.path.startsWith('/osimliklar') ? 'bg-red-50 text-red-600' : 'text-gray-700'"
            >
              O'simliklar
            </NuxtLink>
            <NuxtLink
              to="/haqida"
              class="px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-red-50 hover:text-red-600"
              :class="$route.path === '/haqida' ? 'bg-red-50 text-red-600' : 'text-gray-700'"
            >
              Loyiha haqida
            </NuxtLink>
          </div>
        </div>

        <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t">
          <div class="flex flex-col space-y-2">
            <NuxtLink
              to="/"
              @click="closeMenu"
              class="px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-red-50 hover:text-red-600"
              :class="$route.path === '/' ? 'bg-red-50 text-red-600' : 'text-gray-700'"
            >
              Bosh sahifa
            </NuxtLink>
            <NuxtLink
              to="/hayvonlar"
              @click="closeMenu"
              class="px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-red-50 hover:text-red-600"
              :class="$route.path.startsWith('/hayvonlar') ? 'bg-red-50 text-red-600' : 'text-gray-700'"
            >
              Hayvonlar
            </NuxtLink>
            <NuxtLink
              to="/osimliklar"
              @click="closeMenu"
              class="px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-red-50 hover:text-red-600"
              :class="$route.path.startsWith('/osimliklar') ? 'bg-red-50 text-red-600' : 'text-gray-700'"
            >
              O'simliklar
            </NuxtLink>
            <NuxtLink
              to="/haqida"
              @click="closeMenu"
              class="px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-red-50 hover:text-red-600"
              :class="$route.path === '/haqida' ? 'bg-red-50 text-red-600' : 'text-gray-700'"
            >
              Loyiha haqida
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <main class="min-h-[calc(100vh-5rem)]">
      <slot />
    </main>

    <footer class="bg-gray-900 text-white py-12 mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4 text-red-500">Qizil Kitob</h3>
            <p class="text-gray-400 text-sm">O'zbekiston hududidagi xavf ostidagi hayvonlar va o'simliklar haqida ma'lumot.</p>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Havolalar</h4>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><NuxtLink to="/" class="hover:text-red-500 transition-colors">Bosh sahifa</NuxtLink></li>
              <li><NuxtLink to="/hayvonlar" class="hover:text-red-500 transition-colors">Hayvonlar</NuxtLink></li>
              <li><NuxtLink to="/osimliklar" class="hover:text-red-500 transition-colors">O'simliklar</NuxtLink></li>
              <li><NuxtLink to="/haqida" class="hover:text-red-500 transition-colors">Loyiha haqida</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Aloqa</h4>
            <p class="text-sm text-gray-400">Tabiatni asrash - barchamizning burchimiz.</p>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Qizil Kitob. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const mobileMenuOpen = ref(false)

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMenu = () => {
  mobileMenuOpen.value = false
}
</script>
