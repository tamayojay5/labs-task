import React, { Component } from 'react';
import Terms from './Terms';
import InputMask from 'react-input-mask';
import '../style.css';


const Font = {
  fontSize: "12px",
  color: "red",
}

const Label = {
  fontSize: "12px",
  marginRight: "100px"
}

const initialState = {
  cardNumber: '',
  cW: '',
  validThruYy: "",
  validThruMm: "",
  cardHoldersName: "",
  cardNumberError: "",
  cWError: "",
  validThruMmError: "",
  validThruYyError: "",
  cardHoldersNameError: "",
  
}


class CreditCard extends Component {

  state = initialState

  constructor(props) {
    super(props);
    this.state = {
      cW: '',
      validThruMm: '',
      validThruYy: '',
      regexp: /^[0-9\b]+$/
    }    

    this.onChange = this.onChange.bind(this);
    this.onHandleNumberChange = this.onHandleNumberChange.bind(this);
    this.onChangeNum = this.onChangeNum.bind(this);
    this.onChangeLetter = this.onChangeLetter.bind(this);

  }


  onChange = (event) => {
    this.setState({
      cardNumber: event.target.value
    });
  }

  onChangeNum = (event) => {
    this.setState({
      cW: event.target.value.substr(0, 3) 
    })

    this.setState({
      validThruMm: event.target.value.substr(0,2)
    })

    this.setState({
      validThruYy: event.target.value.substr(0,2)
    })
 }

  onChangeLetter = (event) => {
    
    this.setState({
      cardHoldersName: event.target.value
  });
  }

  maxLengthCheck = (object) => {
    if (object.target.value.length > object.target.maxLength) {
     object.target.value = object.target.value.slice(0, object.target.maxLength)
      }
    }

  

  onHandleNumberChange = e => {

    let cW = e.target.value;
    let validThruMm = e.target.value;
    let validThruYy = e.target.value;

    if (cW === '' || this.state.regexp.test(cW)) {
      this.setState({ [e.target.name]: cW })
    }

    if (validThruMm === '' || this.state.regexp.test(validThruMm)) {
      this.setState({ [e.target.name]: validThruMm })
    }

    if (validThruYy === '' || this.state.regexp.test(validThruYy)) {
      this.setState({ [e.target.name]: validThruYy })
    }
  };

  validate = () => {
    let cardNumberError = "";
    let cWError = "";
    let validThruMmError = "";
    let validThruYyError = "";
    let cardHoldersNameError = "";

    if (!this.state.cardNumber) {
      cardNumberError = '*This field is required';
    }

    if (!this.state.cW) {
      cWError = '*Required';
    }

    if (!this.state.validThruMm) {
      validThruMmError = '*Required';
    }

    if (!this.state.validThruYy) {
      validThruYyError = '*Required';
    }

    if (!this.state.cardHoldersName) {
      cardHoldersNameError = '*This field is required';
    }

    if (cardNumberError || cWError || validThruMmError || validThruYyError || cardHoldersNameError) {
      this.setState({ cardNumberError, cWError, validThruMmError, validThruYyError, cardHoldersNameError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      //clear form
      this.setState(initialState);
    }
    alert(
    `Transaction Checkout Validation\n\n` +
    `Card Number: ${this.state.cardNumber}\n` + 
    `CW/CVC: ${this.state.cW}\n` + 
    `Valid Thru (mm/yy): ${this.state.validThruMm}/${this.state.validThruYy}\n` + 
    `Card Holder's Name: ${this.state.cardHoldersName}\n`

    
    );
  };



 

  render() {

    
    return (
      <>

        <div className="container mt-4">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-sm-7">
                <label style={Label}>Card Number
                <span style={{marginLeft:"10px", color: "red"}}>{this.state.cardNumberError}</span>
                </label>
                <InputMask mask="9999 9999 9999 9999" name="cardNumber" className="form-control" maskchar=" " value={this.state.cardNumber} onChange={this.onChange} />
              </div>
              <div className="col-sm-2">
                <label style={Label}>CW/CVC
                <span style={{marginLeft:"10px", color: "red"}}>{this.state.cWError}</span>
                </label>

                <input name="cW" className="form-control" maxLength = "3" onInput={this.maxLengthCheck} value={this.state.cW} id="cW" onChange={this.state.onChangeNum, this.onHandleNumberChange} />
              </div>
              <div className="col-sm">
              <button type="button" className="but" data-toggle="tooltip" data-placement="top" title="Back of your bank card">?</button>
              </div>
            </div>

            
            <div className="row mt-3">
              <div className="col-sm-7">
                <div className="form-group">
                  <label style={Label}>Valid Thru (mm/yy)
                                  

                  </label>
                  <div className="row">
                    <div className="col-sm-3">
                      <input name="validThruMm" className="form-control" maxLength = "2" onInput={this.maxLengthCheck} value={this.state.validThruMm} onChange={this.state.onChangeNum,this.onHandleNumberChange} />
                      <span style={Font}>{this.state.validThruMmError}</span>

                    </div>
                    <h3>/</h3>
                    <div className="col-sm-3">
                      <input name="validThruYy" className="form-control" maxLength = "2" onInput={this.maxLengthCheck} value={this.state.validThruYy} onChange={this.state.onChange, this.onHandleNumberChange} />
                      <span style={Font}>{this.state.validThruYyError}</span>

                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="row mt-3">
              <div className="col-sm-7">
                <div className="form-group">
                  <label style={Label}>Cardholder's Name
                  <span style={{marginLeft:"10px", color: "red"}}>{this.state.cardHoldersNameError}</span>
                  </label>
                  <input name="cardHoldersName" className="form-control" value={this.state.cardHoldersName} onChange={this.onChangeLetter} />

                </div>
              </div>
            </div>



            <div className="form-group form-check mt-5">
              <Terms />
            </div>



            <button type="submit" className="btn btn-lg btn-block text-white mt-4" style={{ background: "#FF9D5C" }}>Place order ($624.99)</button>
          </form>
        </div>

      





      </>
    )
  }
}

export default CreditCard;