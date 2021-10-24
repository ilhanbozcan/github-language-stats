import { useState } from "react";
import Card from "./Components/Card";
import Header from "./Components/Header";

function App() {
  /** *
   * Array of repositories
   * @type {Array<Object>}
   */
  const [repos, setRepos] = useState([]);

  /** *
   * Github user
   * @type {Object}
   */
  const [user, setUser] = useState({});
  return (
    <>
      <Header setRepos={setRepos} setUser={setUser} />
      {
        // Check is user fetched
        Object.keys(user).length ? <Card repos={repos} user={user} /> : ""
      }
    </>
  );
}

export default App;
