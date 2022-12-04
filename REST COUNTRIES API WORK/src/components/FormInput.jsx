import React from 'react'
import { Link } from 'react-router-dom'

function FormInput({country, data, userAction, setcountry}) {

const setcountryName = (e) => {
    setcountry(e.target.value);
}

const submitHandler = () =>{
    userAction();
    setcountry("");
}

  return (

    <div className='mainbody bg-warning'>
            <div className="container text-center">
               <b>
               <div className='color-danger'>

               
               <br /> <h1 className='text-white'>MERN ASSIGNMENT 2 </h1>
               
              </div>
               </b>
             
               <br></br>
               <br></br>
               <br></br>
                
                <h4 className='text-white'>Enter Specific Country Name For The Record 
                    
                    </h4>
               
               
                 <input onChange={setcountryName} type="text" value={country} placeholder='Enter Country Name Here' className='input text text-center round-corner' onClick={setcountryName}></input><br/><br/>
             
                <button type='button'  className='.text-white'   onClick={submitHandler}>Add Me</button>
                <br/><br/>
                <br/><br/>
                <br></br>
                <br></br>
                <table className="table">
                    <thead className="thead-dark">

                        <tr className='.text-white'>
                           
                            < th scope="col"># </th>
                            <th scope="col">Common Name</th>
                            <th scope="col">Official Name</th>
                            <th scope="col">Languages</th>
                            <th scope="col">Action</th>
                        </tr >
                    </thead>
                    <tbody>
                       {
                         data.map((item, index)=>{

                            return (
                                <>
                                    <tr>
                                        <td>{++index}</td>
                                        <td>{item.common}</td>
                                        <td>{item.official}</td>
                                        <td>{item.languages}</td>
                                        <td><button><Link to={`/About/${item.common}`}>View</Link></button></td>
                                    </tr>
                                </>
                            )
                        })
                       }
                        
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default FormInput