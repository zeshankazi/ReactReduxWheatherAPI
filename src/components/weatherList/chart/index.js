import _ from 'lodash';
import React ,{Component} from 'react';
import {Sparklines ,SparklinesLine,SparklinesReferenceLine}from 'react-sparklines'

export default((props)=>{
    function average(data){
        return _.round(_.sum(data)/data.length)

    }
    return(
        <div>
            <Sparklines height={110} width={150} data={props.data}>
                <SparklinesLine color={props.color}></SparklinesLine>
                <SparklinesReferenceLine type="avg"></SparklinesReferenceLine>
            </Sparklines>
            <div>
                {average(props.data)}{props.units}
            </div>
        </div>
)
})