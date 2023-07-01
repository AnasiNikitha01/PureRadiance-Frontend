import React, { useState } from 'react'

export default function Searchbar() {

     const [Problem,SetProblem] = useState('');


     function submit(event){
      event.preventDefault();
      console.log(Problem);
      window.location.href = `/search/${Problem}/SkinProblem`;
     }


  return (
    <div className='Searchbar'>

       <form  onSubmit={submit}>
        <label>Your major skin concern:</label>
        <p className='searchbox'>
        <select className="form-select" aria-label="Default select example" value={Problem} onChange={event => SetProblem(event.target.value)}>
          <option >Problem Type</option>
          <option value=" Acne ">Acne</option>
          <option value=" Dark Spots ">Dark Spots</option>
          <option value=" Dark Circles ">Dark Circles</option>
          <option value=" Wrinkles ">Wrinkles</option>
          <option value=" Black Heads ">Black Heads</option>
          {/* <option value=" Others ">Others</option> */}
        </select>
           <button><i className="bi bi-arrow-right-circle"></i></button>
           </p>
       </form>
      
    </div>
  )
}
