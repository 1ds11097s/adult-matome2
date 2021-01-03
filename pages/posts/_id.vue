<template>
  <v-row align="center" class="flex-column">
    <video id="player" width="90%" playsinline onclick="this.play();"  controls preload="none" :poster="`https://image.mgstage.com/images${item[0].fields.thumbnailUrl}`">
      <source src="https://sample.mgstage.com/sample/shirouto/siro/4381/siro-4381_20201218T161301.mp4">
    </video>
    <v-btn large width="90%" href="https://www.mgstage.com/product/product_detail/SIRO-4384/" ripple>MGS動画で見る</v-btn>
    <v-card class="mt-4" width="90%">
        <v-card class="mt-2" width="95%">
        <v-card-title class="headline">
            まあ良い方？
        </v-card-title>
        <v-card-subtitle>
            顔スタイル悪くないし、気取らない感じの喋り方とかウブめなリアクションとかの素人っぽさもあって良し。顔がアップになるとたまにブツブツが見えたりお尻の黒ずみがちょっと気になったけどそれも素人っぽいと思えば許せなくもない……？
        </v-card-subtitle>
        </v-card>
        <v-card class="mt-2" width="95%">
        <v-card-title class="headline">
            ちっぱい美少女
        </v-card-title>
        <v-card-subtitle>
            仕草も可愛い素人ちゃんですね笑
こんな子がAVデビューしちゃうのかぁ！と思いながらついみとれちゃいます！
ちっぱいがありな人なら絶対ハマる！！！
        </v-card-subtitle>
        </v-card>
        <v-card class="mt-2" width="95%">
        <v-card-title class="headline">
            可愛い
        </v-card-title>
        <v-card-subtitle>
            可愛い！あどけない顔でち○ぽ美味しそうに咥えてる姿がエロい。
バックの時に見えるお尻の日焼け後も良い。
        </v-card-subtitle>
        </v-card>
    </v-card>
  </v-row>
</template>

<script>
import client from '~/plugins/contentful'

export default {
  data () {
    return {
      page: 1,
      pageSize:16,
      displayLists:[],
      length:0,
      dialog0:false
    }
  },
  created: function(){
    if(!this.displayLists.length) {
      //this.displayLists = this.items.slice(0, this.pageSize);
    } 
  },
  mounted: function(){
    //this.length = Math.ceil(this.items.length/this.pageSize);
  },
  methods: {
    getChangeData(pageNumber) {
      //this.displayLists = this.items.slice(this.pageSize*(pageNumber -1), this.pageSize*(pageNumber));
    }
  },
  async asyncData({ params , env }) {
      console.log("ssss",params.id )
    return client
      .getEntries({content_type:env.CTF_BLOG_POST_TYPE_ID})
      .then(entries => {
          console.log("re",entries.items[0].fields.id)
        return {
          item: entries.items.filter(item => item.fields.id == params.id)
        }
      })
      .catch(console.error)
  }
}
</script>