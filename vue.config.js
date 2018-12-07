// 配置proxy
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://www.easy-mock.com/mock/5c09d6bdadfd15165c9cba44',
                ws: true,
                changeOrigin: true
            },
        }
    }
};
