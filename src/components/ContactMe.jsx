import React from "react";
import ReactDOM from "react-dom";
import "../style/contact-me.css";

function ContactMe() {
  return (
    <div className="contact-me-holder">
      <form>
        <label>
          Full Name
          <input type="text" name="name" />
        </label>
        <label>
          Email Address
          <input type="text" name="name" />
        </label>
        <label>
          Full Name
          <textarea type="text" name="name" />
        </label>
      </form>
    </div>
  );
}

export default ContactMe;
