<template>
  <div class="other-page prose">
    <h1>
      Other Page
    </h1>

    <a
      href="https://example.com"
    >Example.com</a>

    <h2>
      Static Ad
    </h2>
    <div id="static-ad-1" />
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  googletag.cmd.push(() => {
  // Define a web interstitial ad slot.
    const interstitialSlot = googletag.defineOutOfPageSlot(
      '/6355419/Travel/Europe/France/Paris',
      googletag.enums.OutOfPageFormat.INTERSTITIAL,
    );

    // Slot returns null if the page or device does not support interstitials.
    if (interstitialSlot) {
      interstitialSlot.addService(googletag.pubads());

      console.log('interstitial loaded');

      // Add event listener to enable navigation once the interstitial loads.
      // If this event doesn't fire, try clearing local storage and refreshing
      // the page.
      googletag.pubads().addEventListener('slotOnload', (event) => {
        if (interstitialSlot === event.slot) {
          console.log('slotOnload loaded');
        }
      });
    }

    // Define static ad slots.
    const staticSlot = googletag.defineSlot(
      '/6355419/Travel/Europe',
      [100, 100],
      'static-ad-1',
    )!.addService(googletag.pubads());

    // Enable SRA and services.
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();

    // Request and render all previously defined ad slots.
    googletag.display(staticSlot);
  });
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
