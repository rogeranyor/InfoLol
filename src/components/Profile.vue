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
    <div class="row">
        <!--Main Content-->
      <div class="col-md-9 my-2">
        <div class ="container-fluid" style="background-color:goldenrod ">
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
              <button type="btn btn-secondary" class="btn btn-dark w-50 mx-3 " style="background-color: black" data-toggle="collapse" aria-expanded="false">Forum</button>
              <button type="btn btn-secondary" class="btn btn-dark my-3 " style="background-color: black; width: 95px" data-toggle="collapse" aria-expanded="false">EloBoost</button>
            </div>
          </div>
        </div>
        <div class ="container-fluid mt-2 " style="background-color:dodgerblue">
          <div class="row">
            <div class="col-2">
              <img class="rounded-circle z-depth-2  rounded-circle float-end my-1" alt="25x25" src="../assets/akali.png"
                   data-holder-rendered="true" style="border: 4px solid #000000; display: block; max-width: 100%; height: auto">
            </div>
            <div class="col my-5">
              <p class=" float-start" style="color: gold; font-size: 3vmax">Summoner's Name</p>
            </div>
          </div>
        </div>

        <div class ="container-fluid" style="background-color: gray; min-height: 100%">
            <div class ="row py-3 ml-2 mr-2" id="Rank">
                <div class="col-2" style="background-color: goldenrod;">
                    <img class="z-depth-2 my-1" alt="25x25" src="../assets/emblems/Emblem_Gold.png"
                    data-holder-rendered="true" style="display: block; max-width: 100%; height: auto">
                </div>
                <div class="col-6" style="background-color: goldenrod;">
                </div>
                <div class="col-2">
                </div>
                <div class="col-2 rounded-circle z-depth-2 rounded-circle float-end my-1" style="background-color: goldenrod; text-align: center">
                    <div class ="container-fluid">
                        <div class="row-4 align-items-center">
                            <div class="col-12 my-4" style="color: black;font-style: italic ; font-size: 2vmax">Winrate</div>
                        </div>
                        <div class="row-4 align-items-center">
                            <div class="col-12 my-2" style="color: black; font-size: 2vmax">xx,xx%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class ="row-8 ml-2 mr-2" id="MatchHistory" style="background-color: dimgray; min-height: 100%">
                <div class ="container-fluid my-2" style="background-color:firebrick">
                    <div class="row">
                        <div class="col-2">
                        <img class="z-depth-2 my-1" alt="25x25" src="../assets/champion/Graves.png"
                        data-holder-rendered="true" style="display: block; max-width: 100%; height: auto">
                        </div>
                        <div class="col-1 my-4" style="color: black; font-size: 2vmax; text-align: center">
                            Lost
                        </div>
                        <div class="col-1 my-4" style="color: black; font-size: 2vmax; text-align: center">
                            154cs
                        </div>
                        <div class="col-2 my-4" style="color: black; font-size: 2vmax; text-align: center">
                            0/10/0
                        </div>
                        <div class="col-6 my-4" style="color: black; font-size: 2vmax; text-align: center">
                            <img class="z-depth-2 my-1" alt="25x25" src="../assets/akali.png" style="height: 65px;">
                            <img class="z-depth-2 my-1" alt="25x25" src="../assets/akali.png" style="height: 65px;">
                            <img class="z-depth-2 my-1" alt="25x25" src="../assets/akali.png" style="height: 65px;">
                            <img class="z-depth-2 my-1" alt="25x25" src="../assets/akali.png" style="height: 65px;">
                            <img class="z-depth-2 my-1" alt="25x25" src="../assets/akali.png" style="height: 65px;">
                            <img class="z-depth-2 my-1" alt="25x25" src="../assets/akali.png" style="height: 65px;">
                        </div>
                    </div>
                </div>
                <div class ="container-fluid my-2" style="background-color:firebrick">
                    <div class="row">
                        <div class="col-2">
                        <img class="z-depth-2 my-1" alt="25x25" src="../assets/champion/Rengar.png"
                        data-holder-rendered="true" style="display: block; max-width: 100%; height: auto">
                        </div>
                        <div class="col-1 my-4" style="color: black; font-size: 2vmax; text-align: center">
                            Lost
                        </div>
                        <div class="col-1 my-4" style="color: black; font-size: 2vmax; text-align: center">
                            121cs
                        </div>
                        <div class="col-2 my-4" style="color: black; font-size: 2vmax; text-align: center">
                            2/4/1
                        </div>
                        <div class="col-6 my-4" style="color: black; font-size: 2vmax; text-align: center">
                            <img class="z-depth-2 my-1" alt="25x25" src="../assets/akali.png" style="height: 65px;">
                            <img class="z-depth-2 my-1" alt="25x25" src="../assets/akali.png" style="height: 65px;">
                            <img class="z-depth-2 my-1" alt="25x25" src="../assets/akali.png" style="height: 65px;">
                            <img class="z-depth-2 my-1" alt="25x25" src="../assets/akali.png" style="height: 65px;">
                            <img class="z-depth-2 my-1" alt="25x25" src="../assets/akali.png" style="height: 65px;">
                            <img class="z-depth-2 my-1" alt="25x25" src="../assets/akali.png" style="height: 65px;">
                        </div>
                    </div>
                </div>
                <div class ="container-fluid my-2" style="background-color:firebrick">
                    <div class="row">
                        <div class="col-2">
                        <img class="z-depth-2 my-1" alt="25x25" src="../assets/champion/Aatrox.png"
                        data-holder-rendered="true" style="display: block; max-width: 100%; height: auto">
                        </div>
                        <div class="col-1 my-4" style="color: black; font-size: 2vmax; text-align: center">
                            Lost
                        </div>
                        <div class="col-1 my-4" style="color: black; font-size: 2vmax; text-align: center">
                            105cs
                        </div>
                        <div class="col-2 my-4" style="color: black; font-size: 2vmax; text-align: center">
                            1/10/5
                        </div>
                        <div class="col-6 my-4" style="color: black; font-size: 2vmax; text-align: center">
                            <img class="z-depth-2 my-1" alt="25x25" src="../assets/akali.png" style="height: 65px;">
                            <img class="z-depth-2 my-1" alt="25x25" src="../assets/akali.png" style="height: 65px;">
                            <img class="z-depth-2 my-1" alt="25x25" src="../assets/akali.png" style="height: 65px;">
                            <img class="z-depth-2 my-1" alt="25x25" src="../assets/akali.png" style="height: 65px;">
                            <img class="z-depth-2 my-1" alt="25x25" src="../assets/akali.png" style="height: 65px;">
                            <img class="z-depth-2 my-1" alt="25x25" src="../assets/akali.png" style="height: 65px;">
                        </div>
                    </div>
                </div>
                <div class ="container-fluid my-2" style="background-color:firebrick">
                    <div class="row">
                        <div class="col-2">
                        <img class="z-depth-2 my-1" alt="25x25" src="../assets/champion/Riven.png"
                        data-holder-rendered="true" style="display: block; max-width: 100%; height: auto">
                        </div>
                        <div class="col-1 my-4" style="color: black; font-size: 2vmax; text-align: center">
                            Lost
                        </div>
                        <div class="col-1 my-4" style="color: black; font-size: 2vmax; text-align: center">
                            167cs
                        </div>
                        <div class="col-2 my-4" style="color: black; font-size: 2vmax; text-align: center">
                            4/9/2
                        </div>
                        <div class="col-6 my-4" style="color: black; font-size: 2vmax; text-align: center">
                            <img class="z-depth-2 my-1" alt="25x25" src="../assets/akali.png" style="height: 65px;">
                            <img class="z-depth-2 my-1" alt="25x25" src="../assets/akali.png" style="height: 65px;">
                            <img class="z-depth-2 my-1" alt="25x25" src="../assets/akali.png" style="height: 65px;">
                            <img class="z-depth-2 my-1" alt="25x25" src="../assets/akali.png" style="height: 65px;">
                            <img class="z-depth-2 my-1" alt="25x25" src="../assets/akali.png" style="height: 65px;">
                            <img class="z-depth-2 my-1" alt="25x25" src="../assets/akali.png" style="height: 65px;">
                        </div>
                    </div>
                </div>
                <div class ="container-fluid my-2" style="background-color:darkolivegreen">
                    <div class="row">
                        <div class="col-2">
                        <img class="z-depth-2 my-1" alt="25x25" src="../assets/champion/Garen.png"
                        data-holder-rendered="true" style="display: block; max-width: 100%; height: auto">
                        </div>
                        <div class="col-1 my-4" style="color: black; font-size: 2vmax; text-align: center">
                            Won
                        </div>
                        <div class="col-1 my-4" style="color: black; font-size: 2vmax; text-align: center">
                            212cs
                        </div>
                        <div class="col-2 my-4" style="color: black; font-size: 2vmax; text-align: center">
                            2/1/3
                        </div>
                        <div class="col-6 my-4" style="color: black; font-size: 2vmax; text-align: center">
                            <img class="z-depth-2 my-1" alt="25x25" src="../assets/akali.png" style="height: 65px;">
                            <img class="z-depth-2 my-1" alt="25x25" src="../assets/akali.png" style="height: 65px;">
                            <img class="z-depth-2 my-1" alt="25x25" src="../assets/akali.png" style="height: 65px;">
                            <img class="z-depth-2 my-1" alt="25x25" src="../assets/akali.png" style="height: 65px;">
                            <img class="z-depth-2 my-1" alt="25x25" src="../assets/akali.png" style="height: 65px;">
                            <img class="z-depth-2 my-1" alt="25x25" src="../assets/akali.png" style="height: 65px;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <!--right-->
      <div class="col my-2">
        <div class ="container" style="background-color:goldenrod">
          <div class="row" style="height: 100px">
            <div class="col-7">
              <button type="btn btn-secondary" class="d-flex align-text-top btn btn-dark my-2  w-100" style="background-color: black; text-align: center" >Login</button>
              <button type="btn btn-secondary" class="d-flex align-text-bottom btn btn-dark w-100 " style="background-color: black">Create Account</button>
            </div>

            <div class="col">
              <router-link to="/profile" exact><img class="rounded-circle z-depth-2  rounded-circle float-end my-1" alt="25x25" src="../assets/akali.png"
                   data-holder-rendered="true" style="border: 4px solid #000000; display: block; max-width: 60%; height: auto"></router-link>
            </div>
          </div>
        </div>
        
        <div class ="container-fluid mt-3" style="background-color:dodgerblue">
          <div class="row-1">
            <div class="col-12" style="max-width: 100%">
              <p style="color: gold; font-size: 2vmax; text-align: center;">Played Champions</p>
            </div>
          </div>
        </div>
        <div class ="container-fluid" style="background-color: gray; min-height: 100%">
            <div class ="container-fluid my-2" style="background-color:dimgray">
                <div class="row">
                    <div class="col-4">
                    <img class="z-depth-2 my-1" alt="25x25" src="../assets/champion/Garen.png"
                    data-holder-rendered="true" style="display: block; max-width: 100%; height: auto">
                    </div>
                    <div class="col-8 my-4" style="color: black; font-size: 2vmax; text-align: center">
                        50,00% WR
                    </div>
                </div>
            </div>
            <div class ="container-fluid my-2" style="background-color:dimgray">
                <div class="row">
                    <div class="col-4">
                    <img class="z-depth-2 my-1" alt="25x25" src="../assets/champion/Graves.png"
                    data-holder-rendered="true" style="display: block; max-width: 100%; height: auto">
                    </div>
                    <div class="col-8 my-4" style="color: black; font-size: 2vmax; text-align: center">
                        12,00% WR
                    </div>
                </div>
            </div>
            <div class ="container-fluid my-2" style="background-color:dimgray">
                <div class="row">
                    <div class="col-4">
                    <img class="z-depth-2 my-1" alt="25x25" src="../assets/champion/Riven.png"
                    data-holder-rendered="true" style="display: block; max-width: 100%; height: auto">
                    </div>
                    <div class="col-8 my-4" style="color: black; font-size: 2vmax; text-align: center">
                        24,00% WR
                    </div>
                </div>
            </div>
            <div class ="container-fluid my-2" style="background-color:dimgray">
                <div class="row">
                    <div class="col-4">
                    <img class="z-depth-2 my-1" alt="25x25" src="../assets/champion/Rengar.png"
                    data-holder-rendered="true" style="display: block; max-width: 100%; height: auto">
                    </div>
                    <div class="col-8 my-4" style="color: black; font-size: 2vmax; text-align: center">
                        44,00% WR
                    </div>
                </div>
            </div>
            <div class ="container-fluid my-2" style="background-color:dimgray">
                <div class="row">
                    <div class="col-4">
                    <img class="z-depth-2 my-1" alt="25x25" src="../assets/champion/Aatrox.png"
                    data-holder-rendered="true" style="display: block; max-width: 100%; height: auto">
                    </div>
                    <div class="col-8 my-4" style="color: black; font-size: 2vmax; text-align: center">
                        34,00% WR
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import lodash from 'lodash'
import json from '../assets/champion.json'
export default {
  data () {
    return {
      json_champs: json,
      search: '',
      champs: []
    }
  },
  created () {
    document.body.style.backgroundColor = '#000000'
  }
}
</script>
