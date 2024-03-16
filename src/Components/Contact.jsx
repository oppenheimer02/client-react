import React from 'react'



export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "deca50b0-5e76-42a8-93fc-d789f43f6507");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact'>
      <div className='h1'>
<h1> Contact Us </h1>
      </div>
      <div>
      <h3 >Book Your Appointment</h3>
      </div>
      
      <div className="contact-input">

      <form className='form1' onSubmit={onSubmit}>
      <input type="hidden" name="access_key" value="deca50b0-5e76-42a8-93fc-d789f43f6507"  />
      <input type="Text" name='Name' id="Name" placeholder="Your Name" required />
    <input className='email' name='email' type="Email" id="email" placeholder="example@gmail.com" required />
  
    <textarea id="Message" rows="6" placeholder="Your Message" name='Message' required></textarea>

        <button className='contact-btn' type="submit">Submit Form</button>

      </form>
      <span>{result}</span>
      </div>

    </div>
  );
}
