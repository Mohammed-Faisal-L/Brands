import React from "react";
import { MdArrowForward } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";
import { BiLogoWhatsapp } from "react-icons/bi";
import scannerImg from "../assets/QR.webp";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-black text-white w-full">
      <section className="grid md:grid-cols-5 sm:grid-cols-2 gap-10 px-6 py-14 max-w-7xl mx-auto">
        {/* Exclusive */}
        <aside className="px-4">
          <ul className="space-y-2 leading-[28px]">
            <li className="font-bold text-[24px]">Exclusive</li>
            <li className="text-[20px]">Subscribe</li>
            <li className="text-[16px]">Get 10% off your first order</li>
          </ul>
          <span className="flex justify-between relative mt-4 border-2 border-gray-300 p-2">
            <input
              type="text"
              placeholder="enter your email"
              className="outline-0 w-full pr-8 bg-transparent text-white placeholder-white"
            />
            <MdArrowForward className="absolute right-2 top-1/2 -translate-y-1/2 text-2xl text-white cursor-pointer" />
          </span>
        </aside>

        {/* Support */}
        <aside>
          <ul className="space-y-2 leading-[28px]">
            <li className="font-bold text-[24px]">Support</li>
            <li className="text-[16px]">111 Bijoy Sarani, Dhaka, Bangladesh</li>
            <li className="text-[16px]">exclusive@gmail.com</li>
            <li className="text-[16px]">+88015-88888-9999</li>
          </ul>
        </aside>

        {/* Account */}
        <aside>
          <ul className="space-y-2 leading-[28px]">
            <li className="font-bold text-[24px]">Account</li>
            <li className="text-[16px]"><a href="#">My Account</a></li>
            <li className="text-[16px]"><a href="#">Login / Register</a></li>
            <li className="text-[16px]"><a href="#">Cart</a></li>
            <li className="text-[16px]"><a href="#">Wishlist</a></li>
            <li className="text-[16px]"><a href="#">Shop</a></li>
          </ul>
        </aside>

        {/* Quick Links */}
        <aside>
          <ul className="space-y-2 leading-[28px]">
            <li className="font-bold text-[24px]">Quick Link</li>
            <li className="text-[16px]"><a href="#">Privacy Policy</a></li>
            <li className="text-[16px]"><a href="#">Terms Of Use</a></li>
            <li className="text-[16px]"><a href="#">FAQ</a></li>
            <li className="text-[16px]"><a href="#">Contact</a></li>
          </ul>
        </aside>

        {/* Download App */}
        <aside>
          <ul className="space-y-2 leading-[28px]">
            <li className="font-bold text-[24px]">Download App</li>
            <li className="text-[12px] opacity-70">
              Save $3 with App New User Only
            </li>
            <li>
              <img
                src={scannerImg}
                alt="QR Code"
                className="h-[80px] w-[80px]"
              />
            </li>
            <li>
              <div className="flex  space-x-4 text-2xl mt-4">
                <a href="#"><IoLogoInstagram /></a>
                <a href="#"><AiOutlineYoutube /></a>
                <a href="#"><BiLogoWhatsapp /></a>
              </div>
            </li>
          </ul>
        </aside>
      </section>

      <section>
        <p className="italic opacity-60 py-4 text-center text-sm border-t border-gray-700">
          © Rimel 2022. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
