import { useEffect, useState } from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import "../styles/card.css";

/** *
 * @param {Array} repos - repositories of the user
 * @param {Object} user - github user
 */

export default function Card({ repos, user }) {
  /**
   * @type {Number} - Total size of the repositories
   */
  const [size, setSize] = useState(0);

  useEffect(() => {
    // Calculates total size
    const totalSize = repos.reduce((total, repo) => total + repo.size, 0);
    setSize((totalSize / 1024).toFixed(2)); // kilobytes to megabytes
  }, [repos]);

  return (
    <>
      <div className="card">
        <fieldset>
          <legend>Result</legend>
          <CardHeader user={user} size={size} />
          <CardBody repos={repos} />
        </fieldset>
      </div>
    </>
  );
}
