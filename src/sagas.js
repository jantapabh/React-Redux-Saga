import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { REQUEST_API_DATA, receiveApiData} from './actions';
import { fetchData} from './api'

//Worker Saga: will be fired on USER_FETCH_REQU
function* getApiData(action){
    try {
        //do api call
        const data = yield call(fetchData);
        console.log(data);
        yield put(receiveApiData(data));

    }catch(e){
        console.log(e)
    }
}

export default function* mySaga(){
    yield takeLatest(REQUEST_API_DATA, getApiData);
}