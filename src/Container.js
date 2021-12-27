import React, { Component } from 'react'
import './containerStyle.css'

class Container extends Component {

    constructor() {
        super();
    
        this.state = {
            name:"",
            department:"",
            rating:"", 
            item:[],
            isFormSubmit:false
        }
    }

update=(event)=>{
    this.setState(
        {
            [event.target.name]:event.target.value
        }
    )
}

handlesubmit=(event)=>{
    event.preventDefault();
    const tempObj={
        name:this.state.name,
        department:this.state.department,
        rating:this.state.rating
    }
    const tempArr=this.state.item;
    tempArr.push(tempObj)
    this.setState(
        {
            name:"",
            department:"",
            rating:"",
            item:[...tempArr]
        }
    )
    this.setState(    {isFormSubmit:true}    )
}

goBack=()=>{
    this.setState(    {isFormSubmit:false}  )
}
    

    render() {
// CONDITION FOR DISPLAY ON THE SCREEN
let feedBackForm;
let goBack;
let displayFeedBack;
        if (!this.state.isFormSubmit) {
            feedBackForm=<form>
                            <h1 className='heading'>EMPLOYEE FEEDBACK FORM</h1>
                            <label htmlFor='text' className='sideHeading'>Name : </label>
                            <input type="text" className='inputbox' name="name"  value={this.state.name} onChange={this.update}></input>
                            <br/>
                            <label htmlFor='text' className='sideHeading'>Department : </label>
                            <input type="text" className='inputbox' name="department" value={this.state.department} onChange={this.update}></input>
                            <br/>
                            <label htmlFor='text' className='sideHeading'>Rating : </label>
                            <input type="number" className='inputbox' name="rating" value={this.state.rating} onChange={this.update}></input>
                            <br/>
                            <button type='submit' className='submitbutton' onClick={this.handlesubmit}>Submit</button>
                        </form>
                    goBack=null;
                    displayFeedBack=null;
        } else {
            feedBackForm=null;
            goBack=<button className='submitbutton'  onClick={this.goBack}>Go Back</button>
            displayFeedBack=<div>
                <h1 className='heading'>EMPLOYEE FEEDBACK FORM</h1>
                <div className='displayBox'>
                    {this.state.item.map((value)=>{
                    return(
                        <div className='output_occur'>
                        <p>Name: {value.name}   |   Department:{value.department}   |   Rating:{value.rating}</p>
                    </div>
                    )
                    })}
                </div>
            </div>
        }
        return (
            <div>
               
                {feedBackForm}

                {displayFeedBack}

                {goBack}
                
            </div>
        )
    }
}

export default Container
