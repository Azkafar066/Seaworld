import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-blue-800 text-white p-4">
    <nav className="flex justify-center space-x-8">
      <Link to="/">Beranda</Link>
      <Link to="/detail">Detail</Link>
      <Link to="/galeri">Galeri</Link>
      <Link to="/kontak">Kontak</Link>
    </nav>
  </header>
);

export default Header;
