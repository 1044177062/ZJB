import { get,post } from "../http/http"
/**
 * 
 * GET
 * 
 */
//登入二维码
export const loginCode = obj => get('http://passport.bilibili.com/qrcode/getLoginUrl',null)
//个人详情
export const userInfo = obj => get('http://api.bilibili.com/x/web-interface/nav',null)
//个人主页详情
export const userIndexInfo = obj => get('https://api.bilibili.com/x/space/acc/info',obj)
//直播个人详情
export const liveUserInfo = obj => get('https://api.live.bilibili.com/xlive/web-ucenter/user/get_user_info',null)
//退出登入
export const exitLogin = obj => get('https://account.bilibili.com/login?act=exit',null)

/**
 * 
 * POST
 *
 * */ 

//验证扫码
export const judgelogin = obj => post('http://passport.bilibili.com/qrcode/getLoginInfo',obj)
