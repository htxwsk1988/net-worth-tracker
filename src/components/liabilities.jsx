import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

class Liabilities extends Component {
    state = {  }

    formatCurrency(amount, prefix) {
        return <NumberFormat value={amount} displayType={'text'} thousandSeparator={true} prefix={prefix} decimalScale={2} fixedDecimalScale={true}/>
    };
    
    render() { 
        return (  
            <table>
                <tr>
                    <th colSpan={2}>Liabilities</th>
                </tr>
                <tr>
                    <th colSpan={2}>Short Term Liabilities</th>
                </tr>
                <tr>
                    <td>Credit Card 1</td>
                    <td>{this.formatCurrency(4342, '$')}</td>
                </tr>
                <tr>
                    <td>Credit Card 2</td>
                    <td>{this.formatCurrency(322, '$')}</td>
                </tr>
                <tr>
                    <th colSpan={2}>Long Term Debt</th>
                </tr>
                <tr>
                    <td>Mortgage 1</td>
                    <td>{this.formatCurrency(250999, '$')}</td>
                </tr>
                <tr>
                    <td>Mortgage 2</td>
                    <td>{this.formatCurrency(632634, '$')}</td>
                </tr>
                <tr>
                    <td>Line of Credit</td>
                    <td>{this.formatCurrency(632634, '$')}</td>
                </tr>
                <tr>
                    <td>Investment Loan</td>
                    <td>{this.formatCurrency(632634, '$')}</td>
                </tr>
                <tr>
                    <td>Student Loan</td>
                    <td>{this.formatCurrency(10000, '$')}</td>
                </tr>
                <tr>
                    <td>Car Loan</td>
                    <td>{this.formatCurrency(10000, '$')}</td>
                </tr>
                <tr>
                    <td>Total Liabilities</td>
                    <td>{this.formatCurrency(908297, '$')}</td>
                </tr>
            </table>
        );
    }
}
 
export default Liabilities;