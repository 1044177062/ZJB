import axios from 'axios'
import qs from 'qs'
//请求超时时间
axios.defaults.timeout = 10000

//请求拦截
axios.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.error(error)
    }
)

//响应拦截器
axios.interceptors.response.use(
    response => {
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据 
        // 否则的话抛出错误
        if(response.status === 200){
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    error => {
        
    }
)
/** 
 * get方法，对应get请求
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */

 export function get(url,params=''){
     return new Promise((resolve,reject)=>{
         axios.get(url,{
             params
        }).then(res=>{
             resolve(res.data)
         }).catch(err => {
             reject(err.data)
         })
     })
 }

 /**  
  * post方法，对应post请求  
  * @param {String} url [请求的url地址]  
  * @param {Object} params [请求时携带的参数]  
  */

 export function post(url,params){
    axios.defaults.headers = {
        'Content-type': 'application/x-www-form-urlencoded'
    }
    return new Promise((resolve,reject)=>{
        axios.post(url,
            qs.stringify(params)
        ).then(res=>{
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}