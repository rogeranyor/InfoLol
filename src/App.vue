<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light py-3" style="background-color:dodgerblue;">
      <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                  <a class="nav-link" href="#" style="color: gold; padding-left:30px;">Who are we?</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#" style="color: gold;">Contact Us</a>
              </li>
          </ul>
      </div>
      <div class="mx-auto order-0">
          <a class="navbar-brand mx-auto" href="#" style="font-size: 80px;color: gold;">InfoLoL</a>
          <router-link style="text-decoration: none; color: inherit;" to="/"><strong></strong></router-link>
      </div>
      <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul class="navbar-nav ml-auto">
          </ul>
      </div>
  </nav>
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
