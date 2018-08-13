
<template>
    <div class="container-fluid fixsize">
        <!-- <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 col-centered"></div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 col-centered"> -->
            <div>
           <div class="row mt">
          		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-panel">
                  	   <h1 class="mb"> TAGIHIN</h1>
                        <span class="help-block fsize">Cara mudah mengirim tagihan</span>
                      <form class="form-horizontal style-form" method="get">
                            <div>
                                <p class="box1">Pengirim</p>           
                            </div>
                          
                          <!-- =====PENGIRIM===== -->
                            <div class="form-group">
                                <div class="inner-addon left-addon">
                                    <i class="icon"> <img src="../assets/user.png" height="15" weight="15"></i>
                                    <input type="text" class="form-control inp" placeholder="Nama Pengirim" v-model="Tagihin.namPenagih" required/>
                                    </div>
                            </div>
                               
                            <div class="form-group">
                                <div class="inner-addon left-addon">
                                    <i class="icon"> <img src="../assets/phone.png" height="15" weight="15"></i>
                                    <input type="number" class="form-control inp" placeholder="Nomor Handphone Pengirim" v-model="Tagihin.noHpPenagih" required/>
                                    </div>
                            </div>
                          <!-- =========== -->

                            <div>
                                <p class="box1">Penerima</p>           
                            </div>
                          <!-- =====PENERIMA===== -->
                            <div class="form-group">
                                <div class="inner-addon left-addon">
                                    <i class="icon"> <img src="../assets/user.png" height="15" weight="15"></i>
                                    <input type="text" class="form-control inp" placeholder="Nama Penerima" v-model="Tagihin.namaPenerima" required/>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="inner-addon left-addon">
                                    <i class="icon"> <img src="../assets/mail.png" height="15" weight="15"></i>
                                    <input type="email" class="form-control inp" placeholder="Email Penerima" v-model="Tagihin.email" required/>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="inner-addon left-addon">
                                    <i class="icon"> <img src="../assets/phone.png" height="15" weight="15"></i>
                                    <input type="number" class="form-control inp" placeholder="Nomor Handphone Penerima" v-model="Tagihin.noHp" required />
                                </div>
                            </div>
                          <!-- =========== -->
                            <div>
                                <p class="box1">Tagihan</p>           
                            </div>
                          <!-- =====TAGIHAN===== -->
                            <div class="form-group">
                                <div class="inner-addon left-addon">
                                    <i class="icon"> <img src="../assets/receipt.png" height="15" weight="15"></i>
                                    <input type="number" class="form-control inp" placeholder="Jumlah" v-model="Tagihin.jumlahTagihan" required/>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="inner-addon left-addon">
                                    <i class="icon"> <img src="../assets/note.png" height="15" weight="15"></i>
                                    <input type="text" class="form-control inp" placeholder="Catatan" v-model="Tagihin.catatan" required/>
                                    
                                </div>
                            </div>
                            <br>
                          <!-- =========== -->
                           <button type="submit" class="btn btn-primary btn-block button1" @click="hello()">Tagih</button>
                      </form>
                  </div>
          		</div><!-- col-lg-12-->      	
          	</div><!-- /row -->
        </div>
        <!-- <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 col-centered"></div> -->
    </div>
</template>
<script>
<<<<<<< HEAD
import axios from 'axios';
    export default {
        name: 'Tagihin',
            data () {
            return {
                Tagihin : {namaPenerima : '', noHp : '', email : '', namPenagih: '', noHpPenagih : '', jumlahTagihan : '', catatan : '', tanggal :'' }
                }
            },
        methods: {
            hello:function(){
             let newTagihin = {
                   namaPenerima : this.Tagihin.namaPenerima,
                   noHp : this.Tagihin.noHp,
                   email : this.Tagihin.email,
                   namPenagih : this.Tagihin.namPenagih,
                   noHpPenagih : this.Tagihin.noHpPenagih,
                   jumlahTagihan : this.Tagihin.jumlahTagihan,
                   catatan : this.Tagihin.catatan,
                   tanggal : this.Tagihin.tanggal
                    }
                 axios.get('/api/check/'+newTagihin.noHpPenagih, ).then(response =>{
                    if(response.data.rows==""){
                        // axios.post('/api/version', newTagihin).then(response =>{
                        // console.log(newTagihin);
                        // })
                        console.log("kososng");
                    }else{
                        console.log(response.data.rows.noHpPenagih);
                    };
                    
                })
               

               
            }
=======
import axios from "axios";
export default {
  name: "Tagihin",
  data() {
    return {
      Tagihin: {
        namaPenerima: "",
        noHp: "",
        email: "",
        namPenagih: "",
        noHpPenagih: "",
        jumlahTagihan: "",
        catatan: "",
        tanggal: ""
      }
    };
  },
  methods: {
    hello: function() {
      let newTagihin = {
        namaPenerima: this.Tagihin.namaPenerima,
        noHp: this.Tagihin.noHp,
        email: this.Tagihin.email,
        namPenagih: this.Tagihin.namPenagih,
        noHpPenagih: this.Tagihin.noHpPenagih,
        jumlahTagihan: this.Tagihin.jumlahTagihan,
        catatan: this.Tagihin.catatan,
        tanggal: this.Tagihin.tanggal
      };
      axios.get("/api/check/" + newTagihin.noHpPenagih).then(response => {
        //console.log(response.data.rows);
        if (response.data.rows.length <= 0) {
          axios.post("/api/version", newTagihin).then(response => {
            console.log(newTagihin);
          });
        } else {
          console.log("onok open");
>>>>>>> b4201ecf5817217ff5e7272d86b54c8e8c7e87b7
        }
      });
    }
  }
};
</script>

<style>
/* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

@media (min-width: 1281px) {
  .fixsize {
    width: 100%;
    margin-top: -45px;
    max-width: 500px;
  }

  .pdg {
    size: relative;
    margin-left: 30px;
    margin-right: 30px;
  }
  .font {
    font-size: 30px;
    color: blue;
    font-family: serif;
  }
  .box1 {
    text-align: centered;
    font-weight: bold;
    color: white;
    height: 40px;
    width: 100px;
    margin-bottom: 30px;
    margin-top: 20px;
    padding-top: 10px;
    padding-right: 75px;
    padding-left: 40px;
    background-color: #4286f1;
  }
  .inner-addon {
    position: relative;
  }

  /* style icon */
  .inner-addon .icon {
    position: absolute;
    padding: 10px;
    pointer-events: none;
  }

  /* align icon */
  .left-addon .icon {
    left: 50px;
    top: -3px;
  }
  .right-addon .icon {
    right: 0px;
  }

  /* add padding  */
  .left-addon input {
    padding-left: 35px;
  }

  .right-addon input {
    padding-right: 35px;
  }

  .fsize {
    font-size: 15px;
  }

  .inp {
    width: 80%;
    background-color: transparent;
    border-width: 0px 0px 1px 0px;
    border-color: #7f8c8d;
    border-style: solid;
    margin-left: 50px;
    padding-bottom: 10px;
    padding-top: 5px;
  }
  .button1 {
    background-color: #4286f1;
    height: 40px;
    font-size: 18px;
  }
}

/* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  .fixsize {
    width: 100%;
    margin-top: -45px;
    max-width: 400px;
  }
  .pdg {
    size: relative;
    margin-left: 30px;
    margin-right: 30px;
  }
  .font {
    font-size: 30px;
    color: blue;
    font-family: serif;
  }
  .box1 {
    text-align: centered;
    font-weight: bold;
    color: white;
    height: 40px;
    width: 100px;
    margin-bottom: 30px;
    margin-top: 20px;
    padding-top: 10px;
    padding-right: 75px;
    padding-left: 40px;
    background-color: #4286f1;
  }
  .inner-addon {
    position: relative;
  }

  /* style icon */
  .inner-addon .icon {
    position: absolute;
    padding: 10px;
    pointer-events: none;
  }

  /* align icon */
  .left-addon .icon {
    left: 50px;
    top: -3px;
  }
  .right-addon .icon {
    right: 0px;
  }

  /* add padding  */
  .left-addon input {
    padding-left: 35px;
  }

  .right-addon input {
    padding-right: 35px;
  }

  .fsize {
    font-size: 15px;
  }

  .inp {
    width: 80%;
    background-color: transparent;
    border-width: 0px 0px 1px 0px;
    border-color: #7f8c8d;
    border-style: solid;
    margin-left: 50px;
    padding-bottom: 10px;
    padding-top: 5px;
  }
  .button1 {
    background-color: #4286f1;
    height: 40px;
    font-size: 18px;
  }
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  .fixsize {
    width: 100%;
    margin-top: -45px;
    max-width: 400px;
  }
  .pdg {
    size: relative;
    margin-left: 30px;
    margin-right: 30px;
  }
  .font {
    font-size: 30px;
    color: blue;
    font-family: serif;
  }
  .box1 {
    text-align: centered;
    font-weight: bold;
    color: white;
    height: 40px;
    width: 100px;
    margin-bottom: 30px;
    margin-top: 20px;
    padding-top: 10px;
    padding-right: 75px;
    padding-left: 40px;
    background-color: #4286f1;
  }
  .inner-addon {
    position: relative;
  }

  /* style icon */
  .inner-addon .icon {
    position: absolute;
    padding: 10px;
    pointer-events: none;
  }

  /* align icon */
  .left-addon .icon {
    left: 50px;
    top: -3px;
  }
  .right-addon .icon {
    right: 0px;
  }

  /* add padding  */
  .left-addon input {
    padding-left: 35px;
  }

  .right-addon input {
    padding-right: 35px;
  }

  .fsize {
    font-size: 15px;
  }

  .inp {
    width: 80%;
    background-color: transparent;
    border-width: 0px 0px 1px 0px;
    border-color: #7f8c8d;
    border-style: solid;
    margin-left: 50px;
    padding-bottom: 10px;
    padding-top: 5px;
  }
  .button1 {
    background-color: #4286f1;
    height: 40px;
    font-size: 18px;
  }
}

/* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .fixsize {
    width: 100%;
    margin-top: -45px;
    max-width: 400px;
  }

  .pdg {
    size: relative;
    margin-left: 30px;
    margin-right: 30px;
  }
  .font {
    font-size: 30px;
    color: blue;
    font-family: serif;
  }
  .box1 {
    text-align: centered;
    font-weight: bold;
    color: white;
    height: 40px;
    width: 100px;
    margin-bottom: 30px;
    margin-top: 20px;
    padding-top: 10px;
    padding-right: 75px;
    padding-left: 40px;
    background-color: #4286f1;
  }
  .inner-addon {
    position: relative;
  }

  /* style icon */
  .inner-addon .icon {
    position: absolute;
    padding: 10px;
    pointer-events: none;
  }

  /* align icon */
  .left-addon .icon {
    left: 50px;
  }
  .right-addon .icon {
    right: 0px;
  }

  /* add padding  */
  .left-addon input {
    padding-left: 35px;
  }

  .right-addon input {
    padding-right: 35px;
  }

  .fsize {
    font-size: 15px;
  }

  .inp {
    width: 81%;
    background-color: transparent;
    border-width: 0px 0px 1px 0px;
    border-color: #7f8c8d;
    border-style: solid;
    margin-left: 50px;
    padding-bottom: 10px;
    padding-top: 5px;
  }
  .button1 {
    background-color: #4286f1;
    height: 40px;
    font-size: 18px;
  }
}

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  .fixsize {
    width: 100%;
    margin-top: -45px;
    max-width: 400px;
  }
  .pdg {
    size: relative;
    margin-left: 30px;
    margin-right: 30px;
  }
  .font {
    font-size: 30px;
    color: blue;
    font-family: serif;
  }
  .box1 {
    text-align: centered;
    font-weight: bold;
    color: white;
    height: 40px;
    width: 100px;
    margin-bottom: 30px;
    margin-top: 20px;
    padding-top: 10px;
    padding-right: 75px;
    padding-left: 40px;
    background-color: #4286f1;
  }
  .inner-addon {
    position: relative;
  }

  /* style icon */
  .inner-addon .icon {
    position: absolute;
    padding: 10px;
    pointer-events: none;
  }

  /* align icon */
  .left-addon .icon {
    left: 50px;
    top: -3px;
  }
  .right-addon .icon {
    right: 0px;
  }

  /* add padding  */
  .left-addon input {
    padding-left: 35px;
  }

  .right-addon input {
    padding-right: 35px;
  }

  .fsize {
    font-size: 15px;
  }

  .inp {
    width: 78%;
    background-color: transparent;
    border-width: 0px 0px 1px 0px;
    border-color: #7f8c8d;
    border-style: solid;
    margin-left: 50px;
    padding-bottom: 10px;
    padding-top: 5px;
  }
  .button1 {
    background-color: #4286f1;
    height: 40px;
    font-size: 18px;
  }
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  .top {
    margin-top: -40px;
    width: 100%;
  }
  .pdg {
    size: relative;
    margin-left: 30px;
    margin-right: 30px;
  }
  .font {
    font-size: 30px;
    color: blue;
    font-family: serif;
  }
  .box1 {
    text-align: left;
    font-weight: bold;
    color: white;
    height: 40px;
    width: 100px;
    margin-bottom: 20px;
    margin-top: 20px;
    padding-top: 10px;
    padding-right: 75px;
    padding-left: 40px;
    background-color: #4286f1;
  }
  .inner-addon {
    position: relative;
  }

  /* style icon */
  .inner-addon .icon {
    position: absolute;
    padding: 10px;
    pointer-events: none;
  }

  /* align icon */
  .left-addon .icon {
    left: 50px;
    top: -3px;
  }
  .right-addon .icon {
    right: 0px;
  }

  /* add padding  */
  .left-addon input {
    padding-left: 35px;
  }

  .right-addon input {
    padding-right: 35px;
  }

  .fsize {
    font-size: 15px;
  }

  .inp {
    width: 80%;
    background-color: transparent;
    border-width: 0px 0px 1px 0px;
    border-color: #7f8c8d;
    border-style: solid;
    margin-left: 50px;
    padding-top: 5px;
  }
  .button1 {
    background-color: #4286f1;
    height: 40px;
    font-size: 18px;
  }
}

@media (min-width: 280px) and (max-width: 320px) {
  .top {
    margin-top: -40px;
    width: 100%;
  }
  .pdg {
    size: relative;
    margin-left: 30px;
    margin-right: 30px;
  }
  .font {
    font-size: 20px;
    color: blue;
    font-family: serif;
  }
  .box1 {
    text-align: centered;
    font-weight: bold;
    color: white;
    height: 40px;
    width: 100px;
    margin-bottom: 10px;
    margin-top: 20px;
    padding-top: 10px;
    padding-right: 75px;
    padding-left: 40px;
    background-color: #4286f1;
  }
  .inner-addon {
    position: relative;
  }

  /* style icon */
  .inner-addon .icon {
    position: absolute;
    pointer-events: none;
  }

  /* align icon */
  .left-addon .icon {
    left: 50px;
    top: -3px;
  }
  .right-addon .icon {
    right: 0px;
  }

  /* add padding  */
  .left-addon input {
    padding-left: 35px;
  }

  .right-addon input {
    padding-right: 35px;
  }

  .fsize {
    font-size: 15px;
  }

  .inp {
    width: 76%;
    background-color: transparent;
    border-width: 0px 0px 1px 0px;
    border-color: #7f8c8d;
    border-style: solid;
    margin-left: 50px;
    padding-bottom: 10px;
    padding-top: 5px;
  }
  .button1 {
    background-color: #4286f1;
    height: 40px;
    font-size: 18px;
  }
}
</style>