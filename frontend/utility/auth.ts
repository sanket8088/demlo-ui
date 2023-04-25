
import { Amplify,Auth } from "aws-amplify";
import Router from "next/router";

import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";

// Old config

Amplify.configure({
  Auth: {
    identityPoolId:'us-east-1:9459b680-f8ff-4859-a2a4-06c4c53e4d24',
    //identityPoolId:'us-east-1:b373596e-9db0-4439-84ef-bc94547b2e8e',
      region:'us-east-1',
 //     identityPoolRegion:'us-east-1',
    userPoolId: 'us-east-1_jcuKi8uJG',
    userPoolWebClientId:'4j277mtl42lo6o9b7re902kq52',
      ClientId: '4j277mtl42lo6o9b7re902kq52',
 //     ClientSecret:'1k244ql5na5rafshfurfbc3231r82halbe6um77atqouhi1185t8'
 oauth: {
  redirectSignIn: 'http://localhost:3000/profile',
  redirectSignOut: 'http://localhost:3000/login',
  redirectUrl: 'http://localhost:3000/profile',
   responseType: 'code',
    domain: 'dev-demlo-v1.auth.us-east-1.amazoncognito.com',
    scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
    identityProvider: 'Google',
  }}
});

const currentConfig = Auth.configure();

export const handleGoogleAuthentication = () =>{
  const google = Auth.federatedSignIn({
    provider: CognitoHostedUIIdentityProvider.Google
  });
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
          enabled: false,
        }
      });
 return true;
    } catch (error:any) {
      return false;
    }
  }

export async function signIn(userName: string,password: string){
  try {
    const user = await Auth.signIn(userName, password);
    return true
  } catch (error) {
    alert(error)
    return false
  }
}


export async function logout(){
  try {
    const user = await Auth.signOut();
    return true
  } catch (error) {
    alert(error)
    return false
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





  export const getUserDetailsFromSession = async  () => {
    // const token = window.localStorage.getItem('token');
    // const refreshToken = window.localStorage.getItem('refreshToken');

    // return { token, refreshToken, };
    try {
      const session = await Auth.currentSession();
      if (session.isValid()){
      const userDat= Auth.currentUserInfo();
      return userDat;
       

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

