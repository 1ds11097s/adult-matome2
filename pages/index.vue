<template>
  <div v-if="displayLists.length == 0"><v-skeleton-loader type="table-row-divider@6" /></div>
  <v-row v-else justify="center">
    <v-col :xs="12" :sm="12" :md="3" :lg="3" v-for="(item, i) in displayLists" :key="i">
      <v-card hover ripple max-width="400px" :to="{ path: `/posts/${item.fields.id}`}">
        <v-img max-width="400px" max-height="200px" :src="`${item.fields.thumbnailUrl}`"></v-img>
        <p class="title-font">
          <span class="title-font-hidden">{{item.fields.title}}</span>
        </p>
      </v-card>
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
      length:0
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
      this.$router.push(`?page=${pageNumber}`);
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