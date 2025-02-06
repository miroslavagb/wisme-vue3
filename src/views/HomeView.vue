<template>
  <main class="container mx-auto px-8">
    <!-- Hero Section -->
    <section class="relative w-full min-h-screen flex items-center justify-center text-center">
      <div class="absolute inset-0 bg-fixed bg-cover bg-center"
           style="background-image: url('/src/assets/corporate-connected-teamwork-perforated-paper-gear.jpg');">
        <div class="absolute inset-0 bg-gradient-to-b from-secondary/70 to-primary/60 opacity-90"></div>
      </div>

      <div class="relative z-10 text-white px-6 sm:px-12 max-w-3xl">
        <h1 class="text-5xl sm:text-6xl font-extrabold tracking-wide mb-6 drop-shadow-xl">
          Empowering SMEs for Digital Success
        </h1>
        <p class="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md leading-relaxed">
          Unlock your business potential with expert digital solutions.
        </p>
        <div class="mt-8">
          <router-link to="/lead-generation">
            <button class="px-8 py-4 text-lg font-semibold bg-primary text-white border-2 border-white hover:border-primary hover:bg-white hover:text-primary transition uppercase shadow-lg">
              Get Started
            </button>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Services  -->
    <section class="py-12 bg-light">
      <h2 class="text-4xl font-bold text-center mb-8">Our Services</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.id"
          class="relative p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-xl transition transform hover:-translate-y-2 hover:bg-gray-100"
        >
          <div class="text-4xl text-primary mb-4">
            <i :class="service.icon"></i> 
          </div>
          <h3 class="text-2xl font-bold mb-3">{{ service.title }}</h3>
          <p class="text-gray-700 mb-4">{{ service.description }}</p>
          <router-link :to="service.link">
            <button class="px-5 py-2 bg-secondary text-white rounded-full hover:bg-primary transition">
              Learn More
            </button>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Blog  -->
    <section class="py-12">
      <h2 class="text-4xl font-bold text-center mb-8">Latest Blog Posts</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="post in blogPosts"
          :key="post.id"
          class="relative p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition"
        >
          <div class="h-40 bg-gray-200 rounded-t-lg overflow-hidden">
            <img :src="post.image" alt="Blog Thumbnail" class="w-full h-full object-cover">
          </div>
          <div class="p-4">
            <span class="text-sm text-gray-500">{{ post.category }} - {{ post.date }}</span>
            <h3 class="text-xl font-bold mt-2">{{ post.title }}</h3>
            <p class="text-gray-700 mt-2">{{ post.excerpt }}</p>
            <router-link :to="'/blog/' + post.id">
              <button class="mt-4 px-5 py-2 bg-accent text-white rounded-full hover:bg-secondary transition">
                Read more
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-12 bg-light">
      <h2 class="text-4xl font-bold text-center mb-8">What Our Clients Say</h2>
      <div class="text-center text-gray-700 italic">
        <p>“WiSME's expertise has transformed our business. Highly recommend their consulting services!”</p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import blog1Image from "@/assets/blog1.jpg";
import blog2Image from "@/assets/blog2.jpg";
import blog3Image from "@/assets/blog3.jpg";

const services = ref([
  { id: 1, title: "Digital transformation", description: "We help SMEs navigate digital change.", link: "/consulting", icon: "fas fa-chart-line" },
  { id: 2, title: "Strategy & growth", description: "Data-driven strategies to scale your business.", link: "/strategy", icon: "fas fa-lightbulb" },
  { id: 3, title: "Tech integration", description: "Seamless integration of modern technologies.", link: "/support", icon: "fas fa-tools" }
]);

const blogPosts = ref([
  { id: 1, title: "SME Digital Transformation Trends", excerpt: "Discover key trends shaping the SME sector.", image: "/src/assets/blog1.jpg", category: "Business", date: "Feb 6, 2025" },
  { id: 2, title: "Building a Sustainable Business", excerpt: "Strategies for long-term SME growth.", image: "/src/assets/blog2.jpg", category: "Growth", date: "Feb 3, 2025" },
  { id: 3, title: "Essential Tools for SMEs", excerpt: "Maximize efficiency with the right digital tools.", image: "/src/assets/blog3.jpg", category: "Tech", date: "Jan 29, 2025" }
]);
</script>

<style scoped>
.drop-shadow-xl {
  text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.9);
}
.drop-shadow-md {
  text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.7);
}

h3 {
  color: #503C72;
}

.shadow-lg:hover {
  transform: scale(1.03);
  transition: all 0.3s ease-in-out;
}
</style>
