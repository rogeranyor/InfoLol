<template>
  <div id="ChampList">
    <h2> {{ message }} &nbsp;<input type="text" v-model="search" placeholder="search champs" align="right"/></h2>
    <br/>
    <div class="container">
      <div class="row" v-for="champs in chunkedChamps" :key="champs.name" align="center">
        <div class="col" v-for="champ in champs" :key="champ.name">
          <router-link to="/champ" exact><img :src='champ.image' alt='champ.name' height="100px" width="100px"/></router-link>
          <h6>{{champ.name}}</h6>
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
          image: [require('../assets/champion/Aatrox.png')]
        },
        {
          name: 'Ahri',
          image: [require('../assets/champion/Ahri.png')]
        },
        {
          name: 'Akali',
          image: [require('../assets/champion/Akali.png')]
        },
        {
          name: 'Akshan',
          image: [require('../assets/champion/Akshan.png')]
        },
        {
          name: 'Alistar',
          image: [require('../assets/champion/Alistar.png')]
        },
        {
          name: 'Amumu',
          image: [require('../assets/champion/Amumu.png')]
        },
        {
          name: 'Anivia',
          image: [require('../assets/champion/Anivia.png')]
        },
        {
          name: 'Annie',
          image: [require('../assets/champion/Annie.png')]
        },
        {
          name: 'Aphelios',
          image: [require('../assets/champion/Aphelios.png')]
        },
        {
          name: 'Ashe',
          image: [require('../assets/champion/Ashe.png')]
        },
        {
          name: 'AurelionSol',
          image: [require('../assets/champion/AurelionSol.png')]
        },
        {
          name: 'Azir',
          image: [require('../assets/champion/Azir.png')]
        },
        {
          name: 'Bard',
          image: [require('../assets/champion/Bard.png')]
        },
        {
          name: 'Blitzcrank',
          image: [require('../assets/champion/Blitzcrank.png')]
        },
        {
          name: 'Brand',
          image: [require('../assets/champion/Brand.png')]
        },
        {
          name: 'Braum',
          image: [require('../assets/champion/Braum.png')]
        },
        {
          name: 'Caitlyn',
          image: [require('../assets/champion/Caitlyn.png')]
        },
        {
          name: 'Camille',
          image: [require('../assets/champion/Camille.png')]
        },
        {
          name: 'Cassiopeia',
          image: [require('../assets/champion/Cassiopeia.png')]
        },
        {
          name: 'Chogath',
          image: [require('../assets/champion/Chogath.png')]
        },
        {
          name: 'Corki',
          image: [require('../assets/champion/Corki.png')]
        },
        {
          name: 'Darius',
          image: [require('../assets/champion/Darius.png')]
        },
        {
          name: 'Diana',
          image: [require('../assets/champion/Diana.png')]
        },
        {
          name: 'Draven',
          image: [require('../assets/champion/Draven.png')]
        },
        {
          name: 'DrMundo',
          image: [require('../assets/champion/DrMundo.png')]
        },
        {
          name: 'Ekko',
          image: [require('../assets/champion/Ekko.png')]
        },
        {
          name: 'Elise',
          image: [require('../assets/champion/Elise.png')]
        },
        {
          name: 'Evelynn',
          image: [require('../assets/champion/Evelynn.png')]
        },
        {
          name: 'Ezreal',
          image: [require('../assets/champion/Ezreal.png')]
        },
        {
          name: 'Fiddlesticks',
          image: [require('../assets/champion/Fiddlesticks.png')]
        },
        {
          name: 'Fiora',
          image: [require('../assets/champion/Fiora.png')]
        },
        {
          name: 'Fizz',
          image: [require('../assets/champion/Fizz.png')]
        },
        {
          name: 'Galio',
          image: [require('../assets/champion/Galio.png')]
        },
        {
          name: 'Gangplank',
          image: [require('../assets/champion/Gangplank.png')]
        },
        {
          name: 'Garen',
          image: [require('../assets/champion/Garen.png')]
        },
        {
          name: 'Gnar',
          image: [require('../assets/champion/Gnar.png')]
        },
        {
          name: 'Gragas',
          image: [require('../assets/champion/Gragas.png')]
        },
        {
          name: 'Graves',
          image: [require('../assets/champion/Graves.png')]
        },
        {
          name: 'Gwen',
          image: [require('../assets/champion/Gwen.png')]
        },
        {
          name: 'Hecarim',
          image: [require('../assets/champion/Hecarim.png')]
        },
        {
          name: 'Heimerdinger',
          image: [require('../assets/champion/Heimerdinger.png')]
        },
        {
          name: 'Illaoi',
          image: [require('../assets/champion/Illaoi.png')]
        },
        {
          name: 'Irelia',
          image: [require('../assets/champion/Irelia.png')]
        },
        {
          name: 'Ivern',
          image: [require('../assets/champion/Ivern.png')]
        },
        {
          name: 'Janna',
          image: [require('../assets/champion/Janna.png')]
        },
        {
          name: 'JarvanIV',
          image: [require('../assets/champion/JarvanIV.png')]
        },
        {
          name: 'Jax',
          image: [require('../assets/champion/Jax.png')]
        },
        {
          name: 'Jayce',
          image: [require('../assets/champion/Jayce.png')]
        },
        {
          name: 'Jhin',
          image: [require('../assets/champion/Jhin.png')]
        },
        {
          name: 'Jinx',
          image: [require('../assets/champion/Jinx.png')]
        },
        {
          name: 'Kaisa',
          image: [require('../assets/champion/Kaisa.png')]
        },
        {
          name: 'Kalista',
          image: [require('../assets/champion/Kalista.png')]
        },
        {
          name: 'Karma',
          image: [require('../assets/champion/Karma.png')]
        },
        {
          name: 'Karthus',
          image: [require('../assets/champion/Karthus.png')]
        },
        {
          name: 'Kassadin',
          image: [require('../assets/champion/Kassadin.png')]
        },
        {
          name: 'Katarina',
          image: [require('../assets/champion/Katarina.png')]
        },
        {
          name: 'Kayle',
          image: [require('../assets/champion/Kayle.png')]
        },
        {
          name: 'Kayn',
          image: [require('../assets/champion/Kayn.png')]
        },
        {
          name: 'Kennen',
          image: [require('../assets/champion/Kennen.png')]
        },
        {
          name: 'Khazix',
          image: [require('../assets/champion/Khazix.png')]
        },
        {
          name: 'Kindred',
          image: [require('../assets/champion/Kindred.png')]
        },
        {
          name: 'Kled',
          image: [require('../assets/champion/Kled.png')]
        },
        {
          name: 'Kogmaw',
          image: [require('../assets/champion/Kogmaw.png')]
        },
        {
          name: 'Leblanc',
          image: [require('../assets/champion/Leblanc.png')]
        },
        {
          name: 'LeeSin',
          image: [require('../assets/champion/LeeSin.png')]
        },
        {
          name: 'Leona',
          image: [require('../assets/champion/Leona.png')]
        },
        {
          name: 'Lillia',
          image: [require('../assets/champion/Lillia.png')]
        },
        {
          name: 'Lissandra',
          image: [require('../assets/champion/Lissandra.png')]
        },
        {
          name: 'Lucian',
          image: [require('../assets/champion/Lucian.png')]
        },
        {
          name: 'Lulu',
          image: [require('../assets/champion/Lulu.png')]
        },
        {
          name: 'Lux',
          image: [require('../assets/champion/Lux.png')]
        },
        {
          name: 'Malphite',
          image: [require('../assets/champion/Malphite.png')]
        },
        {
          name: 'Malzahar',
          image: [require('../assets/champion/Malzahar.png')]
        },
        {
          name: 'Maokai',
          image: [require('../assets/champion/Maokai.png')]
        },
        {
          name: 'MasterYi',
          image: [require('../assets/champion/MasterYi.png')]
        },
        {
          name: 'MissFortune',
          image: [require('../assets/champion/MissFortune.png')]
        },
        {
          name: 'Wukong',
          image: [require('../assets/champion/MonkeyKing.png')]
        },
        {
          name: 'Mordekaiser',
          image: [require('../assets/champion/Mordekaiser.png')]
        },
        {
          name: 'Morgana',
          image: [require('../assets/champion/Morgana.png')]
        },
        {
          name: 'Nami',
          image: [require('../assets/champion/Nami.png')]
        },
        {
          name: 'Nasus',
          image: [require('../assets/champion/Nasus.png')]
        },
        {
          name: 'Nautilus',
          image: [require('../assets/champion/Nautilus.png')]
        },
        {
          name: 'Neeko',
          image: [require('../assets/champion/Neeko.png')]
        },
        {
          name: 'Nidalee',
          image: [require('../assets/champion/Nidalee.png')]
        },
        {
          name: 'Nocturne',
          image: [require('../assets/champion/Nocturne.png')]
        },
        {
          name: 'Nunu',
          image: [require('../assets/champion/Nunu.png')]
        },
        {
          name: 'Olaf',
          image: [require('../assets/champion/Olaf.png')]
        },
        {
          name: 'Orianna',
          image: [require('../assets/champion/Orianna.png')]
        },
        {
          name: 'Ornn',
          image: [require('../assets/champion/Ornn.png')]
        },
        {
          name: 'Pantheon',
          image: [require('../assets/champion/Pantheon.png')]
        },
        {
          name: 'Poppy',
          image: [require('../assets/champion/Poppy.png')]
        },
        {
          name: 'Pyke',
          image: [require('../assets/champion/Pyke.png')]
        },
        {
          name: 'Qiyana',
          image: [require('../assets/champion/Qiyana.png')]
        },
        {
          name: 'Quinn',
          image: [require('../assets/champion/Quinn.png')]
        },
        {
          name: 'Rakan',
          image: [require('../assets/champion/Rakan.png')]
        },
        {
          name: 'Rammus',
          image: [require('../assets/champion/Rammus.png')]
        },
        {
          name: 'RekSai',
          image: [require('../assets/champion/RekSai.png')]
        },
        {
          name: 'Rell',
          image: [require('../assets/champion/Rell.png')]
        },
        {
          name: 'Renata',
          image: [require('../assets/champion/Renata.png')]
        },
        {
          name: 'Renekton',
          image: [require('../assets/champion/Renekton.png')]
        },
        {
          name: 'Rengar',
          image: [require('../assets/champion/Rengar.png')]
        },
        {
          name: 'Riven',
          image: [require('../assets/champion/Riven.png')]
        },
        {
          name: 'Rumble',
          image: [require('../assets/champion/Rumble.png')]
        },
        {
          name: 'Ryze',
          image: [require('../assets/champion/Ryze.png')]
        },
        {
          name: 'Samira',
          image: [require('../assets/champion/Samira.png')]
        },
        {
          name: 'Sejuani',
          image: [require('../assets/champion/Sejuani.png')]
        },
        {
          name: 'Senna',
          image: [require('../assets/champion/Senna.png')]
        },
        {
          name: 'Seraphine',
          image: [require('../assets/champion/Seraphine.png')]
        },
        {
          name: 'Sett',
          image: [require('../assets/champion/Sett.png')]
        },
        {
          name: 'Shaco',
          image: [require('../assets/champion/Shaco.png')]
        },
        {
          name: 'Shen',
          image: [require('../assets/champion/Shen.png')]
        },
        {
          name: 'Shyvana',
          image: [require('../assets/champion/Shyvana.png')]
        },
        {
          name: 'Singed',
          image: [require('../assets/champion/Singed.png')]
        },
        {
          name: 'Sion',
          image: [require('../assets/champion/Sion.png')]
        },
        {
          name: 'Sivir',
          image: [require('../assets/champion/Sivir.png')]
        },
        {
          name: 'Skarner',
          image: [require('../assets/champion/Skarner.png')]
        },
        {
          name: 'Sona',
          image: [require('../assets/champion/Sona.png')]
        },
        {
          name: 'Soraka',
          image: [require('../assets/champion/Soraka.png')]
        },
        {
          name: 'Swain',
          image: [require('../assets/champion/Swain.png')]
        },
        {
          name: 'Sylas',
          image: [require('../assets/champion/Sylas.png')]
        },
        {
          name: 'Syndra',
          image: [require('../assets/champion/Syndra.png')]
        },
        {
          name: 'TahmKench',
          image: [require('../assets/champion/TahmKench.png')]
        },
        {
          name: 'Taliyah',
          image: [require('../assets/champion/Taliyah.png')]
        },
        {
          name: 'Talon',
          image: [require('../assets/champion/Talon.png')]
        },
        {
          name: 'Taric',
          image: [require('../assets/champion/Taric.png')]
        },
        {
          name: 'Teemo',
          image: [require('../assets/champion/Teemo.png')]
        },
        {
          name: 'Thresh',
          image: [require('../assets/champion/Thresh.png')]
        },
        {
          name: 'Tristana',
          image: [require('../assets/champion/Tristana.png')]
        },
        {
          name: 'Trundle',
          image: [require('../assets/champion/Trundle.png')]
        },
        {
          name: 'Tryndamere',
          image: [require('../assets/champion/Tryndamere.png')]
        },
        {
          name: 'TwistedFate',
          image: [require('../assets/champion/TwistedFate.png')]
        },
        {
          name: 'Twitch',
          image: [require('../assets/champion/Twitch.png')]
        },
        {
          name: 'Udyr',
          image: [require('../assets/champion/Udyr.png')]
        },
        {
          name: 'Urgot',
          image: [require('../assets/champion/Urgot.png')]
        },
        {
          name: 'Varus',
          image: [require('../assets/champion/Varus.png')]
        },
        {
          name: 'Vayne',
          image: [require('../assets/champion/Vayne.png')]
        },
        {
          name: 'Veigar',
          image: [require('../assets/champion/Veigar.png')]
        },
        {
          name: 'Velkoz',
          image: [require('../assets/champion/Velkoz.png')]
        },
        {
          name: 'Vex',
          image: [require('../assets/champion/Vex.png')]
        },
        {
          name: 'Vi',
          image: [require('../assets/champion/Vi.png')]
        },
        {
          name: 'Viego',
          image: [require('../assets/champion/Viego.png')]
        },
        {
          name: 'Viktor',
          image: [require('../assets/champion/Viktor.png')]
        },
        {
          name: 'Vladimir',
          image: [require('../assets/champion/Vladimir.png')]
        },
        {
          name: 'Volibear',
          image: [require('../assets/champion/Volibear.png')]
        },
        {
          name: 'Warwick',
          image: [require('../assets/champion/Warwick.png')]
        },
        {
          name: 'Xayah',
          image: [require('../assets/champion/Xayah.png')]
        },
        {
          name: 'Xerath',
          image: [require('../assets/champion/Xerath.png')]
        },
        {
          name: 'XinZhao',
          image: [require('../assets/champion/XinZhao.png')]
        },
        {
          name: 'Yasuo',
          image: [require('../assets/champion/Yasuo.png')]
        },
        {
          name: 'Yone',
          image: [require('../assets/champion/Yone.png')]
        },
        {
          name: 'Yorick',
          image: [require('../assets/champion/Yorick.png')]
        },
        {
          name: 'Yuumi',
          image: [require('../assets/champion/Yuumi.png')]
        },
        {
          name: 'Zac',
          image: [require('../assets/champion/Zac.png')]
        },
        {
          name: 'Zed',
          image: [require('../assets/champion/Zed.png')]
        },
        {
          name: 'Zeri',
          image: [require('../assets/champion/Zeri.png')]
        },
        {
          name: 'Ziggs',
          image: [require('../assets/champion/Ziggs.png')]
        },
        {
          name: 'Zilean',
          image: [require('../assets/champion/Zilean.png')]
        },
        {
          name: 'Zoe',
          image: [require('../assets/champion/Zoe.png')]
        },
        {
          name: 'Zyra',
          image: [require('../assets/champion/Zyra.png')]
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
