<template>
<div>
  <div class ="container-fluid mt-2 " style="background-color:#1A659E">
    <div class="row">
      <div class="col-2">
        <img class="rounded-circle z-depth-2  rounded-circle float-end my-1" alt="25x25" src="../assets/akali.png"
              data-holder-rendered="true" style="border: 4px solid #000000; display: block; max-width: 100%; height: auto">
      </div>
      <div class="col my-5">
        <p class=" float-start" style="color: #ffe7d4; font-size: 3vmax">Summoner's Name</p>
      </div>
    </div>
  </div>
  <div class ="container-fluid" style="background-color: #7A7265; min-height: 100%">
      <div class ="row py-3 ml-2 mr-2" id="Rank">
          <div class="col-2" style="background-color: #004E89;">
              <img class="z-depth-2 my-1" alt="25x25" src="../assets/emblems/Emblem_Gold.png"
              data-holder-rendered="true" style="display: block; max-width: 100%; height: auto">
          </div>
          <div class="col-6" style="background-color: #004E89;">
          </div>
          <div class="col-2">
          </div>
          <div class="col-2 rounded-circle z-depth-2 rounded-circle float-end my-1" style="background-color: #004E89; text-align: center">
              <div class ="container-fluid">
                  <div class="row-4 align-items-center">
                      <div class="col-12 my-4" style="color: #ffe7d4;font-style: italic ; font-size: 2vmax">Winrate</div>
                  </div>
                  <div class="row-4 align-items-center">
                      <div class="col-12 my-2" style="color: #ffe7d4; font-size: 2vmax">xx,xx%</div>
                  </div>
              </div>
          </div>
      </div>
      <div class ="row-8 ml-2 mr-2" id="MatchHistory" style="background-color: dim#7A7265; min-height: 100%">
          <div class ="container-fluid my-2" style="background-color:firebrick">
              <router-link style="text-decoration: none; color: inherit;" to="/match">
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
              </router-link>
          </div>
          <div class ="container-fluid my-2" style="background-color:firebrick">
              <router-link style="text-decoration: none; color: inherit;" to="/match">
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
              </router-link>
          </div>
          <div class ="container-fluid my-2" style="background-color:firebrick">
              <router-link style="text-decoration: none; color: inherit;" to="/match">
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
              </router-link>
          </div>
          <div class ="container-fluid my-2" style="background-color:firebrick">
            <router-link style="text-decoration: none; color: inherit;" to="/match">
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
            </router-link>
          </div>
          <div class ="container-fluid my-2" style="background-color:darkolivegreen">
            <router-link style="text-decoration: none; color: inherit;" to="/match">
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
            </router-link>
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
    document.body.style.backgroundColor = '#EFEFD0'
  }
}
</script>
