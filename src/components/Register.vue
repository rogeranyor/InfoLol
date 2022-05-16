<template>
  <div>
    <div class="container-fluid">
      <div class="row justify-content-md-center mt-4 " style="height: 100vh;max-width: initial;">
        <div class="col-sm-4 text-center" style="background-color:#1A659E">
          <div class="mx-auto order-0">
            <a class="navbar-brand mx-auto" href="#" style="font-size: 3vmax;color: #ffe7d4;">Account Creation</a>
          </div>
          <form>
            <div class="form-group mb-5 mt-4">
              <label for="exampleInputEmail1" style="color:#ffe7d4; font-size:x-large">Summoner Name</label>
              <input type="text" class="form-control" id="sumId" aria-describedby="userHelp"
                placeholder="Enter username...">
            </div>
            <div class="form-group mb-4">
              <label for="exampleInputEmail1" style="color:#ffe7d4; font-size:x-large">E-Mail</label>
              <input type="email" class="form-control" id="emailId" aria-describedby="userHelp"
                placeholder="Enter email...">
            </div>
            <div class="form-group mb-4">
              <label for="exampleInputPassword1" style="color:#ffe7d4; font-size:x-large">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter password...">
            </div>
            <div class="form-group mb-4">
              <label for="exampleInputPassword2" style="color:#ffe7d4; font-size:x-large">Confirm Password</label>
              <input type="password" class="form-control" id="exampleInputPassword2"
                placeholder="Repeat the password...">
            </div>
            <button type="submit" class="btn btn-primary mb-2"
              style="background-color:midnightblue ; color:#ffe7d4; font-size: large;">Create</button>
            <div class="mx-auto order-0">
              <router-link to="/Login"><a class="navbar-brand mx-auto" href="#" style="font-size:medium;color: #ffe7d4; font-style: ;"><u>Click here
                  to Log In</u></a></router-link>
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
