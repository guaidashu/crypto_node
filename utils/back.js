// 回复 定义处
let back = {
    /**
     * 默认数据
     */
    data: {
        data: '',
        code: 0,
        msg: ''
    },
    /**
     * 成功 回复
     * @param res
     * @param data
     */
    success(res, data) {
        this.data.data = data;
        res.json(this.data);
    },
    /**
     * 失败 回复
     * @param res
     * @param msg
     */
    error(res, msg) {
        this.data.msg = msg;
        this.data.code = 1;
        res.json(this.data)
    },
    /**
     * 自定义(或默认) 回复
     * @param res
     * @param data
     */
    json(res, data) {
        if (!data) {
            data = this.data
        }
        res.json(data)
    }
};

module.exports = back;
