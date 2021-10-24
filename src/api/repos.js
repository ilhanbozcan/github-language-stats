import axios from "axios";

/** *
 * Fetch repos
 * @param {String} username - github username
 * @returns {Object} - response object
 */
export const fetchRepos = async (username) => {
  const response = await axios.get(
    `https://api.github.com/users/${username}/repos`
  );
  return response;
};
