import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';


import vueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';


Vue.use(vueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyBX9OlMxsZJJAjUyG-ZaMqgVAiBAFTBdn4",
  authDomain: "reservation-calendrier-57fb7.firebaseapp.com",
  projectId: "reservation-calendrier-57fb7",
  storageBucket: "reservation-calendrier-57fb7.appspot.com",
  messagingSenderId: "476123713991",
  appId: "1:476123713991:web:ade253aab34b633d7dc9e2"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
