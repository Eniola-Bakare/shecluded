import {
	UPDATE_ALERT,
	UPDATE_PRELOADER
} from './types';

// Set loading state
export const updateAlert = (payload) => {
  	/**
	 * payload: {newBg: VALUE}
	 */
  return { type: UPDATE_ALERT, payload };
};

export const updatePreloader = (payload) => {
	return { type: UPDATE_PRELOADER, payload };
}