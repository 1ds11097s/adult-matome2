<template>
<v-row justify="center" style="border: solid 1px #000;">
    <v-chip
      class="ma-2"
      color="error"
      label
    >
      Twitter(更新停止中)
    </v-chip>
      <Twitter />
    </v-row>
</template>

<script>
import Twitter from '../Twitter.vue'

export default {
  components: {
    Twitter
  }
}
</script>