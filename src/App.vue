<template>
  <div class="h-screen bg-center bg-cover" style="background-image: url('./img/Bg.svg')">
    <div class="md:py-10 md:px-6 px-4 py-8">
      <Header></Header>
      <router-view/>
    </div>
  </div>
</template>
<style>
  .bg-native{
    background: #0B1D5E !important;
  }
  .text-native{
    color: #0B1D5E !important;
  }
  .bg-footer{
    background: #FEF8F1 !important;
  }
</style>
