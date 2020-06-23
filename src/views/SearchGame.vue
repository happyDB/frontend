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
                                <h1 class="display-2  text-white">Search Board Games
                                   
                                </h1>
                                <!--
                                <p class="lead  text-white">여기 검색하는거 짜주세요, 검색 결과는 recommand 내용 고대로 사용해도 될듯!</p>
                                -->
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <br>
                    <div v-if="searched=='on'" class="col-sm-1">
                        <button v-if="folded=='off'" v-on:click="isFolded" type="button" class="btn btn-primary btn-sm">접기</button>
                        <button v-if="folded=='on'" v-on:click="isUnfolded" type="button" class="btn btn-primary btn-sm">펼치기</button>
                    </div>
                    <br>
                    <div v-if="folded=='off'" class="px-4">
                            <div class="row justify-content-center">                                
                                <div class="col-sm-3" style="text-aligh: center">
                                    <small class="text-uppercase font-weight-bold">이름으로 게임 찾기</small>                                                                    
                                </div>
                                <div class="col-sm-9">
                                    <div class="from-group input-group">
                                        <span class="input-group-text">
                                            <i class="ni ni-zoom-split-in"></i>
                                        </span>
                                        <input v-model="title" @change="onChangeForTitle($event)" aria-describedby="addon-right addon-left" placeholder=" Title" class="form-control"> 
                                    </div>                                                                                                       
                                </div>
                                <br>
                                <div class="col-sm-3" style="text-aligh: center">
                                    <small class="text-uppercase font-weight-bold">플레이 타임으로 게임 찾기</small>                                                                    
                                </div>
                                <div class="col-sm-2">
                                    <span class="badge text-uppercase badge-primary">플레이 타임 : {{this.playTime[0]}}~{{this.playTime[1]}}분</span>
                                </div>
                                <div class="col-sm-7">
                                    <base-slider :range="{min: 0, max: 180}"  v-model="playTime" @input="getPlayTime"></base-slider>                                                                                                                                     
                                </div>
                                <br>
                                <div class="col-sm-3">
                                    <small class="text-uppercase font-weight-bold">플레이 인원으로 게임 찾기</small>                                    
                                </div>                          
                                <div class="col-sm-2">
                                    <span v-if="numOfPlayers != 0" class="badge text-uppercase badge-primary">플레이 인원 : {{this.numOfPlayers}}명</span>
                                    <span v-if="numOfPlayers == 0" class="badge text-uppercase badge-primary">플레이 인원 선택 안함</span>                                                                    
                                </div>
                                <div class="col-sm-7">
                                    <base-slider :range="{min:0, max:10}" v-model="numOfPlayers" @input="getNumOfPlayers"></base-slider>                                                                                                           
                                </div>
                                <div class="col-sm-3">
                                    <small class="text-uppercase font-weight-bold">게임 장르로 게임 찾기</small>  
                                </div>
                                <div class="col-sm-2">
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="genreAll" type="checkbox" class="custom-control-input" @click="genreSelectAll" v-model="genreNotAllSelected">
                                        <label for="genreAll" class="custom-control-label">
                                            장르 전체 선택
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="family" type="checkbox" class="custom-control-input" value="가족 게임" @click="genreSelect" v-model="checkedGenres">
                                        <label for="family" class="custom-control-label">
                                            가족 게임
                                        </label>
                                    </div>                                                                        
                                </div>
                                <div class="col-sm-2">
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="party" type="checkbox" class="custom-control-input" value="파티 게임" @click="genreSelect" v-model="checkedGenres">
                                        <label for="party" class="custom-control-label">
                                            파티 게임
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="puzzle" type="checkbox" class="custom-control-input" value="퍼즐" @click="genreSelect" v-model="checkedGenres">
                                        <label for="puzzle" class="custom-control-label">
                                            퍼즐
                                        </label>
                                    </div>                                    
                                </div>
                                <div class="col-sm-2">
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="tectic" type="checkbox" class="custom-control-input" value="전략 게임" @click="genreSelect" v-model="checkedGenres">
                                        <label for="tectic" class="custom-control-label">
                                            전략 게임
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="child" type="checkbox" class="custom-control-input" value="어린이 게임" @click="genreSelect" v-model="checkedGenres">
                                        <label for="child" class="custom-control-label">
                                            어린이 게임
                                        </label>
                                    </div>                                  
                                </div>
                                <div class="col-sm-3">
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="themaFocused" type="checkbox" class="custom-control-input" value="테마 집중형 게임" @click="genreSelect" v-model="checkedGenres">
                                        <label for="themaFocused" class="custom-control-label">
                                            테마 집중형 게임
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="tuningAvailable" type="checkbox" class="custom-control-input" value="튜닝 가능 게임" @click="genreSelect" v-model="checkedGenres">
                                        <label for="tuningAvailable" class="custom-control-label">
                                            튜닝 가능 게임
                                        </label>
                                    </div>                                                                                                           
                                </div>
                                <div class="text-center mt-5">
                                    <button v-if="detail_search=='off'" v-on:click="detailed" type="button" class="btn btn-primary">
                                        세부 장르 보기
                                    </button>
                                    <button v-if="detail_search=='on'" v-on:click="notDetailed" type="button" class="btn btn-primary">
                                        세부 장르 접기
                                    </button>
                                    <button v-on:click="isSearched" type="button" class="btn btn-primary">
                                        조건에 맞는 보드게임 검색
                                    </button>
                                </div>                              
                            </div>
                            <br>
                            <div v-if="detail_search=='on'" class="row justify-content-center">
                                <div class="col-sm-3">
                                    <small class="text-uppercase font-weight-bold">세부 장르로 게임 찾기</small>  
                                </div>
                                <div class="col-sm-2">
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="typeAll" type="checkbox" class="custom-control-input" @click="typeSelectAll" v-model="typeNotAllSelected">
                                        <label for="typeAll" class="custom-control-label">
                                            세부 장르 전체
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="gettingSet" type="checkbox" class="custom-control-input" value="세트 모으기"  @click="typeSelect" v-model="checkedTypes">
                                        <label for="gettingSet" class="custom-control-label">
                                            세트 모으기
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="cardDraft" type="checkbox" class="custom-control-input" value="카드 드레프트" @click="typeSelect" v-model="checkedTypes">
                                        <label for="cardDraft" class="custom-control-label">
                                            카드 드레프트
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="makingPattern" type="checkbox" class="custom-control-input" value="패턴 만들기" @click="typeSelect" v-model="checkedTypes">
                                        <label for="makingPattern" class="custom-control-label">
                                            패턴 만들기
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="random" type="checkbox" class="custom-control-input" value="복불복" @click="typeSelect" v-model="checkedTypes">
                                        <label for="random" class="custom-control-label">
                                            복불복
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="settingTyle" type="checkbox" class="custom-control-input" value="타일 놓기" @click="typeSelect" v-model="checkedTypes">
                                        <label for="settingTyle" class="custom-control-label">
                                            타일 놓기
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="puzzleMore" type="checkbox" class="custom-control-input" value="퍼즐" @click="typeSelect" v-model="checkedTypes">
                                        <label for="puzzleMore" class="custom-control-label">
                                            퍼즐
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="region" type="checkbox" class="custom-control-input" value="영역 둘러싸기" @click="typeSelect" v-model="checkedTypes">
                                        <label for="region" class="custom-control-label">
                                            영역 둘러싸기
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-3">

                                </div>
                                <div class="col-sm-2">
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="buisness" type="checkbox" class="custom-control-input" value="거래/교역" @click="typeSelect" v-model="checkedTypes">
                                        <label for="buisness" class="custom-control-label">
                                            거래/교역
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="putSCV" type="checkbox" class="custom-control-input" value="일꾼 놓기" @click="typeSelect" v-model="checkedTypes">
                                        <label for="putSCV" class="custom-control-label">
                                            일꾼 놓기
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="rollingDice" type="checkbox" class="custom-control-input" value="주사위 굴림" @click="typeSelect" v-model="checkedTypes">
                                        <label for="rollingDice" class="custom-control-label">
                                            주사위 굴림
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="chooseSimultaneously" type="checkbox" class="custom-control-input" value="동시 선택" @click="typeSelect" v-model="checkedTypes">
                                        <label for="chooseSimultaneously" class="custom-control-label">
                                            동시 선택
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="movingBetweenPoints" type="checkbox" class="custom-control-input" value="지점 간 이동" @click="typeSelect" v-model="checkedTypes">
                                        <label for="movingBetweenPoints" class="custom-control-label">
                                            지점 간 이동
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="programming" type="checkbox" class="custom-control-input" value="프로그래밍" @click="typeSelect" v-model="checkedTypes">
                                        <label for="programming" class="custom-control-label">
                                            프로그래밍
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="movingAfterDice" type="checkbox" class="custom-control-input" value="주사위(룰렛) 굴리고 이동" @click="typeSelect" v-model="checkedTypes">
                                        <label for="movingAfterDice" class="custom-control-label">
                                            주사위(룰렛) 굴리고 이동
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="defeatingOtherPlayers" type="checkbox" class="custom-control-input" value="참가자 탈락시키기" @click="typeSelect" v-model="checkedTypes">
                                        <label for="defeatingOtherPlayers" class="custom-control-label">
                                            참가자 탈락시키기
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-3">

                                </div>
                                <div class="col-sm-2">
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="deckMaking" type="checkbox" class="custom-control-input" value="덱(풀) 만들기" @click="typeSelect" v-model="checkedTypes">
                                        <label for="deckMaking" class="custom-control-label">
                                            덱(풀) 만들기
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="powerInRegion" type="checkbox" class="custom-control-input" value="영역내 영향력" @click="typeSelect" v-model="checkedTypes">
                                        <label for="powerInRegion" class="custom-control-label">
                                            영역내 영향력
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="movingToRegion" type="checkbox" class="custom-control-input" value="영역 이동" @click="typeSelect" v-model="checkedTypes">
                                        <label for="movingToRegion" class="custom-control-label">
                                            영역 이동
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="rebuildingGameBoard" type="checkbox" class="custom-control-input" value="조립식 게임판" @click="typeSelect" v-model="checkedTypes">
                                        <label for="rebuildingGameBoard" class="custom-control-label">
                                            조립식 게임판
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="auction" type="checkbox" class="custom-control-input" value="경매" @click="typeSelect" v-model="checkedTypes">
                                        <label for="auction" class="custom-control-label">
                                            경매
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="rolePlaying" type="checkbox" class="custom-control-input" value="역할 맡기" @click="typeSelect" v-model="checkedTypes">
                                        <label for="rolePlaying" class="custom-control-label">
                                            역할 맡기
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="voting" type="checkbox" class="custom-control-input" value="투표" @click="typeSelect" v-model="checkedTypes">
                                        <label for="voting" class="custom-control-label">
                                            투표
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="interaction" type="checkbox" class="custom-control-input" value="플레이어간 다양한 능력 발휘" @click="typeSelect" v-model="checkedTypes">
                                        <label for="interaction" class="custom-control-label">
                                            플레이어간 다양한 능력 발휘
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-3">

                                </div>
                                <div class="col-sm-2">
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="teamPlay" type="checkbox" class="custom-control-input" value="팀 플레이" @click="typeSelect" v-model="checkedTypes">
                                        <label for="teamPlay" class="custom-control-label">
                                            팀 플레이
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="movingFromGrid" type="checkbox" class="custom-control-input" value="격자에서 이동" @click="typeSelect" v-model="checkedTypes">
                                        <label for="movingFromGrid" class="custom-control-label">
                                            격자에서 이동
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="buildingNetwork" type="checkbox" class="custom-control-input" value="네트워크 건설" @click="typeSelect" v-model="checkedTypes">
                                        <label for="buildingNetwork" class="custom-control-label">
                                            네트워크 건설
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="betting" type="checkbox" class="custom-control-input" value="베팅" @click="typeSelect" v-model="checkedTypes">
                                        <label for="betting" class="custom-control-label">
                                            베팅
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="storytelling" type="checkbox" class="custom-control-input" value="스토리텔링" @click="typeSelect" v-model="checkedTypes">
                                        <label for="storytelling" class="custom-control-label">
                                            스토리텔링
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="battleCards" type="checkbox" class="custom-control-input" value="전투 카드 위주" @click="typeSelect" v-model="checkedTypes">
                                        <label for="battleCards" class="custom-control-label">
                                            전투 카드 위주
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="hitAndHit" type="checkbox" class="custom-control-input" value="치고받기" @click="typeSelect" v-model="checkedTypes">
                                        <label for="hitAndHit" class="custom-control-label">
                                            치고받기
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="campaign" type="checkbox" class="custom-control-input" value="캠페인" @click="typeSelect" v-model="checkedTypes">
                                        <label for="campaign" class="custom-control-label">
                                            캠페인
                                        </label>
                                    </div>                                
                                </div>
                                <div class="col-sm-3">

                                </div>
                                <div class="col-sm-2">
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="rockScissorsPaper" type="checkbox" class="custom-control-input" value="가위바위보" @click="typeSelect" v-model="checkedTypes">
                                        <label for="rockScissorsPaper" class="custom-control-label">
                                            가위바위보
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="cooperation" type="checkbox" class="custom-control-input" value="협력" @click="typeSelect" v-model="checkedTypes">
                                        <label for="cooperation" class="custom-control-label">
                                            협력
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="timeTracing" type="checkbox" class="custom-control-input" value="시간 추적" @click="typeSelect" v-model="checkedTypes">
                                        <label for="timeTracing" class="custom-control-label">
                                            시간 추적
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="actionPoint" type="checkbox" class="custom-control-input" value="액션 포인트" @click="typeSelect" v-model="checkedTypes">
                                        <label for="actionPoint" class="custom-control-label">
                                            액션 포인트
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="simulation" type="checkbox" class="custom-control-input" value="시뮬레이션" @click="typeSelect" v-model="checkedTypes">
                                        <label for="simulation" class="custom-control-label">
                                            시뮬레이션
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="trickTaking" type="checkbox" class="custom-control-input" value="트릭 테이킹" @click="typeSelect" v-model="checkedTypes">
                                        <label for="trickTaking" class="custom-control-label">
                                            트릭 테이킹
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-3">                                    
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="putUnitSecretely" type="checkbox" class="custom-control-input" value="비밀리 유닛 배치" @click="typeSelect" v-model="checkedTypes">
                                        <label for="putUnitSecretely" class="custom-control-label">
                                            비밀리 유닛 배치
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="hexagonTyle" type="checkbox" class="custom-control-input" value="육각 타일과 카운터" @click="typeSelect" v-model="checkedTypes">
                                        <label for="hexagonTyle" class="custom-control-label">
                                            육각 타일과 카운터
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-3">

                                </div>
                                <div class="col-sm-2">
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="distribution" type="checkbox" class="custom-control-input" value="물류" @click="typeSelect" v-model="checkedTypes">
                                        <label for="distribution" class="custom-control-label">
                                            물류
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="prizeProperty" type="checkbox" class="custom-control-input" value="상품 투기" @click="typeSelect" v-model="checkedTypes">
                                        <label for="prizeProperty" class="custom-control-label">
                                            상품 투기
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="drawing" type="checkbox" class="custom-control-input" value="그림 그리기" @click="typeSelect" v-model="checkedTypes">
                                        <label for="drawing" class="custom-control-label">
                                            그림 그리기
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="stock" type="checkbox" class="custom-control-input" value="주식" @click="typeSelect" v-model="checkedTypes">
                                        <label for="stock" class="custom-control-label">
                                            주식
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="acting" type="checkbox" class="custom-control-input" value="연기하기" @click="typeSelect" v-model="checkedTypes">
                                        <label for="acting" class="custom-control-label">
                                            연기하기
                                        </label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="memory" type="checkbox" class="custom-control-input" value="기억력" @click="typeSelect" v-model="checkedTypes">
                                        <label for="memory" class="custom-control-label">
                                            기억력
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input id="singing" type="checkbox" class="custom-control-input" value="노래하기" @click="typeSelect" v-model="checkedTypes">
                                        <label for="singing" class="custom-control-label">
                                            노래하기
                                        </label>
                                    </div>
                                </div>                            
                            </div>
                    </div>
                    <br>
                </card>
            </div>
        </section>
        <br>
        <br>

            <div class="container">
                <div class="row justify-content-center"> 
                    <base-pagination :page-count="10" v-model="pagination.currentPage" @input="getPageIndex"></base-pagination>
                 </div>
            </div>
            <br/>
            <br/>
        
       

    </div>
</template>

<script>

import Rating from '../components/Ratings.vue'
import GameRating from '../components/GameRating.vue'
import axios from 'axios';

export default {

  name: "home",
 components: {
    Rating,
    GameRating
  },
  data() {
    return {
      pagination: {
        currentPage: 1,
        pageSize: 6,
      },
      detail_search : 'off',
      searched : 'off',
      folded : 'off',
      searchedGames : '',
      numOfPlayers : 0,
      title : '',
      playTime : [0, 180],
      checkedGenres : ["가족 게임", "어린이 게임", "퍼즐", "파티 게임", "전략 게임", "튜닝 가능 게임", "테마 집중형 게임"],
      wholeGenres : ["가족 게임", "어린이 게임", "퍼즐", "파티 게임", "전략 게임", "튜닝 가능 게임", "테마 집중형 게임"],
      notCheckedGenres : [],
      checkedTypes : ["기억력", "세트 모으기", "거래/교역", "일꾼 놓기", "덱(풀) 만들기", "영역내 영향력", "팀 플레이", "격자에서 이동", "가위바위보", "협력", "물류", "상품 투기", "카드 드레프트", "패턴 만들기", "주사위 굴림", "동시 선택", "영역 이동", "조립식 게임판", "네트워크 건설", "베팅", "비밀리 유닛 배치", "액션 포인트", "그림 그리기", "주식", "연기하기", "트릭 테이킹", "시뮬레이션", "전투 카드 위주", "스토리텔링", "역할 맡기", "경매", "프로그래밍", "지점 간 이동", "타일 놓기", "복불복", "퍼즐", "영역 둘러싸기", "주사위(룰렛) 굴리고 이동", "참가자 탈락시키기", "투표", "플레이어간 다양한 능력 발휘", "치고받기", "캠페인", "시간 추적", "육각 타일과 카운터", "노래하기"],
      wholeTypes : ["기억력", "세트 모으기", "거래/교역", "일꾼 놓기", "덱(풀) 만들기", "영역내 영향력", "팀 플레이", "격자에서 이동", "가위바위보", "협력", "물류", "상품 투기", "카드 드레프트", "패턴 만들기", "주사위 굴림", "동시 선택", "영역 이동", "조립식 게임판", "네트워크 건설", "베팅", "비밀리 유닛 배치", "액션 포인트", "그림 그리기", "주식", "연기하기", "트릭 테이킹", "시뮬레이션", "전투 카드 위주", "스토리텔링", "역할 맡기", "경매", "프로그래밍", "지점 간 이동", "타일 놓기", "복불복", "퍼즐", "영역 둘러싸기", "주사위(룰렛) 굴리고 이동", "참가자 탈락시키기", "투표", "플레이어간 다양한 능력 발휘", "치고받기", "캠페인", "시간 추적", "육각 타일과 카운터", "노래하기"],
      notCheckedTypes : [],
      genreNotAllSelected : true,
      typeNotAllSelected : true
    }
    
  },
  methods:{
        
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
        detailed : function(){
            this.detail_search = 'on';
        },
        notDetailed : function(){
            this.detail_search = 'off';
        },
        isSearched : function(){
            this.searched = 'on';
            this.isFolded();

            var uncheckedGenres = this.wholeGenres.filter(x => !this.checkedGenres.includes(x)); 
            var uncheckedTypes = this.wholeTypes.filter(x => !this.checkedTypes.includes(x)); 

            console.log(uncheckedGenres);
            console.log(uncheckedTypes);

            axios.post('/api/games/searchGame', {
                    title : this.title,
                    playTimeMin : this.playTime[0],
                    playTimeMax : this.playTime[1],
                    numOfPlayers : this.numOfPlayers,
                    genres : uncheckedGenres,
                    types : uncheckedTypes
                }
            ).then(response=>{
                this.searchedGames = response.data;
            })

            

            console.log(this.searchedGames);

        },
        isTrue : function(value){
            return value == true;
        },
        isFolded : function(){
            this.folded = 'on'
        },
        isUnfolded : function(){
            this.folded = 'off'
        },
        onChangeForTitle(event){
            this.title = event.target.value;
        },
        getPlayTime(value)
        {
            this.playTime[0] = Math.floor(value[0]);
            this.playTime[1] = Math.floor(value[1]);
        },
        getNumOfPlayers(value){
            this.numOfPlayers = Math.floor(value);
        },
        genreSelectAll : function(){
            
            if(this.genreNotAllSelected){
                this.checkedGenres = [];
            }
            else{
                this.checkedGenres = this.wholeGenres;
            }
        },
        genreSelect : function(){
            this.genreNotAllSelected = false;
        },
        typeSelectAll : function(){
            
            if(this.typeNotAllSelected){
                this.checkedTypes = [];
            }
            else{
                this.checkedTypes = this.wholeTypes;
            }
        },
        typeSelect : function(){
            this.typeNotAllSelected = false;
        },
    },
    
};
</script>
