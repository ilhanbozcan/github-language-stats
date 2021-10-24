import axios from "axios";

/** *
 * Fetch user
 * @param {String} username - github username
 * @returns {Object} - If username is valid return response else return error object
 */
export const fetchUser = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    return response;
  } catch {
    return {
      status: 404,
      message: "User don't found",
    };
  }
};
