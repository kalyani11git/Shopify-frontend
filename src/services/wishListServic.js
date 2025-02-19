import axios from "axios";

// Function to toggle the product in the wishlist (add/remove)
export const toggleWishlist = async (productId, token, callback) => {
  try {
    const response = await fetch("https://shopify-backend-703c.onrender.com/api/add-to-wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Ensure token is sent here
      },
      body: JSON.stringify({ productId }),
    });

    if (response.ok) {
      const updatedUser = await response.json();
      callback(updatedUser); // Call the callback with updated user data
    } else {
      const errorData = await response.json();
      console.error("Error updating wishlist:", errorData.message);
    }
  } catch (error) {
    console.error("Error during wishlist update:", error);
  }
};

export const removeFromWishlist = async (productId, token) => {
  const response = await axios.post(
    "https://shopify-backend-703c.onrender.com/api/remove-from-wishlist",
    { productId },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

