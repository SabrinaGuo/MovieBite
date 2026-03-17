<template>
  <div>
    <h2>index page</h2>
  </div>
</template>

<!-- <script setup>
// 1. 從 runtimeConfig 取得我們設定好的 API 資訊
const config = useRuntimeConfig();

// 2. 使用 Nuxt 內建的 useFetch 抓取資料
// TMDB 的熱門電影路徑是 /movie/popular
const { data, pending, error } = await useFetch(
  `${config.public.tmdbBaseUrl}/movie/popular`,
  {
    headers: {
      Authorization: `Bearer ${config.tmdbAccessToken}`,
      accept: "application/json",
    },
    params: {
      language: "zh-TW", // 抓取繁體中文資料
      page: 1,
    },
  },
);
</script>

<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-6">🎬 MovieBite 熱門電影</h1>

    <div v-if="pending">載入中...</div>

    <div v-else-if="error" class="text-red-500">
      發生錯誤：{{ error.message }}
    </div>

    <div v-else class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      <div v-for="movie in data.results" :key="movie.id" class="movie-card">
        <img
          :src="`${config.public.imageBaseUrl}w500${movie.poster_path}`"
          :alt="movie.title"
          class="rounded-lg shadow-lg hover:scale-105 transition-transform"
        />
        <p class="mt-2 font-semibold text-center">{{ movie.title }}</p>
        <p class="text-sm text-gray-500 text-center">
          ⭐ {{ movie.vote_average }}
        </p>
      </div>
    </div>
  </div>
</template>

<style>
/* 簡單加一點背景色方便看清楚 */
body {
  background-color: #1a1a1a;
  color: white;
}
</style> -->
