<template>
  <div>
    我是爸爸
    <son>
      <div slot="one">
        1
        <img src="../assets/avatar.png" alt />
      </div>
      <div>
        2
        <img src="../assets/avatar.png" alt />
      </div>
      <div slot="two">
        3
        <img src="../assets/avatar.png" alt />
      </div>
    </son>
  </div>
</template>

<script>
import son from "./son";
export default {
  components: {
    son
  },
  methods: {
    submit() {
      alert("棒~");
    }
  }
};
</script>

<style>
</style>