import { memo } from 'react'

const ChildComponent = memo(({ number }) => {
  console.log('Child Render...')
  return <div>ChildComponent {number}</div>
})

export default ChildComponent

// memo是為了解決當狀態改變而進行畫面的重新渲染時，只去渲染因狀態改變而有做改變的原件，其餘沒有變更的元件則不做reRender的動作。
// 是效能最佳化的hook之一。
// 運作的概念是淺比較(shallow compare)，react會去比較傳下來的prop有沒有做變更，如果有才做reRender。在此範例是寫死的(ChildComponent的number)，因此只有第一次會render
// memo是HOC，使用時要用memo()把hook包起來，即將function當成是memo的第一個參數
// 格式：const 元件名稱 = memo(()=>{return <></>})
