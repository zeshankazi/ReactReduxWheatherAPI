import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fecthWheather}from '../../actions/index'

class searchbar extends Component{
    constructor(props){
        super(props);
        this.state={
            term:''
        }
        this.onInputChange=this.onInputChange.bind(this);
        this.onFormSubmit=this.onFormSubmit.bind(this)
    }
    onInputChange(event){

this.setState({term:event.target.value})
    }
    onFormSubmit(event){
        event.preventDefault();
        //Go and fetchWheather api  

        this.props.fecthWheather(this.state.term);
        this.setState({term:''});
        

    }
    render(){
        return(
            <form  onSubmit={this.onFormSubmit}
            className="input-group">
                <input
                className="form-control"
                placeholder="Get Five Day wheather forecast"
                value={this.state.term}
                onChange={this.onInputChange}/>
                <span 
                className="input-group-btn">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </span>

            </form>

        )
    }
}
function mapDispatchProps(dispatch){
    return bindActionCreators({fecthWheather},dispatch)
}

export default connect(null,mapDispatchProps)(searchbar);