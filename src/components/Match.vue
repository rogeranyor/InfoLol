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
            <div class="col text-end">
              <!-- class="btn btn-dark w-50 mx-3 "  -->
              <!-- class="btn btn-dark my-3 "-->
              <button type="btn btn-secondary" class="btn btn-dark w-50 mx-3 " style="background-color: black" data-toggle="collapse" aria-expanded="false">Forum</button>
              <button type="btn btn-secondary" class="btn btn-dark my-3 " style="background-color: black; width: 95px" data-toggle="collapse" aria-expanded="false">EloBoost</button>
            </div>
          </div>
        </div>
        <div class ="container-fluid mt-2 " style="background-color:dodgerblue; height: 80px">
          <div class="row">
            <div class="col my-4">
              <p class=" float-start align-self-center" style="color: gold; font-size: 2vmax">Match Info</p>
            </div>
          </div>
        </div>

        <div class ="container-fluid" style="background-color: gray;">
          <br/>
          <div align="left">
              <span class="queue-type"><strong>Clasificatoria Solo 5vs5</strong> | </span>
              <span class="map">Grieta del Invocador | </span>
              <span class="timer" style="position: relative;">00:00</span>
          </div>
          <br/>
          <div id="Match" class="row wrap">
            <table class="table">
              <thead align="left">
                <tr>
                  <th class="team-name" colspan="2" scope="col" style="color:blue">Blue Team</th>
                  <th scope="col">Rank</th>
                  <th scope="col">Winrate</th>
                  <th scope="col">Champion WR</th>
                  <th scope="col">Last Season</th>
                  <th scope="col">Ban</th>
                </tr>
              </thead>
              <tbody align="left" >
                <tr v-for="player in players.slice(0, 5)" :key="player.name">
                  <td>
                    <b-img :src="require('../assets/champion/' + player.champ + '.png')" alt='player.champ' rounded="circle" height="32px" width="32px"/>
                    &nbsp;
                  </td>
                  <td>
                    <router-link style="text-decoration: none; color: inherit;" to="/"><strong>{{ player.name }}</strong></router-link>
                  </td>
                  <td>
                    <b-img :src="require('../assets/emblems/Emblem_' + player.rank + '.png')" alt='champ.name' rounded="circle" height="32px" width="32px"/>
                    {{ player.lp }}
                  </td>
                  <td>
                    <span>{{ player.winrate }}% ({{ player.games }} games)</span>
                    <b-progress v-if="(player.winrate) >= 60" :value="player.winrate" variant="success" class="w-50 mb-3"></b-progress>
                    <b-progress v-else-if="(player.winrate) < 60 && (player.winrate) >= 50" :value="player.winrate" variant="primary" class="w-50 mb-3"></b-progress>
                    <b-progress v-else-if="(player.winrate) < 50 && (player.winrate) >= 30" :value="player.winrate" variant="warning" class="w-50 mb-3"></b-progress>
                    <b-progress v-else :value="player.winrate" variant="danger" class="w-50 mb-3"></b-progress>
                  </td>
                  <td>
                    {{ player.champ_wr }}% <br/>({{ player.champ_played }} games)
                  </td>
                  <td>
                    <b-img :src="require('../assets/emblems/Emblem_' + player.last_season + '.png')" alt='champ.name' rounded="circle" height="32px" width="32px"/>
                  </td>
                  <td>
                    <b-img :src="require('../assets/champion/' + player.ban + '.png')" alt='player.ban' rounded="circle" height="32px" width="32px"/>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="table">
              <thead align="left">
                <tr>
                  <th class="team-name" colspan="2" scope="col" style="color:red">Red Team</th>
                  <th scope="col">Rank</th>
                  <th scope="col">Winrate</th>
                  <th scope="col">Champion WR</th>
                  <th scope="col">Last Season</th>
                  <th scope="col">Ban</th>
                </tr>
              </thead>
              <tbody align="left" >
                <tr v-for="player in players.slice(5, 10)" :key="player.name">
                  <td>
                    <b-img :src="require('../assets/champion/' + player.champ + '.png')" alt='player.champ' rounded="circle" height="32px" width="32px"/>
                    &nbsp;
                  </td>
                  <td>
                    <router-link style="text-decoration: none; color: inherit;" to="/"><strong>{{ player.name }}</strong></router-link>
                  </td>
                  <td>
                    <b-img :src="require('../assets/emblems/Emblem_' + player.rank + '.png')" alt='champ.name' rounded="circle" height="32px" width="32px"/>
                    {{ player.lp }}
                  </td>
                  <td>
                    <span>{{ player.winrate }}% ({{ player.games }} games)</span>
                    <b-progress v-if="(player.winrate) >= 60" :value="player.winrate" variant="success" class="w-50 mb-3"></b-progress>
                    <b-progress v-else-if="(player.winrate) < 60 && (player.winrate) >= 50" :value="player.winrate" variant="primary" class="w-50 mb-3"></b-progress>
                    <b-progress v-else-if="(player.winrate) < 50 && (player.winrate) >= 30" :value="player.winrate" variant="warning" class="w-50 mb-3"></b-progress>
                    <b-progress v-else :value="player.winrate" variant="danger" class="w-50 mb-3"></b-progress>
                  </td>
                  <td>
                    {{ player.champ_wr }}% <br/>({{ player.champ_played }} games)
                  </td>
                  <td>
                    <b-img :src="require('../assets/emblems/Emblem_' + player.last_season + '.png')" alt='champ.name' rounded="circle" height="32px" width="32px"/>
                  </td>
                  <td>
                    <b-img :src="require('../assets/champion/' + player.ban + '.png')" alt='player.ban' rounded="circle" height="32px" width="32px"/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-md-3">
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
import json from '../assets/champion.json'
import json2 from '../assets/json_players.json'
export default {
  data () {
    return {
      json_champs: json,
      json_players: json2,
      champs: [],
      bars: [
        { variant: 'success' },
        { variant: 'primary' },
        { variant: 'warning' },
        { variant: 'danger' }
      ],
      players: []
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
    },
    getPlayers () {
      let keys = Object.keys(this.json_players)
      for (let i = 0; i < keys.length; i++) {
        this.players.push({
          name: this.json_players[keys[i]].name,
          rank: this.json_players[keys[i]].rank,
          lp: this.json_players[keys[i]].lp,
          winrate: this.json_players[keys[i]].winrate,
          games: this.json_players[keys[i]].games,
          champ_wr: this.json_players[keys[i]].champ_wr,
          champ_played: this.json_players[keys[i]].champ_played,
          last_season: this.json_players[keys[i]].last_season,
          ban: this.json_players[keys[i]].ban,
          champ: this.json_players[keys[i]].champ
        })
      }
    }
  },
  created () {
    document.body.style.backgroundColor = '#000000'
    this.getChamps()
    this.getPlayers()
  }
}
</script>
