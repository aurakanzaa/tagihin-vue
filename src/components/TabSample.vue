<template>
  <div class="container-fluid fixsize">
    <div class="tab">
      <button class="tablinks" onclick="openTagih(event, 'Paid')" style="width: 33%; color: blue">Paid</button>
      <button class="tablinks" onclick="openTagih(event, 'Overdue')" style="width: 34%; color: blue">Overdue</button>
      <button class="tablinks" onclick="openTagih(event, 'Open')" style="width: 33%; color: blue">Open</button>
    </div>

    <!-- Tab content -->
    <div id="Paid" class="tabcontent">
      <div>
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 bo le">INV 110 paid</div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 bo ri">10.000</div>
        </div>
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 bo le">Teguh</div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 ri">1 Agustus 2018</div>
        </div>
      </div>
    </div>

    <div id="Overdue" class="tabcontent">
      <div>
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 bo le">INV 110 overdu</div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 bo ri">10.000</div>
        </div>
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 bo le">Teguh</div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 ri">1 Agustus 2018</div>
        </div>
      </div>
    </div>

    <div id="Open" class="tabcontent">
      <div>
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 bo le">INV 110 open</div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 bo ri">10.000</div>
        </div>
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 bo le">Teguh</div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 ri">1 Agustus 2018</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: "TabSample"
  };
</script>

<style scoped>
  .tab {
    overflow: hidden;
    border: none;
    background-color: #fff;
  }

  .fixsize {
    width: 100%;
    margin-top: -45px;
    max-width: 500px;
  }

  /* Style the buttons that are used to open the tab content */

  .tab button {
    background-color: inherit;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
  }

  /* Change background color of buttons on hover */

  .tab button:hover {
    background-color: #ddd;
  }

  /* Create an active/current tablink class */

  .tab button.active {
    border-bottom: 2px solid blue;
    background-color: #fff;
  }

  /* Style the tab content */

  .tabcontent {
    display: none;
    padding: 6px 12px;
    /* border: 1px solid #ccc; */
    border: none;
  }
</style>