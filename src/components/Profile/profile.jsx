import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logout from "../Logout/Logout";
// import backgroundImage from "../assets/img/backgroundImage.jpg"; // Replace this with the path to your background image

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getCookie = (name) => {
    const value = `; ${document.cookie}`; // Function to extract cookie value by name
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };
  // fetching current logged in user data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Extract accessToken from cookies
        const accessToken = getCookie("accessToken");

        const response = await fetch(
          `${import.meta.env.VITE_REACT_APP_HOST}/api/v1/users/user`,
          {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (response.ok) {
          const userData = await response.json();
          setUserData(userData.data);
          console.log(userData.data);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching user data
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const accessToken = getCookie("accessToken");
        const response = await fetch(
          `http://localhost:8080/api/v1products/my-products`,
          {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (response.ok) {
          const postData = await response.json();
          setUserPosts(postData.data.posts);
        } else {
          console.error("Failed to fetch user posts");
        }
      } catch (error) {
        console.error("Error fetching user posts:", error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching user data
      }
    };

    fetchUserPosts();
  }, []);

  const handleDeletePost = async (postId) => {
    try {
      const accessToken = getCookie("accessToken");
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_HOST}/api/v1/posts/delete/${postId}`,
        {
          method: "DELETE",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.ok) {
        setUserPosts(userPosts.filter((post) => post._id !== postId));
        console.log("Post deleted successfully");
      } else {
        console.error("Failed to delete post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    } finally {
      setIsLoading(false); // Set loading to false after fetching user data
    }
  };
  const [expandedPosts, setExpandedPosts] = useState([]);

  const toggleExpansion = (postId) => {
    if (expandedPosts.includes(postId)) {
      setExpandedPosts(expandedPosts.filter((id) => id !== postId));
    } else {
      setExpandedPosts([...expandedPosts, postId]);
    }
  };
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <>
<div className="flex flex-col min-h-screen p-6 sm:p-12 bg-gray-800 text-gray-100 flex-grow">
      {/* User Details */}
      {isLoading && (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
      <div className="bg-100 rounded-xl py-8 px-4 relative mt-16">
        {userData && (
          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
            <img
            src={userData.avatar}
            alt="Avatar"
            className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start bg-gray-500 border-gray-700"
            />
              <div className="flex flex-col">
              <h4 className="text-lg font-semibold text-center md:text-left">
              {userData.fullName
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(' ')}
            </h4>
            <p className="text-gray-400">
              <b className="text-blue-300">Email: </b>
              {userData.email}
            </p>
            <p className="text-gray-400">
              <b className="text-blue-300">Username: </b>
              {userData.username}
            </p>
            <p className="text-gray-400">
              <b className="text-blue-300">Address: </b>
              {userData.address}
            </p>
            </div>
          </div>
        )}
        <div className="flex justify-center pt-4 space-x-4 align-center">
        <a
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="p-2 rounded-md text-gray-100 hover:text-violet-400"
        >
          <svg viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
          </svg>
        </a>
        <a
          rel="noopener noreferrer"
          aria-label="Dribble"
          className="p-2 rounded-md text-gray-100 hover:text-violet-400"
        >
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
            <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.819 14.78-57.799 53.618-104.913 110.199-128.328zM44.71 256.452c0-2.166.045-4.323.111-6.473 9.268.19 112.253 1.86 217.777-30.764 6.497 12.229 12.304 24.773 18.032 37.358-76.287 20.675-146.93 74.752-187.798 149.984C61.903 374.139 44.71 316.998 44.71 256.452zM115.574 415.18c38.155-70.618 102.987-120.587 178.413-141.871 31.521 57.753 50.601 115.388 56.719 136.787-67.204 27.755-150.018 20.547-217.428-8.737zm249.72 8.66c-4.521-18.536-23.457-92.024-54.096-154.717 66.222-7.679 132.75 6.762 139.629 8.408-12.402 60.212-47.156 111.644-98.532 146.31z"></path>
          </svg>
        </a>
        <a
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="p-2 rounded-md text-gray-100 hover:text-violet-400"
        >
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-103.001v-1.299c13.969 7.797 30.214 12.67 47.431 13.32-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 52.325 64.3 130.841 106.498 219.007 111.31-1.624-7.797-2.599-15.918-2.599-24.04 0-57.897 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.897 21.117-2.274 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
          </svg>
        </a>
      </div>
      </div>

      {/* User Posts */}
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-semibold text-white mb-4">
          {/* <b>My Products: </b> */}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userPosts.map((post) => (
            <div
              key={post._id}
              className="dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  className="w-full h-48 object-cover"
                  src={post.postImage}
                  alt={post.title}
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Link
                    to={`/post/${post._id}`}
                    className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-gray-200 transition-colors duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </div>
              <div className="p-4">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                  <b className="dark:text-gray-400">Title: </b> {post.title}
                </h1>
                <h2 className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <b>By: </b>{" "}
                  <span className="dark:text-white">
                    {post.owner.fullName
                      .split(" ")
                      .map(
                        (word) =>
                          word.charAt(0).toUpperCase() +
                          word.slice(1).toLowerCase()
                      )
                      .join(" ")}
                  </span>
                </h2>
                <h2 className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <b>Username:</b>{" "}
                  <span className="dark:text-white">{post.owner.username}</span>
                </h2>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <b>Content:</b>{" "}
                  {expandedPosts.includes(post._id)
                    ? post.content
                    : `${post.content.slice(0, 100)}...`}
                  {post.content.length > 100 && (
                    <button
                      className="text-blue-600 hover:underline focus:outline-none"
                      onClick={() => toggleExpansion(post._id)}
                    >
                      {expandedPosts.includes(post._id)
                        ? "Show Less"
                        : "Read More"}
                    </button>
                  )}
                </p>
                <div className="flex justify-end bottom-0 right-0 p-2">
                  <p className="text-white">{formatDate(post.createdAt)}</p>
                </div>
                <button
                  onClick={() => handleDeletePost(post._id)}
                  className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Logout Button */}
      <div className="fixed bottom-4 right-4 ">
        <Logout />
      </div>
    </div>
    </>
  );
};

export default Profile;