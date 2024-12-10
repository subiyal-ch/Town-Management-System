import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white p-4 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="mb-4 md:mb-0">
          <p className="text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-sm">Developed by HS Developers.</p>
        </div>

        {/* Right Section: Contact Info */}
        <div>
          <p className="text-sm">Contact: admin@townmanagement.com</p>
          <p className="text-sm">Phone: +123-456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
