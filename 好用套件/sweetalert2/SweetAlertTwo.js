import Swal from 'sweetalert2'
import axios from 'axios'

function SweetAlertTwo() {
  return (
    <>
      <div>
        <button
          onClick={() => {
            // 將Swal從sweetalert2中解構匯入
            // 透過Swal呼叫fire()，()內放物件，{}內可放入各種屬性來決定跳出來的視窗的樣式、內容
            Swal.fire({
              icon: 'error', // 彈跳視窗的圖案
              title: '彈跳視窗的大標題', // 彈跳視窗的大標題
              text: '彈跳視窗的內文', // 彈跳視窗的內文
              html: '<a href="#">功能跟text一樣，但差在它可以直接使用HTML標籤</a>', // 彈跳視窗的內文(可以使用HTML標籤)
              confirmButtonText: '<h1>確定按鈕的內文</h1>', // 確定按鈕的內文
              showCancelButton: true, // 新增取消按鈕
              cancelButtonText: '<h1>取消按鈕的內文</h1>', // 取消按鈕的內文
              showCloseButton: true, // 新增X按鈕
              timer: 2500, // 類似setTimeout的功能
            })
          }}
        >
          基本使用+常用屬性
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            Swal.fire({
              icon: 'question',
              title: '彈跳視窗的大標題',
              text: '彈跳視窗的內文',
              showCancelButton: true,
              // 彈跳視窗還可以透過then，在往下接
              // 通常會再搭配其內建的參數result做判斷式做進一步的操作
            }).then((result) => {
              // result是sweetalert里內建的參數，在then裡使用，會隨著點選不同的按鈕，其值也會跟著變動，常用到的屬性是isConfirmed、isDismissed
              console.log(result)
              // 使用者點確認按鈕時會將其改成true
              if (result.isConfirmed) {
                Swal.fire({
                  icon: 'success',
                  title: '使用者點確認按鈕',
                  text: 'isConfirmed',
                })
              }
              // 使用者點取消按鈕時會將其改成true
              if (result.isDismissed) {
                // Swal.fire({
                //   icon: 'error',
                //   title: '使用者點取消按鈕',
                //   text: 'isDismissed',
                // })
                Swal.close()
              }
            })
          }}
        >
          是可以透過then在往下接
        </button>
      </div>

      <div>
        <button
          // 可以簡寫，但不建議
          // fire()內就不用再給{}了，直接把屬性值寫進()即可
          // 從上到下順序分別是title、text、icon，簡寫只能套這三個屬性
          onClick={() => {
            Swal.fire(
              '簡寫標題', // title
              '簡寫內文', // text
              'error' // icon
            )
          }}
        >
          簡寫(不建議)
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            Swal.fire({
              title: '圖片',
              text: '也可以塞圖片進去',
              imageUrl: 'https://unsplash.it/400/200', // 圖片路徑
              imageWidth: 400, // 圖寬
              imageHeight: 200, // 圖高
              imageAlt: 'Custom image', // 圖片無障礙字串
            })
          }}
        >
          塞圖片
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            Swal.fire({
              title: '輸入Git帳號名',
              input: 'text',
              inputAttributes: {
                autocapitalize: 'off',
              },
              showCancelButton: true,
              confirmButtonText: '搜尋!',
              showLoaderOnConfirm: true,
              // 搭配Ajax
              // 在sweetalert裡要使用async建議搭配preConfirm屬性
              // preConfirm其值就是一個callback，callback的內容會在then的result結果出來前先被執行，要有回傳值
              // 如果回傳值有資料，則會被傳遞到result的value屬性
              // 如果回傳值是false，則後續的動作會被中斷
              // 如果回傳值是undefined，資料同樣會被傳遞到result的value屬性，但其值就是當初傳入的資料，ex:參數的值之類的
              preConfirm: async (login) => {
                try {
                  const response = await axios.get(
                    `//api.github.com/users/${login}`
                  )
                  console.log(response)
                  return response.data
                } catch (error) {
                  console.log(error)
                  // 回傳false後續的動作就會直接中斷
                  return error.message
                }
              },
            }).then((result) => {
              console.log(result)
              if (result.isConfirmed) {
                if (typeof result.value == 'string') {
                  Swal.fire({
                    icon: 'error',
                    title: 'Ajax有誤',
                    text: `${result.value}`,
                  })
                }
                if (typeof result.value == 'object') {
                  Swal.fire({
                    title: `${result.value.login}'s avatar`,
                    imageUrl: result.value.avatar_url,
                  })
                }
              }
            })
          }}
        >
          發AJAX(看Git帳號的頭像)
        </button>
      </div>
    </>
  )
}

export default SweetAlertTwo
