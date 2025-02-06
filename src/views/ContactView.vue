<template>
  <div class="contact-page">
    <!-- Title Section -->
    <section class="text-center py-12 bg-light">
      <h1 class="text-5xl font-bold text-primary leading-tight sm:text-4xl ">Get in Touch</h1>
      <p class="text-lg text-gray-600 mt-4 max-w-3xl mx-auto px-4">
        We’d love to hear from you! Fill out the form or schedule a meeting.
      </p>
    </section>

    <!-- Contact Form -->
    <section class="py-12 px-4">
      <div class="container mx-auto max-w-2xl bg-white p-6 sm:p-8 shadow-lg rounded-lg">
        <h2 class="text-3xl font-bold text-center mb-6">Contact us</h2>

        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label class="block text-gray-700 font-semibold mb-2">Full name</label>
            <input type="text" v-model="formData.name" required class="form-input">
          </div>

          <div>
            <label class="block text-gray-700 font-semibold mb-2">Email</label>
            <input type="email" v-model="formData.email" required class="form-input">
          </div>

          <div>
            <label class="block text-gray-700 font-semibold mb-2">Company (Optional)</label>
            <input type="text" v-model="formData.company" class="form-input">
          </div>

          <div>
            <label class="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea v-model="formData.message" rows="4" required class="form-textarea"></textarea>
          </div>

          <button type="submit" class="btn-primary">Send message</button>
        </form>

        <p v-if="success" class="mt-5 text-green-600 text-center font-semibold">Your message was sent successfully!</p>
        <p v-if="error" class="mt-5 text-red-600 text-center font-semibold">Message failed to send. Please try again.</p>
      </div>
    </section>

    <!-- Calendly Scheduling -->
    <section class="py-12 bg-gray-100 px-4">
      <div class="container mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold text-primary mb-4">Schedule a meeting</h2>
        <p class="text-lg text-gray-600 mb-6">Pick a time that works for you.</p>
        
        <div class="responsive-iframe">
          <iframe src="https://calendly.com/your-schedule-link" frameborder="0"></iframe>
        </div>
      </div>
    </section>

    <!-- Google Maps Section -->
    <section class="py-12 px-4">
      <div class="container mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold text-primary mb-4">Find us</h2>
        <p class="text-lg text-gray-600 mb-6">Visit our office at the location below.</p>

        <div class="responsive-iframe">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.48992422403!2d23.379420599999996!3d42.6509723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8763c5332b89%3A0x5d902a2ae2fad5a7!2sCampus%20X!5e0!3m2!1sen!2sbg!4v1738839594506!5m2!1sen!2sbg" 
            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>

    <!-- Other Contact Details -->
    <section class="py-12 bg-light px-4">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold text-primary mb-4">Contact details</h2>
        <p class="text-lg text-gray-600">You can also reach us through the following:</p>

        <div class="mt-6 space-y-4">
          <p class="text-lg text-gray-700"><strong>Email:</strong> contact@wisme.com</p>
          <p class="text-lg text-gray-700"><strong>Phone:</strong> +1 (123) 456-7890</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        company: '',
        message: ''
      },
      success: false,
      error: false
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('/api/send-email', this.formData);
        if (response.data.success) {
          this.success = true;
          this.formData = { name: '', email: '', company: '', message: '' };
          setTimeout(() => (this.success = false), 5000);
        }
      } catch (err) {
        this.error = true;
        setTimeout(() => (this.error = false), 5000);
      }
    }
  }
};
</script>

<style scoped>
h1, h2 {
  color: #503C72;
}

.form-input, .form-textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
}
.form-input:focus, .form-textarea:focus {
  border-color: #503C72;
  box-shadow: 0 0 5px rgba(80, 60, 114, 0.5);
}

.btn-primary {
  width: 100%;
  padding: 12px;
  background-color: #503C72;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
}
.btn-primary:hover {
  background-color: #705a8a;
}

.responsive-iframe {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;
}
.responsive-iframe iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
</style>
