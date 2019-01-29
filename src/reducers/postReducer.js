import { FETCH_POSTS, NEW_POST } from '../actions/types'

//reducer 的作用：返回新的状态


//initialState  是最终要返回给组件的东西
const initialState = {
    items: [],
    item: {}
}
export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}