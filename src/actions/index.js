import * as AT from './actionTypes.js';
import { createAction } from 'redux-actions';

export const getTopicsRequest = createAction(AT.GET_TOPICS_REQUEST);
export const getArticlesRequest = createAction(AT.GET_ARTICLES_REQUEST);