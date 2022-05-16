<template>
  <div>
    <div class="container-fluid">
      <div class="row justify-content-md-center mt-4 " style="height: 100vh">
        <div class="col-sm-4 text-center" style="background-color:dodgerblue">
          <div class="mx-auto order-0">
            <a class="navbar-brand mx-auto" href="#" style="font-size: 3vmax;color: gold;">Account Creation</a>
          </div>
          <form>
            <div class="form-group mb-5 mt-4">
              <label for="exampleInputEmail1" style="color:gold; font-size:x-large">Summoner Name</label>
              <input type="text" class="form-control" id="sumId" aria-describedby="userHelp"
                placeholder="Enter username...">
            </div>
            <div class="form-group mb-4">
              <label for="exampleInputEmail1" style="color:gold; font-size:x-large">E-Mail</label>
              <input type="email" class="form-control" id="emailId" aria-describedby="userHelp"
                placeholder="Enter email...">
            </div>
            <div class="form-group mb-4">
              <label for="exampleInputPassword1" style="color:gold; font-size:x-large">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter password...">
            </div>
            <div class="form-group mb-4">
              <label for="exampleInputPassword2" style="color:gold; font-size:x-large">Confirm Password</label>
              <input type="password" class="form-control" id="exampleInputPassword2"
                placeholder="Repeat the password...">
            </div>
            <button type="submit" class="btn btn-primary mb-2"
              style="background-color:midnightblue ; color:gold; font-size: large;">Create</button>
            <div class="mx-auto order-0">
              <router-link to="/Login"><a class="navbar-brand mx-auto" href="#" style="font-size:medium;color: gold; font-style: ;"><u>Click here
                  to Log In</u></a></router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    document.body.style.backgroundColor = '#000000'
  }
}
</script>
