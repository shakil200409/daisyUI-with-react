import { useState } from "react";
import Link from "./Link";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="p-5 bg-yellow-300 text-black">
      <div className="md:hidden text-3xl ">
        {open === true ? (
          <IoMdClose onClick={() => setOpen(!open)} />
        ) : (
          <IoIosMenu onClick={() => setOpen(!open)} />
        )}
      </div>
      <ul
        className={`md:flex gap-10
        absolute duration-1000
        ${open === true ? "top-16" : "-top-44"} 
        md:static bg-yellow-300 text-black`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
