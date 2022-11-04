import type { PersistedStateOptions } from "pinia-plugin-persistedstate";

/**
 * @description pinia持久化参数设置
 * @param {String} key 存储到持久化的 name
 * @param {Array} paths 需要持久化的 state name
 */
const piniaPersistConfig = (key: string, paths?: string[]) => {
	const persist: PersistedStateOptions = {
		key,
		storage: window.localStorage,
		paths
	};
	return persist;
};
export default piniaPersistConfig;
