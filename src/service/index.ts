import axios from "axios";
import router from "@/router";
import { ElMessage } from "element-plus";
import { useGlobalStore } from "@/stores";
import { LOGIN_URL } from "@/config/config";
import type { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import type { ResultData } from "@/service/types";
import { ResultEnum } from "@/service/enums";
const config = {
	// 默认地址请求地址，可在 .env 开头文件中修改
	baseURL: import.meta.env.VITE_API_URL as string,
	// 设置超时时间（10s）
	timeout: ResultEnum.TIMEOUT as number,
	// 跨域时候允许携带凭证
	withCredentials: true
};
class RequestHttp {
	service: AxiosInstance;
	public constructor(config: AxiosRequestConfig) {
		// 实例化axios
		this.service = axios.create(config);
		/**
		 * @description 请求拦截器
		 * 客户端发送请求 -> [请求拦截器] -> 服务器
		 * token校验(JWT) : 接受服务器返回的token,存储到vuex/pinia/本地储存当中
		 */
		this.service.interceptors.request.use(
			(config: AxiosRequestConfig) => {
				const globalStore = useGlobalStore();
				const token: string = globalStore.token;
				if (config.headers && token) {
					config.headers!["token"] = token;
				}
				return config;
			},
			(error: AxiosError) => {
				return Promise.reject(error);
			}
		);

		/**
		 * @description 响应拦截器
		 *  服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
		 */
		this.service.interceptors.response.use(
			(response: AxiosResponse) => {
				const { data } = response;
				// * 成功请求（在页面上除非特殊情况，否则不用处理失败逻辑）
				return data;
			},
			async (error: AxiosError) => {
				const { response } = error;
				// 请求超时单独判断，因为请求超时没有 response
				if (error.message.indexOf("timeout") !== -1) ElMessage.error("请求超时！请您稍后重试");
				// 根据响应的错误状态码跳转到登录页
				if (response?.status != ResultEnum.SUCCESS) {
					ElMessage.error("token已过期,请重新登录");
					router.push(LOGIN_URL);
				}
				// 服务器结果都没有返回(可能服务器错误可能客户端断网)，断网处理:可以跳转到断网页面
				if (!window.navigator.onLine) router.replace("/500");
				return Promise.reject(error);
			}
		);
	}

	// * 常用请求方法封装

	get<T>(config: AxiosRequestConfig): Promise<ResultData<T>> {
		return this.service.request({ ...config, method: "GET" });
	}
	post<T>(config: AxiosRequestConfig): Promise<ResultData<T>> {
		return this.service.request({ ...config, method: "POST" });
	}
	put<T>(config: AxiosRequestConfig): Promise<ResultData<T>> {
		return this.service.request({ ...config, method: "PUT" });
	}
	delete<T>(config: AxiosRequestConfig): Promise<ResultData<T>> {
		return this.service.request({ ...config, method: "DELETE" });
	}
}

export default new RequestHttp(config);
