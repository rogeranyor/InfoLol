<template>
  <div class="container" style="background-color: #7A7265; width: 100%; min-height: 100vh; max-width: initial;">
    <div class="row" style="background-color: #1A659E">
      <div class="col-10" style="margin: 2%" align="center">
        <a style="font-size: 2vmax; color: #ffe7d4">Forum</a>
      </div>
      <div class="col-1">
        <div class="dropdown my-3 float-end">
          <b-dropdown
            id="dropdown-1"
            text="Sort by"
            variant="warning"
            class="m-4"
          >
            <b-dropdown-item @click="sort_winrate">Winrate</b-dropdown-item>
            <b-dropdown-item>Position</b-dropdown-item>
            <b-dropdown-item>Rank</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </div>
    <table
      class="table"
      style="width: 100%; background-color: #7A7265;"
      id="carttable">
      <thead>
        <tr style="text-align:center;  background-color: #b1a797;">
          <th style="color: black">Photo</th>
          <th style="color: black">Rank</th>
          <th style="color: black">Position</th>
          <th style="color: black">Winrate</th>
        </tr>
      </thead>
      <thead>
        <tr v-for="user in users" :key="user.id" style="text-align:center;font-weight: bold;">
          <td><router-link to="/Profile" exact><img alt="User icon" style="border-radius: 50%;" :src="require('../assets/users/' + user.id+'.png')"  height="3%" width="40px" /></router-link></td>
          <td><img alt="Rank emblem" :src="require('../assets/emblems/Emblem_' + user.rank+'.png')" height="3%" width="40px"/></td>
          <td><span>{{user.position}} </span><img alt="Position icon" :src="require('../assets/positions/' + user.position+'.png')" height="3%" width="40px"/></td>
          <td>{{ user.winrate }} %</td>
        </tr>
      </thead>
    </table>
  </div>
</template>
<style>
table thead tr:nth-child(even){
    background: #b1a797;
}
:root {
    --maincolor: #1A659E;
    --secondarycolor: #004E89;
    --backgroundcolor: #EFEFD0;
    --forthcolor: #7A7265;
    --fifthcolor: #ffe7d4;
}
</style>
<script>
import json from '../assets/json_forum.json'

export default {
  data () {
    return {
      forum: json,
      users: []
    }
  },
  methods: {
    getUsers () {
      let keys = Object.keys(this.forum)
      for (let i = 0; i < keys.length; i++) {
        this.users.push({
          id: keys[i],
          rank: this.forum[keys[i]].rank,
          position: this.forum[keys[i]].position,
          winrate: this.forum[keys[i]].winrate
        })
      }
    },
    sort_winrate () {
      var items = Object.keys(this.forum).map(
        (key) => { return [key, this.forum[key]] })
      items.sort(
        (first, second) => { return second[1]['winrate'] - first[1]['winrate'] })
      Object.assign(this.users, items)
      this.users = []
      for (let i = 0; i < items.length; i++) {
        this.users.push({
          id: items[i][0],
          rank: items[i][1].rank,
          position: items[i][1].position,
          winrate: items[i][1].winrate
        })
      }
    }
  },
  created () {
    document.body.style.backgroundColor = '#EFEFD0'
    this.getUsers()
  }
}
</script>
