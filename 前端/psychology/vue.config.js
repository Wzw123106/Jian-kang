/*
 * @Author: chiLi
 * @Date: 2021-01-28 19:47:43
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
 */
// 引入jq需要加入以下代码
const webpack = require('webpack')

module.exports = {
    chainWebpack: config => {
        config.plugin('provide').use(webpack.ProvidePlugin, [{
            $: 'jquery',
            jquery: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }])
    },
    devServer: {
        proxy: {
            '/': {
                target: 'http://localhost:3000',
                changeOrigin: true
            }
        }
    },
}