import {Actions, ActionTypes} from './sign-up.actions';
import {initialState, State} from './sign-up.state';

export const signUpFeatureName = 'signup';

export function signUpReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.SIGN_UP_REQUEST:
    case ActionTypes.SIGN_UP_UPDATE_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case ActionTypes.SIGN_UP_SUCCESS:
    case ActionTypes.SIGN_UP_UPDATE_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
      };
    case ActionTypes.SIGN_UP_FAILURE:
    case ActionTypes.SIGN_UP_UPDATE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    default: {
      return state;
    }
  }
}
