import React, { Component } from 'react';
import ReactDom from 'react-dom';
import ReduxPromise from 'redux-promise';
 import{Provider} from 'react-redux';
 import{createStore,applyMiddleware} from 'redux';
 import SearchBar from './components/searchbar/index';
 import reducers from './reducers/index'
 import  WeatherList from './components/weatherList/index'
import wheather from './components/weatherList/index';

 const createStoreWithMiddleWare=applyMiddleware(ReduxPromise)(createStore);
 class App extends Component {

    render(){
        return(<div className="container">
            <SearchBar/>
            <WeatherList/>
        </div>)
    }

}
ReactDom.render(
    <Provider store={createStoreWithMiddleWare(reducers)}>
        <App/>

    </Provider>,document.querySelector('#root')
)