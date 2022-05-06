// 用户相关的接口
import { request } from "http";
/**
 * 账号密码登录
 * @param {String}  username - 账号
 * @param {String}  password - 密码
 * @returns promise
 */
export const userLogin = ({ username, passward }) => {
    return request('/login', 'post', { username, passward })
}