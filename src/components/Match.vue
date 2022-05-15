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
              <a>
                href="http://localhost:8080/#/forum"
                <button type="btn btn-secondary" class="btn btn-dark w-50 mx-3 " style="background-color: black" data-toggle="collapse" aria-expanded="false">Forum</button>
              </a>
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
export default {
  data () {
    return {
      json_champs: json,
      champs: [],
      bars: [
        { variant: 'success' },
        { variant: 'primary' },
        { variant: 'warning' },
        { variant: 'danger' }
      ],
      players: [
        {
          'name': 'NAAYIL',
          'rank': 'Bronze',
          'lp': 'Bronze 1(0LP)',
          'winrate': '51',
          'games': '505',
          'champ_wr': '20',
          'champ_played': 5,
          'last_season': 'Iron',
          'ban': 'Ashe',
          'champ': 'Aatrox'
        },
        {
          'name': 'KobeeeeBryant',
          'rank': 'Challenger',
          'lp': 'Challenger (899LP)',
          'winrate': '60',
          'games': '63',
          'champ_wr': '60',
          'champ_played': 50,
          'last_season': 'Grandmaster',
          'ban': 'Ahri',
          'champ': 'Viego'
        },
        {
          'name': 'VININE Lyzen',
          'rank': 'Diamond',
          'lp': 'Diamond 4(0LP)',
          'winrate': '48',
          'games': '590',
          'champ_wr': '29',
          'champ_played': 15,
          'last_season': 'Platinum',
          'ban': 'Zac',
          'champ': 'Ahri'
        },
        {
          'name': 'Katemi',
          'rank': 'Gold',
          'lp': 'Gold 2(33LP)',
          'winrate': '70',
          'games': '95',
          'champ_wr': '50',
          'champ_played': 30,
          'last_season': 'Gold',
          'ban': 'Kayn',
          'champ': 'Aphelios'
        },
        {
          'name': 'me last pick ok',
          'rank': 'Grandmaster',
          'lp': 'Grandmaster(603LP)',
          'winrate': '55',
          'games': '292',
          'champ_wr': '45',
          'champ_played': 52,
          'last_season': 'Master',
          'ban': 'TahmKench',
          'champ': 'Pyke'
        },
        {
          'name': 'Rhoku',
          'rank': 'Iron',
          'lp': 'Iron 4(0LP)',
          'winrate': '49',
          'games': '41',
          'champ_wr': '70',
          'champ_played': 31,
          'last_season': 'Iron',
          'ban': 'Velkoz',
          'champ': 'Garen'
        },
        {
          'name': 'Summertime vibe',
          'rank': 'Master',
          'lp': 'Master(200LP)',
          'winrate': '30',
          'games': '3',
          'champ_wr': '0',
          'champ_played': 1,
          'last_season': 'Grandmaster',
          'ban': 'AurelionSol',
          'champ': 'Diana'
        },
        {
          'name': 'Salaheddine',
          'rank': 'Platinum',
          'lp': 'Platinum 3(13LP)',
          'winrate': '15',
          'games': '70',
          'champ_wr': '35',
          'champ_played': 44,
          'last_season': 'Gold',
          'ban': 'Twitch',
          'champ': 'Annie'
        },
        {
          'name': 'menace11',
          'rank': 'Silver',
          'lp': 'Silver 3(99LP)',
          'winrate': '90',
          'games': '55',
          'champ_wr': '20',
          'champ_played': 23,
          'last_season': 'Gold',
          'ban': 'Nidalee',
          'champ': 'Zeri'
        },
        {
          'name': 'Huskigodx',
          'rank': 'Platinum',
          'lp': 'Platinum 4(0LP)',
          'winrate': '80',
          'games': '100',
          'champ_wr': '65',
          'champ_played': 18,
          'last_season': 'Silver',
          'ban': 'Akali',
          'champ': 'Lux'
        }
      ]
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
    getColBar (winrate) {
      return 0
    }
  },
  created () {
    document.body.style.backgroundColor = '#000000'
    this.getChamps()
  }
}
</script>
