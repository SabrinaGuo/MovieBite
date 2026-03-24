// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 1. 核心開發設定
  devtools: { enabled: true },
  compatibilityDate: "2025-07-15",

  // 2. 外部擴充模組 (Modules)
  // 就像載入外掛一樣，通常放在最上面，因為後面的設定可能會用到它們
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxt/image"],

  // 3. 全域 CSS 與 資源設定
  css: ["~/assets/main.scss"],
  image: {
    providers: {
      tmdb: {
        name: "tmdb",
        provider: "ipx", // 使用 Nuxt 內建的 IPX 引擎來處理縮放
        options: {
          // 這裡填入 TMDB 的基礎圖片網址
          baseURL: "https://image.tmdb.org/t/p/", // 設定好這個之後，原先寫法為 :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" 可以改成:src="`w500${movie.poster_path}`"
        },
      },
    },
  },

  // 4. 外部模組的具體設定 (例如 Tailwind, Icon 的自訂內容)
  // 緊跟在 modules 之後，方便對照
  tailwindcss: {
    config: {
      content: ["./app/**/*.vue"],
      theme: {
        extend: {
          // 1. 自訂顏色 (Colors)
          colors: {
            primary: "#3CDDC7",
            secondary: "#4B4DD8",
            background: "#0B1326",
            surface: "rgba(34, 42, 61, 0.6)", // 建議小寫 rgba
            border: "rgba(70, 69, 85, 0.15)",
            gray: "#C7C4D8", //文字
            subtitle: "#DAE2FD", //副標文字
            gradient: "linear-gradient(135deg, #C0C1FF 0%, #4B4DD8 100%)",
          },

          // 2. 自訂字體大小 (FontSize) - 適合電影標題
          fontSize: {
            display: ["4rem", { lineHeight: "1", fontWeight: "700" }], // 巨大的英雄區標題 => text-display
            heading: ["2rem", { lineHeight: "1.5", fontWeight: "700" }],
            title: ["1.25rem", { lineHeight: "1.5", fontWeight: "600" }],
          },

          // 3. 自訂陰影 (Box Shadow) - 讓電影卡片更有立體感
          boxShadow: {
            card: "0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.2)", // => shadow-card
            "card-hover":
              "0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 10px 10px -5px rgba(0, 0, 0, 0.4)", // => hover:shadow-card-hover
          },

          // 4. 自訂縮放比例 (Scale) - 用於滑鼠移過海報時的放大效果
          scale: {
            "102": "1.02",
          },

          // 5. 自訂背景圖片或漸層 (可選) => bg-gradient-to-t-transparent
          backgroundImage: {
            "gradient-to-t-transparent":
              "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
          },
        },
      },
    },
  },

  // 5. 執行期變數 (Runtime Config)
  // 處理 API Key 與環境變數
  runtimeConfig: {
    tmdbAccessToken: process.env.TMDB_API_ACCESS_TOKEN,
    public: {
      tmdbBaseUrl: "https://api.themoviedb.org/3",
      imageBaseUrl: "https://image.tmdb.org/t/p/",
    },
  },

  // 6. 應用程式標題與 Meta (SEO 相關)
  app: {
    layoutTransition: { name: "layout", mode: "out-in" },
  },

  // 7. 其他進階設定 (如 Nitro 伺服器、Vite 優化、Imports 自動導入等)
  // 8. 未來實驗性功能 (Future)
});
