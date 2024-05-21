import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker"; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles
import { useParams, useNavigate } from "react-router-dom";

// import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function RentFormModal({ onClose, product}) {
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [totalDays, setTotalDays] = useState(0);
  const { productId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    const formData = {
      name,
      address,
      startDate: new Date(startDate).toISOString(),
      endDate: new Date(endDate).toISOString(),
    };
  
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/rentals/add/${productId}`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      console.log(response);
      if (response.ok) {
        navigate(`/rent/${productId}`);
        console.log(productId)
        // Navigate to products page after successful submission
        // Navigate(`/rent/${productId}`);
        console.log("Product added successfully");
      } else {
        console.error("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const calculateTotalDays = (start, end) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const diffDays = Math.round(Math.abs((end - start) / oneDay));
    setTotalDays(diffDays);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
    calculateTotalDays(date, endDate);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    calculateTotalDays(startDate, date);
  };

  return (
    product && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-semibold mb-4">Rent Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="startDate"
                className="block text-sm font-medium text-gray-700"
              >
                Start Date
              </label>
              <DatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="endDate"
                className="block text-sm font-medium text-gray-700"
              >
                End Date
              </label>
              <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="totalDays"
                className="block text-sm font-medium text-gray-700"
              >
                Total Days
              </label>
              <input
                type="text"
                id="totalDays"
                value={totalDays}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="totalPrice"
                className="block text-sm font-medium text-gray-700"
              >
                Total Cost For {totalDays} Days
              </label>
              <input
                type="text"
                id="totalDays"
                // eslint-disable-next-line react/prop-types
                value={`You have to pay Rs ${totalDays * product.rentPrice}`}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                readOnly
              />
            </div>
            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md"
              >
                Add To Cart
              </button>
              <button
                onClick={onClose}
                className="ml-2 px-4 py-2 bg-gray-600 text-white rounded-md"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}
function Rent() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  console.log(productId);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Fetching the product details from the server
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_REACT_APP_HOST
          }/api/v1/products/product/${productId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data.data.product);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [productId]);
  // console.log(product);
  return (
    <>
      {product && (
        <section className="bg-gray-800 text-gray-100">
          <div className="container max-w-xl p-6 py-8 mx-auto space-y-20 lg:px-8 lg:max-w-7xl">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-gray-50">
                {product.item_name}
              </h2>
            </div>
            <div>
              <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div className="lg:col-start-2">
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-50">
                    Product Description and details
                  </h3>
                  <div className="mt-12 space-y-12">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 text-gray-50">
                          {product.detailTitle1}
                        </h4>
                        <p className="mt-2 text-gray-400">{product.detail1}</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 text-gray-50">
                          {product.detailTitle2}
                        </h4>
                        <p className="mt-2 text-gray-400">{product.detail2}</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 text-gray-50">
                          Rental Cost :{" "}
                          <span className="mt-2 text-gray-400">
                            Rs {product.rentPrice} per day
                          </span>
                        </h4>
                        <h4 className="text-lg mt-2 font-medium leading-6 text-gray-50">
                          Security Deposit :{" "}
                          <span className="mt-2 text-gray-400">Rs 5000</span>
                        </h4>
                        <h4 className="text-lg mt-2 font-medium leading-6 text-gray-50">
                          Delivery Charges :{" "}
                          <span className="mt-2 text-gray-400">Rs 40</span>
                        </h4>
                      </div>
                    </div>
                    <div className="flex justify-between pt-3 space-x-10 text-xs text-gray-400">
                      <Link
                        to="#"
                        className="flex-1 p-3 font-semibold  tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50 text-center"
                        onClick={openModal}
                      >
                        Rent
                      </Link>
                      <button className="flex-1 p-3 font-semibold tracking-wide rounded-md bg-gray-700 text-white dark:bg-gray-600 dark:text-gray-50">
                        Chat With Us
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                  <img
                    src={product.image}
                    alt=""
                    className="mx-auto rounded-lg shadow-lg bg-gray-500"
                    style={{ width: "450px", height: "auto" }} // Adjust the width and height as needed
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {isModalOpen && (
        <RentFormModal
          onClose={closeModal}
          product={product}
          setProduct={setProduct}
        />
      )}
    </>
  );
}

export default Rent;
