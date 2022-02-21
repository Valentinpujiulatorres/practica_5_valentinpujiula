<template>
  <div id="nav" class="nav nav-fluid bg-light  ">
    <div class="container-fluid">
    <a class="navbar-brand" style="color:black; margin-bottom: 3%;">Valentines Shop</a>
  </div>
  <div class="navbar-item text-center mx-auto " style="margin-top:4%;">
    <router-link to="/" style=" color: brown;">Tienda</router-link> 
   
  </div>
<div class="navbar-item text-center mx-auto " style="margin-top:4%;">
    <router-link to="/about" >About</router-link>
   
  </div>
     
  </div>
  <router-view/>
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
