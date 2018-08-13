<template>
<div  class="container-fluid fixsize"  >
    <!-- <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 col-centered"></div> -->
    <!-- <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 col-centered"> -->
        <div v-for="user in users" :key="user.value._id">
        <div class="form-panel">
            
            <div class="row">
                <div class="col-lg-9 col-md-10 col-sm-8 col-xs-8">
                <!-- <span class="leftTitle">Riwayat Transaksi</span> -->
                <p class="leftTitle">Riwayat Transaksi</p>

                </div>
             
                <div  v-if='user.value.status == "open"' id="rcorners2" class="col-lg-3 col-md-2 col-sm-4 col-xs-4">
                    <p>{{ user.value.status }}</p> 
                </div>

                <div v-else-if='user.value.status == "paid"'  id="rcorners3" class="col-lg-3 col-md-2 col-sm-4 col-xs-4">
                    <p>{{ user.value.status }}</p> 
                </div>

                 <div v-else-if='user.value.status == "overdue"'  id="rcorners1" class="col-lg-3 col-md-2 col-sm-4 col-xs-4">
                    <p>{{ user.value.status }}</p> 
                </div>
                
            </div>
            

            <div >
                <p class="bluebox">Invoice</p>           
            </div>

    
            <div>
                    <p class="bold">Nama</p>
                    <p class="left">{{user.value.namapenerima}}</p>

                    <br>

                    <p class="bold">Nomor Handphone</p>
                    <p class="left">{{user.value.nohp}}</p>

                    <br>

                    <p class="bold">Email</p>
                    <p class="left" >{{user.value.email}}</p>

            <!-- line -->
                    <hr>

                    <div class="row">
                        <div class="col-xs-5 col-md-9 col-lg-6">
                            <p class="bold">Jumlah</p>
                        </div>
                        <div class="col-xs-7 col-md-3 col-lg-6">
                            <label class="control-label txt">Rp {{user.value.jumlahtagihan}}</label>
                        </div>
                    </div>

        
                    <p class="bold">Catatan</p>
                    <p class="left">{{user.value.catatan}}</p>

                    <br>
                    <br>
                        


                        


                    <!-- BUTTON -->
                    <button type="button" class="btn btn-primary btn-block button">Tutup</button>
                    <input type="submit" class="btn btn-primary btn-block button" value="Tutup" name="" id="">

            </div>
        </div>
    </div>
    <!-- <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 col-centered"></div> -->
</div>    
    
</template>


<script>
import axios from 'axios';
    export default {
        name: 'History',
            data () {
            return {
                users :[],
                }
            },
            mounted(){
                axios.get('/api/user').then(response =>{
                    console.log(response.data.rows);
                    this.users = response.data.rows;
                })
            }
        
    }
</script>


<style>
    * {
    box-sizing: border-box;
}

/* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

@media (min-width: 1281px) {
  .leftTitle{ 
        text-align: left;
        color: black;
        padding-left: 30px;
        font-weight: bold;
        font-size: 20px;
        margin-top: 10px;
    }
    .left{
        text-align: left;
        color: black;
        font-weight: bold;
        margin-top: 10px;
        margin-left: 30px;
    }
    .pdg{
        background-color: #4286F1;
        padding-top: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        color: white;
    }
    p.bold{
        font-weight: bold;
        color: grey;
        text-align: left;
        margin-left: 30px;
    }
 
    .txt{
        font-size: 30px;
        color: #4286F1;
        text-align: right;
    }

    .bluebox{
        text-align: right;
        font-weight: bold;
        color: white;
        height: 40px;
        width: 100px;
        margin-bottom:20px;
        margin-top:20px;
        padding-top: 10px;
        padding-right: 10px;
        padding-left: 40px;
        background-color: #4286F1;
    }
    
    .button {
        background-color: #4286F1;
        height: 40px;
    }

    #rcorners2 {
        border-radius: 80px 0px 0px 80px;
        background: #FFCB00;
        color:white;
        font-weight: bold;
        text-align:left;
        padding: 10px;
        padding-right: 80px; 
        padding-left: 15px;
        width: 100px;
        height: 40px; 
    }
      #rcorners3 {
        border-radius: 80px 0px 0px 80px;
        background: #48DC61;
        color:white;
        font-weight: bold;
        text-align:left;
        padding: 10px; 
        padding-left: 25px;
        width: 91px;
        height: 40px; 
    }
        #rcorners1 {
        border-radius: 80px 0px 0px 80px;
        background: #F83E24;
        color:white;
        font-weight: bold;
        text-align:left;
        padding: 10px; 
        padding-left: 25px;
        width: 91px;
        height: 40px; 
    }

  
}

/* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  .leftTitle{ 
        text-align: left;
        color: black;
        padding-left: 30px;
        font-weight: bold;
        font-size: 20px;
        margin-top: 10px;
    }
    .left{
        text-align: left;
        color: black;
        font-weight: bold;
        margin-top: 10px;
        margin-left: 30px;
    }
    .pdg{
        background-color: #4286F1;
        padding-top: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        color: white;
    }
    p.bold{
        font-weight: bold;
        color: grey;
        text-align: left;
        margin-left: 30px;
    }
 
    .txt{
        font-size: 30px;
        color: #4286F1;
        text-align: right;
    }

    .bluebox{
        text-align: right;
        font-weight: bold;
        color: white;
        height: 40px;
        width: 100px;
        margin-bottom:20px;
        margin-top:20px;
        padding-top: 10px;
        padding-right: 10px;
        padding-left: 40px;
        background-color: #4286F1;
    }
    
    .button {
        background-color: #4286F1;
        height: 40px;
       
    }

    #rcorners2 {
        border-radius: 80px 0px 0px 80px;
        background: #FFCB00;
        color:white;
        font-weight: bold;
        text-align:left;
        padding: 10px;
        padding-right: 80px; 
        padding-left: 15px;
        width: 100px;
        height: 40px; 
    }
      #rcorners3 {
        border-radius: 80px 0px 0px 80px;
        background: #48DC61;
        color:white;
        font-weight: bold;
        text-align:left;
        padding: 10px; 
        padding-left: 25px;
        width: 91px;
        height: 40px; 
    }
        #rcorners1 {
        border-radius: 80px 0px 0px 80px;
        background: #F83E24;
        color:white;
        font-weight: bold;
        text-align:left;
        padding: 10px; 
        padding-left: 25px;
        width: 91px;
        height: 40px; 
    }

  
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  .leftTitle{ 
        text-align: left;
        color: black;
        padding-left: 30px;
        font-weight: bold;
        font-size: 20px;
        margin-top: 10px;
    }
    .left{
        text-align: left;
        color: black;
        font-weight: bold;
        margin-top: 10px;
        margin-left: 30px;
    }
    .pdg{
        background-color: #4286F1;
        padding-top: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        color: white;
    }
    p.bold{
        font-weight: bold;
        color: grey;
        text-align: left;
        margin-left: 30px;
    }
 
    .txt{
        font-size: 30px;
        color: #4286F1;
        text-align: right;
    }

    .bluebox{
        text-align: right;
        font-weight: bold;
        color: white;
        height: 40px;
        width: 100px;
        margin-bottom:20px;
        margin-top:20px;
        padding-top: 10px;
        padding-right: 10px;
        padding-left: 40px;
        background-color: #4286F1;
    }
    
    .button {
        background-color: #4286F1;
        height: 40px;
    }

    #rcorners2 {
        border-radius: 80px 0px 0px 80px;
        background: #FFCB00;
        color:white;
        font-weight: bold;
        text-align:left;
        padding: 10px;
        padding-right:140px; 
        padding-left: 25px;
        width: 100px;
        height: 40px; 
    }
    #rcorners3 {
        border-radius: 80px 0px 0px 80px;
        background: #48DC61;
        color:white;
        font-weight: bold;
        text-align:left;
        padding: 10px; 
        padding-left: 25px;
        width: 91px;
        height: 40px; 
    }
        #rcorners1 {
        border-radius: 80px 0px 0px 80px;
        background: #F83E24;
        color:white;
        font-weight: bold;
        text-align:left;
        padding: 10px; 
        padding-left: 25px;
        width: 91px;
        height: 40px; 
    }

  
}

/* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    .leftTitle{ 
        text-align: left;
        color: black;
        padding-left: 30px;
        font-weight: bold;
        font-size: 20px;
        margin-top: 10px;
    }
    .left{
        text-align: left;
        color: black;
        font-weight: bold;
        margin-top: 10px;
        margin-left: 30px;
    }
    .pdg{
        background-color: #4286F1;
        padding-top: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        color: white;
    }
    p.bold{
        font-weight: bold;
        color: grey;
        text-align: left;
        margin-left: 30px;
    }
 
    .txt{
        font-size: 30px;
        color: #4286F1;
        text-align: right;
    }

    .bluebox{
        text-align: right;
        font-weight: bold;
        color: white;
        height: 40px;
        width: 100px;
        margin-bottom:20px;
        margin-top:20px;
        padding-top: 10px;
        padding-right: 10px;
        padding-left: 40px;
        background-color: #4286F1;
    }
    
    .button {
        background-color: #4286F1;
        height: 45px;

       
    }

    #rcorners2 {
        border-radius: 80px 0px 0px 80px;
        background: #FFCB00;
        color:white;
        font-weight: bold;
        text-align:left;
        padding: 10px;
        padding-right: 131px; 
        padding-left: 25px;
        width: 100px;
        height: 40px; 
    }
    #rcorners3 {
        border-radius: 80px 0px 0px 80px;
        background: #48DC61;
        color:white;
        font-weight: bold;
        text-align:left;
        padding: 10px; 
        padding-left: 25px;
        width: 91px;
        height: 40px; 
    }
        #rcorners1 {
        border-radius: 80px 0px 0px 80px;
        background: #F83E24;
        color:white;
        font-weight: bold;
        text-align:left;
        padding: 10px; 
        padding-left: 25px;
        width: 91px;
        height: 40px; 
    }

  
}

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  .leftTitle{ 
        text-align: left;
        color: black;
        padding-left: 30px;
        font-weight: bold;
        font-size: 20px;
        margin-top: 10px;
    }
    .left{
        text-align: left;
        color: black;
        font-weight: bold;
        margin-top: 10px;
        margin-left: 30px;
    }
    .pdg{
        background-color: #4286F1;
        padding-top: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        color: white;
    }
    p.bold{
        font-weight: bold;
        color: grey;
        text-align: left;
        margin-left: 30px;
    }
 
    .txt{
        font-size: 30px;
        color: #4286F1;
        text-align: right;
    }

    .bluebox{
        text-align: right;
        font-weight: bold;
        color: white;
        height: 40px;
        width: 100px;
        margin-bottom:20px;
        margin-top:20px;
        padding-top: 10px;
        padding-right: 10px;
        padding-left: 40px;
        background-color: #4286F1;
    }
    
    .button {
        background-color: #4286F1;
        height: 40px;  
    }

    #rcorners2 {
        border-radius: 80px 0px 0px 80px;
        background: #FFCB00;
        color:white;
        font-weight: bold;
        text-align:left;
        padding: 10px;
        padding-right: 130px; 
        padding-left: 15px;
        width: 100px;
        height: 40px; 
    }
    #rcorners3 {
        border-radius: 80px 0px 0px 80px;
        background: #48DC61;
        color:white;
        font-weight: bold;
        text-align:left;
        padding: 10px; 
        padding-left: 25px;
        width: 91px;
        height: 40px; 
    }
        #rcorners1 {
        border-radius: 80px 0px 0px 80px;
        background: #F83E24;
        color:white;
        font-weight: bold;
        text-align:left;
        padding: 10px; 
        padding-left: 25px;
        width: 91px;
        height: 40px; 
    }

  
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  .leftTitle{ 
        text-align: left;
        color: black;
        padding-left: 30px;
        font-weight: bold;
        font-size: 14px;
        margin-top: 10px;
    }
    .left{
        text-align: left;
        color: black;
        font-weight: bold;
        margin-top: 10px;
        margin-left: 30px;
    }
    .pdg{
        background-color: #4286F1;
        padding-top: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        color: white;
    }
    p.bold{
        font-weight: bold;
        color: grey;
        text-align: left;
        margin-left: 30px;
    }
 
    .txt{
        font-size: 30px;
        color: #4286F1;
        text-align: right;
    }

    .bluebox{
        text-align: right;
        font-weight: bold;
        color: white;
        height: 40px;
        width: 100px;
        margin-bottom:20px;
        margin-top:20px;
        padding-top: 10px;
        padding-right: 10px;
        padding-left: 40px;
        background-color: #4286F1;
    }
    
    .button {
        background-color: #4286F1;
        height: 40px;
       
    }

    #rcorners2 {
        border-radius: 80px 0px 0px 80px;
        background: #FFCB00;
        color:white;
        font-weight: bold;
        text-align:left;
        padding: 10px;
        padding-right: 99px; 
        padding-left: 15px;
        width: 100px;
        height: 40px; 
    }
    #rcorners3 {
        border-radius: 80px 0px 0px 80px;
        background: #48DC61;
        color:white;
        font-weight: bold;
        text-align:left;
        padding: 10px; 
        padding-left: 25px;
        width: 91px;
        height: 40px; 
    }
        #rcorners1 {
        border-radius: 80px 0px 0px 80px;
        background: #F83E24;
        color:white;
        font-weight: bold;
        text-align:left;
        padding: 10px; 
        padding-left: 25px;
        width: 91px;
        height: 40px; 
    }

  
}

@media (max-width: 320px) {
  .leftTitle{ 
        text-align: left;
        color: black;
        padding-left: 30px;
        font-weight: bold;
        font-size: 14px;
        margin-top: 10px;
    }
    .left{
        text-align: left;
        color: black;
        font-weight: bold;
        margin-top: 10px;
        margin-left: 30px;
    }
    .pdg{
        background-color: #4286F1;
        padding-top: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        color: white;
    }
    p.bold{
        font-weight: bold;
        color: grey;
        text-align: left;
        margin-left: 30px;
    }
 
    .txt{
        font-size: 23px;
        color: #4286F1;
        text-align: right;
    }

    .bluebox{
        text-align: right;
        font-weight: bold;
        color: white;
        height: 40px;
        width: 100px;
        margin-bottom:20px;
        margin-top:10px;
        margin-left: 30px;
        padding-top: 10px;
        padding-right: 10px;
        padding-left: 40px;
        background-color: #4286F1;
    }
    
    .button {
        background-color: #4286F1;
        height: 40px;
       
    }

    #rcorners2 {
        border-radius: 80px 0px 0px 80px;
        background: #FFCB00;
        color:white;
        font-weight: bold;
        text-align:left;
        padding: 10px; 
        padding-left: 25px;
        width: 91px;
        height: 40px; 
    }
    #rcorners3 {
        border-radius: 80px 0px 0px 80px;
        background: #48DC61;
        color:white;
        font-weight: bold;
        text-align:left;
        padding: 10px; 
        padding-left: 25px;
        width: 91px;
        height: 40px; 
    }
        #rcorners1 {
        border-radius: 80px 0px 0px 80px;
        background: #F83E24;
        color:white;
        font-weight: bold;
        text-align:left;
        padding: 10px; 
        padding-left: 25px;
        width: 91px;
        height: 40px; 
    }

  
}

</style>