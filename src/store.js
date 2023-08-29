import { createStore } from 'redux';
import { rootReducer } from './Reducers';

const myStore = createStore(rootReducer);

export default myStore;