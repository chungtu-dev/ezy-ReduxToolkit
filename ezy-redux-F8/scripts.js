// dùng thư viện
// import { createStore } from 'https://cdn.skypack.dev/redux'; //thành phần của redux, dùng để tạo STORE

// tạo store
function createStore(reducer){
    let state = reducer(undefined, {}) // truyền vào state và action mặc định
    return{
        getState(){
            return state
        },
        dispatch(action){
            state = reducer(state, action) // state trước đó và action mới
        }
    }
}

//reducer (= state trước đó + action mới => state mới )
const initialState = 0 // khởi tạo giá trị ban đầu

function bankReducer(state = initialState, action) {
    switch (action.type) {
        case 'DEPOSIT':
            return state + action.payload
        case 'WITHDRAW':
            return state - action.payload
        default:
            return state
    }
}

//store
const store = createStore(bankReducer) // store nhận đầu vào là reducer

// console.log(store);

//action
function actionDeposit(payload) {
    return {
        type: 'DEPOSIT',
        payload
    }
}

function actionWithdraw(payload) {
    return {
        type: 'WITHDRAW',
        payload
    }
}

//DOM events
const deposit = document.querySelector("deposit")
const withdraw = document.querySelector("withdraw")

//event handler
deposit.onclick = function(){
    store.dispatch(actionDeposit(10)) 
    //dispatch được cung cấp từ store, bắn đi action
    //nạp vào giá trị cho actionDeposit là 10
}

withdraw.onclick = function(){
    store.dispatch(actionWithdraw(10))
}

function render(){
   const output = document.querySelector('#output');
   output.innerText = store.getState();
}

render()