<script setup lang="ts">
const cssPrefix = 'bs-header';
const timeDivider1 = ref(null);
const timeDivider2 = ref(null);
const time = ref({ hour: '00', minutes: '00', seconds: '00' });
const { $gsap } = useNuxtApp();

function getFormattedTime() {
  const now = new Date();
  const options = {
    timeZone: 'Asia/Kolkata',
  };

  let hour = (now).toLocaleString([], { ...options, hour: 'numeric', hour12: false });
  let minutes = (now).toLocaleString([], { ...options, minute: 'numeric' });
  let seconds = (now).toLocaleString([], { ...options, second: 'numeric' });

  hour = Number(hour).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })

  minutes = Number(minutes).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })

  seconds = Number(seconds).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })

  time.value = {
    hour,
    minutes,
    seconds,
  };
}

onMounted(() => {
  const timeline = $gsap.timeline({ duration: 1, repeat: -1, onRepeat: () => {
   getFormattedTime();
  }
  });
  timeline.fromTo(timeDivider1.value, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'slow(0.7,0.7,false)' });
  timeline.fromTo(timeDivider2.value, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'slow(0.7,0.7,false)' }, "<");
  timeline.play();
})
</script>

<template>
  <div :class="[cssPrefix, 'd--f', 'fd--r', 'ai--c']">
    <div :class="[`${cssPrefix}__sectiont`, `${cssPrefix}__left`, 'd--f']">
      <p>DARK MODE</p>
    </div>
    <div  :class="['d--f', 'fg--1']"></div>
    <div :class="[`${cssPrefix}__section`, `${cssPrefix}__center`, 'd--f']"><p> :) </p> </div>
    <div  :class="['d--f', 'fg--1']"></div>
    <div :class="[`${cssPrefix}__section`, `${cssPrefix}__right`, 'd--f']">
      <div :class="[`${cssPrefix}__time`]">
        <p>{{ time.hour }}<span ref="timeDivider1">:</span>{{ time.minutes }}<span ref="timeDivider2">:</span>{{ time.seconds }} (IST)</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.bs-header {
  font-family: $font-family-secondary;
  padding: 16px 10px;

  &__section {
    padding-left: 10px;
    padding-right: 10px;
  }

  &__time {
  }
}
</style>