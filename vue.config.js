//配置路径别名
module.exports={
    configureWebpack:{
        resolve:{
            alias:{
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
            }
        }
    },
    devServer:{ // vue配置跨域
        proxy: {
          '/api': {
            // http://192.168.1.46:6020/lzkj_yw4/kyxm/spbm._do
              target: 'http://192.168.1.46:6020/',//设置你调用的接口域名和端口号 别忘了加http
              changeOrigin: true,
              pathRewrite: {
                '^/api': '' //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'https://api.douban.com/user/add'，直接写‘/api/user/add’即可，此处的‘api’可以设置为自己想要设置的任何词语，符合规范即可
              }
          }
       },
      }
}