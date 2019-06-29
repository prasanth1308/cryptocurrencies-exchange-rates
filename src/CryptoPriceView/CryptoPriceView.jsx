import React, { Component } from 'react';
import '../App.css';
import Today from './Today/Today';
import History from './History/History';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// const useStyles = makeStyles(theme => ({
//     button: {
//         margin: theme.spacing(1),
//     },
//     input: {
//         display: 'none',
//     },
// }));
// const classes = useStyles();

class CryptoPriceView extends Component {
    constructor(props){
        super(props);
    }
    onLogoutClick = (event) => {
        event.preventDefault();
        try {  
            localStorage.clear();
            this.props.removeUserLogin();
          } catch (error) {
            console.log('onLogoutClick', error)
          }
    }
    render() {
        return (
            <div className="">
                <div className="topheader">
                    <header className="container">
                        <nav className="navbar">
                            <div className="navbar-brand">
                                <span className="navbar-item">Cryptocurrencies Exchange Rates</span>
                            </div>
                            <Button color="primary" className='logout-btn' onClick={this.onLogoutClick}>
                                Logout
                            </Button>
                        </nav>
                    </header>
                </div>
                <section className="results--section">
                    <div className="container">
                        <h1>Cryptocurrencies Exchange Rates is a realtime price information about<br></br> BTC, ETH and LTC.</h1>
                    </div>
                    <div className="results--section__inner">
                        <Today />
                        <History />
                    </div>
                </section>
            </div>
        );
    }
}

export default CryptoPriceView;
