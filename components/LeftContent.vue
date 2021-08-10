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
        <v-img :src="`${item.thumbnailUrl}`"></v-img>
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
          productUrl: "https://www.mgstage.com/product/product_detail/SIRO-4471/?aff=WSZZLC7M7DFYBYAHB6Q6UQTBDM",
          title: "【初撮り】【彼氏には言えない..】【快感に崩れ落ちる美女】美麗なルックスをお持ちの高級エステティシャンが登場。普段は接触NGの美裸体に快感を与え続ければ.. ネットでAV応募→AV体験撮影 1494",
          thumbnailUrl: "https://image.mgstage.com/images/shirouto/siro/4471/pb_e_siro-4471.jpg" 
        },
        {
          productUrl: "https://www.mgstage.com/product/product_detail/435MFC-123/?aff=WSZZLC7M7DFYBYAHB6Q6UQTBDM",
          title: "【至高の神尻ギャルがメス顔完堕ち】お酒が入ってムラムラ…べろちゅう大好きスレンダー美尻ギャルと濃厚つゆだくSEX♪指マンで潮吹き絶頂する感度抜群ボディ！もちもち柔尻を堪能しながら舌射&中出しの2回戦！！【しろうとハメ撮り♯ゆき♯22歳♯Hなノリノリ関西弁美女 】",
          thumbnailUrl: "https://image.mgstage.com/images/moonforce/435mfc/123/pb_e_435mfc-123.jpg" 
        },
        {
          productUrl: "https://www.mgstage.com/product/product_detail/428SUKE-080/?aff=WSZZLC7M7DFYBYAHB6Q6UQTBDM",
          title: "【至高の美BODYに猛攻ピストン】REIRAちゃん★極上クビレのスレンダー美乳×美尻なタトゥー美女登場！承認欲求満たしマ●コちゃんと昇天しまくりNIGHT FUCK！！絶倫でドSでドM！？変態性癖だらけの彼女と全身オイルで潮吹き痙攣SEX！【YORU★like.6】",
          thumbnailUrl: "https://image.mgstage.com/images/sukekiyo/428suke/080/cap_e_21_428suke-080.jpg" 
        },
        {
          productUrl: "https://www.mgstage.com/product/product_detail/390JNT-027/?aff=WSZZLC7M7DFYBYAHB6Q6UQTBDM",
          title: "【極エロ新章・開幕ッ！！新時代のSNSナンパ】テ●ンダーで“即”ってセフれ！！圧倒的にエロ可愛い教育実習生とマッチング！！敏感にも程があるスレンダラスBODYを貪るようにハメ倒す！！イってイってイキまくり、異常な量の潮吹きに、あえなくベッド水没ッ！！フル勃起不可避の衝撃映像を堪能せよ！！【t●nderist！！】",
          thumbnailUrl: "https://image.mgstage.com/images/jackson/390jnt/027/cap_e_17_390jnt-027.jpg" 
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