<template>
    <section class="section section-shaped section-lg my-0">
        <div  class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div  v-if="!goRegister" class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                
                        <template>
                          
                            <div class="text-center text-muted mb-4">
                                <br/>
                                <big>SIGN IN</big>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83"
                                            @keyup.enter="login" v-model ="userId" >
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open"
                                            @keyup.enter="login" v-model="password" >
                                </base-input>
                                <base-checkbox>
                                    Remember me
                                </base-checkbox>
                                <div class="text-center">
                                 
                                    <br/>
                                    <base-button type="primary" class="my-4" v-on:click="login" >Sign In</base-button>
                                </div>
                                <br/>
                                <br/>
                                <br/>
                                
                            </form>
                        </template>
                    </card>
                    <div class="row mt-3">
                        <div class="col-6">
                            <a href="#" class="text-light">
                                <small>Forgot password?</small>
                            </a>
                        </div>
                        <div class="col-6 text-right" v-on:click="registerToggle">
                           <a href="#" class="text-light">
                                <small>Create new account</small>
                           </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       <!--Sign up-->
        <div v-else class="container pt-lg-md"><!--구현상 편하게 여기다가 그냥 Sign up 까지 넣었음-->
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                  
                        <template>
                            <div class="text-center text-muted mb-4">
                                <big>Sign up</big>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Name"
                                            addon-left-icon="ni ni-hat-3">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <div class="text-muted font-italic">
                                    <small>password strength:
                                        <span class="text-success font-weight-700">strong</span>
                                    </small>
                                </div>
                                <base-checkbox>
                                    <span>I agree with the
                                        <a href="#">Privacy Policy</a>
                                    </span>
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button type="primary" class="my-4">Create account</base-button>
                                </div>
                            </form>
                        </template>
                        
                    </card>
                    <br/>
                    <div class="col-6 " v-on:click="registerToggle">
                           <a href="#" class="text-light">
                                <small>Go back to Sign in</small>
                           </a>
                        </div>
                </div>
            </div>
        </div>
    </section>
   
    
</template>
<script>
import axios from 'axios';

export default {
    name: 'login',
            data() {
                return {
                    checkSignUp:false,
                    userId:'',
                    password:'',
                    successLogin : false,
                    failLogin : false,
                    waitLogin : "",
                    loginCounter : 0,
                    Logintimes : true,
                    goRegister:false,
                }
            },
    methods : {
            registerToggle()
            {
                this.goRegister=!this.goRegister;
            },
            changeSignUp(){
                this.checkSignUp = false;
            },
            login : function () {
                if(this.userId == "" || this.password == "")
                {
                    alert("Please enter your ID or Password!");
                }
                else{
                    
                axios.post("/api/login",{id : this.userId, pwd: this.password}).then(res => {
                    
                    if(res.data.logined == false)
                    {
                        this.successLogin = res.data.logined;
                        this.loginCounter++;
                        this.Logintimes = false;
                       
                    }
                    else {
                        this.successLogin = res.data.logined;
                        setTimeout(()=> {
                            location.reload();
                           //alert("hello");
                        },1500);    
                    }
                        
                });
                this.userId = "";
                this.password = "";
            }
            }
           
        },
};
</script>
<style>
</style>

