import * as types from '../actions/types.js';
import { QR_STATE } from './typeOfState.js';



export default function (state = {}, action) {
  switch (action.type) {

    case types.SET_QR_START:
      return {
        ...state,
        TOS: QR_STATE,
        state: QR_STATE.WAIT,
      };

    case types.SET_QR_RESOLVED:
      return {
        ...state,
        TOS: QR_STATE,
        state: QR_STATE.READY,
        qrNum: action.num,
      };

    case types.DUMP_QR:
      return {
        ...state,
        TOS: QR_STATE,
        state: QR_STATE.READY,
      };

    case types.SET_QR_REJECTED:
      
      if (action.error.type === QR_STATE.BAD_QR) {
        return {
          ...state,
          TOS: QR_STATE,
          state: QR_STATE.BAD_QR,
        }
      }
      if (action.error.type === QR_STATE.QR_ALREADY_IS) {
        return {
          ...state,
          TOS: QR_STATE,
          state: QR_STATE.QR_ALREADY_IS,
        }
      }
      if (action.error.type === QR_STATE.WRONG_CHECKOUT) {
        return {
          ...state,
          TOS: QR_STATE,
          state: QR_STATE.WRONG_CHECKOUT,
        }
      }
      default:
        return state;
    }

};