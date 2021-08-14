<template>



  <div class="flex-none md:flex justify-between align-middle font-light">
    <div>
      <img src="img/Logo.svg" alt="Logo" class="sm:mx-auto">
    </div>
    <div class="hidden md:block">
      <router-link to="/" class="inline-block m-6 font-bold">
        Home
      </router-link>
      <router-link to="/#" class="inline-block m-6">
        Cards
      </router-link>
      <router-link to="/#" class="inline-block m-6">
        Escrow
      </router-link>
      <router-link to="/about" class="inline-block m-6">
        About
      </router-link>
    </div>
    <div class="hidden md:block">
      <router-link to="/#" class="inline-block m-6">
        Login
      </router-link>
      <router-link to="/#" class="inline-block font-bold text-sm rounded-full bg-native text-white px-4 py-1">
        Get Early Access
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
