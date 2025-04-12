import { IoSearch } from "react-icons/io5";
import { CiHeart, CiUser } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

interface HeaderProps {
    discountQuates: string;
    }
const Header = ({discountQuates} : HeaderProps) => {
     const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="xs-screen">
      {/* black discount banner  */}
      <div>
        <h3 className="text-center text-white bg-black p-2">
          {discountQuates}
        </h3>
      </div>
      {/* header */}
      <div className="text-xl flex justify-around items-center p-4 bg-white ">
        <h1 className="font-bold text-[24px]">BrandFactory</h1>
        {/* Navigation - full screen */}
        <nav >
          <ul className="lg:inline-flex xs:hidden space-x-6  text-[16]">
            <li className="cursor-pointer border-b-2 border-transparent hover:border-black transition duration-200 ">
              Home
            </li>
            <li className="cursor-pointer border-b-2 border-transparent hover:border-black transition duration-200 ">
              Contact
            </li>
            <li className="cursor-pointer border-b-2 border-transparent hover:border-black transition duration-200 ">
              About up
            </li>
            <li className="cursor-pointer border-b-2 border-transparent hover:border-black transition duration-200">
              Sign up
            </li>
          </ul>
        </nav>
        {/* Navigation - small screen */}
        <nav>
        <RxHamburgerMenu onClick={()=>setIsOpen(!isOpen)} className="lg: pr-1.5  text-[16]"/>
        {
            isOpen && (
                <ul className="absolute top-16 right-5 w-20% bg-white shadow-lg p-4 text-[16px] transition-all duration-300 ease-in-out">
                    <li className="border border-gray-50 hover:border-gray-100 hover:text-2xl p-2">Home</li>
                    <li className="">Contact</li>
                    <li>About Us</li>
                    <li>SignUp</li>
                </ul>
            )
        }
        </nav>
        {/* Searchbar  */}
        <div className="lg:flex justify-between xs:hidden space-x-8">
          <div className="relative">
            <input
              type="text"
              className="w-full border-2 border-gray-300 rounded-[4px] p-1 placeholder:text-sm placeholder:pl-2 "
              placeholder="What are you looking for?"
            />
            <IoSearch className="absolute right-4 top-1/4" />
          </div>
          <div className="flex items-center font-medium">
            <CiHeart className="text-[24px] ml-4" />
            <PiShoppingCartThin className="text-[24px] ml-4" />
            <CiUser className="text-[24px] ml-4" />
          </div>
        </div>
      </div>
      <hr/>
    </header>
  );
};

export default Header;
