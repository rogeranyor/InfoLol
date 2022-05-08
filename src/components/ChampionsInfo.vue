<template>
<div class="container">
  <div class="row row-cols-3" style="margin:2%">
    <div class="col">
      <img src="../assets/akali.png" class="img-fluid" >
    </div>
    <div class="col"><br><br><br>
        <div class="badge bg-primary text-wrap" style="width:auto" >
            <h3>Champion Name</h3>
        </div>
    </div>
    <div class="col">
            <div class="circle">
                <h3 style="color:blue">Winrate</h3>
            </div>
    </div>
  </div>

  <div class="row row-cols-2" style="margin-top:2%;">
    <div class="col">
        <div class="badge bg-primary text-wrap" style="width:auto;margin:2%">
            <h3>Runes</h3>
        </div>
        <div class="col">
            <img src="../assets/runes.png" class="img-fluid">
        </div>
    </div>
    <div class="col">
        <div class="badge bg-primary text-wrap" style="width:auto;margin:2%">
            <h3>Build</h3>
        </div>
      <div class="col">
            <img src="../assets/build.png" class="img-fluid">
        </div>
        <div class="badge bg-primary text-wrap" style="width:auto;margin:2%">
            <h3>Ability Order</h3>
        </div>
      <div class="col">
            <img src="../assets/hability.png" class="img-fluid">
        </div>    
    </div>
  </div>
</div>

</template>

<style>
.circle {
    background: yellow;
    border-radius: 200px;
    color: white;
    height: 200px;
    font-weight: bold;
    width: 200px;
    display: table;
    margin: 20px auto;
}
.circle h3 {
    vertical-align: middle;
    display: table-cell;
}
</style>

<script>
export default{
    props:{
        championName:null
    }
}
</script>


