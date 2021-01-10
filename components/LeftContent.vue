<template>
  <v-row justify="center" style="border: solid 1px #000;">
    <v-chip
      class="ma-2"
      color="warning"
      label
    >
      殿堂入り痙攣動画
    </v-chip>  
    <v-col cols="12" v-for="(item, i) in recommendData" :key="i" class="pb-0">
      <v-card tile flat hover ripple :href="`${item.productUrl}`" target="_blank">
        <v-img  :src="`${item.thumbnailUrl}`"></v-img>
        <p class="left-title-font white">
          <span class="title-font-hidden">{{item.title}}</span>
        </p>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

export default {
  data () {
    return {
      recommendData:
      [
        {
          productUrl: "https://www.mgstage.com/product/product_detail/300MIUM-084/?aff=WSZZLC7M7DFYBYAHB6Q6UQTBDM",
          title: "超リッチな家で育った自他共に認める高学歴のボンボン美人女子大生！エリートが集う青○コミュニティ主催のコンパに連日連夜参加し、ゆきずった数は3桁以上？！浮かれた学園性活を満喫し過ぎる上っ面真面目な彼女の本性は、テントの中でガクガク痙攣しながら大量の潮を撒き散らしてイキ狂う真性ドMの本物淫乱娘！！の巻。：私立パコパコ女子大学 女子大生とトラックテントで即ハメ旅 Report.005",
          thumbnailUrl: "https://image.mgstage.com/images/prestigepremium/300mium/084/pb_e_300mium-084.jpg" 
        },
        {
          productUrl: "https://www.mgstage.com/product/product_detail/261ARA-435/?aff=WSZZLC7M7DFYBYAHB6Q6UQTBDM",
          title: "【絶頂的美少女】22歳【エロ凄いカラダ】りかちゃん参上！某W大学に通う彼女の応募理由は『経済的も身体的にピンチなんです…♪』脱げば【スレンダー&巨乳Gカップ】感度抜群のおマ●コからはあり得ない量の【超大量潮吹き】は必見！何度も絶頂と痙攣を繰り返すエロ凄いSEX絶対に見逃すな！",
          thumbnailUrl: "https://image.mgstage.com/images/ara/261ara/435/pb_e_261ara-435.jpg" 
        },
        {
          productUrl: "https://www.mgstage.com/product/product_detail/300MIUM-401/?aff=WSZZLC7M7DFYBYAHB6Q6UQTBDM",
          title: "絶頂痙攣中出し3連発！「ゴム外していいですか？」清楚な顔して超淫乱！！指でもチ●コでも潮を撒き散らすだらしないマ●コ（締まりは凄い）！お尻を叩かれるのが大好きな清楚ドM奥様は終始潮が止まらないの巻",
          thumbnailUrl: "https://image.mgstage.com/images/prestigepremium/300mium/401/pb_e_300mium-401.jpg" 
        },
        {
          productUrl: "https://www.mgstage.com/product/product_detail/300MIUM-139/?aff=WSZZLC7M7DFYBYAHB6Q6UQTBDM",
          title: "一見地味な商学部のメガネっ娘は舌出しアヘ顔で絶頂痙攣する変態娘だったの巻 メガネが可愛い就活生は実は刺激が欲しい(彼氏だけじゃ満足出来ない)！デカチン男優登場に大興奮→豹変！デカチン涎だらだらイラマチオ！テントから路上に顔出して羞恥絶頂！最期はメガネに大量ぶっかけ(お掃除フェラあり)！：私立パコパコ女子大学 女子大生とトラックテントで即ハメ旅 Report.019",
          thumbnailUrl: "https://image.mgstage.com/images/prestigepremium/300mium/139/pb_e_300mium-139.jpg" 
        }
      ]
    }
  }
}
</script>

<style>
.left-title-font {
  background: #eee;
  overflow: hidden;
  width: 100%;
  font-weight:solid;
  font-size:14px;
  padding: 0 10px;
  margin-bottom: 0 !important;
}
</style>