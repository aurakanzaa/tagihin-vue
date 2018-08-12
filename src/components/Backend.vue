<template>
  <div class="container top" >
      <table class="table">
    <thead>
      <tr>
        <th class="center">ID</th>
        <th class="center">Nama Penerima</th>
        <th class="center">Nomor Hp Penerima</th>
        <th class="center">Email Penerima</th>
        <th class="center">Nama Penagih</th>
        <th class="center">Nomor Hp Penagih</th>
        <th class="center">Jumlah Tagihan</th>
        <th class="center">Catatan</th>
        <th class="center">Tanggal</th>
        <th class="center">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.value._id" >
        <td class="center">{{user.value._id}}</td>
        <td class="center">{{user.value.namapenerima}}</td>
        <td class="center">{{user.value.nohp}}</td>
        <td class="center">{{user.value.email}}</td>
        <td class="center">{{user.value.nampenagih}}</td>
        <td class="center">{{user.value.nohppenagih}}</td>
        <td class="center">{{user.value.jumlahtagihan}}</td>
        <td class="center">{{user.value.catatan}}</td>
        <td class="center">{{user.value.tanggal}}</td>
        <td class="center">{{user.value.status}}</td>
      </tr>
      
    </tbody>
  </table>
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
                axios.get('/api/data').then(response =>{
                    console.log(response.data.rows);
                    this.users = response.data.rows;
                })
            }
        
    }
</script>


<style>

</style>
