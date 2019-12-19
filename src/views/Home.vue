<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <FirestoreTest />
  </div>
</template>

<script>
// @ is an alias to /src
import FirestoreTest from '@/components/FirestoreTest.vue'

export default {
  name: 'home',
  components: {
    FirestoreTest
  }
}
</script>
