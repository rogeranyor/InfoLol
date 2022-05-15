<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light py-3" style="background-color:dodgerblue;">
      <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="//codeply.com" style="color: gold; padding-left:30px;">Who are we?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style="color: gold;">Contact Us</a>
          </li>
        </ul>
      </div>
      <div class="mx-auto order-0">
        <a class="navbar-brand mx-auto" href="#" style="font-size: 80px;color: gold;">InfoLoL</a>
      </div>
      <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
        </ul>
      </div>
    </nav>
    <div class="container-fluid">
      <div class="row justify-content-md-center mt-4 " style="height: 100vh">
        <div class="col-sm-4 text-center" style="background-color:dodgerblue">
          <div class="mx-auto order-0">
            <a class="navbar-brand mx-auto" href="#" style="font-size: 60px;color: gold;">Account Creation</a>
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
              <a class="navbar-brand mx-auto" href="#" style="font-size:medium;color: gold; font-style: ;"><u>Click here
                  to Log In</u></a>
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
    document.body.style.backgroundColor = '#8E8E8E'
  }
}
</script>
