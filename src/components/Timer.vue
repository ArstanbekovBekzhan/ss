<template>
    <div>
        <div class="timer">
            <span class="minute">{{ minutes }}</span>
            <span>:</span>
            <span class="seconds">{{ seconds }}</span>
        </div>
    </div>
</template>



<script>
export default{
    data:() => ({
        timer: null,
        totalTime: (25 * 60),
        resetButton: false,
        title: "Countdown to rest time!",
        edit: false
    }),
    methods: {
    startTimer: function() {
      this.timer = setInterval(() => this.countdown(), 1000); //1000ms = 1 second
      this.resetButton = true;
    },
    stopTimer: function() {
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = true;
    },
    resetTimer: function() {
      this.totalTime = (25 * 60);
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = false;
    },
    editTimer: function() {
      this.edit = true;
    },
    padTime: function(time){
      return (time < 10 ? '0' : '') + time;
    },
    countdown: function() {
      this.totalTime--;
    }
  },
  computed: {
    minutes: function(){
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    seconds: function() {
      const seconds = this.totalTime - (this.minutes * 60);
      return this.padTime(seconds);
    },
  },
  mounted(){
    this.startTimer()
  }
}
</script>