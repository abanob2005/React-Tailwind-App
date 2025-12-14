import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function Layout() {
  return (
    <>
      <Navbar />
      {/* Padding top عشان Navbar الثابت */}
      <div className="pt-18">
        <Outlet />
        <Footer/>
      </div>
    </>
  );
}
