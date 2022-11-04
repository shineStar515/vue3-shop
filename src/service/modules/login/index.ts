/* login Service */
import http from "@/service";
import type { ILogin, IUser } from "@/service/modules/login/types";
//verify code
export function getVerifyCodeRequest() {
	return http.get<string>({
		url: "/getVerifyCode"
	});
}
//login
export function loginRequest(loginData: ILogin.IRequestData) {
	return http.post<ILogin.IResultData>({
		url: "/login",
		data: loginData
	});
}
//userInfo
export function getUserInfoRequest(userId: number) {
	return http.post<IUser.IUserInfo>({
		url: `/getUserInfo/${userId}`
	});
}
//userMenu
export function getUserMenuRequest(userId: number) {
	return http.get<IUser.IUserMenu>({
		url: "/menu/list",
		params: {
			userId
		}
	});
}
