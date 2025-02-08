<template>
  <div class="min-h-[calc(100vh-var(--header-height))] bg-[#f8fafc] dark:bg-[#111729]">
    <img
      class="pointer-events-none absolute w-full top-[1px] text-teal flex-shrink-0 z-10"
      src="/assets/svg/header.svg"
      alt="" />
    <div class="absolute inset-0">
      <div
        class="absolute inset-0 bg-gradient-to-b from-[#f8fafc] via-[#e2e8f0] to-[#f8fafc] dark:from-[#111729] dark:via-[#0c1322] dark:to-[#111729] opacity-60 dark:opacity-80"></div>
      <div
        class="absolute inset-0 bg-[url('/assets/svg/grid-light.svg')] dark:bg-[url('/assets/svg/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]">
        <div class="photon-effect light-photon dark:dark-photon"></div>
        <div class="photon-effect light-photon dark:dark-photon delay-2"></div>
        <div class="photon-effect light-photon dark:dark-photon delay-4"></div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped>
.photon-effect {
  position: absolute;
  width: 2px;
  height: 100%;
  animation: movePhoton 3s linear infinite;
}

.light-photon {
  background: linear-gradient(180deg, transparent, rgba(14, 165, 233, 0.5), transparent);
  opacity: 0.3;
}

.dark-photon {
  background: linear-gradient(180deg, transparent, #fff, transparent);
  opacity: 0.5;
}

.delay-2 {
  animation-delay: 1s;
  left: 30%;
}

.delay-4 {
  animation-delay: 2s;
  left: 70%;
}

@keyframes movePhoton {
  0% {
    transform: translateY(-100%) translateX(-100%);
  }
  100% {
    transform: translateY(100%) translateX(100%);
  }
}
</style>
