// * 请求枚举配置
/**
 * @description：请求配置
 */
export enum ResultEnum {
	SUCCESS = 20000,
	FAIL = 50000,
	NOT_TOKEN = 50008,
	INVALID_TOKEN = 50009,
	TOKEN_TIMEOUT = 50010,
	BE_REPLACED = 50011,
	KICK_OUT = 50012,
	TOKEN_ERROR = 50013,
	TIMEOUT = 10000
}
