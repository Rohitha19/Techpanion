import React, { Component } from 'react';
import './index.css'; // Import the CSS file
import { AiOutlineFieldTime } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { ImEnlarge2 } from "react-icons/im";
import { TfiReload } from "react-icons/tfi";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

class InvoiceDetails extends Component {
  render() {
    return (
      <form>
        <div className="form-container">
        
        <h4> <IoIosArrowDown /> INVOICE AMOUNT DETAILS</h4>
          <div className="form-group">
          <AiOutlineFieldTime />
            <label>Currency:<span>*</span></label>
            <p type="text" name="currency" >INR</p>
          </div>
          <div className="form-group">
          <AiOutlineFieldTime />
            <label>Invoice Basic Amount:<span>*</span></label>
            <p type="number" name="basicAmount" >15,000.00</p>
          </div>
          <div className="form-group">
          <AiOutlineFieldTime />
            <label>Invoice Tax Amount:<span>*</span></label>
            <p type="number" name="taxAmount" >1,000.00</p>
          </div>
          <div className="form-group">
          <AiOutlineFieldTime />
            <label>Total Invoice Amount:<span>*</span></label>
            <p type="number" name="totalAmount" >16,000.00</p>
          </div>
          <div className="form-group">
          <AiOutlineFieldTime />
            <label>Advance Paid:<span>*</span></label>
            <input value="0.00" type="number" name="advancePaid" />
          </div>
          <div className="form-group tcs">
          <AiOutlineFieldTime />
            <label>TCS Applicable:<span>*</span></label>
            <div className="radio-group">
            <input type="radio" name="tcsApplicable" value="yes" />
              <label>
                 Yes
              </label>
              <input type="radio" name="tcsApplicable" value="no" />
              <label>
                 No
              </label>
            </div>
          </div>
          <div className="form-group">
          <AiOutlineFieldTime />
            <label>Net Payable Amount [Exclu. of TDS]<span>*</span>:</label>
            <p type="number" name="netPayableAmount" >16,000.00</p>
          </div>
      </div>
      <div className="form-container">
        <h4> <IoIosArrowDown /> ALTERNATE PAYEE DETAILS</h4>
          <div className="form-group alternate-payee">
          <AiOutlineFieldTime />
            <label>Alternate Payee 1 :<span>*</span></label>
            <input type="text" name="currency"  />
          </div>
          <div className="form-group alternate-payee">
          <AiOutlineFieldTime />
            <label>Alternate Payee 2 :<span>*</span></label>
            <input type="number" name="basicAmount" />
          </div>
          <div className="form-group alternate-payee">
          <AiOutlineFieldTime />
            <label>City :<span>*</span></label>
            <input type="number" name="taxAmount" />
          </div>
          <div className="form-group alternate-payee">
          <AiOutlineFieldTime />
            <label>Street :<span>*</span></label>
            <input type="number" name="taxAmount" />
          </div>
          <div className="form-group alternate-payee">
            <AiOutlineFieldTime />
            <label>Country :<span>*</span></label>
            <input type="number" name="totalAmount" />
          </div>
          <div className="form-group alternate-payee">
            <AiOutlineFieldTime />
            <label>Bank Key / ISFC Code :<span>*</span></label>
            <input type="number" name="taxAmount" />
          </div>
          <div className="form-group alternate-payee">
            <AiOutlineFieldTime />
            <label>Bank Acc No :<span>*</span></label>
            <input type="number" name="taxAmount" />
          </div>
          <div className="form-group alternate-payee">
            <AiOutlineFieldTime />
            <label>Reference :<span>*</span></label>
            <input type="number" name="taxAmount" />
          </div>
      </div>
      <div className="form-container">
        <h4> <IoIosArrowDown /> LINE ITEM DETAILS</h4>
        <div>
        <ImEnlarge2 className='icon' />
        <TfiReload className='icon' />
        </div>
        <div className='bottom-table'>
          <div className='row1'>
            <input type="checkbox" />
            <p>Select Debit</p>
            <p>GL Desc</p>
            <p>GL Code</p>
            <p>Text (Do not enter special characters)</p>
          </div>
          <div className='row2'>
            <input type="checkbox" />
            <select>
              <option>Debit</option>
            </select>
            <select>
              <option>
                Original cost-Plant & ...
              </option>
            </select>
            <p>0020200000</p>
            <input type="text"/>
          </div>
        </div>
      </div>
      <div className='pages-'>
        <div className='pages'>
          <MdArrowBackIos />
          <p>1</p>
          <MdArrowForwardIos />
          <select>
            <option>200 / page</option>
          </select>
        </div>
        <div>
          <button className='bottom-buttons'>Calculate</button>
          <button className='bottom-buttons'>Add</button>
        </div>
      </div>
      </form>
      
    );
  }
}

export default InvoiceDetails;
