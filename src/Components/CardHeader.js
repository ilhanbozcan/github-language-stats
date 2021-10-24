import React from "react";

/** *
 * @param {Object} user - github user
 * @param {Float} size - total size of repositories
 */

export default function CardHeader({ user, size }) {
  return (
    <div className="card__header">
      <img alt="" src={user.avatar_url} />
      <div className="card__user">
        <p className="card__name">{user.name}</p>
        <a href={user.html_url} className="card__nick">
          @{user.login}
        </a>
      </div>

      <div className="card__info">
        <p className="card__repo">
          <span className="card__repo--bold">{user.public_repos}</span>Repo
        </p>
        <p className="card__code">
          <span className="card__code--bold">{size} MB</span>Code
        </p>
      </div>
    </div>
  );
}
