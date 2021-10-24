import React from "react";
import { languages } from "../consts"; // logo of languages

/** *
 * @param {String} lang - name of the language
 * @param {Number} pertencage - pertencage of the language
 */
export default function LangCard({ lang, pertencage }) {
  return (
    <div className="card__lang">
      <img src={languages[lang]} alt="" className="card__langImg" />
      <p className="card__langName">{lang}</p>

      <p className="card__langPercentage">{pertencage}%</p>
    </div>
  );
}
