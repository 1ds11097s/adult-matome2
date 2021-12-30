<template>
  <div v-if="displayLists.length == 0"><v-skeleton-loader type="table-row-divider@6" /></div>
  <v-row v-else justify="center" no-gutters>
    <v-col class="mb-1 pr-1" :xs="12" :sm="12" :md="3" :lg="3" v-for="(item, i) in displayLists" :key="i">
      <v-card hover ripple max-width="400px" class="ma-auto" :href="`${item.fields.productUrl}`" target="_blank">
        <v-img max-width="400px" max-height="200px" :src="`${item.fields.thumbnailUrl}`"></v-img>
        <p class="title-font">
          <span class="title-font-hidden">{{item.fields.title}}</span>
        </p>
        <p class="update-date">更新日：{{$moment(item.sys.updatedAt).format('YYYY年MM月DD日')}}</p>
      </v-card>
    </v-col>
    <v-col cols="12">
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="length"
          @input="getChangeData"
        ></v-pagination>
      </div>
    </v-col>
  </v-row> 
</template>

<script>
import client from '~/plugins/contentful'

export default {
  head() {
    return {
      title: (this.page == 1) ? this.title + '- Top' : this.title + '- ' + this.page + 'ページ目'
    }
  },
  data () {
    return {
      title: 'ガチ痙攣イキする動画だけを集めてAVレビュー',
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
  margin-bottom:0!important;

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
.update-date {
  text-align: center;
  background-color: #fb8c00;
  font-weight: bold;
  font-size: 14px;
  margin-bottom:0!important;
}
</style>