import axios from 'axios'

// Ajax建議集中管理(都放在上層的元件做統一管理，就不用放在子元件之後還要往上傳)
function Axios() {
  // axios版本

  // 使用axios時只需要一個then，通常會用response來接回傳的結果，但裡面包山包海(Header、body、status等都塞在這)，真正的資料是放在data裡(即response.data)

  const getData = async (url, ubike) => {
    // 錯誤處理一樣用try/catch接
    try {
      // 以get為例，第一個參數是放路徑(url)，第二個參數放檔頭等其他設定以物件包起來
      // 以post為例，第一個參數是放路徑(url)，第二個參數是放要送的資料，第三個參數放檔頭等其他設定以物件包起來
      // 記得要給方法
      const response = await axios.get(url)

      // 一樣如果有使用到cookie、session就要解決cors，所以要加上axios.defaults.withCredentials = true，放在發送前
      // 可以在url後面在加一個key是params(固定的寫法)的物件來代表query string，就不用在路徑後再用backtick接一堆querystring得變數，待在這個範例裡沒有用到，此範例是get open api的資料，用不到query string

      // axios在get會依據你給的Content-type在回應時幫你解析檔頭，不像fetch還要自己再轉(const json=r.json())，舉例來說如果檔頭是json，回回來得會自動幫你json.parse()。

      // post也是一樣，會自動幫你把你送的資料轉成json，同時把request的檔頭裡的Content-Type設成application-json
      console.log(response)
      console.log(response.data)
    } catch (ex) {
      console.log(ex)
    }
  }

  // 改成fetch的話長這樣
  const fetchData = async (url) => {
    try {
      // 記得要給方法
      const response = await fetch(url, { method: 'GET' }).then((r) => {
        console.log(r)
        return r.json()
      })
      console.log(response)
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault()
          getData(
            'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json'
          )
          // fetchData(
          //   'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json'
          // )
        }}
      >
        抓Ubike資料
      </button>
    </>
  )
}

export default Axios
