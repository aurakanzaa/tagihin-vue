<template>
<div class="container">
  <div id="main">
  <v-ons-page>
    
    <v-ons-tabbar swipeable position="auto"
      :tabs="tabs"
      :visible="true"
      :index.sync="activeIndex"
    >
    </v-ons-tabbar>
  </v-ons-page>
</div>

<div id="paid">
  
  <v-ons-page style="text-align: center">
    <br>
    <ons-row>
      <ons-col>nknnk</ons-col>
      <ons-col>10.0000</ons-col>
  </ons-row>
  <ons-row>
      <ons-col>nknnk</ons-col>
      <ons-col>10.0000</ons-col>
  </ons-row>
  </v-ons-page>
</div>

<div id="overdue">
  <v-ons-page style="text-align: center">
    <br>
    <ons-row>
      <ons-col>nknnk</ons-col>
      <ons-col>11.0000</ons-col>
  </ons-row>
  <ons-row>
      <ons-col>nknnk</ons-col>
      <ons-col>11.0000</ons-col>
  </ons-row>
  </v-ons-page>
</div>

<div id="open">
  <v-ons-page style="text-align: center">
    <br>
    <ons-row>
      <ons-col>nknnk</ons-col>
      <ons-col>12.0000</ons-col>
  </ons-row>
  <ons-row>
      <ons-col>nknnk</ons-col>
      <ons-col>12.0000</ons-col>
  </ons-row>
  </v-ons-page>
</div>

</div>


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
