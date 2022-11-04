/* 登录 */
export namespace ILogin {
	export interface IRequestData {
		userName: string;
		password: string;
		code: string;
	}
	export interface IResultData {
		tokenName: string;
		tokenValue: string;
		isLogin: boolean;
		loginId: string;
		loginType: string;
		tokenTimeout: number;
		sessionTimeout: number;
		tokenSessionTimeout: number;
		tokenActivityTimeout: number;
		loginDevice: string;
		tag: any;
	}
}
/* 用户 */
export namespace IUser {
	// userInfo
	export interface IUserInfo {
		userId: number;
		userName: any;
		headPortrait: string;
		permissions: string[];
	}
	// userMenu
	export type IUserMenu = Root2[];

	export interface Root2 {
		menuId: number;
		parentId: number;
		parentName: string;
		menuLabel: string;
		menuCode: string;
		name: string;
		path: string;
		url: string;
		type: string;
		icon: string;
		createBy: string;
		updateBy: any;
		createTime: string;
		updateTime: string;
		children: Children[];
	}

	export interface Children {
		menuId: number;
		parentId: number;
		parentName: string;
		menuLabel: string;
		menuCode: string;
		name: string;
		path: string;
		url?: string;
		type: string;
		icon: string;
		createBy: string;
		updateBy: any;
		createTime: string;
		updateTime: string;
		children: Children2[];
	}

	export interface Children2 {
		menuId: number;
		parentId: number;
		parentName: string;
		menuLabel: string;
		menuCode: string;
		name?: string;
		path?: string;
		url?: string;
		type: string;
		icon?: string;
		createBy: string;
		updateBy?: string;
		createTime: string;
		updateTime: string;
		children: Children3[];
	}

	export interface Children3 {
		menuId: number;
		parentId: number;
		parentName: string;
		menuLabel: string;
		menuCode: string;
		name: any;
		path: any;
		url: any;
		type: string;
		icon: any;
		createBy: string;
		updateBy: any;
		createTime: string;
		updateTime: string;
		children: any[];
	}
}
