import React from "react";

import logoIcon from "@/public/images/logo1.png";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-cyan-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Image
            className="fill-secondary h-[20px] md:h-full md:w-[110px] xs:w-[90px] xs:ml-2.5 sm:ml-2.5 inline-block"
            src={logoIcon}
            alt="logo"
          />
          <h1 className="text-2xl font-bold">Welcome to Zoro</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white text-lg hover:underline">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="text-white text-lg hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <Link href="/" className="text-white text-lg hover:underline">
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1 bg-gray-100 py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-800 mb-6">
            Keeping your business running efficiently. Zoro UK makes it quick
            and easy for industries, professions and trades to get the tools and
            equipment they need through an easy and innovative online
            experience. Our exceptional delivery, and customer service, as well
            as our wide range of competitively priced products exceed the
            expectations of modern businesses. Zoro UK’s extensive range of over
            1 million products includes everything from hand tools to abrasives
            to personal protective equipment, from leading brands, with many
            available for next day delivery. It has never been easier for
            industries, trades and professions to reliably get the
            business-critical supplies they need. Our team works tirelessly to
            provide everything you need to keep your business running online and
            constantly available.
          </p>
        </div>
      </main>

      <footer className="bg-orange-200 text-black py-4">
        <div className="container mx-auto flex justify-center">
          <p>&copy; 2024 Your Website. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
