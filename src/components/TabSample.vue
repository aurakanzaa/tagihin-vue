<template>
<div class="container-fluid fixsize" >
    <!-- <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 col-centered"></div>
    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 col-centered"> -->
      <div>
      <!-- tabbar -->
      <div class="tabbar tabbar--top tabbar--top-border">
        <label class="tabbar__item tabbar--top-border__item">
          <input type="radio" name="top-tabbar-b" checked="checked">
          <button class="tabbar__button tabbar--top-border__button">
            Paid
          </button>
        </label>

        <label class="tabbar__item tabbar--top-border__item">
          <input type="radio" name="top-tabbar-b">
          <button class="tabbar__button tabbar--top-border__button">
            Overdue
          </button>
        </label>

        <label class="tabbar__item tabbar--top-border__item">
          <input type="radio" name="top-tabbar-b">
          <button class="tabbar__button tabbar--top-border__button">
            Open
          </button>
        </label>
      </div>
      <!-- end tabbar -->
      <br>
      <div>
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 bo le">INV 110</div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 bo ri">10.000</div>
        </div> 
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 bo le">Teguh</div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 ri">1 Agustus 2018</div>
        </div> 
      </div>
      <hr>

      <div>
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 bo le">INV 110</div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 bo ri">100</div>
        </div> 
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 bo le">Teguh</div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 ri">1 Agtus 2018</div>
        </div> 
      </div>
      <hr>




    </div>

    

    

    
    
  <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 col-centered"></div>
</div>
</template>

<script>
  export default {
    name : 'TabSample',
    
  }
</script>

<style scoped>
/* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

@media (min-width: 1281px) {
  
  .atas{
      margin-top: -40px;
      width: 100%;
      max-width: 400px;
    }
    .bo{
      font-weight: bold;
    }
    .ri{
      text-align: right;
      padding-right: 80px;
    }
    .le{
      text-align: left;
      padding-left: 80px;
    }
    .centered-form{
      display: flex;
      align-items: center;
      height: 10em;
      justify-content: center;
    }
    .fixsize{
        width: 100%;
        max-width: 400px;
    }
  
}

/* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  
  .atas{
      margin-top: -40px;
      width: 100%;
      max-width: 400px;
    }
    .bo{
      font-weight: bold;
    }
    .ri{
      text-align: right;
      padding-right: 80px;
    }
    .le{
      text-align: left;
      padding-left: 80px;
    }
    .centered-form{
      display: flex;
      align-items: center;
      height: 10em;
      justify-content: center;
    }
    .fixsize{
        width: 100%;
        max-width: 400px;
    }
  
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  
  .atas{
      margin-top: -40px;
      width: 100%;
      max-width: 400px;
    }
    .bo{
      font-weight: bold;
    }
    .ri{
      text-align: right;
      padding-right: 80px;
    }
    .le{
      text-align: left;
      padding-left: 80px;
    }
    .centered-form{
      display: flex;
      align-items: center;
      height: 10em;
      justify-content: center;
    }
    .fixsize{
        width: 100%;
        max-width: 400px;
    }
  
}

/* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  
  .atas{
      margin-top: -40px;
      width: 100%;
      max-width: 400px;
    }
    .bo{
      font-weight: bold;
    }
    .ri{
      text-align: right;
      padding-right: 80px;
    }
    .le{
      text-align: left;
      padding-left: 80px;
    }
    .centered-form{
      display: flex;
      align-items: center;
      height: 10em;
      justify-content: center;
    }
    .fixsize{
        width: 100%;
        max-width: 400px;
    }
  
}

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  
  .atas{
      margin-top: -40px;
      width: 100%;
      max-width: 400px;
    }
    .bo{
      font-weight: bold;
    }
    .ri{
      text-align: right;
      padding-right: 80px;
    }
    .le{
      text-align: left;
      padding-left: 80px;
    }
    .centered-form{
      display: flex;
      align-items: center;
      height: 10em;
      justify-content: center;
    }
    .fixsize{
        width: 100%;
        max-width: 400px;
    }
  
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  
  .atas{
      margin-top: -40px;
      width: 100%;
      max-width: 400px;
    }
    .bo{
      font-weight: bold;
    }
    .ri{
      text-align: right;
      padding-right: 80px;
    }
    .le{
      text-align: left;
      padding-left: 80px;
    }
    .centered-form{
      display: flex;
      align-items: center;
      height: 10em;
      justify-content: center;
    }
    .fixsize{
        width: 100%;
        max-width: 400px;
    }
  
}
    

</style>
