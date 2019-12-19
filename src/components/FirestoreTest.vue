<template>
  <div>
    <div class="result">
      <table>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Born</th>
        </tr>
        <tr>
          <td>{{ resultData.first }}</td>
          <td>{{ resultData.last }}</td>
          <td>{{ resultData.born }}</td>
        </tr>
      </table>
    </div>
    <button @click="setData">Set default data</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import firebase from 'firebase/app'

export default {
  name: 'FirestoreTest',
  data: () => ({}),
  async mounted() {
    await this.READ_DATA()
  },
  methods: {
    ...mapActions('user', ['READ_DATA']),
    setData() {
      let db = firebase.firestore()
      db.collection('users')
        .doc('test')
        .set({
          first: 'Ada',
          last: 'Lovelace',
          born: 1815
        })
    }
  },
  computed: {
    ...mapState('user', ['resultData'])
  }
}
</script>

<style scoped>
table,
th,
td {
  border: 1px solid gray;
  border-collapse: collapse;
  color: gray;
  padding: 5px 10px;
}

td {
  color: tomato;
}

button {
  margin-top: 20px;
}

.result {
  display: flex;
  justify-content: center;
}
</style>
