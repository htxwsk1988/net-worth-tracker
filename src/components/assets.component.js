import React, { Component } from 'react';
import axios from 'axios';
import Asset from './asset.component';

class Assets extends Component {

    constructor(props) {
        super(props);

        this.onBlurHandler = this.onBlurHandler.bind(this);
        this.renderAssetData = this.renderAssetData.bind(this);

        this.state = {
            assets: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/assets')
            .then(res => this.setState({assets: res && res.data}))
            .catch(err => console.log(err));
    }

    onBlurHandler() {
        this.props.onBlurHandler();
    }

    formatCurrency(amount) {
        return amount.toFixed(2).toLocaleString();
    };

    renderAssetData(shortTerm) {
        return (
            <tbody>
                {
                this.state.assets
                    .filter(asset => asset.shortTerm === shortTerm)
                    .map(asset => <Asset key={asset.id} asset={asset} currencySymbol={this.props.currencySymbol} onBlurHandler={this.onBlurHandler}/>)
                }
            </tbody>
        );
     }

    render() { 
        return (
            <table>
                <tr>
                    <th colSpan={2}>Assets</th>
                </tr>
                <tr>
                    <th colSpan={2}>Cash and Investments</th>
                </tr>
                { this.renderAssetData(true) }
                <tr>
                    <th colSpan={2}>Long Term Assets</th>
                </tr>
                { this.renderAssetData(false) }
                <tr className='totalAssets'>
                    <td>Total Assets</td>
                    <td>
                        <div className='leftContainer'> {this.props.currencySymbol} </div>
                        <div className='rightContainer'> {this.formatCurrency(this.props.totalAssets)} </div>
                    </td>
                </tr>
            </table>
        )
    }
}
 
export default Assets;