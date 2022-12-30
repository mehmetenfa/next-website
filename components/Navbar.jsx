import React from "react";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <div>
        <Link href="/">
          <h1>Capture</h1>
          <ul>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/#gallery'>Gallery</Link>
            </li>
            <li>
                <Link href='/portfolio'>Work</Link>
            </li>
            <li>
                <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
