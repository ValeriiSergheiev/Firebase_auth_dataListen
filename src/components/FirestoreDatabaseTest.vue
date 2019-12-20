<template>
  <div>
    <div class="result">
      <table>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Address</th>
        </tr>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.address.city }}</td>
          <td>
            <input
              type="text"
              v-model.lazy="user.name"
              @change="editUserName(user.name, index)"
            />
            <!--<input type="text" v-model="names[index]" />
            <button @click="editUserName(names[index], index)">Edit Name</button>-->
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'

export default {
  name: 'FirestoreDatabaseTest',
  data: () => ({
    users: null
    // names: []
  }),
  mounted() {
    const usersRef = firebase.database().ref('users')
    usersRef.on('value', snapshot => {
      // this.names = []
      this.users = snapshot.val()

      /*this.users.forEach(user => {
        this.names.push(user.name)
      })
      console.log(this.names)*/
    })
  },
  computed: {
    /*userName: {
      get() {
        return this.test
      },
      set() {}
    }*/
  },
  methods: {
    editUserName(newName, index) {
      // console.log(newName + ' ' + index)
      firebase
        .database()
        .ref(`users/${index}`)
        .update({
          name: newName
        })
    }
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
  margin-left: 10px;
}

.result {
  display: flex;
  justify-content: center;
}
</style>
