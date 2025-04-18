import { SetStateAction, useState } from 'react';
import { ChevronDown, Settings } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link from React Router

export default function AccountingNavbar() {
  const [isCompanyMenuOpen, setIsCompanyMenuOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState('B&W Mining Supplies');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const companies = ['B&W Mining Supplies', 'B&W Weapon Supplies'];

  const handleCompanySelect = (company: SetStateAction<string>) => {
    setSelectedCompany(company);
    setIsCompanyMenuOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg fixed w-full top-0 left-0 z-10">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section: Company Selector and Navigation */}
          <div className="flex items-center space-x-4">
            {/* Company Picker */}
            <div className="relative">
              <button
                onClick={() => setIsCompanyMenuOpen(!isCompanyMenuOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-md bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 w-56"
              >
                <span className="font-medium truncate">{selectedCompany}</span>
                <ChevronDown size={18} className="flex-shrink-0 ml-auto" />
              </button>

              {isCompanyMenuOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 z-20">
                  <div className="py-1">
                    {companies.map((company) => (
                      <button
                        key={company}
                        onClick={() => handleCompanySelect(company)}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700"
                      >
                        {company}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Items - Desktop */}
            <div className="hidden md:flex space-x-3">
              <Link
                to="/dashboard"
                className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Dashboard
              </Link>
              <Link
                to="/inventory"
                className="bg-gray-800 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Inventory
              </Link>
              <Link
                to="/orders"
                className="bg-gray-800 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Orders
              </Link>
              <Link
                to="/transactions"
                className="bg-gray-800 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Transactions
              </Link>
              <Link
                to="/persons"
                className="bg-gray-800 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Persons
              </Link>
            </div>
          </div>

          {/* Right Section: User Profile */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Settings Icon */}
            <Link
              to="/settings"
              className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 ml-4"
            >
              <Settings size={18} className="text-white" />
            </Link>

            {/* User Profile */}
            <div className="hidden md:flex items-center ml-4">
              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                <span className="font-medium text-sm">JD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/dashboard"
              className="w-full text-left bg-blue-600 text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Dashboard
            </Link>
            <Link
              to="/inventory"
              className="w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Inventory
            </Link>
            <Link
              to="/orders"
              className="w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Orders
            </Link>
            <Link
              to="/transactions"
              className="w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Transactions
            </Link>
            <Link
              to="/persons"
              className="w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Persons
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}