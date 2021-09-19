<template>
  <div class="content">
    <div class="title">Vue Laravel SPA</div>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/example">Example</router-link>
    </div>
    <router-view />
  </div>
</template>
  
<style scoped>
a {
  color: greenyellow;
  text-decoration: none;
}

a.router-link-exact-active {
  color: orange;
  font-weight: bold;
}

.content {
  text-align: center;
}

.title {
  font-size: 84px;
  margin-bottom: 30px;
}

</style>
