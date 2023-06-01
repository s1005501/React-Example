import React, { useEffect, useState } from 'react'

// pure function
export const pureUnshift = (arr, item) => {
  return [item, ...arr]
}

export const purePush = (arr, item) => {
  return [...arr, item]
}

export const searchFilter = (arr, keyword) => {
  return arr.filter((v, i) => {
    return v.toString().includes(`${keyword}`)
  })
}

// reducer 累加/歸納函式
export const reducer = (state, setState, action) => {
  let newArr
  // console.log(action.type)
  switch (action.type) {
    case 'ADD_TO_HEAD':
      newArr = pureUnshift(state, action.payload.item)
      return setState(newArr)
    case 'ADD_TO_TAIL':
      newArr = purePush(state, action.payload.item)
      return setState(newArr)
    case 'SEARCH_KEYWORD':
      newArr = searchFilter(state, action.payload.keyword)
      return setState(newArr)
    default:
      return state
  }
}

function PureAndReducer() {
  const [reduceArr, setReduceArr] = useState([1, 2, 3, 4])
  const [reduceAction, setReduceAction] = useState({
    type: '',
    payload: { item: '', keyword: '' },
  })

  useEffect(() => {
    // console.log(reduceAction)
    if (reduceAction.type) {
      reducer(reduceArr, setReduceArr, reduceAction)
    }
  }, [reduceAction])

  useEffect(() => {
    console.log(reduceArr)
  }, [reduceArr])

  return (
    <>
      <h1>Pure、Reducer函式</h1>
      <hr />
      <button
        onClick={() => {
          const newAction = {
            type: 'ADD_TO_HEAD',
            payload: { item: 5, keyword: '' },
          }
          setReduceAction(newAction)
        }}
      >
        陣列前面+ +
      </button>

      <button
        onClick={() => {
          const newAction = {
            type: 'ADD_TO_TAIL',
            payload: { item: 5, keyword: '' },
          }
          setReduceAction(newAction)
        }}
      >
        陣列後面+ +
      </button>

      <button
        onClick={() => {
          const newAction = {
            type: 'SEARCH_KEYWORD',
            payload: { item: '', keyword: 3 },
          }
          setReduceAction(newAction)
        }}
      >
        過濾陣列
      </button>

      <hr />
      <p>陣列值 ： {reduceArr}</p>
    </>
  )
}

export default PureAndReducer
