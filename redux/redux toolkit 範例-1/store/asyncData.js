// 從toolkit解構createAsyncThunk後引入
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = { asyncData: {} }

export const getAsyncData = createAsyncThunk(
  // 格式是"slice.name/action type"
  'asyncData/getAsyncData',
  async (url) => {
    const response = await axios.get(url)
    // console.log('response.data', response.data)
    return response.data
  }
)

const asyncDataSlice = createSlice({
  name: 'asyncData',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    // 成功時回傳
    [getAsyncData.fulfilled]: (state, action) => {
      console.log('fulfilled')
      console.log('state', state)
      console.log('action', action)
      state.asyncData = action.payload
    },

    // pending階段回傳
    [getAsyncData.pending]: (state, action) => {
      console.log('pending')
    },

    // 失敗時回傳
    [getAsyncData.rejected]: (state, action) => {
      console.log('rejected')
      state.asyncData = { ...initialState.asyncData }
    },
  },
})

export const asyncDataActions = asyncDataSlice.actions

const asyncDataReducer = asyncDataSlice.reducer
export default asyncDataReducer

// createAsyncThunk()
// 用來處理非同步，一般來說會寫在slice的檔案裡。
// 使用時是先用變數去承接createAsyncThunk()產生的結果，並把它export匯出
// createAsyncThunk()有兩個參數，第一個是觸發的action type，這裡要注意的一點是它的格式要是"slice.name/action type"(但測試改成隨便的字串也可以使用，不知道差在哪)。第二個參數是call back，AJAX就寫在()裡
// 然後再slice裡，在新增一個extraReducers，這裡面要放三個action type，來代表異步回傳的結果，分別是fulfilled(成功時回傳)，pending(pending階段回傳)，rejected(失敗時回傳)，其值是function，傳參是state、action，state的變更就是要寫在此function裡，異步拿到的資料會放在action.payload裡
// reducers可以不設定值，不影響結果
