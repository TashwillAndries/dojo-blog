<template>
  <div class="spin"></div>
</template>

<style>
.spin {
  display: block;
  width: 40px;
  height: 30px;
  margin: 30px auto;
  border: 30px solid transparent;
  border-radius: 50%;
  border-top-color: crimson;
  animation: spin 1s ease infinite;
}

@keyframes spin {
  to {
    transform: rotateZ(360deg);
  }
}
</style>
