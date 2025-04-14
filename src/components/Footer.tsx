import React from "react";
import { MdArrowForward } from "react-icons/md";
import scannerImg from "../assets/QR.webp";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";
import { BiLogoWhatsapp } from "react-icons/bi";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white w-full">
      <section className="grid md:grid-cols-5 sm:grid-cols-2 gap-10 px-6 py-14 max-w-7xl mx-auto">
        {/* Exclusive */}
        <aside>
          <ul className="space-y-2 leading-[28px]">
            <li className="font-bold text-[24px]">Exclusive</li>
            <li className="text-[20px]">Subscribe</li>
            <li className="text-[16px]">Get 10% off your first order</li>
          </ul>
          <span className="flex justify-between relative mt-4 border-2 border-gray-300 p-2">
            <input type="text" name="" id="" placeholder="enter your email" className="outline-0"/>
            <MdArrowForward className="absolute right-0 text-2xl text-center text-white" />
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
            <li className="text-[16px]">My Account</li>
            <li className="text-[16px]">Login / Register</li>
            <li className="text-[16px]">Cart</li>
            <li className="text-[16px]">Wishlist</li>
            <li className="text-[16px]">Shop</li>
          </ul>
        </aside>

        {/* Quick Links */}
        <aside>
          <ul className="space-y-2 leading-[28px]">
            <li className="font-bold text-[24px]">Quick Link</li>
            <li className="text-[16px]">Privacy Policy</li>
            <li className="text-[16px]">Terms Of Use</li>
            <li className="text-[16px]">FAQ</li>
            <li className="text-[16px]">Contact</li>
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
                className="h-[80px] w-[80px] mx-auto"
              />
            </li>
            <li>
              <div className="flex justify-center space-x-4 text-2xl mt-4">
                <IoLogoInstagram />
                <AiOutlineYoutube />
                <BiLogoWhatsapp />
              </div>
            </li>
          </ul>
        </aside>
      </section>

      <section>
        <p className="italic opacity-60 py-4 text-center text-sm border-t border-gray-700">
          Copyright © Rimel 2022. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
