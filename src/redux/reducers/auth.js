const initialState = {
    isLogin: false,
    isError: false,
    errorMsg: '',
    token: ''
  }
  
  export default (state = initialState, action) => {
    switch(action.type){
      case 'LOGIN_CUSTOMER_PENDING' : {
        return {
          ...state,
          isLoading: true
        }
      }
      case 'LOGIN_CUSTOMER_REJECTED': {
        return {
          ...state,
          isLoading: false,
          isError: true,
          alertMsg: 'Wrong email or password'
        }
      }
      case 'LOGIN_CUSTOMER_FULFILLED': {
        return {
          ...state,
          isLoading: false,
          isLogin: true,
          token: action.payload.data.token
        }
      }
      case 'LOGOUT_CUSTOMER':{
        return{
          isLogin:false,
          isError:false,
          token: '',
          alertMsg: 'Logout Successfully'
        }
      }
      case 'SET_TOKEN':{
        return{
          ...state,
          isLogin:true,
          token:action.payload.data.token
        }
      }
      default : {
        return state
      }
    }
  }