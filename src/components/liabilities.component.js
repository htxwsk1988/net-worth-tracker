import React, { Component } from 'react';
import axios from 'axios';
import Liability from './liability.component';

class Liabilities extends Component {

    constructor(props) {
        super(props);

        this.onBlurHandler = this.onBlurHandler.bind(this);
        this.renderAssetData = this.renderAssetData.bind(this);

        this.state = {
            liabilities: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/liabilities')
            .then(res => this.setState({liabilities: res && res.data}))
            .catch(err => console.log(err));
    }

    onBlurHandler() {
        this.props.onBlurHandler();
    }

    renderAssetData(shortTerm) {
        return (
            <tbody>
                {
                this.state.liabilities
                    .filter(liability => liability.shortTerm === shortTerm)
                    .map((liability) => <Liability key={liability.id} liability={liability} currencySymbol={this.props.currencySymbol} onBlurHandler={this.onBlurHandler}/>)
                }
            </tbody>
        );
     }

    formatCurrency(amount) {
        return amount.toFixed(2).toLocaleString();
    };
    
    render() { 
        return (
            <table>
                <tr>
                    <th colSpan={3}>Liabilities</th>
                </tr>
                <tr>
                    <th colSpan={1}>Short Term Liabilities</th>
                    <th colSpan={2}>Montyly Payment</th>
                </tr>
                { this.renderAssetData(true) }
                <tr>
                    <th colSpan={3}>Long Term Debt</th>
                </tr>
                { this.renderAssetData(false) }
                <tr className='totalLiabilities'>
                    <td colSpan={2} >Total Liabilities</td>
                    <td>
                        <div className='leftContainer'> {this.props.currencySymbol} </div>
                        <div className='rightContainer'> {this.formatCurrency(this.props.totalLiabilities)} </div>
                    </td>
                </tr>
            </table>
        );
    }
}
 
export default Liabilities;