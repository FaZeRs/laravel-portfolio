<template>
  <section>
    <v-container grid-list-md>
      <v-layout align-center>
        Dashboard
      </v-layout>
    </v-container>
  </section>
</template>
<script>

export default {
  name: 'dashboard',
  layout: 'admin',
  middleware: 'auth'
}

</script>
