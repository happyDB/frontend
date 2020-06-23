<template>
    <div>

        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-7">
                                <h1 class="display-2  text-white">Search Stores
                                   
                                </h1>
                                <p class="lead  text-white">매장 찾기</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg pt-lg-0" style="padding-bottom:0px;">
            <div class="container">
                <div class="card card-profile mt--300 shadow">
                    <div class="px-4">
                        <div class="row justify-content-center">
            
                        </div>
                        <div class="text-center mt-5">
                            
                        </div>
                            <div class="row justify-content-center" style="padding-bottom:50px;">
                                <div class="col-lg-9">
                                    <div class="row">
                                        <div class="col-lg-12 ">
                                            <div id = "root" class="form-group input-group">
                                                <input aria-describedby="addon-right addon-left" placeholder="Search Store" @keyup.enter="onSubmitForm" class="form-control" v-model="storeName">
                                                <div class="input-group-append">
                                                    <span class="input-group-text">
                                                        <div class="btn-wrapper">
                                                            
                                                            <i class="ni ni-zoom-split-in" v-on:click="onSubmitForm">
                                                            </i>
                                                             
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-9">
                                    <span><base-button v-on:click="foldOption" type="info" size="sm" class="mr-4">상세 조건</base-button></span>
                                </div>
                                
                                <div v-if="fold" class="col-lg-12" style="margin-top:20px;">
                                    <hr style="margin-bottom:50px;"/>
                                    <div class="col-lg-9" style="margin-left:120px;">
                                        <p style="text-align:left;">
                                            <span>게임으로 매장찾기 : <input type="text" id="byGame" v-model="gameHased"  placeholder = ""/></span>
                                            <span style="float:right;">오 픈 시 간 : <input type="text" v-model="openTime"  placeholder = ""/></span>
                                            
                                        </p>
                                        <p style="text-align:left;">
                                            <span>지역으로 매장찾기 : <input type="text" id="byRegion" v-model="region"  placeholder = ""/></span>
                                            <span style="float:right;">마 감 시 간 : <input type="text" id="byClose" v-model="closeTime"  placeholder = ""/></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
        <div v-if="isSearched" class="container">
            <div class="card card-profile mt-300 shadow">
                <div class="px-4">
                    <div class="row justify-content-center">
                        <div v-for="s in searchedStores" :key="s.store_ID" style="padding-top:3%; padding-left:5%; width:1500px; text-align: left;">
                                        
                                         <div class="sub">
                                        <span id="commentWriter"> {{s.Name}} </span>
                                        <span id="commentContent">{{s.Add1}} {{s.Add2}} | {{s.Zip_code}} | {{s.Open_time}} | {{s.Close_time}} </span>                                    
                                         </div>                                         
                        </div>                             
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row justify-content-center"> 
                    <base-pagination :page-count="10" v-model="pagination.currentPage" @input="getPageIndex"></base-pagination>
                 </div>
            </div>
            <br/>
            <br/>
        </div>
       

    </div>
</template>
<style scoped>
#commentWriter{
    font-size: 15px;
    font-weight: bold;
    margin-right: 1%;
}
#commentContent{
     margin-right: 1%;
     color: gray;
     padding-left: 10px;
     
}
#commentContent{
     margin-right: 1%;
     width: 80%;
     
}
.sub{
    margin:10px;
     width:600px;
       text-align: left;
        margin-left: 10%;
}

</style>
<script>
import Rating from '../components/Ratings.vue'
import GameRating from '../components/GameRating.vue'
import axios from 'axios';
/*
const app = new Vue({
    el : ".form-group .input-group",
    data : {
        always : ""
    },
    methods : {
        
    }
})
*/
export default {

    name: "home",
    components: {
        Rating,
        GameRating
    },
    data() {
        return {
            fold : false,
            isSearched : false,
            storeName : "",
            openTime : "",
            closeTime : "",
            region : "",
            gameHased : "",
            searchedStores : "",
            pagination: {
                currentPage: 1,
                pageSize: 6,
            }
        }
    },

/*
    created(){
        EventBus.$emit('value-input', ()=>{
            value : this.always
        });
    }, 

*/
  methods:{
        foldOption() {
            this.fold =! this.fold;
        },
        onSubmitForm : function() {
            this.isSearched = true;
            console.log("search");

            axios.post('/api/stores/searchStore', {
                    storeName : this.storeName,
                    region : this.region,
                    gameHased : this.gameHased,
                    openTime : this.openTime,
                    closeTime : this.closeTime
                }
            ).then(response=>{
                this.searchedStores = response.data;
                
            }).then(()=>{
                console.log(this.searchedStores);
            });
        },
        getPageIndex(index)
        {
            this.pagination.currentPage=index;
        },
        paginatedData() {
            const start = this.pagination.currentPage * this.pagination.pageSize,
                end = start + this.pagination.pageSize;
            
            let result;//get으로 page 크기만큼 보드게임 정보 DB에서 받아오기!!!
            return result;
        },
    },
};
</script>
