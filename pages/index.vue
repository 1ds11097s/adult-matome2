<template>
  <v-row justify="center">
    <v-col :xs="12" :sm="12" :md="3" :lg="3" v-for="(item, i) in displayLists" :key="i">
      <v-card hover ripple max-width="400px" :to="{ path: `/posts/${item.fields.id}`}">
            <v-img max-width="400px" max-height="200px" :src="`https://image.mgstage.com/images${item.fields.thumbnailUrl}`">
            </v-img>
            <p class="title-font">
              <span class="title-font-hidden">
                {{item.fields.title}}
              </span>
            </p>
          </v-card>
      <!-- <v-dialog
        :v-model="`dialog${i}`"
        
      >
        <template v-slot:activator="{ on }">
          <v-card hover ripple v-on="on" max-width="400px" :to="`/posts/${item.fields.id}`">
            <v-img max-width="400px" max-height="200px" :src="`https://image.mgstage.com/images${item.fields.thumbnailUrl}`">
            </v-img>
            <p class="title-font">
              <span class="title-font-hidden">
                {{item.fields.title}}
              </span>
            </p>
          </v-card>
        </template>
        <v-row justify="start" style="background-color:#fff;width:90%;position:relative">
          <video id="player" playsinline onclick="this.play();" width="80%" controls preload="none" :poster="`https://image.mgstage.com/images${item.fields.thumbnailUrl}`">
            <source src="https://sample.mgstage.com/sample/shirouto/siro/4381/siro-4381_20201218T161301.mp4">
          </video>
          <div style="height:50px;width:100%;background-color:red;position:absolute">aaaaa</div>
        </v-row>
      </v-dialog> -->
    </v-col>
    
    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="length"
        @input="getChangeData"
      ></v-pagination>
    </div>     
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
      this.displayLists = this.items.slice(0, this.pageSize);
    } 
  },
  mounted: function(){
    this.length = Math.ceil(this.items.length/this.pageSize);
  },
  methods: {
    getChangeData(pageNumber) {
      this.displayLists = this.items.slice(this.pageSize*(pageNumber -1), this.pageSize*(pageNumber));
    }
  },
  async asyncData({ env }) {
    return client
      .getEntries({content_type:env.CTF_BLOG_POST_TYPE_ID})
      .then(entries => {
        return {
          items: entries.items
        }
      })
      .catch(console.error)
  }
}
</script>

<style>
.v-dialog {
  background-color:#fff;
}
.title-font {
  background: #eee;
  overflow: hidden;
  width: 100%;
  font-weight:bold;
  font-size:14px;
  padding: 0 10px;

}
.title-font-hidden{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 30px;
}
</style>