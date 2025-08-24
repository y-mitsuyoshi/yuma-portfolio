<template>
  <div class="flex flex-col items-center justify-center text-center py-20">
    <h1
      class="text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 animate-fade-in-down"
    >
      Yuma Mitsuyoshi's Portfolio
    </h1>
    <h2
      class="mt-4 text-3xl md:text-4xl text-gray-300 animate-fade-in-down"
      style="animation-delay: 0.2s"
    >
      Web Engineer
    </h2>
    <p
      class="mt-8 text-xl text-gray-400 max-w-3xl animate-fade-in-down"
      style="animation-delay: 0.4s"
    >
      Welcome to my portfolio. I am a passionate web engineer with a focus on
      creating modern and user-friendly web applications. Explore my work and
      get in touch!
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style>
@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-down {
  animation: fade-in-down 0.5s ease-out forwards;
}
</style>
