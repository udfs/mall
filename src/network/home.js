//将首页所有的请求放到此处

import {request} from './request'

export function getHomeMultiata(){
    return request({
        method:'get',
        url:'/home/multidata',

    })
}

export function getHomeMultiata2(){
    return request({
        url:'/home/multidata'
    })
}

export function getHomeMultiata3(){
    return request({
        url:'/home/multidata3'
    })
}