import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';
import Link from 'next/link';
import { tv } from 'tailwind-variants';

const headerStyles = tv({
  slots: {
    list: 'flex gap-3',
  },
});

const { list } = headerStyles();

const Header = () => (
  <header>
    <Navbar fluid className="bg-blue-100">
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={Link} href="/">
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="about">
          About
        </NavbarLink>
        <NavbarLink as={Link} href="/projects">
          Projects
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  </header>
);

export { Header };
