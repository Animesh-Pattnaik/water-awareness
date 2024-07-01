import Link from 'next/link';

const Header = () => (
  <header className="bg-blue-500 text-white py-4 sticky top-0 z-10">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/">
        <p className="text-xl font-bold">Clean Water Awareness</p>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <p className="hover:text-gray-200">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/#about">
              <p className="hover:text-gray-200">About</p>
            </Link>
          </li>
          <li>
            <Link href="/#articles">
              <p className="hover:text-gray-200">Articles</p>
            </Link>
          </li>
          <li>
            <Link href="/#disease">
              <p className="hover:text-gray-200">Diseases</p>
            </Link>
          </li>
          <li>
            <Link href="/#factor">
              <p className="hover:text-gray-200">Factors</p>
            </Link>
          </li>
          <li>
            <Link href="/#form">
              <p className="hover:text-gray-200">Potability</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
