import React, { Component } from 'react';
import axios from 'axios';

class Liability extends Component {

    constructor(props) {
        super(props);

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onBlurHandler = this.onBlurHandler.bind(this);

        this.state = {
            id: this.props.liability.id,
            name: this.props.liability.name,
            monthlyPayment: this.props.liability.monthlyPayment,
            amount: this.props.liability.amount,
            shortTerm: this.props.liability.shortTerm
        }
    }

    onChangeHandler(e) {
        this.setState({ amount: e.target.value }); 
    }

    onBlurHandler(e) {
        axios.post('http://localhost:5000/liabilities/update/'+ this.props.liability.id, {
            amount : e.target.value
        }, {
            auth: {
                username: 'admin',
                password: 'admin'
            }
        })
        .then(res => this.props.onBlurHandler())
        .catch(err => console.log(err));
    }

    formatCurrency(amount) {
        return amount.toFixed(2).toLocaleString();
    };
    
    render() {
        return (
            <tr key={this.state.id}>
                <td> {this.state.name} </td>
                <td width='30%'> 
                    <div className='leftContainer'> {this.props.currencySymbol} </div>
                    <div className='rightContainer'> {this.formatCurrency(this.state.monthlyPayment)} </div>
                </td>
                <td width='30%'> 
                    <div className='leftContainer'> {this.props.currencySymbol} </div>
                    <div className='rightContainer'>
                        <input 
                            type="number" 
                            value={this.state.amount} 
                            onChange={this.onChangeHandler}
                            onBlur={this.onBlurHandler}/>
                    </div>
                </td>
            </tr>
        )
    }
}
 
export default Liability;