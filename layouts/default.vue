<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
@import "~/assets/style/normalize.scss";
@import "~/assets/style/variables.scss";
@import "~/assets/style/mixin.scss";

html{
  font-family: $noto-font, "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  font-size: 62.5%;
  color: $theme-blue;
  box-sizing: border-box;
  margin: 0;
  width: 100%;
  height: 100%;
}
body {
  margin: 0;
  width: 100%;
  height: 100%;
  @include noto-font(1.5rem);
}

.container {
  width: calc(100% - 120px);
  margin: auto;
}

p {
  margin-bottom: 1rem;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
a:link,a:visited {
  color: $theme-sky;
  text-decoration: none;
}
:focus {
  outline: none;
}
</style>
