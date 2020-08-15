import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import CreditCard from './CreditCard';
import GiftCard from './GiftCard';
import PayPal from './PayPal';
import $ from "jquery";

$(document).on('click', 'a', function(){
  $('.active').removeClass('active');
  $(this).addClass('active');
})



class Display extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: 1
    };
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(key) {
    this.setState({ key });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm">
            <a className="btn btn-outline-primary btn-block active" onClick={() => this.handleSelect(1)}>Credit Card</a>
          </div>
          <div className="col-sm">
            <a className="btn btn-outline-primary btn-block" onClick={() => this.handleSelect(2)}>Gift Card</a>
          </div>
          <div className="col-sm">
            <a className="btn btn-outline-primary btn-block" onClick={() => this.handleSelect(3)}>PayPal</a>

          </div>
        </div>
        <Tabs activeKey={this.state.key} onSelect={this.handleSelect}
          id="controlled-tab-example">
          <Tab eventKey={1} > <CreditCard /></Tab>
          <Tab eventKey={2} > <GiftCard /> </Tab>
          <Tab eventKey={3} > <PayPal /></Tab>
        </Tabs>

      </div>
    )
  }
}

export default Display
