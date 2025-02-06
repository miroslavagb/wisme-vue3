<template>
  <nav class="sticky top-0 z-50 bg-white shadow-md w-full">
    <div class="container mx-auto flex items-center justify-between py-4 px-6">
      <!-- Logo -->
      <router-link to="/" class="flex items-center space-x-2">
        <img src="@/assets/WiSME-Logo-Final.png" alt="WiSME Logo" class="h-20" />
      </router-link>

      <!-- Desktop Navigation (Hidden on Mobile) -->
      <ul class="hidden md:flex space-x-8 font-montserrat text-lg">
        <li v-for="(item, index) in navItems" :key="index">
          <router-link
            :to="item.link"
            class="hover:text-primary transition-colors"
            :class="{ 'text-primary font-bold': $route.path === item.link }"
          >
            {{ item.label }}
          </router-link>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden focus:outline-none">
        <svg class="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile Dropdown Menu -->
    <transition name="fade">
      <div v-if="isMenuOpen" class="absolute left-0 top-[60px] w-full bg-white shadow-md md:hidden">
        <ul class="py-4 px-6 text-lg">
          <li v-for="(item, index) in navItems" :key="index">
            <router-link
              :to="item.link"
              class="block py-2 text-center hover:text-primary transition-colors"
              :class="{ 'text-primary font-bold': $route.path === item.link }"
              @click="toggleMenu"
            >
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </nav>

  <!-- Page Content -->
  <div class="page-content">
    <RouterView />
  </div>

  <Footer />
</template>

<script setup>
import { ref } from 'vue';
import Footer from '@/components/Global/Footer.vue';

const navItems = ref([
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Lead generation", link: "/leadGeneration" },
  { label: "Resources", link: "/resources" },
  { label: "Consulting", link: "/consulting" },
  { label: "Contacts", link: "/contact" },
]);

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
/* Make Navbar Sticky */
nav {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 50;
}

/* Increase Font Size for Navbar */
ul li {
  font-size: 18px;
  font-weight: 600;
}

/* Remove Background for Active Tab and Color the Text Instead */
ul li .router-link-active {
  font-weight: bold;
  color: #503C72; /* English Violet */
}

/* Hover Effect */
ul li a:hover {
  color: #A4B46B; /* Olivine */
  transition: color 0.3s ease;
}

/* Mobile Menu Animation */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Mobile Menu Styles */
@media (max-width: 768px) {
  .mobile-menu {
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
}
</style>
