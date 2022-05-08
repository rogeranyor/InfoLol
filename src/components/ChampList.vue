<template>
  <div id="ChampList">
    <h2> {{ message }} &nbsp;<input type="text" v-model="search" placeholder="search champs"/></h2>

    <div class="col-sm-12 no-padding">
      <div v-if="this.champs.length > 0">
        <div v-for="champs in chunkedChamps" :key="champs.name">
          <div class="row">
            <div class="col-sm-4" v-for="champ in champs" :key="champ.name">
              <router-link to="/champ" exact><img :src='champ.image' height="100px" width="125px" class='img-fluid' :key='imageIndex' /></router-link>
              <h4>{{champ.name}}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lodash from 'lodash'
export default {
  data () {
    return {
      message: 'List of Champion Icons',
      search: '',
      champs: [
        {
          name: 'Aatrox',
          image: [require('../assets/aatrox.jpg')]
        },
        {
          name: 'Akali',
          image: [require('../assets/akali.jpg')]
        },
        {
          name: 'Diana',
          image: [require('../assets/diana.jpg')]
        },
        {
          name: 'Rengar',
          image: [require('../assets/rengar.jpg')]
        },
        {
          name: 'Jhin',
          image: [require('../assets/jhin.jpg')]
        }
      ]
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
  }
}
</script>
