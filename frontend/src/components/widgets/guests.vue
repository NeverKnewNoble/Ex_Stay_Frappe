<template>
  <div 
    class="flex items-center w-full max-w-full border border-gray-300 rounded-md bg-white shadow-sm px-2 transition focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-400"
  >
    <!-- Guest Count Display -->
    <input
      type="text"
      readonly
      :value="guestSummary"
      class="bg-transparent focus:outline-none text-black font-medium border-none flex-grow text-sm sm:text-base px-2"
    />

    <!-- Decrement Button -->
    <button
      class="p-2 sm:p-3 mr-1 sm:mr-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-300 shadow-sm focus:outline-none transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      @click="decrement"
      :disabled="guestCount === 0"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
      </svg>
    </button>

    <!-- Increment Button -->
    <button
      class="p-2 sm:p-3 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-300 shadow-sm focus:outline-none transition duration-200"
      @click="increment"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
      </svg>
    </button>
  </div>
</template>



<script>
export default {
  name: "GuestCounter",
  props: {
    modelValue: Number, // Bind `guestCount` from parent
  },
  data() {
    return {
      guestCount: this.modelValue || 0, // Default to 1 guest
    };
  },
  computed: {
    guestSummary() {
      return this.guestCount === 0 ? "0 Guest" : `${this.guestCount} Guests`;
    },
  },
  methods: {
    increment() {
      this.guestCount++;
      this.$emit("update:modelValue", this.guestCount);
    },
    decrement() {
      if (this.guestCount > 0) {
        this.guestCount--;
        this.$emit("update:modelValue", this.guestCount);
      }
    },
  },
};
</script>
