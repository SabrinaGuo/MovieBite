<template>
  <div
    class="relative aspect-[16/9] w-full max-h-[calc(100vh-140px)] overflow-hidden"
  >
    <NuxtImg
      provider="tmdb"
      :src="`https://movies-proxy.vercel.app/ipx/f_webp&s_2440x1318/tmdb/fTrQsdMS2MUw00RnzH0r3JWHhts.jpg`"
      alt="電影海報"
      width="1220"
      height="659"
      loading="lazy"
      class="object-cover w-full h-full"
    />
    <div
      class="absolute bottom-0 left-0 p-8 text-gray max-w-3xl bg-white/20 backdrop-blur-md rounded-xl ms-4"
    >
      <h2 class="text-3xl pb-4">Movie title</h2>
      <div class="flex">
        <div class="flex gap-2 items-center">
          <p>⭐ 8.5</p>
          <span>·</span>
          <p>349 Reviews</p>
          <span>·</span>
          <p>2025</p>
          <span>·</span>
          <p>1H 56min</p>
        </div>
      </div>
      <p class="pt-4">
        Levon Cade left behind a decorated military career in the black ops to
        live a simple life working construction. But when his boss's daughter,
        who is like family to him, is taken by human traffickers, his search to
        bring her home uncovers a world of corruption far greater than he ever
        could have imagined.
      </p>
    </div>
  </div>
</template>
<!-- :src="`w500${movie.poster_path}`" -->
<!-- https://picsum.photos/960/540 -->
<!-- https://fastly.picsum.photos/id/699/960/540.jpg?hmac=E3CUYn8arnrrvQwQX2_fGW7c5lPX7Lf7-58A95OiXds -->
<!-- https://fastly.picsum.photos/id/282/960/540.jpg?hmac=hHpWLA-5tN-BvHN3C1ww0RIcz7MYI9YytP6c8qt3gLc -->
<!-- https://picsum.photos/500 -->
<!-- https://fastly.picsum.photos/id/68/500/500.jpg?hmac=pKyI0LMvS_HyH_vx_jWvbwbytO_vxmfxFsrjvX9X5D8 -->
<!-- https://fastly.picsum.photos/id/230/500/500.jpg?hmac=Dl0gFRz3E4HI8CWxnaQKSLdbEjjqAhsszIW772MoToM -->
<!-- https://fastly.picsum.photos/id/557/500/500.jpg?hmac=VgywrD7fKCGhxMWKpslwlZCKExdTWsKc6v_4j9UrozM -->
