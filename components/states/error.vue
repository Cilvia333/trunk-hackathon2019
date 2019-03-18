<template lang="pug">
.error
  .error-wrapper
    .error-text 
      h1.error-title Error!!!
      .error-message {{error_messages[errorCode]}}
</template>

<script>
export default {
  props:[
    "errorCode"
  ],
  data() {
    return {
      error_messages : [
        "原因不明のエラーで、現在位置を取得できませんでした",
        "位置情報の使用を許可してください",
        "電波状況が悪く、現在位置の取得に失敗しました",
        "タイムアウト・エラー",
        "サーバーに接続できません",
        "原因不明"
        ],
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/style/variables.scss";
@import "~/assets/style/mixin.scss";


.error{
  display: block;
  width: 100vw;
  height: 100vh;
  background: $theme-orange;
  background: $theme-gradient;
  opacity: 1;
}

.error-wrapper{
  position: relative;
  width:100%;
  height:100%;
  .error-text{
    color:$white;
    position:absolute;
    display: block;
    top:0;
    bottom:0;
    text-align: center;
    margin:auto;
    width: 100%;
    height: min-content;
  }
}

</style>

