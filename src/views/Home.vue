<template>
  <div class="md:pt-15 pt-4">
    <div class="md:pt-16 pt-6 flex items-center md:justify-start justify-center">
      <img src="img/MainText.svg" alt="MainText" class="">
    </div>
    <div class="grid md:grid-cols-3 grid-cols-1">
      <div class="col-span-2 flex items-center md:justify-start justify-center">
        <img src="img/Card.svg" alt="Card" class="">
        <img src="img/MainArrow.svg" alt="Arrow" class="md:visible invisible absolute bottom-0 right-0 pr-48 pb-24">
      </div>
      <div>
        <div class="tracking-tighter leading-tight font-bold text-2xl text-left text-black">
          <div class="py-4 flex items-center md:justify-start justify-center">
            <img src="img/XMainText.svg" alt="XMainText">
          </div>
          <div class="py-4 mb-10 flex items-center md:justify-start justify-center">
            <img src="img/App.svg" alt="App">
          </div>
          <div class="hidden md:block absolute right-0 m-10 border-2 border-dashed rounded-full border-black px-4 py-6">
            <a href="#" v-on:click="showModal" class="font-bold text-2xl rounded-full bg-native text-white px-4 py-4 text-right">
              Get Early Access
            </a>
          </div>
          <div class="md:hidden m-10 border-2 border-dashed rounded-full border-black px-4 py-4">
            <div v-on:click="showModal"  class="font-bold text-2xl rounded-full bg-native text-white px-4 py-4 text-center">
              Get Early Access
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid md:grid-cols-3 grid-cols-1 gap-20 text-center">
      <div class="font-bold">
        <div class="text-4xl">
          $20M+
        </div>
        <div class="">
          Transactions
        </div>
      </div>
      <div class="font-bold">
        <div class="text-4xl">
          3200+
        </div>
        <div class="">
          Active Users
        </div>
      </div>
      <div class="font-bold">
        <div class="text-4xl">
          750+
        </div>
        <div class="">
          Users Reviews
        </div>
      </div>
    </div>
    <div class="md:pt-48 pt-20">
      <div class="p-4">
        <img src="img/WhyText.svg" alt="WhyText" class="mx-auto">
      </div>
      <div class="hidden md:block ">
        <div class="flex justify-between text-2xl border-black border-b px-8">
          <div>
            One Solution
          </div>
          <div>
            Flexible
          </div>
          <div>
            Simple
          </div>
          <div class="border-black border-b-2">
            Trusted
          </div>
        </div>
      </div>
      <div class="grid md:grid-cols-3 grid-cols-1 gap-4 p-6">
        <div class="md:pt-32">
          <img src="img/TrustedMainText.svg" alt="TrustedMainText">
          <div class="pt-6 text-2xl font-light w-full">
            Our patented escrow infrastructure catalyses the digital economy in developing markets by creating the requisite environment for safe and accountable commerce
          </div>
        </div>
        <div class="md:col-span-2 w-full">
          <img src="img/TrustedBg.svg" alt="TrustedBg">
        </div>
      </div>
    </div>
    <div class="pt-48">
      <div class="p-4">
        <img src="img/HowWorks.svg" alt="HowWorks" class="mx-auto">
      </div>
      <div class="grid md:grid-cols-5 grid-cols-1 gap-4 p-6">
       <div class="pt-6">
         <img src="img/icons/user.svg" alt="users" class="mx-auto">
         <div class="text-xl font-bold text-center pt-10">
           Create an account
         </div>
       </div>
        <div class="pt-10 hidden md:block">
          <img src="img/ArrowOne.svg" alt="ArrowOne" class="mx-auto">
        </div>
        <div>
          <img src="img/icons/check.svg" alt="check" class="mx-auto">
          <div class="text-xl font-bold text-center pt-10">
            Verify account
          </div>
        </div>
        <div class="pt-10 hidden md:block">
          <img src="img/ArrowTwo.svg" alt="ArrowTwo" class="mx-auto">
        </div>
        <div>
          <img src="img/icons/star.svg" alt="star" class="mx-auto">
          <div class="text-xl font-bold text-center pt-10">
            Start Using It
          </div>
        </div>
      </div>
    </div>
    <div class="bg-footer pt-64">
      <div>
        <img src="img/WantTry.svg" alt="HowWorks" class="mx-auto">
      </div>
      <div class="text-2xl font-light text-center p-6">
          Get notified when we launch
      </div>
      <div class="border-2 border-dashed rounded-full border-black px-4 py-6">
        <div v-on:click="showModal" class="font-bold text-2xl rounded-full bg-native text-white px-4 py-4 text-center">
          Get Early Access
        </div>
      </div>

      <div class="pt-24">
        <div class="text-2xl font-light text-center p-6">
          Copyright @ Luidly 2021
        </div>
      </div>
    </div>


<!--    Modals-->
    <modal name="subscribe"
           :adaptive="true"
           :height="280"
           :width="480"
    >
      <iframe src="https://iamadamspaul.substack.com/embed" height="320"></iframe>
    </modal>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    showModal() {
      this.$modal.show('subscribe');
    }
  }
}
</script>
