import React, { Component } from 'react';

import InvoiceDetails  from '../InvoiceDetails';
import ActionHistory from '../ActionHistory';

import './index.css'

const TabsList=[
    {tab:"Invoice Details",tabId:1},{tab:"Action History",tabId:2}]

class FormComponent extends Component {
    state={activeTab:true}
    onTab=()=>{
        this.setState((prevState) => ({ activeTab: !prevState.activeTab }))
    }
    renderTabs=()=>(
        <ul>
            {TabsList.map((each)=><li className='tabs-list' onClick={this.onTab}>{each.tab}</li>)}
        </ul>
    )
  render() {
    const {activeTab}=this.state
    return(
        <div className='form'>
            {this.renderTabs()}
            
            {activeTab?<InvoiceDetails/>:<ActionHistory/>}
        </div>
    )
  }
}

export default FormComponent;
