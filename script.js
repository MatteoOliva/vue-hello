const {createApp} = Vue;

createApp ({
    data() {
      return {
        text: 'Hello world',
        imageURL: "/img/logo.png",
      
      };
    },
  }).mount('#app')
