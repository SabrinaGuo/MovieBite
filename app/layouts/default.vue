<template>
  <div class="pb-14">
    <header class="p-4">
      <nav class="flex justify-between items-center">
        <NuxtLink
          class="cursor-pointer text-[0] rounded-full p-1 transition-colors bg-brand-gray"
          to="/"
        >
          <p class="logo">CINEMA</p>
        </NuxtLink>
        <div class="flex items-center gap-2">
          <Search />
          <NuxtLink
            class="hover:bg-white/50 cursor-pointer text-[0] rounded-full p-1 transition-colors"
            to="/detail/1"
          >
            <Icon
              name="proicons:person-2"
              size="1.5rem"
              class="text-brand-gray"
            />
          </NuxtLink>
        </div>
      </nav>
    </header>
    <slot />
    <footer
      class="fixed bottom-0 w-full text-brand-gray text-center p-4 text-xs"
    >
      Copyright © 2026 Sabrina Guo. All Rights Reserved.
    </footer>
  </div>
</template>
<style scoped lang="scss">
.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: transparent;
  background: linear-gradient(180deg, #a5b4fc 0%, #22d3ee 100%);
  background-clip: text;
}
</style>
