import _ from 'lodash'
import React, { Component } from 'react';
import {connect } from 'react-redux';
import Chart from './chart/index';
import GoogleMapi from '../googleMap/index'
 class wheatherList extends Component{
     renderWeather(cityData){
         const temps=_.map(cityData.list.map((weather)=>weather.main.temp),(temp)=>temp-273)
         const pressures=cityData.list.map((weather)=>weather.main.pressure)
         const humidities=cityData.list.map((weather)=>weather.main.humidity)
        //const {lon,lat}=cityData.city.coord;
      

         return(
             <tr key={cityData.city.name}>
                  <td>{cityData.city.name} 
                 </td> 
                 {/* <td>
                     <GoogleMapi />
                 </td> */}
                 <td>
                   <Chart data={temps} color="Orange" units="C"/>
                 </td>
                 <td>
                   <Chart data={pressures} color="Green" units="hpa"/>
                 </td>
                 <td>
                   <Chart data={humidities} color="Yellow" units="%"/>
                 </td>
             </tr>
         )
     }
    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th>City</th>
                    <th>Temprature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }

}
function mapStateToProps({weather}){
    return{weather}; ///{weather}==={weather:weather}
}

export default connect(mapStateToProps)(wheatherList)