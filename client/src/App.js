import React, { Component } from 'react';
import Display from './components/Display';

const Font = {
    fontSize: "13px"
};


class App extends Component {


  render() {
    return (
      <>
          <div className="checkout mt-3">
          <div className="container">
          <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                <div className="checkout-header">
                  <h5 className="text-uppercase font-weight-light">
                  <img src="" width="30" height="30" alt="" className="rounded-circle bg-primary mr-2"/>
                    <span className="font-weight-bold">demo</span> store
                  </h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 offset-md-2 mt-5">
                <div className="single-form">
                <h2>Checkout</h2>
                    <div className="form-group mt-4">
                      <label htmlFor="exampleInputEmail1">Products</label>
                      <div className="container">
                      <div className="row">
                        <div className="col-sm-10">
                          <a style={Font} href=""><u>Apple@ - iPad@ with Retina@ display Wi-Fi-32GB-White</u></a>
                        </div>
                        <div className="col-sm">
                          <a style={Font}>$499.00</a>
                        </div>                      
                      </div>
                      
                      <div className="row">
                        <div className="col-sm-10">
                          <a style={Font} href=""><u>16GB A Series Walkman Video MP3 </u></a>
                        </div>
                        <div className="col-sm">
                          <a style={Font}>$130.00</a>
                        </div>                      
                      </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Shipping Method</label>
                      <div className="container">
                      <div className="row">
                        <div className="col-sm-10">
                          <a style={Font}>FedEx </a>
                        </div>
                        <div className="col-sm">
                          <a style={Font}>$13.99</a>
                        </div>                      
                      </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1">Payment Method</label>
                    </div>
                    <Display/>
                                    
                </div>
              </div>
            </div>           
          </div>
        </div>
          
      </>
    )
  }
}

export default App;