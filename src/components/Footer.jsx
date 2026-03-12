import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img src={logo} alt="Weekend Legends" className="w-10" />
            <h2 className="text-xl font-bold">Weekend Legends</h2>
          </div>
          <p className="text-sm">
            A friendly cricket community from Gono University where friends
            gather every week to play, compete, and enjoy the game.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-primary">Home</Link>
            </li>
            <li>
              <Link to="/team" className="hover:text-primary">Team</Link>
            </li>
            <li>
              <Link to="/matches" className="hover:text-primary">Matches</Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-primary">Gallery</Link>
            </li>
            <li>
              <Link to="/stats" className="hover:text-primary">Stats</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary">About</Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">Connect With Us</h3>

          <div className="flex gap-4 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
            >
              <FaFacebook />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
            >
              <FaWhatsapp />
            </a>
          </div>

          <p className="text-sm mt-4">
            Join our Messenger group to stay updated about matches.
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-base-300 text-center py-4 text-sm">
        © {new Date().getFullYear()} Weekend Legends. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;