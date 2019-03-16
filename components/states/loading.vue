<template lang="pug">
    section
        .container
            img(src="")
            div.loading-text
                h1 Loading
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import "~/assets/style/variables.scss";
@import "~/assets/style/mixin.scss";

section{
    width: 100vw;
    height:100vh;
    top:0;
    left:0;
    background: $theme-orange;
}

.loading-text{
    position:absolute;
    color:$white;
    height:100vh;
    width:100vw;
    top:0;
    left:0;
    bottom:0;
    right:0;
    transform: translate(-50%,-50%);
    margin:auto;
}

</style>
