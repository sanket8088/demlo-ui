import React, { useEffect, useState } from "react";
import { Auth, Hub } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
export interface IAuthContextType {
  user: any;
  google_signIn?: any;
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  unverifiedAccount: { email: string; password: string };
  signIn: (p: { username: string; password: string }) => Promise<any>;
  signOut: () => Promise<any>;
  signUp: (p: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    username: string;
  }) => Promise<any>;
  confirmAccount: (p: { code: string }) => Promise<any>;
}

// Create a context object
export const AuthContext = React.createContext<IAuthContextType>({
  user: null,
  isAuthenticated: false,
  isAuthenticating: true,
  unverifiedAccount: {
    email: "",
    password: "",
  },
  signIn: async () => {},
  signOut: async () => {},
  signUp: async () => {},
  confirmAccount: async () => {},
});

interface IAuthProviderProps {
  children: React.ReactNode;
}
// Create a provider for components to consume and subscribe to changes
export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [unverifiedAccount, setUnverifiedAccount] = useState({
    email: "",
    password: "",
  });

  /**
   * fetch currently logged-in user using AWS Auth library
   * @returns {Promise<void>}
   */
  const fetchAuthUser = async () => {
    setIsAuthenticating(true);
    try {
      console.log("fetchAuthUser", isAuthenticating);
      const fetchedUser = await Auth.currentAuthenticatedUser();
      setIsAuthenticating(false);
      setUser(fetchedUser);
    } catch (err) {
      setIsAuthenticating(false);
      setUser(null);
    }
  };

  useEffect(() => {
    fetchAuthUser();

    // listening for auth change events
    const authListener = Hub.listen(
      "auth",
      async ({ payload: { event, data } }) => {
        console.log("Auth Status Changed Event: ", event);
        console.log("Auth Status Changed Data: ", data);
        switch (event) {
          case "google_signIn":
            await fetchAuthUser();
            break;
          case "signIn":
            await fetchAuthUser();
            break;
          case "tokenRefresh_failure":
            await signOut();
            break;

          case "signOut":
            setUser(null);
            break;
          case "signIn_failure":
          case "signUp_failure":
            if (user) {
              setUser(null);
            }
            break;
          case "signUp":
          case "forgotPassword":
          case "forgotPasswordSubmit":
          case "forgotPasswordSubmit_failure":
          case "forgotPassword_failure":
            break;
          default:
            await fetchAuthUser();
        }
      }
    );

    // cleanup
    return () => {
      authListener();
    };
  }, []);

  /**
   * log user in
   * @param username
   * @param password
   */
  const signIn = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    await Auth.signIn({ username: username, password });
  };

  const google_signIn = async () => {
    await Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Google,
    });
  };

  /**
   * create new user account
   * @param email
   * @param password
   * @param firstName
   * @param lastName
   */
  const signUp = async ({
    email,
    password,
    firstName,
    lastName,
    username,
  }: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    username: string;
  }) => {
    await Auth.signUp({
      username,
      password,
      attributes: {
        email,
        given_name: firstName,
        family_name: lastName,
        birthdate: "2001-01-10",
      },
    });
    setUnverifiedAccount({ email, password });
  };

  /**
   * confirm account using code
   * @param confirmCode
   * @returns {Promise<any>}
   */
  const confirmAccount = async ({ code }: { code: string }) => {
    await Auth.confirmSignUp(unverifiedAccount?.email, code);
    // await signIn({
    //     username: username,
    //   password: password,
    // });
  };

  /**
   * logout user
   */
  const signOut = async () => Auth.signOut();

  const value = {
    user,
    isAuthenticated: !!user,
    isAuthenticating,
    unverifiedAccount,
    signIn,
    signOut,
    signUp,
    confirmAccount,
    google_signIn,
  };

  if (isAuthenticating) {
    return <p>Loading</p>;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
