import { useState } from "react";
import backgroundImage from "../../assets/img/background1.jpg";
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
    <section className="min-h-screen dark:bg-gray-800 dark:text-gray-300">
      <div className="w-full mx-auto flex justify-center items-center">
        <div className="max-w-md w-full rounded-lg overflow-hidden shadow-lg bg-gray-800">
          <div className="flex justify-between bg-gray-700 text-white p-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-4 text-white">
              CONTACT US
            </h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="input-field"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="input-field"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="contactNumber"
                  className="text-sm font-medium text-gray-300"
                >
                  Contact No
                </label>
                <input
                  type="text"
                  id="contactNumber"
                  className="input-field"
                  value={formData.contactNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="input-field h-32"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="cancel-button"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="send-button"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
