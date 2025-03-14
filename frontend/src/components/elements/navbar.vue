<template>
  <nav class="bg-white py-2 w-full max-w-screen-lg mx-auto rounded-sm px-4 md:px-20">
    <div class="flex justify-between items-center">
      <div>
        <router-link to="/">
          <img src="../../assets/images/logogreencp.png" alt="logo" class="w-[140px]">
        </router-link>
      </div>
      <div class="flex items-center justify-center">
        <!-- Desktop Menu -->
        <ul class="hidden md:flex">
          <router-link to="/my_bookings">
            <li class="px-4 py-2 hover:text-[#7ebd9c] cursor-pointer font-semibold">MY BOOKINGS</li>
          </router-link>
        </ul>
        <!-- Hide CATALOGUE on Mobile -->
        <ul class="hidden md:flex mr-2">
          <router-link to="/catalogue">
            <li class="inline-block px-2 hover:text-[#7ebd9c] cursor-pointer">CATALOGUE</li>
          </router-link>
        </ul>
        <!-- Mobile Menu Button -->
        <button class="md:hidden p-2" @click="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <!-- Login/Logout Button -->
        <button
          @click="isLoggedIn ? logout() : login()"
          class="border px-6 py-2 rounded-sm cursor-pointer transition-colors ml-2"
          :class="isLoggedIn 
            ? 'bg-[#7ebd9c] text-white hover:bg-white hover:border-black hover:text-black' 
            : 'bg-white text-black border-black hover:border-[#7ebd9c] hover:bg-[#7ebd9c] hover:text-white'"
        >
          {{ isLoggedIn ? 'Logout' : 'Login' }}
        </button>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-white rounded-sm mt-2 shadow-lg">
      <ul class="flex flex-col text-center">
        <router-link to="/">
          <li class="px-4 py-3 border-b hover:text-[#7ebd9c] cursor-pointer font-semibold">HOME</li>
        </router-link>
        <router-link to="/my_bookings">
          <li class="px-4 py-3 border-b hover:text-[#7ebd9c] cursor-pointer font-semibold">MY BOOKINGS</li>
        </router-link>
        <!-- Catalogue is only shown in the mobile dropdown -->
        <router-link to="/catalogue">
          <li class="px-4 py-3 hover:text-[#7ebd9c] cursor-pointer">CATALOGUE</li>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
import axios from 'axios';
import { session } from '@/data/session'; // Assuming this tracks login state

export default {
  name: 'NavBarComponent',
  data() {
    return {
      isMenuOpen: false,
      isLoggedIn: session.isLoggedIn || false, // Get login state
    };
  },
  watch: {
    // React to session changes dynamically
    'session.isLoggedIn': function (newVal) {
      this.isLoggedIn = newVal;
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    async logout() {
      try {
        await axios.post('/api/method/logout', {}, { withCredentials: true });
        localStorage.removeItem('token');
        sessionStorage.clear();
        this.isLoggedIn = false;
        this.$router.push('/account/login');
        setTimeout(() => {
          window.location.reload();
        }, 100);
      } catch (error) {
        console.error('Logout failed:', error);
      }
    },
    login() {
      this.$router.push('/account/login');
    },
  },
};
</script>
