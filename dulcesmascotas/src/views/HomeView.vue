<template>

  <WelcomeComp></WelcomeComp>

</template>

<script>
// @ is an alias to /src
import WelcomeComp from '@/components/WelcomeComp.vue'

export default {
  name: 'HomeView',
  components: {
    WelcomeComp,
  },
};
</script>
