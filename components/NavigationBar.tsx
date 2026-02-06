'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
import GitHubLink from './GitHubLink'
import Logo from './Logo'

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToWaitlist = () => {
    const waitlistForm = document.getElementById('fset');
    if (waitlistForm) {
      waitlistForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false); // Close mobile menu if open
    }
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md' 
          : 'bg-transparent dark:bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border border-gray-300 dark:border-gray-700">
        <div className="flex justify-between items-center h-14 ">
          {/* Logo / Brand */}
          <div className="LogoDiv flex items-center gap-3">
            <Logo size={28} />
            <Link href="/" className="text-2xl font-bold uppercase text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition ">
              AuthnPass
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/docs" 
              className="nav-link px-4 py-2 text-gray-400 dark:text-gray-600 cursor-not-allowed transition-colors text-sm font-medium border-r border-gray-300 dark:border-gray-700"
            >
              Docs
            </Link>
            <Link 
              href="/plugins" 
              className=" nav-link px-4 py-2 text-gray-400 dark:text-gray-600 cursor-not-allowed transition-colors text-sm font-medium border-r border-gray-300 dark:border-gray-700"
            >
              Plugins
            </Link>
            {/* <Link 
              href="/pricing" 
              className="nav-link px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium border-r border-gray-300 dark:border-gray-700"
            >
              Pricing
            </Link> */}
            <GitHubLink />
            <ThemeToggle />
            <button
              onClick={scrollToWaitlist}
              className=" doubleShadow px-4 py-2 ml-2 bg-[#cabe9a] dark:bg-[#cabe9a] text-white rounded-none hover:bg-[#e6cd84] transition-colors text-sm font-medium"
            >
              Join Waitlist
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <GitHubLink />
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800  rounded-md p-2 transition-colors"
            >
              {isOpen ? (
                <svg 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              ) : (
                <svg 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg border-t border-gray-300 dark:border-gray-700">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link 
              href="/docs" 
              className="block px-3 py-2 text-gray-400 dark:text-gray-600 rounded-md text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Docs
            </Link>
            <Link 
              href="/plugins" 
              className="block px-3 py-2 text-gray-400 dark:text-gray-600 rounded-md text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Plugins
            </Link>
            <Link 
              href="/pricing" 
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <div className="flex items-center justify-between px-3 py-2 border-t border-gray-300 dark:border-gray-700 mt-2 pt-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">GitHub</span>
              <GitHubLink />
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-t border-gray-300 dark:border-gray-700 pt-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Theme</span>
              <ThemeToggle />
            </div>
            <button
              onClick={scrollToWaitlist}
              className=" doubleShadow block w-full text-center px-4 py-2 bg-[#cabe9a] dark:bg-[#cabe9a] text-white rounded-md hover:bg-[#e6cd84] transition-colors text-sm font-medium mt-2"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
