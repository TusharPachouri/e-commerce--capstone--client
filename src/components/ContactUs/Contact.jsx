import { useState } from "react";
// import backgroundImage from "../../assets/img/background1.jpg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_HOST}/api/v1/contacts/`,
        formData
      );
      if (response) {
        toast.success("Message sent successfully");
      }
      // Clear form fields after successful submission
      setFormData({
        name: "",
        email: "",
        contactNumber: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("Error sending message");
      // Handle error display or other actions
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen py-6 sm:py-12 bg-gray-800 text-gray-100">
<div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-gray-900 text-gray-100">
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold">Get in touch</h1>
          <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
          <div className="space-y-4">
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
              </svg>
              <span>Lovely Professiobal University</span>
            </p>
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>+91 987654321</span>
            </p>
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>userdetail@gmail.com</span>
            </p>
          </div>
        </div>
            <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6" onSubmit={handleSubmit}>
                <label htmlFor="name" className="block">
                  <span className="mb-1">Full Name</span>
                  <input
                  type="text"
                  id="name"
                  className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-800"
                  value={formData.name}
                  onChange={handleChange}
                />

                </label>
                <label htmlFor="email" className="block">
                  <span className="mb-1">Email address</span>
                  <input
                  type="email"
                  id="email"
                  className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-800"
                  value={formData.email}
                  onChange={handleChange}
                />
                </label>
                <label
                  htmlFor="contactNumber"
                  className="block"
                >
                  <span className="mb-1">Contact Number</span>
                  <input
                  type="text"
                  id="contactNumber"
                  className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-800"
                  value={formData.contactNumber}
                  onChange={handleChange}
                />
                </label>

                <label
                  htmlFor="message"
                  className="block"
                >
                  <span className="mb-1">Message</span>
                  <textarea
                  id="message"
                  className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-800"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                </label>
                <button type="submit" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600">Submit</button>
            </form>
        </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
