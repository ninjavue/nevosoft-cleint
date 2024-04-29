<template>
  <div class="loading">
    <div class="loader"></div>
  </div>
</template>


<style lang="scss">

.loader {
  width: 100px;
  aspect-ratio: 1;
  display: grid;
  border: 4px solid #0000;
  border-radius: 50%;
  border-right-color: #06048c;
  animation: l15 1s infinite linear;
}
.loader::before,
.loader::after {    
  content: "";
  grid-area: 1/1;
  margin: 2px;
  border: inherit;
  border-radius: 50%;
  animation: l15 2s infinite;
}
.loader::after {
  margin: 8px;
  animation-duration: 3s;
}
@keyframes l15{ 
  100%{transform: rotate(1turn)}
}

.loading {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background-color: #fff;
  width: 100vw;
  height: 100vh;
}
</style>