    import axios from 'axios';
    export function request(config){ 
        //axios封装的作用：如果未来axios停止更新了，更换其他插件是可以直接在此修改，不影响页面中使用的请求
        //1.使用Promise进行封装axios
        // return new Promise((resolve,reject)=>{
            //(1)创建axios实例
            const instance=axios.create({
                baseURL:'http://123.207.32.32:8000',  //配置请求地址
                timeout:5000                          //配置超出时间
            })
            //(2)axios拦截器
                //2.1拦截请求：拦截后修改config、发送请求时显示图标、某些请求需要携带信息（比如需要登录的请求要携带token）
            instance.interceptors.request.use(config=>{//拦截成功
                console.log(config);
                return config //将拦截下的config返回
            },err=>{//拦截失败
                console.log(err);
            })
                //2.1拦截响应：
            instance.interceptors.response.use(res=>{//拦截结果成功
                console.log(res);
                return res.data
            },err=>{//拦截失败成功
                console.log(err);
            })
            //(3)发送axios请求
            //因为axios本身是一个Promise，所以可以直接return axios
            return instance(config) 
        //         .then(res=>{
        //             resolve(res)
        //         }).catch(err=>{
        //             reject(err)
        //         })
        // })

        
        //2.使用回调函数进行封装axios
        // //创建axios实例
        // const instance1=axios.create({
        //     baseURL:'http://123.207.32.32:8000',
        //     timeout:5000
        // })
        // //发送请求
        // instance1(config)
        //     .then(res=>{
        //         success(res)
        //     }).catch(err=>{
        //         failure(err)
        //     })
    }                                                                                 