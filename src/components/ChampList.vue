<template>
<div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-9">
        <div class ="container-fluid" style="background-color:goldenrod ">
          <div class="row">
            <div class ="col-9 " style="height: 70px">
              <div class="form-group d-flex my-3">
                <label for="exampleInputEmail1"></label>
                <input type="text" v-model="search" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search a Champion">
              </div>
            </div>
            <div class="col text-right mr-2">
              <!-- class="btn btn-dark w-50 mx-3 "  -->
              <!-- class="btn btn-dark my-3 "-->
              <router-link to="/forum" exact><button type="btn btn-secondary" class="btn btn-dark w-50 mx-3 " style="background-color: black" data-toggle="collapse" aria-expanded="false">Forum</button></router-link>
              <button type="btn btn-secondary" class="btn btn-dark my-3 center-block w-25" style="background-color: black" data-toggle="collapse" aria-expanded="false">EloBoost</button>
            </div>
          </div>
        </div>
        <div class ="container-fluid mt-2 " style="background-color:dodgerblue; height: 80px">
          <div class="row">
            <div class="col my-4">
              <p class=" float-start align-self-center" style="color: gold; font-size: 2vmax">List of Champions</p>
            </div>
            <div class="col">
              <div class="dropdown-dark my-3 text-right">
                <b-dropdown id="dropdown-1" text="Sort by" class="m-md-2" variant="dark">
                  <b-dropdown-item @click="champs.reverse">A-Z</b-dropdown-item>
                  <b-dropdown-item>Pickrate</b-dropdown-item>
                  <b-dropdown-item>Winrate</b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
          </div>
        </div>

        <div class ="container-fluid align-items-center" style="background-color: gray;">
        <br>
          <div id="ChampList">
            <div class="container-fluid">
              <div class="row" v-for="champs in chunkedChamps" :key="champs.name" align="center">
                <div class="col" v-for="champ in champs" :key="champ.name">
                  <router-link to="/champ" exact><img :src="require('../assets/champion/' + champ.image)" alt='champ.name' height="100px" width="100px"/></router-link>
                  <h6>{{champ.name}}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3 my-3">
        <div class ="container" style="background-color:goldenrod">
          <div class="row" style="height: 100px">
            <div class="col-7">
              <router-link to="/Login" tag="button" type="btn btn-secondary" class="d-flex align-text-top btn btn-dark my-2  w-100" style="background-color: black; text-align: center" >Login</router-link>
              <router-link to="/Register" tag="button" type="btn btn-secondary" class="d-flex align-text-bottom btn btn-dark w-100 " style="background-color: black">Create Account</router-link>
            </div>
            <div class="col">
              <router-link to="/Profile" exact><img class="rounded-circle z-depth-2  rounded-circle float-right my-1" alt="25x25" src="../assets/akali.png"
                   data-holder-rendered="true" style="border: 4px solid #000000; display: block; max-width: 60%; height: auto"></router-link>
            </div>
          </div>
        </div>
        <div class ="container-fluid" style="background-color: gray; height: 100vh" >
            <br>
            <div class="card">
              <div class="card-body">
                ¡Buildcrash sube a la división SILVER 1!
              </div>
            </div>
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
  methods: {
    getChamps () {
      let keys = Object.keys(this.json_champs.data)
      for (let i = 0; i < keys.length; i++) {
        this.champs.push({
          name: this.json_champs.data[keys[i]].id,
          image: this.json_champs.data[keys[i]].image.full
        })
      }
    }
  },
  computed: {
    champsFiltered () {
      return this.champs.filter((pr) => {
        return pr.name.toLowerCase().includes(this.search.toLowerCase())
      })
    },
    chunkedChamps () {
      return lodash.chunk(this.champsFiltered, 8)
    }
  },
  created () {
    document.body.style.backgroundColor = '#000000'
    this.getChamps()
  }
}
</script>
