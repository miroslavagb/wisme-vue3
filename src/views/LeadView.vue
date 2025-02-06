<template>
  <div class="lead-generation-page">
    <!-- Hero Section -->
    <section class="relative w-full h-[400px] flex items-center justify-center text-center bg-cover bg-center"
      style="background-image: url('/src/assets/banner2.png');">
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="relative z-10 text-white px-6 sm:px-12 max-w-3xl">
        <h1 class="text-5xl sm:text-6xl font-extrabold tracking-wide drop-shadow-xl">
          Get exclusive resources for your business
        </h1>
        <p class="text-lg sm:text-xl text-gray-200 mt-4 drop-shadow-md leading-relaxed">
          Access free tools, guides, and expert insights to help your SME grow digitally.
        </p>
      </div>
    </section>

    <!-- form -->
    <section class="py-12">
      <div class="container mx-auto max-w-2xl bg-white p-8 shadow-lg rounded-lg">
        <h2 class="text-3xl font-bold text-center mb-6">Sign up for free resources</h2>

        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label class="block text-gray-700 font-semibold mb-2">Full name</label>
            <input type="text" v-model="formData.name" required class="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-primary">
          </div>

          <div>
            <label class="block text-gray-700 font-semibold mb-2">Business email</label>
            <input type="email" v-model="formData.email" required @input="validateEmail"
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-primary">
            <p v-if="emailError" class="text-red-600 text-sm mt-2">Please enter a business email (no Gmail, Yahoo, etc.).</p>
          </div>

          <div>
            <label class="block text-gray-700 font-semibold mb-2">Company name</label>
            <input type="text" v-model="formData.company" required class="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-primary">
          </div>

          <div>
            <label class="block text-gray-700 font-semibold mb-2">Why are you signing up?</label>
            <textarea v-model="formData.reason" rows="4" required class="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-primary"></textarea>
          </div>

          <div class="flex items-start">
            <input type="checkbox" id="gdpr" v-model="formData.gdprConsent" required class="mr-2">
            <label for="gdpr" class="text-gray-700 text-sm">
              I consent to the processing of my personal data in accordance with the GDPR policy.
            </label>
          </div>

          <button type="submit"
            class="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition">
            Get free resources
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const formData = ref({
  name: "",
  email: "",
  company: "",
  reason: "",
  gdprConsent: false
});

//само желани домейни
const emailError = ref(false);
const validateEmail = () => {
  const businessEmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const genericEmailProviders = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"];  
  const emailDomain = formData.value.email.split("@")[1];

  emailError.value = !businessEmailPattern.test(formData.value.email) || genericEmailProviders.includes(emailDomain);
};

const submitForm = () => {
  if (emailError.value) return;
  alert("Form submitted successfully!");
};
</script>

<style scoped>
h2 {
  color: #503C72;
}

input, textarea {
  outline: none;
}

button {
  transition: all 0.3s ease-in-out;
}
</style>
