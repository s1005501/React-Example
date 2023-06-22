// styled-components實際的使用上是先將元件import進來
import {
  Title,
  Wrapper,
  PropSkyblue,
  Button,
  TomatoButton,
  Input,
  Rotate,
  RwdP,
} from './StyledComponents'

function StyledComponentsChild({ skyblue }) {
  // 然後依據各元件裡面的html標籤來替換真實的html結構，以下面來看的話Title替換h1，Wrapper替換section

  return (
    <>
      <div>
        <Wrapper>
          <Title>Hello World!</Title>
        </Wrapper>
      </div>
      {/* props實際的使用，解構props後就直接塞進styled-components就可以了，就相當於是把skyblue傳給PropSkyblue這個styled-components */}
      {/* 還有一個優點是我們可以自由決定要不要給該元素props，方便管理樣式 */}
      <div>
        <PropSkyblue skyblue={skyblue}>
          測試有styled-components props
        </PropSkyblue>
        <PropSkyblue>測試沒有styled-components props</PropSkyblue>
      </div>
      {/* 樣式擴展 */}
      <div>
        <Button>Normal Button</Button>
        <TomatoButton>Tomato Button</TomatoButton>
      </div>
      {/* 重用樣式 */}
      {/* 主要用於處理重疊的html結構(ex：button裡面包一個a標籤)，但可以讓其共用相同的CSS */}
      {/* 透過as屬性，其內容的值要填入的是html的標籤名，它會覆蓋掉原本的html標籤(styled-components的html標籤，開console查看的結果)但保有其CSS樣式 */}
      <div>
        <Button>Normal Button</Button>
        <Button as="a" href="/">
          Link with Button styles
        </Button>
        <TomatoButton as="p">Link with Tomato Button styles</TomatoButton>
      </div>
      {/* attrs(自訂義props) */}
      <div>
        {/* 第一個size可寫可不寫，不寫一樣套預設1em */}
        <Input placeholder="A small text input" size="1em" />
        <br />
        {/* 有想要在改樣式也可以動態的改動 */}
        <Input placeholder="A bigger text input" size="2em" />
      </div>
      {/* animation */}
      <Rotate>&lt; 💅 &gt;</Rotate>

      {/* RWD */}
      <RwdP>測試RWD</RwdP>
    </>
  )
}

export default StyledComponentsChild
