import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold text-white sm: text-l">
            ELEVEN (Shanghai)
          </h1>

          <div className="flex gap-6">
            <Link to="/" className="text-[yellow] hover:text-white">
              Home
            </Link>

            <Link to="/about" className="text-[yellow] hover:text-white">
              About
            </Link>

            <Link to="/contact" className="text-[yellow] hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
