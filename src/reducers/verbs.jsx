import {fromBook, Verbs} from '../verbs';
import * as uid from 'uid';

import {INCREASE_COUNT, RESET_COUNT, SET_FROM_BOOK, SET_SELECT, SET_TO_TEST} from '../actionTypes';

const initialState = {
  initialVerbs: Verbs.map(i => {
    return {...i, id: uid(), toShow: false, check: 0}
  })
};

const verbs = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_TO_TEST: {
      const newVerbs = state.initialVerbs.map(i => {
        if (i.id === payload.id) {
          i.toShow = payload.toShow
        }
        return i
      });
      return {
        ...state,
        initialVerbs: newVerbs
      };
    }
    case SET_SELECT: {
      const newVerbs = state.initialVerbs.map(i => {
        return {...i, toShow: payload}
      });
      return {
        ...state,
        initialVerbs: newVerbs
      };
    }
    case INCREASE_COUNT: {
      const newVerbs = state.initialVerbs.map(i => {
        if (i.id === payload) {
          return {...i, check: i.check + 1}
        }
        return {...i}
      });
      return {
        ...state,
        initialVerbs: newVerbs
      };
    }
    case RESET_COUNT: {
      const newVerbs = state.initialVerbs.map(i => {
        return {...i, check: 0}
      });
      return {
        ...state,
        initialVerbs: newVerbs
      };
    }
    case SET_FROM_BOOK: {
      const newVerbs = state.initialVerbs.map(i => {
        if (fromBook.includes(i.first)) {
          return {...i, toShow: true}
        } else {
          return {...i, toShow: false}
        }
      });
      return {
        ...state,
        initialVerbs: newVerbs
      };
    }

    default:
      return state
  }
};

export default verbs