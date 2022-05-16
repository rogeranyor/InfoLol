<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light py-3" style="background-color:#1A659E;">
      <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                  <a class="nav-link" href="#" style="color: #ffe7d4; padding-left:30px;">Who are we?</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#" style="color: #ffe7d4;">Contact Us</a>
              </li>
          </ul>
      </div>
      <router-link style="text-decoration: none; color: inherit;" to="/"><div class="mx-auto order-0">
          <a class="navbar-brand mx-auto" href="#" style="font-size: 80px;color: #ffe7d4;">InfoLoL</a>
      </div></router-link>
      <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul class="navbar-nav ml-auto">
          </ul>
      </div>
  </nav>
  <div class="container-fluid">
    <div class="row">
        <div class="col-md-9 my-3">
            <div class ="container-fluid" style="background-color:#004E89 ">
    <div class="row">
      <div class ="col-9 " style="height: 70px">
        <div class="form-group d-flex my-3">
          <label for="exampleInputEmail1"></label>
          <input type="text" v-model="search" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search a Champion">
        </div>
      </div>
      <div class="col text-end">
        <!-- class="btn btn-dark w-50 mx-3 "  -->
        <!-- class="btn btn-dark my-3 "-->
        <router-link to="/forum" exact><button type="btn btn-secondary" class="btn btn-dark w-50 mx-3 " style="background-color: black" data-toggle="collapse" aria-expanded="false">Forum</button></router-link>
        <router-link to="/Coaching"><button type="btn btn-secondary" class="btn btn-dark my-3 " style="background-color: black; width: 95px" data-toggle="collapse" aria-expanded="false">Coaching</button></router-link>
      </div>
    </div>
  </div>
        <router-view/>
        </div>
        <div class="col-md-3 my-3">
        <div class="row">
        <div class ="container" style="background-color:#004E89">
          <div class="row" style="height: 100px">
            <div class="col-7">
              <router-link to="/Login" tag="button" type="btn btn-secondary" class="d-flex align-text-top btn btn-dark my-2  w-100" style="background-color: black; text-align: center" >Login</router-link>
              <router-link to="/Register" tag="button" type="btn btn-secondary" class="d-flex align-text-bottom btn btn-dark w-100 " style="background-color: black">Create Account</router-link>
            </div>
            <div class="col">
              <router-link to="/Profile" exact><img class="rounded-circle z-depth-2  rounded-circle float-right my-1" alt="25x25" src="./assets/akali.png"
                   data-holder-rendered="true" style="border: 4px solid #000000; display: block; max-width: 55%; height: auto"></router-link>
            </div>
          </div>
        </div>
        </div>
        <div class="row">
        <div class ="container-fluid" style="background-color: #7A7265; height: 100vh" >
            <br>
            <div class="card">
              <div class="card-body">
                ¡Buildcrash sube a la división SILVER 1!
              </div>
            </div>
            <br>
            <div class="card">
              <img src="./assets/wp1.jpg" class="card-img-top" alt="...">
              <div class="card-body ">
                Información sobre el nuevo parche 1.5
              </div>
            </div>
             <br>
            <div class="card">
              <div class="card-body">
                Se ha actualizado la página añadiendo más información sobre campeones.
              </div>
            </div>
            <br>
            <div class="card">
              <img src="./assets/wp2.jpg" class="card-img-top" alt="...">
              <div class="card-body ">
                Información sobre el nuevo parche 1.4
              </div>
            </div>
            <br>
        </div>
        </div>
      </div>
    </div>
   </div>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
:root {
    --maincolor: #1A659E;
    --secondarycolor: #004E89;
    --backgroundcolor: #EFEFD0;
    --forthcolor: #7A7265;
    --fifthcolor: #ffe7d4;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 60px;
}
</style>
