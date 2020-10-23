import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

class Assets extends Component {
    state = {  }

    formatCurrency(amount, prefix) {
        return <NumberFormat value={amount} displayType={'text'} thousandSeparator={true} prefix={prefix} decimalScale={2} fixedDecimalScale={true}/>
    };

    render() { 
        return (
            <table>
                <tr>
                    <th colSpan={2}>Assets</th>
                </tr>
                <tr>
                    <th colSpan={2}>Cash and Investments</th>
                </tr>
                <tr>
                    <td>Chequing</td>
                    <td>{this.formatCurrency(2000, '$')}</td>
                </tr>
                <tr>
                    <td>Savings for Taxes</td>
                    <td>{this.formatCurrency(4000, '$')}</td>
                </tr>
                <tr>
                    <td>Rainy Day Fund</td>
                    <td>{this.formatCurrency(506, '$')}</td>
                </tr>
                <tr>
                    <td>Savings for Fun</td>
                    <td>{this.formatCurrency(5000, '$')}</td>
                </tr>
                <tr>
                    <td>Savings for Travel</td>
                    <td>{this.formatCurrency(400, '$')}</td>
                </tr>
                <tr>
                    <td>Savings for Personal Development</td>
                    <td>{this.formatCurrency(200, '$')}</td>
                </tr>
                <tr>
                    <td>Investment 1</td>
                    <td>{this.formatCurrency(5000, '$')}</td>
                </tr>
                <tr>
                    <td>Investment 2</td>
                    <td>{this.formatCurrency(60000, '$')}</td>
                </tr>
                <tr>
                    <td>Investment 3</td>
                    <td>{this.formatCurrency(30000, '$')}</td>
                </tr>
                <tr>
                    <td>Investment 4</td>
                    <td>{this.formatCurrency(50000, '$')}</td>
                </tr>
                <tr>
                    <td>Investment 5</td>
                    <td>{this.formatCurrency(24000, '$')}</td>
                </tr>
                <tr>
                    <th colSpan={2}>Long Term Assets</th>
                </tr>
                <tr>
                    <td>Primay Home</td>
                    <td>{this.formatCurrency(455000, '$')}</td>
                </tr>
                <tr>
                    <td>Second Home</td>
                    <td>{this.formatCurrency(1564321, '$')}</td>
                </tr>
                <tr>
                    <td>Total Assets</td>
                    <td>{this.formatCurrency(2200427, '$')}</td>
                </tr>
            </table>
        )
    }
}
 
export default Assets;