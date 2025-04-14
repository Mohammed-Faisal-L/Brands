import React, { useState } from "react";
import { CiHeart, CiUser } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";

// Define prop types using interface
interface HeaderProps {
  discountQuates: string;
}

// Define nav item structure
interface NavItem {
  label: string;
  href: string;
}

const Header: React.FC<HeaderProps> = ({ discountQuates }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#footer" },
  ];

  return (
    <header className="w-full xs-screen shadow-lg sticky top-0 z-10 opacity-80 bg-white">
      {/* Top Banner */}
      <div className="bg-black text-white text-center p-2 text-sm">
        {discountQuates}
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between p-4 px-[6%] bg-white relative shadow-2xs">
        {/* Logo */}
        <h1 className="font-bold text-[24px]">BrandFactory</h1>

        {/* Desktop Nav */}
        <nav className="hidden lg:block">
          <ul className="flex gap-6 text-[16px]">
            {navItems.map(({ label, href }) => (
              <li
                key={label}
                className="border-b-2 border-transparent hover:border-black transition duration-200"
              >
                <a href={href} className="cursor-pointer">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger for Mobile */}
        <div className="lg:hidden">
          <button
            className="text-[24px]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <RxHamburgerMenu />
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="absolute top-20 right-4 bg-white w-48 rounded-md shadow-md z-50 lg:hidden">
            <ul className="flex flex-col p-4 gap-3 text-[16px]">
              {navItems.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="hover:text-black hover:font-medium cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Icons Section */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-4 text-[24px]">
            <CiHeart className="cursor-pointer" />
            <PiShoppingCartThin className="cursor-pointer" />
            <CiUser className="cursor-pointer" />
          </div>
        </div>
      </div>
      <hr />
    </header>
  );
};

export default Header;
