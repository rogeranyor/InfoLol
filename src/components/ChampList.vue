<template>
<div>
  <div class ="container-fluid mt-2 " style="background-color:#1A659E; height: 80px">
    <div class="row">
      <div class="col my-4">
        <p class=" float-start align-self-center" style="color: #FF6B35; font-size: 2vmax">List of Champions</p>
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
  <div class ="container-fluid align-items-center" style="background-color: #7A7265;">
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
</template>

<style>
:root {
    --maincolor: #1A659E;
    --secondarycolor: #004E89;
    --backgroundcolor: #EFEFD0;
    --forthcolor: #7A7265;
    --fifthcolor: #FF6B35;
}
</style>
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
    document.body.style.backgroundColor = '#EFEFD0'
    this.getChamps()
  }
}
</script>
