<template>
  <div>
    <div
      id="banner-ad"
      style="width: 300px; height: 250px"
    />
  </div>
</template>

<script setup lang="ts">

onMounted(() => {
  window.googletag = window.googletag || { cmd: [] } as any;

  googletag.cmd.push(() => {
  // Define an ad slot for div with id "banner-ad".
    googletag
      .defineSlot(
        '/6355419/Travel/Europe/France/Paris',
        [300, 250],
        'banner-ad',
      )!.addService(googletag.pubads());

    // Enable the PubAdsService.
    googletag.enableServices();

    // Request and render an ad for the "banner-ad" slot.
    googletag.display('banner-ad');
  });
});
</script>
