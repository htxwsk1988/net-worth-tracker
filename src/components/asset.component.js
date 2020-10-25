import React, { Component } from 'react';
import axios from 'axios';

class Asset extends Component {
    state = {
        id: this.props.asset.id,
        name: this.props.asset.name,
        amount: this.props.asset.amount,
        shortTerm: this.props.asset.shortTerm
    }

    constructor(props) {
        super(props);

        this.onChangeHandler= this.onChangeHandler.bind(this);
        this.onBlurHandler = this.onBlurHandler.bind(this);
        // this.formatCurrency = this.formatCurrency.bind(this);
    }

    onChangeHandler(e) {
        this.setState({amount: e.target.value});
    }

    onBlurHandler(e) {
        axios.post('http://localhost:5000/assets/update/'+ this.props.asset.id, {amount : e.target.value})
            .then(res => this.props.onBlurHandler())
            .catch(err => console.log(err));
    }

    // formatCurrency(amount) {
    //     return new Intl.NumberFormat('en-US',
    //         { style: 'currency', currency: 'USD' }
    //         ).format(amount);
    // };
    
    render() {
        return (
            <tr key={this.state.id}>
                <td> {this.state.name} </td>
                <td> 
                    <input 
                        type="number"
                        value={this.state.amount}
                        onChange={this.onChangeHandler}
                        onBlur={this.onBlurHandler}
                        /> 
                </td>
            </tr>
        )
    }
}
 
export default Asset;