<template>
<div class="container-fluid atas" >
    <div class="col-lg-4 col-centered"></div>
    <div class="col-lg-4 col-centered">
      <div class="tabbar tabbar--top tabbar--top-border">
        <label class="tabbar__item tabbar--top-border__item">
          <input type="radio" name="top-tabbar-b" checked="checked">
          <button class="tabbar__button tabbar--top-border__button">
            Paid
          </button>
        </label>

        <label class="tabbar__item tabbar--top-border__item">
          <input type="radio" name="top-tabbar-b">
          <button class="tabbar__button tabbar--top-border__button">
            Overdue
          </button>
        </label>

        <label class="tabbar__item tabbar--top-border__item">
          <input type="radio" name="top-tabbar-b">
          <button class="tabbar__button tabbar--top-border__button">
            Open
          </button>
        </label>
      </div>
    </div>
  <div class="col-lg-4 col-centered"></div>
</div>
</template>

<script>
  export default {
    name : 'TabSample',
  }
</script>

<style scoped>
    .atas{
      margin-top: -40px;
    }
    .centered-form{
      display: flex;
      align-items: center;
      height: 10em;
      justify-content: center;
    }
</style>
