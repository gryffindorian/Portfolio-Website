import React from "react";
import "./Landing.css";

export default function Bottom() {
  return (
    <div className="bottom-container">
      <a
        className="footer-link"
        href="https://www.linkedin.com/in/ananya-jain-763a63220?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bq3RGWUSOTeuMGkm0ai4zxw%3D%3D"
      >
        <i class="fa-brands fa-linkedin icon"></i>
        LinkedIn
      </a>
      <a className="footer-link" href="https://github.com/gryffindorian/">
        <i class="fa-brands fa-github icon"></i>
        GitHub
      </a>
      <a
        className="footer-link"
        href="https://portfolio-website-pi-weld.vercel.app/"
      >
        <i class="fa-solid fa-laptop icon"></i>
        Website
      </a>
      <p className="aj">© 2023 Ananya Jain.</p>
    </div>
  );
}
