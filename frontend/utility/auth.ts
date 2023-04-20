
import { Amplify,Auth } from "aws-amplify";
import Router from "next/router";

import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";

// Old config

Amplify.configure({
  Auth: {
    identityPoolId:'us-east-1:b373596e-9db0-4439-84ef-bc94547b2e8e',
    //identityPoolId:'us-east-1:b373596e-9db0-4439-84ef-bc94547b2e8e',
      region:'us-east-1',
 //     identityPoolRegion:'us-east-1',
    userPoolId: 'us-east-1_Rqu9NE3eB',
    userPoolWebClientId:'6r6ion0mlj8ljp2gps7e9vl6pj',
      ClientId: '6r6ion0mlj8ljp2gps7e9vl6pj',
 //     ClientSecret:'1k244ql5na5rafshfurfbc3231r82halbe6um77atqouhi1185t8'
 oauth: {
  redirectSignIn: 'http://localhost:3000/profile',
  redirectSignOut: 'http://localhost:3000/login',
  redirectUrl: 'http://localhost:3000/profile',
   responseType: 'code',
    domain: 'demlo841283f43-41283f43-dev.auth.us-east-1.amazoncognito.com',
    scope: ['email', 'openid', 'profile'],
    identityProvider: 'Google',
  }}
});

const currentConfig = Auth.configure();

export const handleGoogleAuthentication = () =>{
  const google = Auth.federatedSignIn({
    provider: CognitoHostedUIIdentityProvider.Google
  });
  console.log(google)
  console.log('clicked google buttton')
  // Auth.currentAuthenticatedUser().then((data)=>{console.log(data)})
};

export async function signUp(username: string,password: string,given_name: string,family_name: string,email: string) {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
            given_name,
            family_name,
            birthdate : "2001-01-10",
          email,          // optional
          // other custom attributes 
        },
        autoSignIn: { // optional - enables auto sign in after user is confirmed
          enabled: true,
        }
      });
      console.log(user);
    } catch (error) {
      alert(error.message)
    }
  }

export async function signIn(userName: string,password: string){
  console.log("signin",userName,password)
  try {
    const user = await Auth.signIn(userName, password);
    console.log("userData",user)
  } catch (error) {
    alert(error.message)
    console.log('error signing in', error);
  }
}

// const user = await Auth.signIn("Sanket8088", "Gmail@123");

const isWindow = typeof window !== 'undefined';
export const setAuthToStorage = ( accessToken: string, refreshToken: string ) => {
    if (isWindow) {
      window.localStorage.setItem('token', accessToken);
      window.localStorage.setItem('refreshToken', refreshToken);
   
    }
  };



  export const getAuthFromStorage = async  () => {
      // const token = window.localStorage.getItem('token');
      // const refreshToken = window.localStorage.getItem('refreshToken');
  
      // return { token, refreshToken, };
      try {
        const session = await Auth.currentSession();
        if (session.isValid()){
          console.log( "hello",Auth.currentUserInfo().then((data) =>{
            console.log(data)

          }))
          const token =  session.getAccessToken().getJwtToken()
          const refreshToken =  session.getRefreshToken().getToken();
          return token;
        }
        else{
          Auth.signOut()
          return null
          // Router.push("/login");
        }    
      } catch (error) {
        console.log(error);
        return null;
    }
  };