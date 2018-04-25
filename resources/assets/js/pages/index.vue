<template>
  <section>
    <v-container grid-list-md>
      <v-layout align-center justify-space-around row wrap>
        <v-flex xs12 md4 class="text-xs-center">
          <v-avatar size="300px" class="grey lighten-4">
            <img :src="myPhoto" alt="Nauris Linde">
          </v-avatar>
        </v-flex>
        <v-flex xs12 md6 class="text-xs-center">
          <h2 class="section-title">{{ $t('about_me') }}</h2>
          <p class="my-4 subheading text-xs-justify">
            <span v-html="$t('hello_i_am')"/>
            <a href="https://www.facebook.com/nauris.linde" class="facebook-link" target="_blank">Facebook</a>,
            <a href="https://twitter.com/naurislinde" class="twitter-link" target="_blank">Twitter</a>,
            <a href="https://www.linkedin.com/in/nauris-linde-4027aaaa" class="linkedin-link" target="_blank">LinkedIn</a>,
            <a href="https://github.com/FaZeRs" class="github-link" target="_blank">GitHub</a>,
            <a href="https://www.upwork.com/o/profiles/users/_~010151abb5cc799441/" class="upwork-link" target="_blank">UpWork</a>
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  layout: 'default',
  data: () => ({
    appName: window.config.appName,
    myPhoto: require('../../img/my-photo.png'),
    jumbotronBg: require('../../img/jumbotron-bg.jpg'),
  }),
  metaInfo () {
    return {title: this.$t('home')}
  }
}
</script>
