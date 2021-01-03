<template>
  <v-row align="center" class="flex-column">
    <video id="player" width="90%" class="mt-4" playsinline onclick="this.play();"  controls preload="none" :poster="`${item[0].fields.thumbnailUrl}`">
      <source :src="`${item[0].fields.sampleMovieUrl}`">
    </video>
    <v-btn large class="headline font-weight-bold" color="#6666FF" height="70px" width="90%" :href="`${item[0].fields.productUrl}`" ripple target="_blank">MGS動画で見る</v-btn>
    <v-card class="mt-4" width="90%" color="#FF99CC">
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