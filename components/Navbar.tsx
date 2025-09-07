// components/Navbar.tsx
import {
  UserIcon,
  Squares2X2Icon,
  PlusCircleIcon,
  GlobeAltIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';

export default function Navbar() {
  return (
    <nav className="app-nav">
      <div className="nav-left">
        <div className="logo font-bold text-lg">CARSMORE</div>
        <div className="search-box">
          <input type="text" placeholder="Search car models..." />
          <button>Search</button>
        </div>
      </div>

      <div className="nav-right">
        <div className="flex items-center cursor-pointer">
          <UserIcon className="w-5 h-5 mr-1" />
          <span>Sign Up / Login</span>
          <ChevronDownIcon className="w-4 h-4 ml-1" />
        </div>

        <div className="flex items-center cursor-pointer">
          <Squares2X2Icon className="w-5 h-5 mr-1" />
          <span>Follow Us</span>
          <ChevronDownIcon className="w-4 h-4 ml-1" />
        </div>

        <div className="flex items-center cursor-pointer">
          <PlusCircleIcon className="w-5 h-5 mr-1" />
          <span>Add to Desktop</span>
        </div>

        <div className="flex items-center cursor-pointer">
          <GlobeAltIcon className="w-5 h-5 mr-1" />
          <span>English</span>
          <ChevronDownIcon className="w-4 h-4 ml-1" />
        </div>
      </div>
    </nav>
  );
}
