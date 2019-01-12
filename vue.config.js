module.exports = {
    configureWebpack: {
        devServer: {
            before(app) {
                app.get('/api/goods', function (req, res) {
                    res.json({
                        code: 0,
                        list: [
                            { id: 1, text: 'web全栈架构师1', price: '1000' },
                            { id: 2, text: 'python全栈架构师1', price: '1000' }
                        ]
                    })
                })
            }
        }
    }
}