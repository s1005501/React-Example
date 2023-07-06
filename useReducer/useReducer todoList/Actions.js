// 在較複雜的專案裡，為了避免action可能會key錯而產生switch/case比對不到而沒有觸發dispatch的情況，建議可以把動作再寫成一個檔案來管理
export const ACTIONS = {
  ADD: 'ADD',
  TOGGLE: 'TOGGLE',
  DELETE: 'DELETE',
}
