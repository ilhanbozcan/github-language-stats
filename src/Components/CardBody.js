import { useEffect, useState } from "react";
import LangCard from "./LangCard";

/** *
 * @param {Array} repos - repositories of the user
 */

export default function CardBody({ repos }) {
  /** *
   * languages with how many times it used and percentage
   * @type {Object}
   * @property {Number} count - count of language
   * @property {Float} pertencage - pertencage of language
   */
  const [languages, setLanguages] = useState({});

  useEffect(() => {
    setLanguages(calculateLangPertencage(repos)); // Calculate percentage when new repos fetched
  }, [repos]);

  /** *
   * Calculate pertencage of the used language
   * @param {Array} repositories - Array of repos
   * @returns {Object} - Languages with count and pertencage sorted by count
   */
  const calculateLangPertencage = (repositories) => {
    const languagesMap = {};
    repositories.forEach((repo) => {
      if (repo.language !== null) {
        // Check language is not null
        if (Object.keys(languagesMap).includes(repo.language)) {
          // Check language in languages object
          languagesMap[repo.language].count += 1;
        } else {
          languagesMap[repo.language] = { count: 1 }; // Initilize of the language
        }
        // Calculate language pertencage
        languagesMap[repo.language].pertencage =
          (languagesMap[repo.language].count * 100) / repos.length;
      }
    });

    // Sort descending order
    return Object.fromEntries(
      Object.entries(languagesMap).sort((a, b) => b[1].count - a[1].count)
    );
  };

  return (
    <div className="card__body">
      {
        // Check repos is empty
        repos.length ? (
          Object.keys(languages).map((lang) => (
            <LangCard
              lang={lang}
              pertencage={parseInt(languages[lang].pertencage, 10)}
            />
          ))
        ) : (
          <h1>&#129409; USER DONT HAVE A REPO YET &#129409;</h1>
        )
      }
    </div>
  );
}
