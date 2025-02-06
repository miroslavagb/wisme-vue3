<template>
  <div class="about-page">
    <!-- Hero Sect -->
    <section class="hero relative">
      <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div class="text-center">
          <h1 class="text-5xl font-bold text-white">About us</h1>
          <p class="text-lg mt-4 max-w-3xl mx-auto text-white">
            Empowering SMEs with digital solutions for sustainable growth.
          </p>
        </div>
      </div>
      <img src="@/assets/bannerr.jpg" alt="hero banner" class="w-full h-[400px] object-cover">
    </section>

    <!-- Mission & Vision -->
    <section class="mission-vision mt-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-semibold text-black">Our mission</h2>
        <p class="mt-4 max-w-2xl mx-auto text-lg text-black">
          We aim to equip small and medium-sized enterprises (SMEs) with the digital tools and expertise they need to
          thrive in an ever-changing digital landscape.
        </p>
      </div>

      <div class="container mx-auto text-center mt-16">
        <h2 class="text-3xl font-semibold text-black">Our vision</h2>
        <p class="mt-4 max-w-2xl mx-auto text-lg text-black">
          To become a leading hub for SME digital transformation, fostering innovation, collaboration, and success
          through cutting-edge solutions.
        </p>
      </div>
    </section>

    <!-- Values -->
    <section class="values mt-16 bg-gray-100 py-10">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-semibold text-black">Our values</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div class="p-6 bg-white shadow-lg rounded-lg">
            <h3 class="text-xl font-bold">Innovation</h3>
            <p class="mt-2 text-gray-700">
              We embrace cutting-edge technology to provide innovative solutions for SMEs.
            </p>
          </div>
          <div class="p-6 bg-white shadow-lg rounded-lg">
            <h3 class="text-xl font-bold">Collaboration</h3>
            <p class="mt-2 text-gray-700">
              We foster strong partnerships and a network of experts to drive success.
            </p>
          </div>
          <div class="p-6 bg-white shadow-lg rounded-lg">
            <h3 class="text-xl font-bold">Sustainability</h3>
            <p class="mt-2 text-gray-700">
              We are committed to long-term digital growth that benefits businesses and communities alike.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="team mt-16 py-10">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-semibold text-black">Meet the team</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div v-for="member in teamMembers" :key="member.id" class="p-6 bg-white shadow-lg rounded-lg text-center">
            <img :src="member.image" alt="Team Member" class="w-24 h-24 rounded-full mx-auto">
            <h3 class="text-xl font-bold mt-4">{{ member.name }}</h3>
            <p class="text-gray-700">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const teamMembers = ref([
  { id: 1, name: "Nevena Peeva-Todorova", role: "CEO & Founder", image: "/src/assets/team1.jpg" },
  { id: 2, name: "Jane Doe", role: "Head of Digital Strategy", image: "/src/assets/team2.jpg" },
  { id: 3, name: "John Doe", role: "Lead Developer", image: "/src/assets/team3.jpg" },
]);
</script>

<style scoped>
h2 {
  color: #503C72;
}

img {
  object-fit: cover;
}

.shadow-lg:hover {
  transform: scale(1.05);
  transition: all 0.3s ease-in-out;
}
</style>
