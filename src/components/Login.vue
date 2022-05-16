<template>
  <div>
    <div class="container-fluid" style="max-width: initial;">
      <div class="row justify-content-md-center mt-4 " style="height: 100vh">
        <div class="col-sm-4 text-center" style="background-color:#1A659E">
          <div class="mx-auto order-0">
            <a class="navbar-brand mx-auto" href="#" style="font-size: 3vmax;color: #ffe7d4;">Log In</a>
          </div>
          <form>
            <div class="form-group mb-5 mt-4">
              <label for="exampleInputEmail1" style="color:#ffe7d4; font-size:x-large">Summoner Name</label>
              <input type="email" class="form-control" id="sumId" aria-describedby="userHelp"
                placeholder="Enter username...">
            </div>
            <div class="form-group mb-4">
              <label for="exampleInputPassword1" style="color:#ffe7d4; font-size:x-large">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter password...">
            </div>
            <button type="submit" class="btn btn-primary mb-2"
              style="background-color:midnightblue ; color:#ffe7d4; font-size: large;">Log In</button>
            <div class="mx-auto order-0">
              <router-link to="/Register">
              <a class="navbar-brand mx-auto" href="#" style="font-size:medium;color: #ffe7d4; font-style: ;"><u>Click here
                  to Create an Account</u></a></router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
:root {
    --maincolor: #1A659E;
    --secondarycolor: #004E89;
    --backgroundcolor: #EFEFD0;
    --forthcolor: #7A7265;
    --fifthcolor: #ffe7d4;
}
</style>

<script>
export default {
  created () {
    document.body.style.backgroundColor = '#EFEFD0'
  }
}
</script>
