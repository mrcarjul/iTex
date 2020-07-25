// import devTools from 'remote-redux-devtools';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

export default function configureStore() {
  const middleware = [];
  const enhancers = [];
  middleware.push(thunk);
  enhancers.push(applyMiddleware(...middleware));
  const enhancer = compose(...enhancers);

  const store = createStore(reducer, enhancer);

  return {store, persistor};
}
