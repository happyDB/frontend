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
                                <h1 class="display-2  text-white"> Manage Games
                                </h1>
                               
                                
                            </div>
                            
                        </div>
                    </div>
                   
                    
                </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                       
                        <h4 class="display-4" style="padding-top:5%; padding-left:5%;"> 매장명 :: 아주보드게임</h4>
                            
                          
                        <div class="mt-5 py-5 border-top text-center">
                             
                            <div class="row justify-content-center">
                               
                                <div class="col-lg-9">
                                 <div class="row">
                                     <div v-if="!has" class="col-lg-12 " style="padding-bottom:20px;">
                                         <span>현재 보유 중인 보드게임이 없습니다. 아래 검색을 통해 추가 해보세요!</span>
                                     </div>
                                     <div v-else class="col-lg-9 " style="padding-bottom:20px;">
                                         <h5 style="margin-left:-250px; padding:10px; font-weight: bold;">Board Game List</h5>
                                          <span id="commentWriter"> 할리갈리 링크 </span>
                                        <span id="commentContent">가족게임 | 어린이게임 | 파티게임</span>
                                        <a href="#/managegame" @click="a3"><span style="color:red; font-weight: bold; margin-left:10px;"> X </span></a>
                                          </div>
                                     <div class="col-lg-12 ">
                                             <hr align="left" style ="color : #dddfe6; border: 1px solid;  margin-top:2%; border-style: dashed;"/>
                                             <h5 class="display-5" style="padding-bottom:30px; padding-top:5%; padding-left:5%;">Search Board Game</h5>
                                        <div class="col-lg-9 " style="float:left;">
                                        
                                       <input type="text" id="writeComment" @keyup.enter="addComment" v-model="content"  placeholder = "Search"/>
                                        </div>
                                     <div style="float: right;">
                                        
                                         <div style="float: right;">
                                        <base-button type="info" size="sm" class="mr-4" @click="addComment">search</base-button>
                                         </div>
                                     </div>
                                     </div>
                                     <div v-for="g in searchgames" :key="g.Board_game_ID" style="padding-top:3%; padding-left:5%; width:550px; text-align: left;">
                                         <div style="margin:10px;">
                                        <span id="commentWriter"> {{g.Title}} </span>
                                        <span id="commentContent">{{g.Genre}}</span>
                                        <span ><button @click="add(g.Board_game_ID)" id="deleteButton" >Add</button></span>
                                         </div>
                                        
                                     </div>


                                 </div>
                                 
                                </div>
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

export default {

name: "gameDetail",
 components: {
  
  },
data() {
    return {
     
      content: '',
      searchgames:[],
      hasgames:[],
      has: false,
      userID:''

     


    }
},
async beforeCreate() { //백엔드에서 games 가져오는 rest.
    const result = await axios.get("/api/login");
    this.userID = result.data.userID;
    const hasresult=await axios.get("/api/games/manage/",{userID :this.userID})

    this.hasresult = hasresult.data;
           
  },

  methods: {
      async add(id){
               await axios.post("/api/games/manage"+id,{userID :this.userID});
     },
     async addComment(){
                
                if(this.content!='')
                {
                
                    const searchresult = await axios.post("/api/games/manage/search",{content :this.content,});
                    this.content='';
                   
                    this.searchgames =  searchresult.data;
                    
                }
     },
     
     
   
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
    margin-right: 1%;
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
     width: 80%;
     
}
.sub{
    margin:10px;
     width:600px;
       text-align: left;
        margin-left: 10%;
}

</style>
