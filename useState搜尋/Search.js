import { useState, useRef } from 'react'

function Search() {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  const addItem = () => {
    const searchText = inputRef.current.value
    setItems((prev) => [...prev, searchText])
  }

  // 這裡可以學起來把搜尋的字元都變小寫在去做比對
  const filterItems = items.filter((v, i) => {
    return v.toLowerCase().includes(query.toLowerCase())
  })

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => {
          setQuery(e.target.value)
        }}
        placeholder="搜尋資料..."
      />
      <br />
      <input type="text" placeholder="新增資料" ref={inputRef} />
      <br />
      <button
        onClick={() => {
          addItem()
          inputRef.current.value = ''
        }}
      >
        新增資料
      </button>

      {filterItems.map((v, i) => (
        <p key={i}>{v}</p>
      ))}
    </div>
  )
}
export default Search

// https://wei-docusaurus-vercel.vercel.app/docs/React/Tips/React-Search/
// https://www.youtube.com/watch?v=kbos1xdRhlk&ab_channel=WeiWei
