import React from 'react';
import './testticket.css';

const TicketFormmm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('http://localhost:5555/ticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify JSON content type
        },
        body: JSON.stringify(values), // Serialize form values to JSON
      });

      if (response.ok) {
        console.log('Issue submitted successfully');
        event.target.reset();
        alert('Issue submitted successfully');
      } else {
        console.error('Failed to submit issue');
        alert('Failed to submit issue');
      }
    } catch (error) {
      console.error('Error submitting ticket:', error);
      alert('Error submitting ticket');
    }
  };

  return (
    <div id="afhkticket-form">
      <form
        className="afhkform"
        style={{
          maxWidth: '600px',
        }}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="afhkcard">
          <h2 className="afhktitle">Tell us about your issue</h2>

          <div className="afhkform-group">
            <label className="afhklabel" htmlFor="afhkfirstName">First Name</label>
            <input className="afhkinput" type="text" id="afhkfirstName" name="firstName" required />
          </div>

          <div className="afhkform-group">
            <label className="afhklabel" htmlFor="afhklastName">Last Name</label>
            <input className="afhkinput" type="text" id="afhklastName" name="lastName" required />
          </div>

          <div className="afhkform-group">
            <label className="afhklabel" htmlFor="afhkemail">Email</label>
            <input className="afhkinput" type="email" id="afhkemail" name="email" required />
          </div>

          <div className="afhkform-group">
            <label className="afhklabel" htmlFor="afhkissue">Issue</label>
            <textarea className="afhktextarea" id="afhkissue" name="issue" rows="4" required />
          </div>
        </div>

        <div className="afhkform-group">
          <button className="afhksubmit-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TicketFormmm;
