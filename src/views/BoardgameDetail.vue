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
                                <h1 class="display-2  text-white"> Board Game Detail
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
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="boardgame.Img_url" class="raised">
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <a href="#/recommand">
                                    <base-button type="default" size="sm" class="mr-4">Go Back</base-button>
                                    </a>
                                     <div style="float: right; top: 30%; left: 90%; width: 30px; position: absolute">
                                    
                                    <i v-if="!toggleHeart" id="non-heart" class="fa fa-heart" v-on:click="Heart2game"/>
                                    <i v-else id="heart" class="fa fa-heart" v-on:click="Heart2game"/>
                                    
                                    </div>
                                    <!--base-button type="default" size="sm" class="float-right">Save</base-button-->
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                   <!--j> <div>
                                        <span class="heading">NaN</span>
                                        <span class="description">Friends</span>
                                    </div>
                                    <div>
                                        <span class="heading">10</span>
                                        <span class="description">Photos</span>
                                    </div>
                                    <div>
                                        <span class="heading">89</span>
                                        <span class="description">Comments</span>
                                    </div>
                                    <j-->
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-3">
                            <h4 class="game-name">{{boardgame.Title}}
                            </h4>
                            <GameRating :grade="computeRating()" :maxStars="5" :hasCounter="true" />
                            <div>
                            <span> 플레이 시간: {{boardgame.Min_play}} ~ {{boardgame.Max_play}} (분)</span>        
                            </div>
                            <div>
                                <span> 플레이 인원 수: </span><span v-for="n in numOfPlayer" :key="n.Number_of_players"> 
                                    {{n.Number_of_players}}
                                    </span> (명)
                            </div>
                            <div>
                                <badge v-for="g in genreList" :key="g.Genre" type="primary" rounded>{{g.Genre}}</badge>
                            </div>
                            </div>
                          
                        <div class="mt-5 py-5 border-top text-center">
                             <h5 class="game-name" style="padding-bottom:20px;">Review
                            </h5>
                            <div class="row justify-content-center">
                               
                                <div class="col-lg-9">
                                 <div class="row">
                                     <div class="col-lg-12 ">
                                          <div id="commentData" v-for="r in reviewList" :key="r.Review_ID" style="text-align: left;">
                                            <div  class="col-lg-8 " style="float: left; margin-bottom: 25px;">
                                            <span id="commentWriter">{{r.Name}} : </span>
                                            <span id="commentContent">{{r.Comment}}</span>
                                            </div>
                                            <div style="float: right; margin-bottom: 15px;">
                                                <div  style="float:left; margin-right: 10px;">
                                            <ReviewRating :grade="r.Rating" :maxStars="5" :hasCounter="true"/>   
                                                </div>
                                                <div style="float: right;">
                                            <span  v-if="checkUser(r.Member_ID)"><button @click="deleteComment(r.Review_ID)" id="deleteButton" >Delete</button></span>
                                            </div>
                                           
                                            </div>
                                                 
                                            </div>
                                     </div>
                                     <div class="col-lg-12 ">
                                             <hr align="left" style ="color : #dddfe6; border: 1px solid;  margin-top:2%; border-style: dashed;"/>
                                        <div class="col-lg-9 " style="float:left;">
                                       <input type="text" id="writeComment" @keyup.enter="addComment" v-model="content"  placeholder = "Comment"/>
                                        </div>
                                     <div style="float: right;">
                                         <div  style="float:left; margin-right: 10px;">
                                          <Rating :grade="defaultRate" :maxStars="5" :hasCounter="true" @input="getRating"/>
                                         </div>
                                         <div style="float: right;">
                                        <base-button type="info" size="sm" class="mr-4" @click="addComment">Save</base-button>
                                         </div>
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
     
      userID: '',
      boardgame: '',
      toggleHeart: false,
      genreList:'',
      content: '',
      reviewList:[],
      genreList:[],
      reviewRating: 0,
      gameRating: 5,
      numOfPlayer:[],
      defaultRate: 0,





    }
},
async beforeCreate() { //백엔드에서 games 가져오는 rest.
    const result = await axios.get("/api/login");
    this.userID = result.data.userID;
    var id = this.$route.params.idx
    const genreresult = await axios.get("/api/games/gamegenre/"+id);
    this.genreList=genreresult.data;
    const gameresult = await axios.get("/api/games/boardgame/"+id);
    this.boardgame = gameresult.data;
    const heartresult = await axios.get("/api/games/heart/"+id);
    this.toggleHeart = heartresult.data.heart;
    const reviewresult = await axios.get("/api/games/boardgame/"+id+"/review");
    this.reviewList= reviewresult.data;
    const playerresult = await axios.get("/api/games/boardgame/"+id+"/player");
    this.numOfPlayer= playerresult.data;
    //this.computeRating();

           
  },

  methods: {
    async Heart2game()
    {
        var id = this.$route.params.idx;
        this.toggleHeart = !this.toggleHeart;
        if(this.toggleHeart)
        {
            await axios.post("/api/games/heart/"+id,{userID : this.userID });
        }
        else{

            await axios.delete("/api/games/heart/"+id, {
                data:{
                    userID: this.userID
                }
            });
        }
    },
    checkUser(id){
                if(this.userID==id) return true;
                else return false;
            },
    async deleteComment(idx){
        var id = this.$route.params.idx
        await axios.delete("/api/games/review/"+idx);//댓글삭제 api요청
        const reviewResult = await axios.get("/api/games/boardgame/"+id+"/review");
        this.reviewList = reviewResult.data;
         //this.computeRating();
        
    },
    computeRating()
    {   
        let sum=0;
        let l=this.reviewList.length;
        for(let i=0; i<l;i++){
            sum+=this.reviewList[i].Rating;
        }
        sum=sum/l;
              //  alert(Math.round(sum))
        return Math.round(sum);

        

    },
  
    checkInput(input)//따옴표 check하는 코드
    {
                return String(input).replace('\'','\'\'')
    },
    async addComment(){
                
                if(this.content!='')
                {
                    
                    var id = this.$route.params.idx
                    await axios.post("/api/games/boardgame/"+id+"/review",{content :this.checkInput(this.content), userID : this.userID, rating: this.reviewRating});
                    this.content='';
                    
                    const reviewresult = await axios.get("/api/games/boardgame/"+id+"/review");
                    this.reviewList =  reviewresult.data;
                     //this.computeRating();
                }
     },
     getRating(stars){
         this.reviewRating=stars;
         this.defaultRate=0;
         //alert(this.reviewRating);
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
    margin-right: 1%;
}
#commentContent{
     margin-right: 1%;
     
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
