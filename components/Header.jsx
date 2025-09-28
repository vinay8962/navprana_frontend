"use client";
import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import LogoImage from "@/assets/Gemini_Generated_Image_hqebpzhqebpzhqeb-removebg-preview.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white backdrop-blur-sm border-b border-gray-300 sticky top-0 z-50 md:px-15 ">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image
                src={LogoImage}
                alt="Company Logo"
                width={160}
                height={60}
                className="w-40 h-15"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-primary transition">
              Home
            </Link>
            <Link href="/products" className="hover:text-primary transition">
              Our Products
            </Link>
            <Link
              href="/health-benefits"
              className="hover:text-primary transition"
            >
              Health Benefits
            </Link>
            <Link href="/about" className="hover:text-primary transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-primary transition">
              Contact
            </Link>
          </nav>

          {/* Cart & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-border transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-3 space-y-3">
          <Link href="/" className="block hover:text-primary">
            Home
          </Link>
          <Link href="/products" className="block hover:text-primary">
            Products
          </Link>
          <Link href="/benefits" className="block hover:text-primary">
            Benefits
          </Link>
          <Link href="/about" className="block hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="block hover:text-primary">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
