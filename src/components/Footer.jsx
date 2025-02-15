import { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
  FaPaypal,
  FaAmazonPay,
} from "react-icons/fa";
import { BiLogoMastercard } from "react-icons/bi";
import { GrVisa } from "react-icons/gr";

const Footer = () => {
  const contactInfo = {
    Address: "Basra, Al-Jazair Street",
    Phone: ["+964 774 493 3034", "+964 773 010 9201"],
    Email: "ElectroHub@gmail.com",
    Hours: "10:10-18:00, Man-sat",
  };

  const paymentCards = [GrVisa, BiLogoMastercard, FaPaypal, FaAmazonPay];

  const socialLink = [
    { href: "#", icon: FaFacebookF },
    { href: "#", icon: FaTwitter },
    { href: "#", icon: FaInstagram },
    { href: "#", icon: FaPinterestP },
    { href: "#", icon: FaYoutube },
  ];

  const aboutLinks = [
    { href: "about", text: "About Us" },
    { href: "#", text: "Privacy Policy" },
    { href: "#", text: "Terms & Conditions" },
    { href: "contact", text: "Contact Us" },
  ];

  const accountLinks = [
    { href: "/register", text: "Sign In" },
    { href: "cartShoping.php", text: "View Cart" },
    { href: "#", text: "Track My Order" },
    { href: "#", text: "Help" },
  ];

  return (
    <footer className="w-full bg-footer-background font-body py-5 ">
      <div className="w-full flex-col justify-start h-full sm:flex sm:flex-wrap sm:flex-row sm:justify-evenly sm:items-start">
        <div className="flex flex-col items-center space-y-5">
          <h2 className="text-3xl font-bold text-white font-headline">
            Contact Us
          </h2>
          <address className="text-center text-white space-y-2">
            <h4 className="font-bold">
              Address:{" "}
              <span className="font-normal text-special-element">
                {contactInfo.Address}
              </span>
            </h4>
            <h4 className="font-bold">
              Phone:
              {contactInfo.Phone.map((number, index) => (
                <Fragment key={index}>
                  <br />
                  <span className="font-normal text-special-element">
                    {number}
                  </span>
                </Fragment>
              ))}
            </h4>
            <h4 className="font-bold">
              Hours:{" "}
              <span className="font-normal text-special-element">
                {contactInfo.Hours}
              </span>
            </h4>
            <h4 className="font-bold">Follow Us:</h4>
            <ul className="flex space-x-1 justify-center">
              {socialLink.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} aria-label={link.icon.displayName}>
                    <link.icon className="hover:text-main-green text-special-element size-5" />
                  </Link>
                </li>
              ))}
            </ul>
          </address>
        </div>
        <nav className="text-white flex-col space-y-5 text-center my-5">
          <h2 className="text-3xl font-bold font-headline">About Us</h2>
          <ul className="flex-col space-y-2">
            {aboutLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={`${link.href}`}
                  className="hover:text-main-green"
                  aria-label={link.text}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="text-white flex-col space-y-5 text-center my-5">
          <h2 className="text-3xl font-bold font-headline">My Account</h2>
          <ul className="flex-col space-y-2">
            {accountLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.href}
                  className="hover:text-main-green"
                  aria-label={link.text}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex-col space-y-5 text-white my-5 text-center">
          <h2 className="text-2xl font-bold font-headline">
            Secured Payment Gateways
          </h2>
          <ul className="flex space-x-2 justify-center">
            {paymentCards.map((Card, index) => (
              <li key={index}>
                <Card className="text-4xl hover:text-main-green" />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-special-element text-center">
        Copyright © 2025 ElectroHub
      </p>
    </footer>
  );
};

export default Footer;
