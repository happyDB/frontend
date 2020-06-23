<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
               <div class="container shape-container d-flex">
                    <div class="col px-3">
                        <div class="row">
                            <div class="col-lg-7" style="position: relative; margin-top:-50px;">
                                <h1 class="display-2  text-white"> Manage Store
                                </h1>
                               
                                
                            </div>
                            
                        </div>
                    </div>
                   
                    
                </div>
        </section>
        <section class="section section-skew">
            <div v-if = "goF" class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                       
                        <h4 class="display-4" style="padding-top:5%; padding-left:5%;">매장 등록 ::</h4>
                            
                          
                        <div class="mt-5 py-5 border-top text-center">
                             
                            <div class="row justify-content-center">
                               
                                <div class="col-lg-9">
                                 <div class="row">
                                     <div class="col-lg-12 " style="padding-bottom:30px;">
                                         <div style="float:left;">
                                             <span>매장 이름 : </span>
                                             <input type="text" id="writeName" v-model="name"  placeholder = ""/>
                                         </div>
                                         <div style="float:right;">
                                             <span>매장 주소 : </span>
                                             <input type="text" id="writeAdd1" v-model="add1"  placeholder = ""/>
                                         </div>
                                     </div>
                                     <div class="col-lg-12 " style="padding-bottom:30px;">
                                         <div style="float:left;">
                                             <span>전화 번호 : </span>
                                             <input type="text" id="writeNumber" v-model="number"  placeholder = ""/>
                                         </div>
                                         <div style="float:right;">
                                             <span>상세 주소 : </span>
                                             <input type="text" id="writeAdd2" v-model="add2"  placeholder = ""/>
                                         </div>
                                     </div>
                                     <div class="col-lg-12" style="padding-bottom:30px;">
                                         <div style="float:left;">
                                             <span>오픈 시간 : </span>
                                             <input type="text" id="writeOpen" v-model="open"  placeholder = ""/>
                                         </div>
                                         <div style="float:right;">
                                             <span>마감 시간 : </span>
                                             <input type="text" id="writeClose" v-model="close"  placeholder = ""/>
                                         </div>
                                     </div>
                                     <div class="col-lg-12 ">
                                         <div style="float:left;">
                                             <span>우편 번호 : </span>
                                             <input type="text" id="writeZip" v-model="zip"  placeholder = ""/>
                                         </div>
                                     </div>
                                 </div>
                                 
                                </div>
                            </div>
                          
        
       
  
                        </div>
                        <div class="py-5 border-top text-center">
                                                <base-button v-on:click="addStore" style="" type="info" size="sm" class="mr-4">Submit</base-button>
                                          </div>
                    </div>
                </card>
            </div>
            <div v-else class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                       <h4 v-if="!action1" class="display-4" style="padding-top:5%; padding-left:5%;">매장 관리 ::</h4>
                        <h4 v-else class="display-4" style="padding-top:5%; padding-left:5%;">매장명 :: {{mS.Name}}</h4>
                            
                          
                        <div class="mt-5 py-5 border-top text-center">
                             
                            <div class="row justify-content-center">
                               
                                <div class="col-lg-9">
                                 <div class="row">
                                     <div v-if="!action1" class="col-lg-12 " style="padding-bottom:20px;">
                                         <span>현재 등록한 매장이 없습니다. 매장 등록 버튼을 통해 등록해주세요!</span>
                                     </div>
                                     <div v-else class="col-lg-12 ">
                                         
                                        <span><base-button type="info" size="sm" class="mr-4" style="margin-top:30px">게임목록</base-button></span>
                                        <span><base-button style="margin-top:30px" type="info" size="sm" class="mr-4">수정하기</base-button></span>
                                        <span><base-button style="margin-top:30px" type="info" size="sm" class="mr-4">삭제하기</base-button></span>
                                          </div>
                                          
                                     
                           
                                 </div>
                                 
                                </div>
                            </div>
                          
        
       
  
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                                            <div v-if="!action1" class="col-lg-12 ">
                                                <base-button v-on:click="goForm" style="margin-top:30px" type="info" size="sm" class="mr-4">Register</base-button>
                                            </div>
                                            <div v-else>
                                            </div>
                                          </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
import axios from 'axios';
import Rating from '../components/Ratings.vue'
import GameRating from '../components/GameRating.vue'
import ReviewRating from '../components/ReviewRating.vue'
export default {

name: "gameDetail",
 components: {
    Rating,
    GameRating,
    ReviewRating
  },
data() {
    return {
      goF : false,  
      action1:false,
      action2:false,
      action3:false,
      content: '',
      name : '',
      add1 : '',
      add2 : '',
      number : '',
      open : '',
      close : '',
      zip : '',
      manageStore : '',
      mS : ''




    }
},
async beforeCreate() {
    const result = await axios.get("api/games/manageStore");
    this.mS = result.data[0];
    console.log(this.mS);
    if (this.mS!=null){
        this.action1 = true;
    }
},


  methods: {
      goForm(){
          this.goF=!this.goF;
      },
      hasStore(){
          this.goF=!this.goF;
          this.action1=true;
      },
      addStore : function(){
                
        if(this.name!='')
        {
            axios.post('/api/games/manageStore', {
                name : this.name,
                add1 : this.add1,
                add2 : this.add2,
                number : this.number,
                open : this.open,
                close : this.close,
                zip : this.zip
            }
        ).then(response=>{
            console.log(response);
            this.manageStore = response.data;
            hasStore();
        }).then(()=>{
            
            
        })
        }
        console.log(this.manageStore);
     },
     a2()
     {
         this.action2=true;
     },
     a3(){
         this.action2=false;
         this.action1=false;
     }
   
  },
}

</script>
<style>
@media all and (min-width:1000px) {
  .game-name{
      padding-top: 50px;
  }
}

#non-heart{
    color: gray;
    float: right;
    margin-top: 5px;
    font-size: 30px;
}
#heart{
    color: red;
    float: right;
    margin-top: 5px;
    font-size: 30px;
}
#writeComment{
    width: 90%;
    margin:10px;
    margin-top: -5px;
    

    
     
}
#commentButton{
    border : 1.5px solid #d752ff;
      color:#d752ff;
    margin-left: 20px;
    width:70px;
    height: 30px;
     font-size: 18px;
     border-radius: 5px;
     background-color: white;
}
#commentWriter{
    font-size: 15px;
    font-weight: bold;
    margin-right: 5%;
}
#commentContent{
     margin-right: 1%;
     color: gray;
     padding-left: 10px;
     
}
#commentDate{
    font-size: 11px;
    color:rgb(160, 159, 159);
}
#deleteButton{
     border : 1.5px solid #d752ff;
    color:#d752ff;
    margin-left: 20px;
    width:50px;
    height: 20px;
     font-size: 10px;
     border-radius: 5px;
     background-color: white;
}
#commentWriter{
    font-size: 15px;
    font-weight: bold;
    margin-right: 1%;
}
#commentContent{
     margin-right: 1%;
     
}

</style>
