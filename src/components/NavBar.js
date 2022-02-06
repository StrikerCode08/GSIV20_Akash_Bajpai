import React from "react";
import { Navbar, NavLink, FormGroup, Input, Label } from "reactstrap";
import { FaHome } from "react-icons/fa";

function NavBar() {
  return (
    <>
      <div>
        <Navbar color="secondary">
          <FormGroup className="search">
            <Input
              id="search"
              name="search"
              placeholder="search"
              type="search"
            />
            <Label for="search"></Label>
          </FormGroup>
          <NavLink href="/" className="homeicon">
            <FaHome color="black" />
          </NavLink>
        </Navbar>
      </div>

      {/* <Form inline>
      <FormGroup className="search">
        <Input id="search" name="search" placeholder="search" type="search" />
        <Label for="search"></Label>
        <span>
          <FaHome />
        </span>
      </FormGroup>
    </Form> */}
    </>
  );
}

export default NavBar;
