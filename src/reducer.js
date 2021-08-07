export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    // token: "BQA6G5UVVdTiBZz7tOow_OKJaZ61Na4 - 6fytRcREJ79fMqRCtBwiT77p6HYkDIDv2kp_QHpyno- rZPc3NlmTxdsPa3rNxS_d1eI5R0WXl3KcJbmuF81GgvXcAQKGrDq7Oy9RkZA4utIUASvbzcl2a1Xn09oxL1uMzqe54_7MlCwQ - zUg",
  }
  const reducer = (state, action) => {
    console.log(action);
  
    //Action -> type, [payload]
  
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          user: action.user
        }
      case 'SET_TOKEN':
        return {
          ...state,
          token: action.token,
        }
        case 'SET_PLAYLISTS':
        return{
          ...state,
          playlists: action.playlists,
        }
      default:
        return state
    }
  }
  export default reducer
  