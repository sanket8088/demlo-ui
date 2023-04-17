const isWindow = typeof window !== 'undefined';
export const setAuthToStorage = ( accessToken: string, refreshToken: string ) => {
    if (isWindow) {
      window.localStorage.setItem('token', accessToken);
      window.localStorage.setItem('refreshToken', refreshToken);
   
    }
  };



  export const getAuthFromStorage = () => {
    if (isWindow) {
      const token = window.localStorage.getItem('token');
      const refreshToken = window.localStorage.getItem('refreshToken');
     
  
      return { token, refreshToken, };
    }
    return {};
  };