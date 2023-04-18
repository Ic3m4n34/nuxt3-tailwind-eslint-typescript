<template>
  <div class="prose">
    <h1>
      Homepage
    </h1>
    <div
      id="banner-ad"
      style="width: 300px; height: 250px"
    />
  </div>
</template>

<script setup lang="ts">

onBeforeMount(() => {
  window.googletag = window.googletag || { cmd: [] } as any;

  googletag.cmd.push(() => {
  // Define an ad slot for div with id "banner-ad".
    googletag
      .defineSlot(
        '/6355419/Travel/Europe/France/Paris',
        [300, 250],
        'banner-ad',
      )!.addService(googletag.pubads());

    // Disable initial load.
    // This prevents GPT from automatically fetching ads when display is called.
    googletag.pubads().disableInitialLoad();

    // Enable the PubAdsService.
    googletag.enableServices();

    // Request and render an ad for the "banner-ad" slot.
    googletag.display('banner-ad');
  });
});

onMounted(() => {
  googletag.pubads().refresh();
});

/**
 * * We need to call this here because when we call it in watch(route),
 * * the route change already happened and the current ad slot is destroyed.
 */
onBeforeRouteLeave(() => {
  googletag.cmd.push(() => {
    googletag.destroySlots();
  });
});
</script>
