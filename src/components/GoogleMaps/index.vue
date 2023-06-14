<template>
    <div>
        <div>
            <h2>Vue Js Search and Add Marker</h2>
            <label>
                <gmap-autocomplete @place_changed="initMarker"></gmap-autocomplete>
                <button @click="addLocationMarker">Add</button>
            </label>
            <el-button @click="locateGeoLocation">locate me</el-button>
            <br />

        </div>
        <br>
        <gmap-map :zoom="14" :center="center" style="width:100%;  height: 600px;">
            <gmap-marker :key="index" v-for="(m, index) in locationMarkers" :position="m.position"
                @click="center = m.position"></gmap-marker>
        </gmap-map>
    </div>
</template>
   
<script>


export default {
    name: "AddGoogleMap",
    data() {
        return {
            center: {
                lat: 39.7837304,
                lng: -100.4458825
            },
            locationMarkers: [],
            locPlaces: [],
            existingPlace: null
        };
    },
    mounted() {
        // this.locateGeoLocation();
    },
    methods: {
        locateBrowser() {
            if (navigator.geolocation) {
                console.log(1234235)
                navigator.geolocation.getCurrentPosition(function (position) {
                    // success
                    console.log(position);
                }, function (err) {
                    // failure
                    console.log(err);
                });
            } else {
                alert('Sorry, unsupported browser!');
            }
        },

        initMarker(loc) {
            this.existingPlace = loc;
        },
        addLocationMarker() {
            
            if (this.existingPlace) {
                console.log(this.existingPlace)
                const marker = {
                    lat: this.existingPlace.geometry.location.lat(),
                    lng: this.existingPlace.geometry.location.lng()
                };
                const locationInfo = {
                    lat: marker.lat,
                    lng: marker.lng,
                    address: this.existingPlace.formatted_address
                }
                this.locationMarkers.push({ position: marker });
                this.locPlaces.push(this.existingPlace);
                console.log(this.locationMarkers)
                this.center = marker;
                this.existingPlace = null;
                this.$emit('addData', locationInfo)
            }
        },
        locateGeoLocation: function () {
            navigator.geolocation.getCurrentPosition(res => {
                this.center = {
                    lat: res.coords.latitude,
                    lng: res.coords.longitude
                };
                this.locationMarkers.push({ position: this.center });
            });
        }
    },
};
</script>