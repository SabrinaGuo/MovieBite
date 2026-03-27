<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-6">🎬 MovieBite 熱門電影</h1>

    <!-- <div v-if="pending">載入中...</div>

    <div v-else-if="error" class="text-red-500">發生錯誤：{{ error.message }}</div> -->

    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      <div v-for="movie in 2" class="movie-card">
        <img
          :src="`https://movies-proxy.vercel.app/ipx/f_webp&s_400x600/tmdb/n0WS2TsNcS6dtaZKzxipyO7LuCJ.jpg`"
          :alt="'title'"
          class="rounded-lg shadow-lg hover:scale-105 transition-transform"
        />
        <p class="mt-2 font-semibold text-center">title</p>
        <p class="text-sm text-gray-500 text-center">⭐ 8.5</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { Movie } from "~/type/movie";

const props = defineProps<{
  movies: Movie[];
}>();
</script>
