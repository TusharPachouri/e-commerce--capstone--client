// src/pages/AddProduct.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const[item_name, setItem_name] = useState("");
  const[description, setProductDescription] = useState("");
  const[price, setPrice] = useState("");
  const[image, setImage] = useState(null);
  const[category, setCategory] = useState("");
  const[detail1, setDetail1] = useState("");
  const[detail2, setDetail2] = useState("");
  const[detailTitle1, setDetailTitle1] = useState("");
  const[detailTitle2, setDetailTitle2] = useState("");
  const[rentPrice, setRentPrice] = useState("");
  const [userId, setUserId] = useState(null); // State to store the user ID

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const getCookie = (name) => {
          const value = `; ${document.cookie}`;
          const parts = value.split(`; ${name}=`);
          if (parts.length === 2) return parts.pop().split(";").shift();
        };
        const accessToken = getCookie("accessToken");
        const response = await fetch(
          `http://localhost:8080/api/v1/users/user`,
          {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const data = await response.json();
        if (response.ok) {
          if (data && data.data) {
            setUserId(data.data._id); // Set the user ID
          } else {
            console.error("User details not found in response data:", data);
          }
        } else {
          console.error("Response not OK:", response);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []); // Empty dependency array to run once on component mount


  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("item_name", item_name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("image", image);
    formData.append("detail1", detail1);
    formData.append("detail2", detail2);
    formData.append("detailTitle1", detailTitle1);
    formData.append("detailTitle2", detailTitle2);
    formData.append("rentPrice", rentPrice);
    formData.append("owner", userId); // Add userId to the formData


    try {
      const response = await fetch(
        `https://e-commerce-capstone-server.vercel.app/api/v1/products/add`,
        
        {
          method: "POST",
          credentials: "include",
          body: formData,
        }
      );
      console.log(response);
      if (response.ok) {
        navigate("/product"); // Navigate to products page after successful submission
      } else {
        console.error('Failed to add product');
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
<div className="flex justify-center items-center min-h-screen py-6 sm:py-12 bg-gray-800 text-gray-800">
  <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-gray-900 text-gray-900 rounded-lg shadow-lg">
    <div className="container mx-auto p-4">
      <h2 className="text-gray-100 text-2xl mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <div className="mb-4">
            <label htmlFor="name" className=" block text-sm font-medium text-gray-100">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              value={item_name}
              onChange={(e) => setItem_name(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-100">
              Product Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setProductDescription(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-100">
              Category
            </label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-100">
              Product Price
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-100">
              Product Image
            </label>
            <input
              type="file"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>
        <div>
          <div className="mb-4">
            <label htmlFor="detail1" className="block text-sm font-medium text-gray-100">
              Detail 1
            </label>
            <input
              type="text"
              id="detail1"
              value={detail1}
              onChange={(e) => setDetail1(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="detail2" className="block text-sm font-medium text-gray-100">
              Detail 2
            </label>
            <input
              type="text"
              id="detail2"
              value={detail2}
              onChange={(e) => setDetail2(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="detailTitle1" className="block text-sm font-medium text-gray-100">
              Detail Title 1
            </label>
            <input
              type="text"
              id="detailTitle1"
              value={detailTitle1}
              onChange={(e) => setDetailTitle1(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="detailTitle2" className="block text-sm font-medium text-gray-100">
              Detail Title 2
            </label>
            <input
              type="text"
              id="detailTitle2"
              value={detailTitle2}
              onChange={(e) => setDetailTitle2(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rentPrice" className="block text-sm font-medium text-gray-100">
              Rental Price
            </label>
            <input
              type="number"
              id="rentPrice"
              value={rentPrice}
              onChange={(e) => setRentPrice(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add Product
        </button>
      </form>
    </div>
  </div>
</div>
  );
};

export default AddProduct;
