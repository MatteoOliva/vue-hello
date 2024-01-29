const {createApp} = Vue;

createApp ({
    data() {
      return {
        text: 'Hello world',
        image: 'img/logo.png',
      
      };
    },
  }).mount('#app')
