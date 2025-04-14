import { IoSearch } from "react-icons/io5";
import { CiHeart, CiUser } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

interface HeaderProps {
  discountQuates: string;
}

const Header = ({ discountQuates }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#footer" },
  ];

  return (
    <header className="w-full shadow-sm">
      {/* Top banner */}
      <div className="bg-black text-white text-center p-2 text-sm">
        {discountQuates}
      </div>

      {/* Header main section */}
      <div className="flex items-center justify-between p-4 bg-white relative">
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

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button
            className="text-[24px] focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <RxHamburgerMenu />
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="absolute top-20 right-4 bg-white w-48 rounded-md shadow-md z-50">
            <ul className="flex flex-col p-4 gap-3 text-[16px]">
              {navItems.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="hover:text-black hover:font-medium cursor-pointer"
                    onClick={() => setIsOpen(false)} // close on nav click
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Search + Icons */}
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
