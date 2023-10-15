const initialState = { auth: true }

// 建議可以建一個專門放放狀態的資料夾(reducers)
// 把控制狀態的reducer分開寫成各別的JS檔
export const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'show':
      return { ...state, auth: true }
    case 'hide':
      return { ...state, auth: false }
    default:
      return state
  }
}
