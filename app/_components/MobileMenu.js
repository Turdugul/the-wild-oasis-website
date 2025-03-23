"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import Link from "next/link";

function MobileMenu({ session }) {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (isOpen && !event.target.closest('.mobile-menu')) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden mobile-menu relative z-[60]">
      <button
        onClick={toggleMenu}
        className="p-2 text-primary-100 hover:text-accent-400 transition-colors rounded-md hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-primary-950"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        ) : (
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out z-[55]"
            onClick={toggleMenu}
          />

          <div 
            className="fixed top-[72px] left-0 right-0 bg-primary-950/95 backdrop-blur-sm border-b border-primary-800 transform transition-all duration-300 ease-in-out z-[60]"
          >
            <nav className="flex flex-col py-4 px-4 space-y-1">
              <Link
                href="/cabins"
                className="text-primary-100 hover:text-accent-400 transition-colors px-4 py-3 rounded-md hover:bg-primary-800 text-lg font-medium"
                onClick={toggleMenu}
              >
                Cabins
              </Link>
              <Link
                href="/about"
                className="text-primary-100 hover:text-accent-400 transition-colors px-4 py-3 rounded-md hover:bg-primary-800 text-lg font-medium"
                onClick={toggleMenu}
              >
                About
              </Link>
              {session?.user?.image ? (
                <Link
                  href="/account"
                  className="flex items-center gap-3 text-primary-100 hover:text-accent-400 transition-colors px-4 py-3 rounded-md hover:bg-primary-800 text-lg font-medium"
                  onClick={toggleMenu}
                >
                  <img
                    className="h-8 w-8 rounded-full object-cover"
                    src={session.user.image}
                    alt={session.user.name}
                    referrerPolicy="no-referrer"
                  />
                  Guest area
                </Link>
              ) : (
                <Link
                  href="/account"
                  className="text-primary-100 hover:text-accent-400 transition-colors px-4 py-3 rounded-md hover:bg-primary-800 text-lg font-medium"
                  onClick={toggleMenu}
                >
                  Guest area
                </Link>
              )}
            </nav>
          </div>
        </>
      )}
    </div>
  );
}

export default MobileMenu; 