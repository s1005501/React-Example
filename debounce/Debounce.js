import { useState, useCallback } from "react";
import _ from "lodash";

function Debounce() {
    const [state, setState] = useState("");
    const [debouncedState, setDebouncedState] = useState("");
    const handleChange = (event) => {
        setState(event.target.value);
        debounce(event.target.value);
    };

    // useCallback一定要加
    const debounce = useCallback(
        _.debounce((_searchVal) => {
            setDebouncedState(_searchVal);
        }, 500),
        []
    );

    return (
        <div>
            <form>
                <label>
                    type
                    <input type="text" onChange={handleChange} />
                </label>
            </form>
            <p>without Debounced {state}</p>
            <p>Debounced Value: {debouncedState}</p>
        </div>
    );
}

export default Debounce;

// Debounce
// 前端優化，透過讓事件延遲觸發來處理過於敏感的操作
// 比如input的autocomplete功能，使用者頻繁輸入資料會導致請求的頻繁發送近而導致效能變差，因此我們可以主動讓事件觸發延遲發送來達到優化的效果
// 可以用純JS來完成，在react可透過lodash縮減步驟
