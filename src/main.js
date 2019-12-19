import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB03qu3HHYmGoBUXEoRZffCLvJ053_NQ_Y',
  authDomain: 'vue-database-auth.firebaseapp.com',
  databaseURL: 'https://vue-database-auth.firebaseio.com',
  projectId: 'vue-database-auth',
  storageBucket: 'vue-database-auth.appspot.com',
  messagingSenderId: '981991195378',
  appId: '1:981991195378:web:7068f395647264e869066b'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
