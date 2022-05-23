// 给vee-validate提供校验规则函数
export default {
    username(value) {
        if (!value) return "请输入用户名";
        //规则：字母开头6-20字符之间
        if (!/^[a-zA-Z]\w{5,19}$/.test(value)) return '字母开头且6-20个字符'
        return true;
    },
    password(value) {
        if (!value) return '请输入密码'
        if (!/^\w{6,24}$/.test(value)) return '密码是6-24个字符'
        return true
    },

    mobile(value) {
        if (!value) return '请输入手机号码'
        if (!/^1[3-9]\d{9}$/.test(value)) return '手机号格式错误'
        return true
    },
    code(value) {
        if (!value) return '请输入验证码'
        if (!/^d{6}$/.test(value)) return '验证码是6个数字'
        return true
    },
    isAgree(value) {
        if (!value) return '请勾选同意用户协议'
        return true
    },
    qybdate(value) {
        if (!value) return '请输入日期'
        return true
    },
    qybname(value) {
        if (!value) return '请输入姓名'
        return true
    },
    qybclassNum(value) {
        if (!value) return '请输入班级学号'
        return true
    },
    qybSex(value) {
        if (!value) return '请输入性别'
        return true
    },
    qybschool(value) {
        if (!value) return '请输入所在学校'
        return true
    },
    qybphone(value) {
        if (!value) return '请输入手机号码'
        return true
    },
    qybFreetime(value) {
        if (!value) return '请输入空档期'
        return true
    }
}