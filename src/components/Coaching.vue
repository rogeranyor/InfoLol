<template>
<div>
  <div class ="container-fluid mt-2 " style="background-color:#1A659E; height: 80px">
    <div class="row">
      <div class="col">
        <p class=" float-start align-self-center" style="color: #FF6B35; font-size: 2vmax; text-align: center;">Coaching</p>
      </div>
    </div>
  </div>
  <div class ="container-fluid" style="background-color: #7A7265;">
  <div class="row">
      <div class="col-lg-3 col-md-1 mb-4 mt-2" v-for="(coach) in [1,2,3,4]" :key="coach">
        <div class="card" style="text-align: center">
          <img class="card-img-top" v-bind:src="require('../assets/coach.jpg')" />
          <div class="card-body">
            <h5 class="card-title">Coach Name</h5>
            <h6 class="card-subtitle mb-2 text-muted">Peak Rank</h6>
            <h6 class="card-text"><strong>Coaching for Ranks:</strong></h6>
            <h6 class="card-text">#FF6B35-Diamond</h6>
            <h6 class="card-text">Price €</h6>
            <button class="btn btn-success btn-lg">Request Coaching</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
:root {
    --maincolor: #1A659E;
    --secondarycolor: #004E89;
    --backgroundcolor: #EFEFD0;
    --forthcolor: #7A7265;
    --fifthcolor: #FF6B35;
}
</style>

<script>
export default {
  created () {
    document.body.style.backgroundColor = '#EFEFD0'
    this.getChamps()
  }
}
</script>
