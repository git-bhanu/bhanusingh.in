<script setup lang="ts">
const cssPrefix = 'hero';
const toggleEl = ref(null);
const { $gsap } = useNuxtApp();

onMounted(() => {
  const timeline = $gsap.timeline({ duration: 0.6, repeat: -1, ease: 'expo.inOut' });
  timeline.fromTo(toggleEl.value, { backgroundPositionX: 100 }, {backgroundPositionX: 0 });
  timeline.fromTo(toggleEl.value, { backgroundPositionX: 0 }, { backgroundPositionX: 100 });
});

</script>

<template>
<div :class="[cssPrefix, 'd--f', 'ai--c', 'jc--c']">
  <div :class="[`${cssPrefix}__content`]">
    <div :class="[`${cssPrefix}__main`]">
      <div :class="[`${cssPrefix}__toggle`]">
        >>
        <span :class="[`${cssPrefix}__toggle--text`]" ref="toggleEl">Toggle between work and life :)</span>
      </div>
      <slot name="title"></slot>
<!--      <div>Social Media</div>-->
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.hero {
  font-family: $font-family-primary;
  height: 80vh;
  padding: 0 20px;

  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  &__main {
    max-width: 600px;
  }

  &__toggle {
    margin-bottom: 20px;

    &--text {
      font-size: $font-size-small;
      background: linear-gradient(
              to left,
              rgb(221, 221, 221) 50%,
              rgb(0, 0, 0) 50%
      );
      background-size: 200% 100%;
      background-position-x: 100%;
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
    }
  }
}
</style>