import React, { Component } from 'react';
import axios from 'axios';
import Assets from './assets.component'
import Liabilities from './liabilities.component'

class Networth extends Component {
    state = {  }

    constructor(props) {
        super(props);

        this.onChangeCurrency = this.onChangeCurrency.bind(this);
        this.onBlurHandler = this.onBlurHandler.bind(this);

        this.state = {
            currency: 'CAD',
            currencies: ['USD', 'CAD', 'EUR', 'JPY', 'MXN'],
            totalAssets:0,
            totalLiabilities: 0
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/assets/sum')
            .then(res => this.setState({totalAssets: res && res.data}))
            .catch(err => console.log(err));

        axios.get('http://localhost:5000/liabilities/sum')
            .then(res => this.setState({totalLiabilities: res && res.data}))
            .catch(err => console.log(err));
    }

    onChangeCurrency(e) {
        let currency = e.target.value;

        this.setState({currency}); // async call

        axios.get('http://localhost:5000/assets/sum?currency=' + currency)
        .then(res => this.setState({totalAssets: res && res.data}))
        .catch(err => console.log(err));

        axios.get('http://localhost:5000/liabilities/sum?currency=' + currency)
            .then(res => this.setState({totalLiabilities: res && res.data}))
            .catch(err => console.log(err));
    }

    onBlurHandler() {
        axios.get('http://localhost:5000/assets/sum')
        .then(res => this.setState({totalAssets: res && res.data}))
        .catch(err => console.log(err));

        axios.get('http://localhost:5000/liabilities/sum')
            .then(res => this.setState({totalLiabilities: res && res.data}))
            .catch(err => console.log(err));
    }

    formatCurrency(amount) {
        return amount.toFixed(2).toLocaleString();
    };

    getCurrencySymbol(currency) {
        let symbol='$';
        // 'CAD', 'USD', 'EUR', 'JPY', 'MXN'
        if (currency === 'CAD' || currency === 'USD' || currency === 'MXN') { symbol='$'; }
        if (currency === 'EUR') { symbol = '€'; }
        if (currency === 'JPY') { symbol = '¥'; }

        return symbol;
    };

    render() {
        return (
            <div class='container'>
                <table>
                    <tr>
                        <th colSpan={3}>Tacking your Networth</th>
                    </tr>
                    <tr>
                        <td colSpan={2}></td>
                        <td colSpan={1} width='30%'>
                            <div>
                                <label for="currency-options">Select Currency: </label>
                                <select id='currency-options'
                                    ref="currency"
                                    required
                                    className="currency"
                                    value={this.state.currency}
                                    onChange={this.onChangeCurrency}>
                                    {
                                        this.state.currencies.map(currency => {
                                            return (
                                                <option key={currency} value={currency}>
                                                    {currency}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </td>
                    </tr>
                    <tr className='networth'>
                        <td colSpan={2} >Net Worth</td>
                        <td width='30%'>
                            <div className='leftContainer'> {this.getCurrencySymbol(this.state.currency)} </div>
                            <div className='rightContainer'> {this.formatCurrency(this.state.totalAssets - this.state.totalLiabilities)} </div>
                        </td>
                    </tr>
                </table>
                <br/>
                <Assets 
                    totalAssets={this.state.totalAssets} 
                    currency={this.state.currency} 
                    currencySymbol={this.getCurrencySymbol(this.state.currency)} 
                    onBlurHandler={this.onBlurHandler}/>
                <br/>
                <Liabilities 
                    totalLiabilities={this.state.totalLiabilities} 
                    currency={this.state.currency} 
                    currencySymbol={this.getCurrencySymbol(this.state.currency)} 
                    onBlurHandler={this.onBlurHandler}/>
            </div>
        );
    }
}
 
export default Networth;