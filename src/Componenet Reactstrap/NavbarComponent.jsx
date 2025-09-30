import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  Input,
  Button,
} from "reactstrap";
import { FaBars, FaTimes } from "react-icons/fa"; // toggle icons
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="px-4"
      style={{ backgroundColor: "#4A148C" }}
    >
      {/* Brand */}
      <NavbarBrand href="#" className="text-white fw-bold fs-4">
        MyNavbar
      </NavbarBrand>

      {/* Custom toggle button with icon */}
      <NavbarToggler onClick={toggle} className="border-0 text-white">
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </NavbarToggler>

      {/* Collapsible content */}
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="#" className="text-white">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className="text-white">
              Link
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret className="text-white">
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink disabled href="#" className="text-muted">
              Disabled
            </NavLink>
          </NavItem>
        </Nav>

        {/* Search form */}
        <Form className="d-flex">
          <Input
            type="search"
            placeholder="Search"
            className="me-2"
            style={{ borderRadius: "20px" }}
          />
          <Button
            style={{
              backgroundColor: "#FF6F00",
              border: "none",
              borderRadius: "20px",
            }}
          >
            Search
          </Button>
        </Form>
      </Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
