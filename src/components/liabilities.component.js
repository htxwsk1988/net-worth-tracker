import React, { Component } from 'react';
import axios from 'axios';
import Liability from './liability.component';

class Liabilities extends Component {
    state = {}

    constructor(props) {
        super(props);

        this.onBlurHandler = this.onBlurHandler.bind(this);
        this.renderAssetData = this.renderAssetData.bind(this);

        this.state = {
            liabilities: [],
            totalLiabilities: 0
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/liabilities')
            .then(res => {
                let liabilities = res && res.data;
                this.setState({liabilities});
                
                let totalLiabilities=0;
                liabilities.forEach(liability => totalLiabilities += 1 * liability.amount);
                this.setState({totalLiabilities});
            })
            .catch(err => console.log(err));
    }

    onBlurHandler() {
        axios.get('http://localhost:5000/liabilities')
            .then(res => {
                let liabilities = res && res.data;
                
                let totalLiabilities=0;
                liabilities.forEach(liability => totalLiabilities += 1 * liability.amount);
                this.setState({totalLiabilities});
            })
            .catch(err => console.log(err));
    }

    renderAssetData(shortTerm) {
        return (
            <tbody>
                {
                this.state.liabilities
                    .filter(liability => liability.shortTerm === shortTerm)
                    .map((liability) => <Liability key={liability.id} liability={liability} onBlurHandler={this.onBlurHandler}/>)
                }
            </tbody>
        );
     }

    formatCurrency(amount) {
        return new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
            ).format(amount);
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
                    <td>{this.formatCurrency(this.state.totalLiabilities)}</td>
                </tr>
            </table>
        );
    }
}
 
export default Liabilities;