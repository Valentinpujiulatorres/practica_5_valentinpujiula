<template >
<div style="background-color: ">
  
  <div id="nav" class="nav nav-fluid  ">
    <div class="container-fluid">
    <a class="navbar-brand" style="color:#3d3e57; font-size:30px; margin-bottom: 1%;">Valentine's Shop</a>
  </div>
  <div class="navbar-item text-center mx-auto " style="margin-top:2%;">
    <router-link to="/" id="" style=" color:#3d3e57;  " >Tienda</router-link> 
   
  </div>
<div class="navbar-item text-center mx-auto " style="margin-top:2%;">
    <router-link to="/about" style="color:#2c2d3c;" >Checkout</router-link>
   
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
