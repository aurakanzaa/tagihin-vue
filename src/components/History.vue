
  <template id="main">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">{{ title }}</div>
    </v-ons-toolbar>

    <v-ons-tabbar swipeable position="auto"
      :tabs="tabs"
      :visible="true"
      :index.sync="activeIndex"
    >
    </v-ons-tabbar>
  </v-ons-page>
</template>

<template id="home">
  <v-ons-page>
    <p style="text-align: center">
      Welcome home.<br><br>{{ myProp }}
    </p>
  </v-ons-page>
</template>

<template id="news">
  <v-ons-page>
    <p style="text-align: center">
      Some news here.
    </p>
  </v-ons-page>
</template>

<template id="settings">
  <v-ons-page>
    <p style="text-align: center">
      Change the settings.
    </p>
  </v-ons-page>
</template>


<script>
const overduePage = {
  template: '#overdue'
};

const paidPage = {
  template: '#paid'
};

const openPage = {
  template: '#open'
};
import axios from 'axios';
export default {
        name: 'History',
            data () {
            return {
                activeIndex:0,
                tabs:[
                  {
                  label:'Open',
                  page: openPage,
                  key:"OpenPage"
                },
                {
                  label: 'Paid',
                  page: paidPage,
                  key: "PaidPage"

                },
                {
                  label: 'Overdue',
                  page: overduePage,
                  key: "OverduePage"
                }
                ]

            }
            },
        methods: {
            md() {
            return this.$ons.platform.isAndroid();
          }
        },
        computed: {
        title() {
          return this.tabs[this.activeIndex].label;
        }
      }
    }
</script>

<style>

</style>
