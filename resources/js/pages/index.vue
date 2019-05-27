<template>
  <section>
    <v-container grid-list-md>
      <v-layout align-center justify-space-around row wrap>
        <v-flex xs12 md4 class="text-xs-center">
          <v-avatar v-if="photo" size="300px" class="grey lighten-4">
            <img :src="'storage/' + photo" :alt="name">
          </v-avatar>
        </v-flex>
        <v-flex xs12 md6 class="text-xs-center">
          <h2 class="section-title">{{ $t('about_me') }}</h2>
          <p class="my-4 subheading text-xs-justify">
            <span v-html="about_me"/>
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
    name: '',
    about_me: '',
    photo: null,
    myPhoto: require('../../img/my-photo.png'),
    jumbotronBg: require('../../img/jumbotron-bg.jpg'),
  }),
  metaInfo () {
    return {title: this.$t('home')}
  },
  created () {
    this.name = this.$store.getters['settings']['name']['value'];
    this.about_me = this.$store.getters['settings']['about_you']['value'];
    this.photo = this.$store.getters['settings']['photo']['value'];
  }
}
</script>
