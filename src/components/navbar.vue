<template>
  <div class="navbar">
      <div class="navbarInner">
          <img class="navLogo" src="../assets/logo.svg" />
            <div class="navSearchWrap">
                <input class="geoInpt" placeholder="Search City" />
                <button @click="LocationSearch" id="geoSrch">Search</button>
            </div>
          <div class="geoResults">
            <div class="geoResultRow" @click="$emit('updateLocation', location.lat, location.lon, location.name)" v-for="(location, index) in geoObj" :key="index">
                <div class="geoResultRowTop">

                    <div class="geoRsltCity">{{location.name}}</div>
                </div>
                <div class="geoRsltState">{{location.state}}</div>&nbsp;
                <div class="geoRsltCountry">{{location.country}}</div>
            </div>
          </div>
      </div>
  </div>
  <div class="sub-navbar">
      <div class="navLinksWrap">
          <div class="navLink navLinkActive">Lorem</div>
          <div class="navLink">Lorem</div>
          <div class="navLink">Lorem</div>
          <div class="navLink">Lorem</div>
          <div class="navLink">Lorem</div>
          <div class="navLink">Lorem</div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  data() {
      return {
          geoObj: null
      }
  },
  mounted() {
    document.addEventListener('click', function(e){
        e;
        //console.log(e.target.className);
    });
  },
  methods: {
      LocationSearch() {
          let q = document.querySelector('.geoInpt').value.trim();
          q = q.replace(' ', '+');
          this.geoFetch(q);
      },
      geoFetch(q) {
        fetch('https://api.openweathermap.org/geo/1.0/direct?q='+q+'&limit=10&appid=42ea1de4e2faa59a9dcbf2a2c7cf8b2c')
        .then(resp => resp.json())
        .then(json => this.geoObj = json)
        .catch(err => console.log(err.message))
      }
  }
}
</script>