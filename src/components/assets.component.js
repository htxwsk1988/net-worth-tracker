import React, { Component } from 'react';
import axios from 'axios';
import Asset from './asset.component';

class Assets extends Component {
    state = {

    }

    constructor(props) {
        super(props);

        this.onBlurHandler = this.onBlurHandler.bind(this);
        this.renderAssetData = this.renderAssetData.bind(this);
        this.getTotalAssets = this.getTotalAssets.bind(this);

        this.state = {
            assets: [],
            totalAssets: 0
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/assets')
            .then(res => {
                let assets = res && res.data;
                this.setState({assets});
                
                let totalAssets=0;
                assets.forEach(asset => totalAssets += 1 * asset.amount);
                this.setState({totalAssets});
            })
            .catch(err => console.log(err));
    }

    onBlurHandler() {
        axios.get('http://localhost:5000/assets')
        .then(res => {
            let assets = res && res.data;
            
            let totalAssets=0;
            assets.forEach(asset => totalAssets += 1 * asset.amount);
            this.setState({totalAssets});
        })
        .catch(err => console.log(err));
    }

    formatCurrency(amount) {
        return new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
            ).format(amount);
    };

    getTotalAssets() {
        let sum=0;
        this.state.assets.forEach(asset => sum += asset.amount);
        return sum;
    }

    renderAssetData(shortTerm) {
        return (
            <tbody>
                {
                this.state.assets
                    .filter(asset => asset.shortTerm === shortTerm)
                    .map(asset => <Asset key={asset.id} asset={asset} onBlurHandler={this.onBlurHandler}/>)
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
                    <td>{this.formatCurrency(this.state.totalAssets)}</td>
                </tr>
            </table>
        )
    }
}
 
export default Assets;