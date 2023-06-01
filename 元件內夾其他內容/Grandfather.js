import Father from './Father'
import Child from './Child'

function Grandfather() {
  return (
    <>
      {/* 可以在元件中寫入其他內容，*/}
      {/* 但如果要讓子元件(被夾住的元件)也能夠顯示其內容出來的話，要在父元件(夾住人的元件)的()裡下props，其資料會儲存在props.children這個屬性裡，這跟把子元件塞進父元件功能是一樣的，我個人覺得差在這種可以更方便的拿到爺爺元件給的資料，但寫起來比較難懂一點，個人還是比較偏好把子元件直接塞進父元件的寫法，雖然要拿到爺爺的資料時要在多傳一次 */}
      <Father>
        <Child text="我是爺爺元件Grandfather傳下去的text" />
      </Father>
    </>
  )
}
export default Grandfather
