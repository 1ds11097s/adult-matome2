<template>
  <div>
      <Timeline :id="user_id" sourceType="profile" :options="{ tweetLimit: '3' }"/>
      </div>
</template>

<script>
import { Timeline } from "vue-tweet-embed";
export default {
  components: {
    Timeline
  },
  data: function() {
    return {
      user_id: "yuyufukuoka"
    };
  }
};
</script>