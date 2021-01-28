import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import thunk from 'redux-thunk';
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import fbConfig from './firebase';
import firebase from 'firebase/app'

  

const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebase, fbConfig)
    )

  );

  const rrfprops = {
    firebase,
    config: fbConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
  }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfprops}>
      <Router>
        <App />
      </Router>
    </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
