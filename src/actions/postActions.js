import { FETCH_POSTS, NEW_POST } from './types'

//分发操作
// export function fetchPosts() {
//     // console.log("post请求")
//     return function (dispatch) {
//         fetch("https://jsonplaceholder.typicode.com/posts")
//             .then(res => res.json())
//             .then(posts => {
//                 dispatch({  //分发
//                     type: FETCH_POSTS,
//                     payload: posts
//                 })
//             })
//     }
// }

//优化分发 es6 
export const fetchPosts = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(posts => {
            dispatch({  //分发
                type: FETCH_POSTS,
                payload: posts
            })
        })
}

export const createPost = postData => dispatch => {
    // console.log("creatPost")
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(post => {
            dispatch({  //分发
                type: NEW_POST,
                payload: post
            })
        })
}