import {
  SET_TO_TEST,
  SET_SELECT,
  SET_FROM_BOOK,
  INCREASE_COUNT,
  RESET_COUNT
} from '../actionTypes';

export const setToTest = data => ({
  type: SET_TO_TEST,
  payload: data
});

export const setSelect = data => ({
  type: SET_SELECT,
  payload: data
});

export const setFromBook = () => ({
  type: SET_FROM_BOOK
});

export const increaseCount = id => ({
  type: INCREASE_COUNT,
  payload: id
});

export const resetCount = () => ({
  type: RESET_COUNT
});
