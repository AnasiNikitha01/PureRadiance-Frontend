import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

export default function BrandForm() {

  const [Age, SetAge] = useState('');
  const [Acne, SetAcne] = useState('');
  const [Spots, SetSpots] = useState('');
  const [Circles, SetCircles] = useState('');
  const [Wrinkles, SetWrinkles] = useState('');
  const [SkinType, SetSkinType] = useState('');
  const [BrandName, SetBrandName] = useState('');
  const [ProductName, SetProductName] = useState('');
  const [Trail, SetTrail] = useState('');
  const [ProductImage, SetProductImage] = useState('');
  const [ProductType, SetProductType] = useState('');
  const [ProductQuantity, SetProductQuantity] = useState('');
  const [ProductPrice, SetProductPrice] = useState('');
  const [Description, SetDescription] = useState('');
  const { id } = useParams();


  async function submit(event) {
    event.preventDefault();

    let BrandObj = {};

    if (Acne === 'yes') {
      BrandObj.Acne = " Acne ";
    }
    if (Spots === 'yes') {
      BrandObj.Spots = " Dark Spots ";
    }
    if (Circles === 'yes') {
      BrandObj.Circles = " Dark Circles ";
    }
    if (Wrinkles === 'yes') {
      BrandObj.Wrinkles = " Wrinkles ";
    }

    console.log(BrandObj);



    const data = new FormData();
    data.set('ProductImage', ProductImage);
    data.set('Age', Age);
    data.set('SkinType', SkinType);
    data.set('Trail', Trail);
    data.set('BrandName', BrandName);
    data.set('ProductName', ProductName);
    data.set('ProductType', ProductType);
    data.set('Description', Description);
    data.set('ProductQuantity',ProductQuantity );
    data.set('ProductPrice',ProductPrice );
    data.set("BrandObj", JSON.stringify(BrandObj));


    const result = await fetch(`http://localhost:5001/${id}/brandform`, {
      method: 'POST',
      credentials: 'include',
      body: data,
    })

    if (result.ok) {
      result.json().then(data => {
        window.location.href = `/${id}/brandProducts`
        console.log(data);
      })
    }

  }


  return (
    <div className='BrandForm'>
      <form onSubmit={submit}>
        <h2>BRAND INFORMATION FORM</h2>

        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingInput" placeholder="@Beauty co." value={BrandName} onChange={event => SetBrandName(event.target.value)} />
          <label >Brand Name</label>
        <small>* mention brand name as you registered</small>
        </div>

        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingInput" placeholder="@Beauty co." value={ProductName} onChange={event => SetProductName(event.target.value)} />
          <label >Product Name</label>
        </div>

        <div className="form-floating mb-3" id='fileInput' >
          <p>Product Image:</p>
          <input type="file" name="ProductImage" placeholder="@Beauty co." className="files" onChange={event => SetProductImage(event.target.files[0])} />

        </div>

        <select className="form-select" aria-label="Default select example" value={Trail} onChange={event => SetTrail(event.target.value)}>
          <option >Trail Product?</option>
          <option value="yes">YES</option>
          <option value="no">NO</option>
        </select>

        {/* <div className="form-floating">
          <input type="text" className="form-control" id="floatingPassword" placeholder="Cleanser" value={ProductType} onChange={event => SetProductType(event.target.value)} />
          <label >Product Type</label>
        </div> */}
        <select className="form-select" aria-label="Default select example" value={ProductType} onChange={event => SetProductType(event.target.value)}>
          <option >Product Type</option>
          <option value="Cleansers">Cleansers</option>
          <option value="Toners">Toners</option>
          <option value="Moisturizers">Moisturizers</option>
          <option value="Sunscreens">Sunscreens</option>
          <option value="Serum">Serum</option>
          <option value="Eye Creams">Eye Creams</option>
          <option value="Face Masks">Face Masks</option>
          <option value="Lip Balm">Lip Balm</option>
          <option value="Exfoliators">Exfoliators</option>
          <option value="Others">Others</option>
        </select>

        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingInput" placeholder="@Beauty co." value={ProductQuantity} onChange={event => SetProductQuantity(event.target.value)} />
          <label >Product Quantity</label>
        </div>

        <select className="form-select" aria-label="Default select example" value={Age} onChange={event => SetAge(event.target.value)}>
          <option >Best for Age Group</option>
          <option value="5 - 17">5 - 17</option>
          <option value="18 - 30">18 - 30</option>
          <option value="31 - 50">31 - 50</option>
          <option value="> 50 "> Age &gt; 50</option>
          <option value="All age">All age groups</option>
        </select>

        <select className="form-select" aria-label="Default select example" value={SkinType} onChange={event => SetSkinType(event.target.value)}>
          <option >Skin Type</option>
          <option value="Oily">Oily Skin</option>
          <option value="Dry">Dry Skin</option>
          <option value="Combined">Combined Skin</option>
          <option value="Normal">Normal Skin</option>
          <option value="All skin">All Skin Types</option>
        </select>

        <select className="form-select" aria-label="Default select example" value={Acne} onChange={event => SetAcne(event.target.value)}>
          <option >Suitable for Acne problem?</option>
          <option value="yes">YES</option>
          <option value="no">NO</option>
        </select>

        <select className="form-select" aria-label="Default select example" value={Spots} onChange={event => SetSpots(event.target.value)}>
          <option >Suitable for Dark Spots?</option>
          <option value="yes">YES</option>
          <option value="no">NO</option>
        </select>

        <select className="form-select" aria-label="Default select example" value={Circles} onChange={event => SetCircles(event.target.value)}>
          <option >Suitable for Dark Circles?</option>
          <option value="yes">YES</option>
          <option value="no">NO</option>
        </select>

        <select className="form-select" aria-label="Default select example" value={Wrinkles} onChange={event => SetWrinkles(event.target.value)}>
          <option >Suitable for Wrinkles?</option>
          <option value="yes">YES</option>
          <option value="no">NO</option>
        </select>

        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingInput" placeholder="$ 120" value={ProductPrice} onChange={event => SetProductPrice(event.target.value)} />
          <label >Product Price INR</label>
        </div>


        <div className="form-floating">
          <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" value={Description} onChange={event => SetDescription(event.target.value)}></textarea>
          <label >Description</label>
        </div>


        <button className='button-61'>Done</button>

      </form>

    </div>
  )
}
