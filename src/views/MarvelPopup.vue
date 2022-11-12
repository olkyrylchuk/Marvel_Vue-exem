<template>
  <div class="popup">
    <div class="popup__header">
      <span class="popup__name">popup name</span>
      <span>
        <i class="material-icons" @click="closePopup">close</i>
      </span>
    </div>
    <div class="content">
      {{ content }}
    </div>
    <div class="popup__footer">
      <button class="close modal" @click="closePopup">close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MarvelPopup",
  props: ["content"],
  computed: {},
  methods: {
    closePopup() {
      this.$emit("closePopup");
    },
  },
};
</script>

<style lang="scss">
.popup {
  z-index: 101;
  padding: 15px;
  position: fixed;
  top: 50px;
  width: 400px;
  height: 300px;
  background-color: #fff;
  box-shadow: 0 0 17px 0 red;
  &__header,
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .material-icons {
    cursor: pointer;
  }
}
</style>