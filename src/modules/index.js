import { combineReducers } from 'redux';
import auth from './auth';

// 루트 리듀서 생성
const rootReducer = combineReducers({
    auth,
});

export default rootReducer;