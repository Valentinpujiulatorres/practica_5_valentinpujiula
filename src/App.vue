<template >
<div style="background-color: #fcc256;">
  <img src="../src/assets/Banner.png" alt="" style="">
  <div id="nav" class="nav nav-fluid bg-dark  ">
    <div class="container-fluid">
    <a class="navbar-brand" style="color:white; margin-bottom: 1%;">Valentines Shop</a>
  </div>
  <div class="navbar-item text-center mx-auto " style="margin-top:2%;">
    <router-link to="/" style=" color: yellow;">Tienda</router-link> 
   
  </div>
<div class="navbar-item text-center mx-auto " style="margin-top:4%;">
    <router-link to="/about" style="color: yellow;" >About</router-link>
   
  </div>
     
  </div>
  <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  margin: 2%;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #3f77af;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
