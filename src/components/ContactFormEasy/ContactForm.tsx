// Building forms is a common task in front-end development. In this exercise, we will build a basic "Contact Us" form, commonly seen on marketing websites for visitors to ask questions or provide feedback.

// Requirements
// The form should contain the following elements:
// Name field.
// Email field.
// Message field. Since the message can be long, a <textarea> will be more suitable.
// Submit button.
// Contains the text "Send".
// Clicking the submit button submits the form.
// The form and submission should be implemented entirely in HTML. Do not use any JavaScript or framework-specific features for this question.
// There is no need to do any client-side validation on the fields. Validation will be done on the server side.
// Submission API
// Upon submission, POST the form data to https://questions.greatfrontend.com/api/questions/contact-form with the following fields in the request body: name, email, message.

// If all the form fields are correctly filled in, you will see an alert containing a success message. Congratulations!

import { useState } from 'react';
import './ContactForm.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://questions.greatfrontend.com/api/questions/contact-form',
        {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        alert('Something went wrong!');
        return;
      }

      const data = await response.text();

      if (data) {
        alert(data);
      }
    } catch (error) {
      if(error instanceof Error) {
        alert(error.message);
      }
      
    }
  };

  const handleChange = ({
    target,
  }: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement,
    HTMLInputElement | HTMLTextAreaElement
  >) => {
    const { name, value } = target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter the name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="Enter the email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          placeholder="Enter the message"
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <button className="btn" type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
