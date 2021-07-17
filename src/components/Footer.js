import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
import Image from "./Image";
import FooterImg from "../Images/group10.png";
import FooterVector from "../Images/Vector.png";
import FooterVector1 from "../Images/Vector (1).png";
import FooterVector2 from "../Images/Vector (2).png";
import FooterLines from "../Images/Line 1.png";

const Footer = () => {
  return (
    <div>
      <footer className={classes.footer}>
        {/* <Link to="">Click</Link> */}
        <div className={classes.footerImg}>
          <Link to="/">
            <Image
              name={classes.footerImage}
              file={FooterImg}
              alt="brand-logo"
            />
          </Link>
        </div>

        <div className={classes.footerGrid}>
          <div className={classes.contactDetails}>
            <p className={classes.footerHeaders}>Address</p>
            3 Birrel Avenue, Sabo.
            <br />
            Yaba, Lagos State,
            <br />
            Nigeria
          </div>

          <div className={classes.contactDetails}>
            <p className={classes.footerHeaders}>Email</p>
            <p>hello@hng.tech</p>
            <p>+234 (0) 812 345 6789</p>
          </div>

          <div
            className={`${classes.contactDetails} ${classes.contactDetails3}`}
          >
            <div>
              <p className={classes.footerHead}>Connect With Us</p>
              <p className={classes.link1}>
                <Image
                  name={classes.linkImg}
                  file={FooterVector}
                  alt="footer"
                />
                hnginternship
              </p>
              <p className="link1">
                <Image
                  name={classes.linkImg}
                  file={FooterVector1}
                  alt="footer"
                />
                hnginternship
              </p>
              <p className="link1">
                <Image
                  name={classes.linkImg}
                  file={FooterVector2}
                  alt="footer"
                />
                hnginternship
              </p>
            </div>
            <div className={classes.contactBtn}>
              <a href="./contact-page.html">
                <button className={classes.contact}>Contact Us</button>
              </a>
            </div>
          </div>
        </div>

        <div className={classes.footerLine}>
          <Image name={classes.footLines} file={FooterLines} alt="footer" />
        </div>

        <div className={classes.footerTabs}>
          <p>&copy; 2021 HNG internship . All Rights Reserved. HNG Group</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
