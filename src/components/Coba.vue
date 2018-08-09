<template>
    <span>
        <div>
                                <p class="box1">Pengirim</p>           
                            </div>
                          
                          <!-- =====PENGIRIM===== -->
                            <div class="form-group">
                                <div class="inner-addon left-addon">
                                    <i class="icon"> <img src="../assets/user.png" height="15" weight="15"></i>
                                    <input class="text-input text-input--material" placeholder="Username" type="text" required>
                                </div>
                            </div>
    <div><input class="text-input text-input--material" placeholder="Username" type="text" required></div>
    <br />
    <div><input class="text-input text-input--material" placeholder="Password" type="password" required></div>
    </span>
</template>

<script>
    
</script>

<style>
    
    /* .top{
        margin-top: -40px;
    } */
    .font{
        font-size:30px;
        color:blue;
        font-family: serif;
    }
    .box1{
        text-align: centered;
        font-weight: bold;
        color: white;
        height: 40px;
        width: 100px;
        margin-bottom:30px;
        margin-top:20px;
        padding-top: 10px;
        padding-right: 75px;
        padding-left: 40px;
        background-color: #4286F1;
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
    .left-addon .icon  { left:  50px;}
    .right-addon .icon { right: 0px;}

    /* add padding  */
    .left-addon input  { 
        padding-left:  35px; 
    }

    .right-addon input { 
        padding-right: 35px; 
    }

    .fsize{
        font-size:15px;
    }

    .inp { 
        width:86%;
        background-color: transparent; 
        border-width: 0px 0px 1px 0px; 
        border-color: #7F8C8D;
        border-style: solid; 
        margin-left:50px;
    }
    .button1 {
        background-color: #4286F1;
        height: 40px;
        font-size: 18px;
       
    }
    
</style>
