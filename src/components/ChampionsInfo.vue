<template >
  <div class="container-fluid">
    <div class="row">
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
        <div class="container-fluid my-2">
          <div class="row" style="background-color: dodgerblue;">
            <div class="col-2 my-2">
              <img class="rounded-circle z-depth-2  rounded-circle float-end my-1" alt="25x25" src="../assets/champion/Akali.png"
                   data-holder-rendered="true" style="border: 4px solid #000000; display: block; max-width: 100%; height: auto">
            </div>
            <div class="col" style="align-items: center;">
              <div class="container-fluid my-4" style="text-align: center;font-size: 4vmax;color: gold; font-style: italic;">
                Akali
              </div>
            </div>
            <div class="col-2 rounded-circle z-depth-2 rounded-circle float-end my-1 ml-2 mr-2" style="background-color: goldenrod; text-align: center">
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
          <div class="row my-2">
            <div class="col mr-2" style="text-align: center; background-color:darkgray;">
              <div
                class="row"
                style="text-align: center;background-color:dodgerblue; font-size: 2vmax; color: goldenrod; ">
                <div class="col" style="text-align: center">Runes</div>
                </div>
              <table align="center" >
                <tbody align="center">
                  <tr>
                    <td colspan="3" class="text-center">
                      <div class="img-align-block">
                        <div>
                          <img
                            src="/static/img/akali.6ea05c5.png"
                            height="48"
                            width="48"
                            style="1"
                          />
                        </div>
                      </div>
                    </td>
                    <td colspan="3" class="text-center">
                      <div class="img-align-block">
                        <div>
                          <img
                            src="/static/img/akali.6ea05c5.png"
                            height="48"
                            width="48"
                            style="opacity: 0.25"
                          />
                        </div>
                      </div>
                    </td>
                    <td colspan="3" class="text-center">
                      <div class="img-align-block">
                        <div>
                          <img
                            src="/static/img/akali.6ea05c5.png"
                            height="48"
                            width="48"
                            style="opacity: 0.25"
                          />
                        </div>
                      </div>
                    </td>
                    <td colspan="3" class="text-center">
                      <div class="img-align-block">
                        <div>
                          <img
                            src="/static/img/akali.6ea05c5.png"
                            height="48"
                            width="48"
                            style="opacity: 0.25"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3" class="text-center">
                      <div class="img-align-block">
                        <div>
                          <img
                            src="/static/img/akali.6ea05c5.png"
                            height="36"
                            width="36"
                            style="opacity: 0.25"
                          />
                        </div>
                      </div>
                    </td>
                    <td colspan="3" class="text-center">
                      <div class="img-align-block">
                        <div>
                          <img
                            src="/static/img/akali.6ea05c5.png"
                            height="36"
                            width="36"
                            style="opacity: 1"
                          />
                        </div>
                      </div>
                    </td>
                    <td colspan="3" class="text-center">
                      <div class="img-align-block">
                        <div>
                          <img
                            src="/static/img/akali.6ea05c5.png"
                            height="36"
                            width="36"
                            style="opacity: 0.25"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3" class="text-center">
                      <div class="img-align-block">
                        <div>
                          <img
                            src="/static/img/akali.6ea05c5.png"
                            height="36"
                            width="36"
                            style="opacity: 0.25"
                          />
                        </div>
                      </div>
                    </td>
                    <td colspan="3" class="text-center">
                      <div class="img-align-block">
                        <div>
                          <img
                            src="/static/img/akali.6ea05c5.png"
                            height="36"
                            width="36"
                            style="opacity: 1"
                          />
                        </div>
                      </div>
                    </td>
                    <td colspan="3" class="text-center">
                      <div class="img-align-block">
                        <div>
                          <img
                            src="/static/img/akali.6ea05c5.png"
                            height="36"
                            width="36"
                            style="opacity: 0.25"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3" class="bigBorderBottom text-center">
                      <div class="img-align-block">
                        <div>
                          <img
                            src="/static/img/akali.6ea05c5.png"
                            height="36"
                            width="36"
                            style="opacity: 0.25"
                          />
                        </div>
                      </div>
                    </td>
                    <td colspan="3" class="bigBorderBottom text-center">
                      <div class="img-align-block">
                        <div>
                          <img
                            src="/static/img/akali.6ea05c5.png"
                            height="36"
                            width="36"
                            style="opacity: 0.25"
                          />
                        </div>
                      </div>
                    </td>
                    <td colspan="3" class="bigBorderBottom text-center">
                      <div class="img-align-block">
                        <div>
                          <img
                            src="/static/img/akali.6ea05c5.png"
                            height="36"
                            width="36"
                            style="opacity: 1"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3">
                      <div class="img-align-block">
                        <div>
                          <img
                            src="/static/img/akali.6ea05c5.png"
                            height="24"
                            width="24"
                            style="opacity: 0.25"
                          />
                        </div>
                      </div>
                    </td>
                    <td colspan="3">
                      <div class="img-align-block">
                        <div>
                          <img
                            src="/static/img/akali.6ea05c5.png"
                            height="24"
                            width="24"
                            style="opacity: 1"
                          />
                        </div>
                      </div>
                    </td>
                    <td colspan="3">
                      <div class="img-align-block">
                        <div>
                          <img
                            src="/static/img/akali.6ea05c5.png"
                            height="24"
                            width="24"
                            style="opacity: 0.25"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3">
                      <div class="img-align-block">
                        <div>
                          <img
                            src="/static/img/akali.6ea05c5.png"
                            height="24"
                            width="24"
                            style="opacity: 0.25"
                          />
                        </div>
                      </div>
                    </td>
                    <td colspan="3">
                      <div class="img-align-block">
                        <div>
                          <img
                            src="/static/img/akali.6ea05c5.png"
                            height="24"
                            width="24"
                            style="opacity: 0.25"
                          />
                        </div>
                      </div>
                    </td>
                    <td colspan="3">
                      <div class="img-align-block">
                        <div>
                          <img
                            src="/static/img/akali.6ea05c5.png"
                            height="24"
                            width="24"
                            style="opacity: 1"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3" class="bigBorderBottom">
                      <div class="img-align-block">
                        <div>
                          <img
                            src="/static/img/akali.6ea05c5.png"
                            height="24"
                            width="24"
                            style="opacity: 0.25"
                          />
                        </div>
                      </div>
                    </td>
                    <td colspan="3" class="bigBorderBottom">
                      <div class="img-align-block">
                        <div>
                          <img
                            src="/static/img/akali.6ea05c5.png"
                            height="24"
                            width="24"
                            style="opacity: 1"
                          />
                        </div>
                      </div>
                    </td>
                    <td colspan="3" class="bigBorderBottom">
                      <div class="img-align-block">
                        <div>
                          <img
                            src="/static/img/akali.6ea05c5.png"
                            height="24"
                            width="24"
                            style="opacity: 0.25"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3" class="small-vert-padding">
                      <div class="img-align-block">
                        <div>
                          <img
                            src="/static/img/akali.6ea05c5.png"
                            height="24"
                            width="24"
                            style="opacity: 0.25"
                          />
                        </div>
                      </div>
                    </td>
                    <td colspan="3" class="small-vert-padding">
                      <div class="img-align-block">
                        <div>
                          <img
                            src="/static/img/akali.6ea05c5.png"
                            height="24"
                            width="24"
                            style="opacity: 1"
                          />
                        </div>
                      </div>
                    </td>
                    <td colspan="3" class="small-vert-padding">
                      <div class="img-align-block">
                        <div>
                          <img
                            src="/static/img/akali.6ea05c5.png"
                            height="24"
                            width="24"
                            style="opacity: 0.25"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3" class="small-vert-padding">
                      <div class="img-align-block">
                        <div>
                          <img
                            src="/static/img/akali.6ea05c5.png"
                            height="24"
                            width="24"
                            style="opacity: 0.25"
                          />
                        </div>
                      </div>
                    </td>
                    <td colspan="3" class="small-vert-padding">
                      <div class="img-align-block">
                        <div>
                          <img
                            src="/static/img/akali.6ea05c5.png"
                            height="24"
                            width="24"
                            style="opacity: 0.25"
                          />
                        </div>
                      </div>
                    </td>
                    <td colspan="3" class="small-vert-padding">
                      <div class="img-align-block">
                        <div>
                          <img
                            src="/static/img/akali.6ea05c5.png"
                            height="24"
                            width="24"
                            style="1"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3" class="small-vert-padding">
                      <div class="img-align-block">
                        <div>
                          <img
                            src="/static/img/akali.6ea05c5.png"
                            height="24"
                            width="24"
                            style="opacity: 0.25"
                          />
                        </div>
                      </div>
                    </td>
                    <td colspan="3" class="small-vert-padding">
                      <div class="img-align-block">
                        <div>
                          <img
                            src="/static/img/akali.6ea05c5.png"
                            height="24"
                            width="24"
                            style="1"
                          />
                        </div>
                      </div>
                    </td>
                    <td colspan="3" class="small-vert-padding">
                      <div class="img-align-block">
                        <div>
                          <img
                            src="/static/img/akali.6ea05c5.png"
                            height="24"
                            width="24"
                            style="opacity: 0.25"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col" style="text-align: center;">
              <div
                class="row"
                style="text-align: center;background-color:dodgerblue; font-size: 2vmax; color: goldenrod; ">
                <div class="col" style="text-align: center">Build</div>
              </div>
              <div class="row" style="background-color:darkgray">
                <img
                  data-original="/images/item/sorcerers-shoes-64x.png"
                  alt=""
                  width="64"
                  height="64"
                  src="/static/img/akali.6ea05c5.png"
                  style="margin: 2%"
                />
                <img
                  data-original="/images/item/sorcerers-shoes-64x.png"
                  alt=""
                  width="64"
                  height="64"
                  src="/static/img/akali.6ea05c5.png"
                  style="margin: 2%"
                />
                <img
                  data-original="/images/item/sorcerers-shoes-64x.png"
                  alt=""
                  width="64"
                  height="64"
                  src="/static/img/akali.6ea05c5.png"
                  style="margin: 2%"
                />
                <img
                  data-original="/images/item/sorcerers-shoes-64x.png"
                  alt=""
                  width="64"
                  height="64"
                  src="/static/img/akali.6ea05c5.png"
                  style="margin: 2%"
                />
                <img
                  data-original="/images/item/sorcerers-shoes-64x.png"
                  alt=""
                  width="64"
                  height="64"
                  src="/static/img/akali.6ea05c5.png"
                  style="margin: 2%"
                />
                <img
                  data-original="/images/item/sorcerers-shoes-64x.png"
                  alt=""
                  width="64"
                  height="64"
                  src="/static/img/akali.6ea05c5.png"
                  style="margin: 2%"
                />
              </div>
              <div
                class="row mt-2"
                style="text-align: center;background-color:dodgerblue; font-size: 2vmax; color: goldenrod; ">
                <div class="col" style="text-align: center">Skill Priority</div>
                </div>
              <div class="row" style="background-color:darkgray">
                <table align="center">
                  <tbody>
                    <tr>
                    <td>
                      <div class="champion-skill-with-label" style="margin: 2%">
                        <img
                          src="https://static.u.gg/assets/lol/riot_static/12.9.1/img/spell/AkaliQ.webp"
                        />
                        <div class="skill-label bottom-center">Q</div>
                      </div>
                    </td>
                    <td>
                      <div class="champion-skill-with-label" style="margin: 2%">
                        <img
                          src="https://static.u.gg/assets/lol/riot_static/12.9.1/img/spell/AkaliE.webp"
                        />
                        <div class="skill-label bottom-center">E</div>
                      </div>
                    </td>
                    <td>
                      <div class="champion-skill-with-label" style="margin: 2%">
                        <img
                          src="https://static.u.gg/assets/lol/riot_static/12.9.1/img/spell/AkaliW.webp"
                        />
                        <div class="skill-label bottom-center">W</div>
                      </div>
                    </td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>
        </div>
      </div>
    </div>
    <!--right-->
    <div class="col my-2">
      <div class="row">
      <div class ="container" style="background-color:goldenrod">
        <div class="row" style="height: 100px">
          <div class="col-7">
            <router-link to="/Login" tag="button" type="btn btn-secondary" class="d-flex align-text-top btn btn-dark my-2  w-100" style="background-color: black; text-align: center" >Login</router-link>
            <router-link to="/Register" tag="button" type="btn btn-secondary" class="d-flex align-text-bottom btn btn-dark w-100 " style="background-color: black">Create Account</router-link>
          </div>
          <div class="col">
            <router-link to="/profile" exact><img class="rounded-circle z-depth-2  rounded-circle float-end my-1" alt="25x25" src="../assets/akali.png"
                data-holder-rendered="true" style="border: 4px solid #000000; display: block; max-width: 60%; height: auto"></router-link>
          </div>
        </div>
      </div>
      </div>
      <div class="row">
      <div class ="container-fluid mt-3" style="background-color:dodgerblue">
        <div class="row-1">
          <div class="col-12" style="max-width: 100%">
            <p style="color: gold; font-size: 1vmax; text-align: center;">Professionals use these builds</p>
          </div>
        </div>
      </div>
      <div class ="container-fluid" style="background-color: gray; height: 100vh" >
          <br>
            <div class="card">
              <img src="../assets/wp1.jpg" class="card-img-top" alt="...">
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
              <img src="../assets/wp2.jpg" class="card-img-top" alt="...">
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
</template>

<style>
.circle h3 {
  vertical-align: middle;
  display: table-cell;
}
</style>

<script>
export default {
  props: {
    championName: null
  },
  created () {
    document.body.style.backgroundColor = '#000000'
  }
}
</script>
