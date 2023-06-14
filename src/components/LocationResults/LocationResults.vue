<template>
    <div class="table-wrapper">
        <div class="top">
            <p>{{ timezoneData.zoneName }}-{{ timezoneData.formatted }}</p>
            <el-button type="danger" icon="el-icon-delete" @click="handleDelete" style="margin-right: 0px;">Delete
                Selected</el-button>

        </div>

        <el-table :data="locations.slice((currentPage - 1) * pageSize, currentPage * pageSize)" height="250"
            style="width: 100%;" :height="tableHeight" @selection-change="changeBox">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column prop="position.address" label="Address">

            </el-table-column>
            <el-table-column prop="position.lat" label="lat" width="180">

            </el-table-column>
            <el-table-column prop="position.lng" label="lng" width="180">

            </el-table-column>

        </el-table>
        <el-pagination background layout="prev, pager, next,jumper, ->, total" :total="locations.length"
            @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize"
            style="text-align: center">
        </el-pagination>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'CodeSubmissionMapsIndex',
    props: {
        locationMarkers: [],
    },

    data() {
        return {
            selectedList: [],
            locations: this.locationMarkers,
            currentPage: 1,
            pageSize: 10, //rows shown for each page
        };
    },

    computed: {
        ...mapState({
            timezoneData: (state) => {
                return state.timezone.timezone
            }
        })
    },

    mounted() {

    },

    methods: {
        changeBox(val) {
            this.selectedList = []
            val.forEach((item) => {
                this.selectedList.push(item)
            })
            console.log(this.selectedList)

        },
        //delete from table list
        handleDelete() {
            this.$emit('deleteItem', this.selectedList)
        },


        handleCurrentChange(currentPage) {
            this.currentPage = currentPage; //每次点击分页按钮，当前页发生变化
            // console.log(this.currentPage);
        },
    },
};
</script>

<style scoped>
.table-wrapper {
    text-align: right;
}

.top{
    display: flex;
    justify-content: space-between;
}
</style>