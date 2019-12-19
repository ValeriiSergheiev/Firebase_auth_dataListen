import firebase from 'firebase/app'

export default {
  namespaced: true,
  state: {
    resultData: {}
  },
  actions: {
    READ_DATA({ commit }) {
      let db = firebase.firestore()
      db.collection('users')
        .doc('test')
        .onSnapshot(doc => {
          try {
            const response = doc.data()
            commit('setData', response)
          } catch (e) {
            console.error('error!' + e)
          }
        })
    }
  },
  mutations: {
    setData(state, data) {
      state.resultData = data
    }
  },
  getters: {}
}
