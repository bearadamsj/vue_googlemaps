<template>
    <div>
        <el-row>
            <h2>Map and Log</h2>
        </el-row>
        <el-row class="row">

            <el-col :span="10">
                <div class="maps-auto">

                    <label>
                        <gmap-autocomplete class="input-search" @place_changed="initMarker" :select-first-on-enter=true
                            @keyup.enter="addLocationMarker"></gmap-autocomplete>
                        <el-button type="primary" @click="addLocationMarker">Search</el-button>
                    </label>
                    <el-button type="primary" @click="locateGeoLocation">locate me</el-button>
                    <br />

                </div>
                <br>
                <gmap-map :zoom="14" :center="center" style="width:100%;  height: 600px;">
                    <gmap-marker :key="index" v-for="(m, index) in locationMarkers" :position="m.position"
                        @click="center = m.position"></gmap-marker>
                </gmap-map>

            </el-col>

            <el-col :span="10">
                <LocationResults :locationMarkers="locationMarkers" @deleteItem="deleteMarkedLocation" />
            </el-col>


        </el-row>

    </div>
</template>
   
<script>
import {mapState} from 'vuex'
import LocationResults from '../LocationResults/LocationResults.vue'
export default {
    name: "AddGoogleMap",
    components: {
        LocationResults
    },

    data() {
        return {
            center: {
            },
            locationMarkers: [],
            locPlaces: [],
            existingPlace: null
        };
    },
    mounted() {
        navigator.geolocation.getCurrentPosition(res => {
            this.center = {
                lat: res.coords.latitude,
                lng: res.coords.longitude
            };

        });
    },

    computed:{

    },

    methods: {
        locateBrowser() {
            if (navigator.geolocation) {

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

                const marker = {
                    lat: this.existingPlace.geometry.location.lat(),
                    lng: this.existingPlace.geometry.location.lng()
                };
                const position = {
                    lat: marker.lat,
                    lng: marker.lng,
                    address: this.existingPlace.formatted_address,
                    place_id: this.existingPlace.place_id
                }

                if (!this.locationMarkers.some(item => item.position.place_id == position.place_id)) {

                    this.locationMarkers.push({ position: position });
                    this.locPlaces.push(this.existingPlace);

                    this.center = marker;
                    this.existingPlace = null;
                }
                const currentDate = new Date();
                const timestamp = currentDate.getTime();

                
                this.$store.dispatch('getTimeZone', {lat: `${marker.lat}`,lng: `${marker.lng}`, key: "YIH2AF3UE5GQ"})

                // this.$emit('addData', position)
            }
        },


        deleteMarkedLocation(locationList) {
            console.log(this.locationMarkers, locationList);
            locationList.forEach(element => {

                if (this.locationMarkers.indexOf(element) >= 0) {
                    console.log('exist')
                    console.log(this.locationMarkers.indexOf(element));

                    this.locationMarkers.splice(this.locationMarkers.indexOf(element), 1)
                }
                console.log(this.locationMarkers, 'deletion of marked Location is triggered');
            });
        },


        locateGeoLocation: function () {
            console.log('locate me is clicked')
            navigator.geolocation.getCurrentPosition(res => {
                this.center = {
                    lat: res.coords.latitude,
                    lng: res.coords.longitude
                };

            });
            const position = {
                lat: this.center.lat,
                lng: this.center.lng,
                address: 'Me',
                place_id: 'na'
            }

            if (!this.locationMarkers.some(item => item.position.place_id == position.place_id)) {
                console.log(this.locationMarkers.indexOf(position), this.locationMarkers);
                this.locationMarkers.push({ position: position });
            }

        },


    },
};
</script>

<style>
.input-search {
    height: 35px;
    border-radius: 5px;
    margin-right: 20px;
    width: 400px;
}

.maps-auto {
    display: flex;
    justify-content: space-between;
}

.row {
    display: flex;
    justify-content: space-around;
}
</style>