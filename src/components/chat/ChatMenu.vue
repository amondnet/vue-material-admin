<template>
  <div class="theme--dark py-5 darken-1">
    <div>
      <v-btn icon large flat slot="activator">
        <v-avatar>
          <img v-bind:src="me().profileUrl" alt="Micahel Wang">
        </v-avatar>
      </v-btn>
    </div>
    <v-list class="mini-menu">
      <template v-for="item in items">
        <!-- Top level -->
        <v-list-tile :to="item.to" :key="item.icon" class="py-2 mini-tile my-2" avatar>
          <v-icon :color="item.iconColor" class="mini-icon" size="36">{{ item.icon }}</v-icon>
        </v-list-tile>
      </template>
    </v-list>          
</div>
</template>

<script>
  import { getMe } from '@/api/user'

  export default {

  props: {
    items: {
      type: Array,
    }
  },
    methods: {
      me: function () {
        return getMe()
      }
    }

};
</script>

<style lang="stylus">
  .mini-tile
    a.list__tile--active
      background:hsla(0,0%,100%,.12)
 
</style>
