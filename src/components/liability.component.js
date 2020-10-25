import React, { Component } from 'react';
import axios from 'axios';

class Liability extends Component {
    state = {
        id: this.props.liability.id,
        name: this.props.liability.name,
        monthlyPayment: this.props.liability.monthlyPayment,
        amount: this.props.liability.amount,
        shortTerm: this.props.liability.shortTerm
    }

    constructor(props) {
        super(props);

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onBlurHandler = this.onBlurHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({ amount: e.target.value }); 
    }

    onBlurHandler(e) {
        axios.post('http://localhost:5000/liabilities/update/'+ this.props.liability.id, {amount : e.target.value})
            .then(res => this.props.onBlurHandler())
            .catch(err => console.log(err));
    }

    formatCurrency(amount) {
        return new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
            ).format(amount);
    };
    
    render() {
        return (
            <tr key={this.state.id}>
                <td> {this.state.name} </td>
                <td width='30%'> {this.state.monthlyPayment} </td>
                <td width='30%'> 
                    <input 
                        type="number" 
                        value={this.state.amount} 
                        onChange={this.onChangeHandler}
                        onBlur={this.onBlurHandler}/> 
                </td>
            </tr>
        )
    }
}
 
export default Liability;