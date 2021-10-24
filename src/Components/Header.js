import { useState } from "react";
import { fetchRepos } from "../api/repos";
import { fetchUser } from "../api/users";
import "../styles/header.css";

/** *
 * @param {function} setRepos - set fetched repos to use in parent component
 * @param {function} setUser - set fetched github user to use in parent compoenent
 */
export default function Header({ setRepos, setUser }) {
  /** *
   * username input
   * @type {String}
   */
  const [username, setUsername] = useState("");
  /** *
   * @type {Object}
   * @property {boolean} isError - check is error occured
   * @property {String} message - error message
   */
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  /** *
   * Handle on input change
   * @property {Object} e - event
   */
  const handleOnChange = (e) => {
    setUsername(e.target.value);
  };

  /** *
   * Handle search button click
   */
  const handleOnClick = async () => {
    setError({ isError: false, message: "" });
    const userResponse = await fetchUser(username);
    if (userResponse.status === 200) {
      setUser(userResponse.data);
      const reposResponse = await fetchRepos(username);
      setRepos(reposResponse.data);
    } else {
      setError({ isError: true, message: userResponse.message });
    }
  };
  return (
    <div className="header">
      <div className="header__search">
        <input
          onChange={handleOnChange}
          className={
            !error.isError ? "header__search" : "header__search--error"
          }
        />
        <button
          type="button"
          onClick={handleOnClick}
          className="header__button"
        >
          Search
        </button>
      </div>
      <span
        style={{ display: !error.isError ? "none" : "" }}
        className="header__error"
      >
        {error.message}
      </span>
    </div>
  );
}
