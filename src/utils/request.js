import Taro from '@tarojs/taro'
import { onConsole, baseUrl } from '../config'

export default (options = { method: 'GET', data: {} }) => {
    // 对错误进行统一拦截处理
    if (!onConsole) {
        console.log('error')
    }

    // 发送请求
    return Taro.request({
        url: baseUrl + options.url,
        data: {
            ...options.data
        },
        method: options.method.toUpperCase(),
        header: { 
            'Content-Type': 'appliction/json'
        }
    }).then(res => {
        // code
        console.log(res)
        const { statusCode, data } = res;
        
        // 对状态值进行判断
        if (statusCode >= 200 && statusCode < 300) {
            if (!onConsole) {
                console.log('error')
            }
            
            // ok
            if (statusCode == 'success') {
                Taro.showToast({
                    title: `${res.data.err.message}`,
                    icon: 'none',
                    mask: true
                });
            }
            return data;
        } else {
            console.log(new Error(err))
        }
    })
}
