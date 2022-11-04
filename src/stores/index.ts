import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import piniaPersistConfig from "@/config/piniaPersist";
import { createPinia, defineStore } from "pinia";
import { getUserInfoRequest, getUserMenuRequest, loginRequest } from "@/service/modules/login";
import type { IGlobalStore } from "@/stores/types";
import type { ILogin } from "@/service/modules/login/types";

export const useGlobalStore = defineStore("globalStore", {
	state: (): IGlobalStore => ({
		token: "",
		userId: -1,
		headPortrait: "",
		permissions: [],
		userMenu: []
	}),
	actions: {
		/* login Data */
		async loginRequestAction(loginData: ILogin.IRequestData) {
			// userID token
			const { data: loginResultData } = await loginRequest(loginData);
			if (loginResultData) {
				this.token = loginResultData.tokenValue;
				this.userId = Number(loginResultData.loginId);
			}
			// userInfo
			const { data: userInfoResultData } = await getUserInfoRequest(this.userId);
			if (userInfoResultData) {
				this.headPortrait = userInfoResultData.headPortrait;
				this.permissions = userInfoResultData.permissions;
			}
			// userMenu
			const { data: userMenuResultData } = await getUserMenuRequest(this.userId);
			this.userMenu = userMenuResultData;
		}
	},
	/* state持久化存储 */
	persist: piniaPersistConfig("globalStore")
});
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
export default pinia;
