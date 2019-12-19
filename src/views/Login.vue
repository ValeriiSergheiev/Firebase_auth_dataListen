<template>
  <div>
    <form>
      <input v-model="email" type="email" placeholder="Email" /><br />
      <input v-model="password" type="password" placeholder="Password" /><br />
      <button @click.prevent="auth">Login</button>
    </form>
    <div v-if="error" class="error">
      <p>{{ error }}</p>
    </div>
    <div v-else class="success">
      <p>User is logged</p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'

export default {
  name: 'Login',
  data: () => ({
    email: '',
    password: '',
    error: ''
  }),
  mounted() {},
  methods: {
    async auth() {
      try {
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
        this.error = ''
        console.log(response.user)
      } catch (e) {
        this.error = e.message
      }
    }
  }
}
</script>

<style scoped>
input {
  margin-bottom: 10px;
}

.error {
  color: tomato;
}

.success {
  color: green;
}
</style>
