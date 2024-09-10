import React from 'react'
import '../Contact/Contact.css'
import Swal from 'sweetalert2'
import contactchef from '../../assets/Aboutchefimage.svg'
const Contact1 = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1a8c560c-3972-4fa9-99d9-6c16fd4c43f6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Succes!",
        text: "Message Sent Successfully!",
        icon: "success"
      });
    }
  };



  const handleChange = () =>{

  }
  return (
    <>
      <div className='form-section'>
        <div className='contect-heading'>
          <h1>Contact us</h1>
        </div>
        <div className='contact-details'>
          <div className='contact-image'>
            <img src={contactchef} alt='image' />
          </div>
          <div className='contact-form'>
            <form onSubmit={onSubmit}>
              <div className="input-row">
                <div className="row">
                  <label >Name</label>
                  <input className='input-field' type="text" placeholder='Enter your nmae' required name='name' />
                </div>
                <div className="row">
                  <label >Email</label>
                  <input className='input-field' type="email" placeholder='Enter your email address' required name='email' />
                </div>

              </div>

              <div className="input-row">
                <div className="row">
                  <label >Phone</label>
                  <input className='input-field' type="tel" placeholder='Enter your Phone' required name='phone' onChange={handleChange} />
                </div>
                <div className="row">
                  <label >Subject</label>
                  <input className='input-field' type="text" placeholder='Enter your subject' required name='subject' />
                </div>


              </div>
              <div className="message-field">
                <label>Message</label>
                <textarea name="message" id="" placeholder='Enter your Message ......'></textarea>
              </div>
              <div className='submit-btn'>
                <button type='submit' >Send Now</button>

              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact1