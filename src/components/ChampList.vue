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
      <div class="col-md-9">Main content
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
              <router-link to="/forum" exact><button type="btn btn-secondary" class="btn btn-dark w-50 mx-3 " style="background-color: black" data-toggle="collapse" aria-expanded="false">Forum</button></router-link>
              <button type="btn btn-secondary" class="btn btn-dark my-3 " style="background-color: black; width: 95px" data-toggle="collapse" aria-expanded="false">EloBoost</button>
            </div>
          </div>
        </div>
        <div class ="container-fluid mt-2 " style="background-color:dodgerblue; height: 80px">
          <div class="row">
            <div class="col my-4">
              <p class=" float-start align-self-center" style="color: gold; font-size: 2vmax">List of Champions</p>
            </div>
            <div class="col">
              <div class="dropdown my-3 float-end">
                <b-dropdown id="dropdown-1" text="Sort by" class="m-md-2" variant="black">
                  <b-dropdown-item @click="champs.reverse">A-Z</b-dropdown-item>
                  <b-dropdown-item>Pickrate</b-dropdown-item>
                  <b-dropdown-item>Winrate</b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
          </div>
        </div>

        <div class ="container-fluid" style="background-color: gray;">
          <div id="ChampList">
            <br/>
            <div class="container">
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
      <div class="col-md-3">right
        <div class ="container" style="background-color:goldenrod">
          <div class="row" style="height: 100px">
            <div class="col-7">
              <button type="btn btn-secondary" class="d-flex align-text-top btn btn-dark my-2  w-100" style="background-color: black; text-align: center" >Login</button>
              <button type="btn btn-secondary" class="d-flex align-text-bottom btn btn-dark w-100 " style="background-color: black">Create Account</button>
            </div>

            <div class="col">
              <img class="rounded-circle z-depth-2  rounded-circle float-end my-1" alt="25x25" src="../assets/akali.png"
                   data-holder-rendered="true" style="border: 4px solid #000000; display: block; max-width: 60%; height: auto">
            </div>
          </div>
        </div>
        <div class ="container-fluid" style="background-color: gray; height: 100vh" >
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
