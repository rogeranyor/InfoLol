<template>
  <div class="container" style="background-color: dodgerblue; width: 100%; min-height: 100vh;">
    <div class="row">
      <div class="col" style="margin: 2%" align="center">
        <h1
          style="color: gold" >
          Forum
        </h1>
      </div>
      <div class="col">
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
      style="width: 100%;background-color: darkgrey;"
      id="carttable">
      <thead>
        <tr style="text-align:center">
          <th style="color: black">Photo</th>
          <th style="color: black">Rank</th>
          <th style="color: black">Position</th>
          <th style="color: black">Winrate</th>
        </tr>
      </thead>
      <thead>
        <tr v-for="user in users" :key="user.id" style="text-align:center;font-weight: bold;">
          <td><img style="border-radius: 50%;" :src="require('../assets/users/' + user.id+'.png')"  height="3%" width="40px" /></td>
          <td><img :src="require('../assets/emblems/Emblem_' + user.rank+'.png')" height="3%" width="40px"/></td>
          <td><span>{{user.position}} </span><img :src="require('../assets/positions/' + user.position+'.png')" height="3%" width="40px"/></td>
          <td>{{ user.winrate }} %</td>
        </tr>
      </thead>
    </table>
  </div>
</template>
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
    this.getUsers()
  }
}
</script>
