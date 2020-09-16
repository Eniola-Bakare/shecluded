import {
  CHANGE_NAV_BG,
	CHANGE_NAV_TXT,
	TOGGLE_SIDEBAR,
} from './types';

// Set loading state
export const changeNavBg = (payload) => {
  	/**
	 * payload: {newBg: VALUE}
	 */
  return { type: CHANGE_NAV_BG, payload };
};

export const changeNavTxt = (payload) => {
	/**
 * payload: {newBg: VALUE}
 */
return { type: CHANGE_NAV_TXT, payload };
};

export const toggleSideBar = (payload = null) => {
	return {type: TOGGLE_SIDEBAR, payload}
}