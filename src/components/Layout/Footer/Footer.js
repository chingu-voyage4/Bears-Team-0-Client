import React from "react";

const Footer = () => {
  const links = ["about", "privacy", "team", "github repo", "contact"];

  return (
    <div className="footer">
      <ul>
        {links.map(href => (
          <li key={href}>
            <a href={"/" + href}>{href}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
