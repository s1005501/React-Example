import { useParams, useOutletContext, useSearchParams } from 'react-router-dom'

function Product() {
  // useParams
  // 可以取得網址的資料(應該不能算query string)，但只能取到當前網址最後一段的資料
  // 如果網址是:id的寫法的話，則自訂義變數名稱要符合:後的名稱
  // 格式: const {自訂義變數名稱}=useParams()
  const { id } = useParams()
  const outletContext = useOutletContext()
  console.log('outletContext', outletContext)

  // useSearchParams
  // 這個應該才是拿到query string的資料hook
  // 測試請再網址後面加上?test=123&test=456。注意這裡解構要用陣列而不是物件
  // 跟useState類似分為getter、setter。searchParams取得資料(getter)，setSearchParams更改資料(setter)
  // 變數可自定義名稱，但通常會叫searchParams、setSearchParams
  // 格式:const [getter(searchParams),setter(setSearchParams)]=useSearchparams()
  // 實際取得資料(searchParams)要透過內建的api，更改資料(setSearchParams)時，()內放的要是物件
  const [searchParams, setSearchParams] = useSearchParams()
  console.log(searchParams.getAll('test'))

  return (
    <>
      <h1>Product {id}</h1>
      <button
        onClick={() => {
          setSearchParams({ test: 789 })
        }}
      >
        Use setSearchParams
      </button>
    </>
  )
}

export default Product
