// 使用時要先從styled-components裡引入styled
import { styled, keyframes } from 'styled-components'

// styled-components
// 簡單來說就是讓我們可以將原本的css或scss檔改為元件的寫法
// 格式如下：styled.後面接的是html的標籤，然後直接接一對backtick，CSS就寫在這對backtick裡
// const 元件名稱 = styled.html標籤名`CSS寫在這裡`

export const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`
// 偽元素
// styled-components裡偽元素用法跟CSS選擇器蠻類似的，差在要用變數(${ })來表示被觸發的元素，以及要在偽元素後面加上 & { }，須注意的是&前後都要有一個空格，偽元素的CSS寫在{ }內
export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
  ${Wrapper}:hover & {
    color: skyblue;
  }
`
// props
// 此外styled-components還可以透過props拿到其他元件傳下來的值
// 格式如下：css值用自定義變數來表示，此變數值通常會用三元判斷決定(預設值的概念)，判斷的條件會用props傳下來的值來做判斷
// CSS屬性:${ props => props.參數名稱 ? value1 : value2 }
export const PropSkyblue = styled.p`
  color: ${(props) => (props.skyblue ? props.skyblue : 'red')};
`
// attrs(自訂義props)
// 可以透過attrs來定義html的屬性以及同時自定義props的值，在react就不用再傳值給styled-components，比原本的props方便不少。
// 格式如下：兩種寫法都有看到，不知道差在哪
// 須注意的是attrs要加s(不是attr)，此外attrs是function
// const 元件名稱 = styled.html標籤名.attrs((props)=>({自訂義的props(可寫html的屬性、自定義props的值)}))`CSS寫在這裡`
// const 元件名稱 = styled.html標籤名.attrs({自訂義的props(可寫html的屬性、自定義props的值)})`CSS寫在這裡`
export const Input = styled.input.attrs({
  // 這裡可以定義合法或自訂的HTML屬性，即直接在這裡決定html屬性
  type: 'password',
  foo: 'bar',

  // 也可以動態定義props，這裡的margin、padding(第一組)是被當成是props的變數，在React使用時在該styled-components給屬性是要給size
  // 邏輯順序是在React給size並賦值後，進到Input，該props(size)會被帶進margin、padding(第一組)做判斷，最後在進到CSS裡，當成是props(margin、padding)做最後的判斷並賦值給CSS屬性margin、padding(第二組)
  margin: (props) => props.size || '1em',
  padding: (props) => props.size || '1em',
})`
  color: palevioletred;
  font-size: 1em;

  /* 在這裡可以直接拿動態的props來用 */
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`

// 繼承或擴展特性
// styled-components的繼承或擴展特性
// 在styled-components裡，我們可以繼承之前寫過的styled-components並進行修改、調整
export const Button = styled.button`
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`
// 實際的使用方式是把styled當成是函式，styled()，其( )內塞入我們要做修改的元件
export const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`

// 動畫(CSS animation)
// 在 CSS Animations中 @keyframes 通常不會被縮限在一個元件中，但使用上卻又不希望它跑到全域造成命名衝突，因此在styled-components中有一個 keyframes的helper，讓我們可以使用同一個 @keyframes 但又不會有命名衝突
// 記得要先import keyframes form styled-components
// 使用方式是建立 keyframes(劇本)
const rotate = keyframes`
from{
  transform:rotate(0deg)
}
to{
  transform:rotate(360deg)
}
`
export const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`
// RWD
// 在styled-components裡使用RWD要透過@media()，()內就是break point(斷點)，即決定RWD的寬度是多少
export const RwdP = styled.p`
  color: red;
  @media (max-width: 1000px) {
    color: blue;
  }
`

// 如果怕自己取的styled-components名稱在React使用時會不知道他是哪個html標籤的話，建議很常共用的styled-components可以直接取跟html標籤一樣的名字，比如p的字體樣式就直接取名P，有特別不同的樣式建議可以再取不同的名稱，來方便管理、記憶

// 如果styled-components要直接在React使用的話(不用引入的方式)，定義在render外，不然每次渲染都會重新創建，影響效能。

// styled-components還有一個特性是可以透過JS動態產生unique的class name，讓元件跟元件就不會發生因人為命名失誤而產生的class name重名而互相汙染的狀況。但缺點就是在console檢查html時會不好辨識
