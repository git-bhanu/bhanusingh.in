<script setup lang="ts">
const cssPrefix = 'hero';
</script>

<template>
<div :class="[cssPrefix, 'd--f', 'ai--c', 'jc--c']">
  <div :class="[`${cssPrefix}__content`]">
    <div :class="[`${cssPrefix}__main`]">
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
}
</style>