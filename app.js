const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    almostThere() {
      if (this.counter > 30) {
        return "Too high!";
      } else if (this.counter === 30) {
        return "You made it!";
      } else if (this.counter > 20 && this.counter < 30) {
        return "Almost there...";
      } else if (this.counter > 10) {
        return "Keep clicking...";
      } else {
        return (this.counter = this.counter);
      }
    },
  },
  watch: {
    almostThere() {
      console.log("Watcher initiated...");
      const that = this;
      if (this.counter > 30) {
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
  },
  methods: {
    add(num) {
      return (this.counter += num);
    },
    reset() {
      return (this.counter = 0);
    },
  },
});
app.mount("#events");
