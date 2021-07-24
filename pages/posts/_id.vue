<template>
  <v-row align="center" class="flex-column">

    <!-- 作品タイトル -->
    <h2 class="px-6">{{item[0].fields.title}}</h2>

    <!-- メイン画像 -->
    <img :src="`${item[0].fields.image01Url}`" width="90%"></img>

    <!-- リンクボタン -->
    <template v-if="item[0].fields.mediaType=='mgs'" >
      <v-btn large class="headline font-weight-bold" color="#6666FF" height="70px" width="90%" :href="`${item[0].fields.productUrl}`" ripple target="_blank">MGS動画で見る</v-btn>
    </template>  
    <template v-if="item[0].fields.mediaType=='fc2'">  
      <v-btn large class="headline font-weight-bold" color="#6666FF" height="70px" width="90%" :href="`${item[0].fields.productUrl}`" ripple target="_blank">FC2動画で見る</v-btn>
    </template>
    <template v-if="item[0].fields.mediaType=='fanza'">  
      <v-btn large class="headline font-weight-bold" color="#ff0033" height="70px" width="90%" :href="`${item[0].fields.productUrl}`" ripple target="_blank">FANZAで見る</v-btn>
    </template>

    <!-- 作品紹介 -->
    <div class="px-3" v-html="`${item[0].fields.contentDescription}`"></div>

    <!-- リンクボタン -->
    <template v-if="item[0].fields.mediaType=='mgs'" >
      <v-btn large class="headline font-weight-bold" color="#6666FF" height="70px" width="90%" :href="`${item[0].fields.productUrl}`" ripple target="_blank">MGS動画で見る</v-btn>
    </template>  
    <template v-if="item[0].fields.mediaType=='fc2'">  
      <v-btn large class="headline font-weight-bold" color="#6666FF" height="70px" width="90%" :href="`${item[0].fields.productUrl}`" ripple target="_blank">FC2動画で見る</v-btn>
    </template>
    <template v-if="item[0].fields.mediaType=='fanza'">  
      <v-btn large class="headline font-weight-bold" color="#ff0033" height="70px" width="90%" :href="`${item[0].fields.productUrl}`" ripple target="_blank">FANZAで見る</v-btn>
    </template>

    <!-- サブ画像 -->
    <template v-if="item[0].fields.image02Url">
      <img :src="`${item[0].fields.image02Url}`" width="90%"></img>
    </template>
    <template v-if="item[0].fields.image03Url">
      <img :src="`${item[0].fields.image03Url}`" width="90%"></img>
    </template>
    <template v-if="item[0].fields.image04Url">
      <img :src="`${item[0].fields.image04Url}`" width="90%"></img>
    </template>
    <template v-if="item[0].fields.image05Url">
      <img :src="`${item[0].fields.image05Url}`" width="90%"></img>
    </template>
    <template v-if="item[0].fields.image06Url">
      <img :src="`${item[0].fields.image06Url}`" width="90%"></img>
    </template>
    <template v-if="item[0].fields.image07Url">
      <img :src="`${item[0].fields.image07Url}`" width="90%"></img>
    </template>
    <template v-if="item[0].fields.image08Url">
      <img :src="`${item[0].fields.image08Url}`" width="90%"></img>
    </template>
    <template v-if="item[0].fields.image09Url">
      <img :src="`${item[0].fields.image09Url}`" width="90%"></img>
    </template>
    <template v-if="item[0].fields.image10Url">
      <img :src="`${item[0].fields.image10Url}`" width="90%"></img>
    </template>

    <!-- サンプルムービー -->
    <h4 class="mt-3">作品名：{{item[0].fields.productTitle}}</h4>
    <span>サンプル動画と本編へのリンクは以下になります↓</span>
    <template v-if="item[0].fields.mediaType=='mgs' || item[0].fields.mediaType=='fc2'" >
      <video id="player" width="90%" class="mt-4" playsinline onclick="this.play();"  controls preload="none" :poster="`${item[0].fields.thumbnailUrl}`">
        <source :src="`${item[0].fields.sampleMovieUrl}`">
      </video>
    </template>
    <template v-if="item[0].fields.mediaType=='fanza'">
      <div v-html="`${item[0].fields.sampleMovieUrl}`"></div>
    </template>

    <!-- リンクボタン -->
    <template v-if="item[0].fields.mediaType=='mgs'" >
      <v-btn large class="headline font-weight-bold" color="#6666FF" height="70px" width="90%" :href="`${item[0].fields.productUrl}`" ripple target="_blank">MGS動画で見る</v-btn>
    </template>  
    <template v-if="item[0].fields.mediaType=='fc2'">  
      <v-btn large class="headline font-weight-bold" color="#6666FF" height="70px" width="90%" :href="`${item[0].fields.productUrl}`" ripple target="_blank">FC2動画で見る</v-btn>
    </template>
    <template v-if="item[0].fields.mediaType=='fanza'">  
      <v-btn large class="headline font-weight-bold" color="#ff0033" height="70px" width="90%" :href="`${item[0].fields.productUrl}`" ripple target="_blank">FANZAで見る</v-btn>
    </template>
    <!-- <v-card class="mt-4" width="90%" color="#FF99CC">
      <v-card v-if="item[0].fields.reviewTitle1" class="ma-auto my-2" width="95%">
        <v-card-title class="title">{{item[0].fields.reviewTitle1}}</v-card-title>
        <v-card-text>{{item[0].fields.reviewContent1}}</v-card-text>
      </v-card>
      <v-card v-if="item[0].fields.reviewTitle2" class="ma-auto mb-2" width="95%">
        <v-card-title class="title">{{item[0].fields.reviewTitle2}}</v-card-title>
        <v-card-subtitle>{{item[0].fields.reviewContent2}}</v-card-subtitle>
      </v-card>
      <v-card v-if="item[0].fields.reviewTitle3" class="ma-auto mb-2" width="95%">
        <v-card-title class="title">{{item[0].fields.reviewTitle3}}</v-card-title>
        <v-card-subtitle>{{item[0].fields.reviewContent3}}</v-card-subtitle>
      </v-card>
    </v-card> -->
  </v-row>
</template>

<script>
import client from '~/plugins/contentful'

export default {
  head() {
    return {
      title: this.item[0].fields.title + this.title,
      meta: [
        { hid: 'description',
          name: 'description', 
          content: this.item[0].fields.title + ',' + this.item[0].fields.productTitle + ',' + this.item[0].fields.contentDescription.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'')
        }
      ]
    }
  },
  data () {
    return {
      title: ' - ガチ痙攣イキする動画だけを集めてみました。',
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
    return client
      .getEntries({content_type:env.CTF_BLOG_POST_TYPE_ID})
      .then(entries => {
        return {
          item: entries.items.filter(item => item.fields.id == params.id)
        }
      })
      .catch(console.error)
  }
}
</script>