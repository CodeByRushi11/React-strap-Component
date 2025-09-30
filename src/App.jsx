import React from "react";
import KgButton from "./kgButton";
import Hello from "./Hello";
import RanDom from "./RanDom";
import NavbarComponent from "./Componenet Reactstrap/NavbarComponent";
import AccordianCompo from "./Componenet Reactstrap/AccordianCompo";
import AlertCompo from "./Componenet Reactstrap/AlertCompo";
import ButtonsCompo from "./Componenet Reactstrap/ButtonsCompo";
import BreadcrumpCompo from "./Componenet Reactstrap/BreadcrumpCompo";
import RadioCheckboxCompo from "./Componenet Reactstrap/RadioCheckboxCompo";
import CardCompo from "./Componenet Reactstrap/CardCompo";
import CarousalCompo from "./Componenet Reactstrap/CarousalCompo";
import CollapseCompo from "./Componenet Reactstrap/CollapseCompo";
import DropdownCompo from "./Componenet Reactstrap/DropdownCompo";
import FadeCompo from "./Componenet Reactstrap/FadeCompo";
import FormCompo from "./Componenet Reactstrap/FormCompo";
import InputGroupComp from "./Componenet Reactstrap/InputGroupComp";
import LayoutCompo from "./Componenet Reactstrap/LayoutCompo";
import ListGroupCompo from "./Componenet Reactstrap/ListGroupCompo";
import ModalCompo from "./Componenet Reactstrap/ModalCompo";
import OffcanvasCompo from "./Componenet Reactstrap/OffcanvasCompo";
import PaginationCompo from "./Componenet Reactstrap/PaginationCompo";
import PopoverCompo from "./Componenet Reactstrap/PopoverCompo";
import ProgressCompo from "./Componenet Reactstrap/ProgressCompo";
import SpinnerCompo from "./Componenet Reactstrap/SpinnerCompo";
import TableCompo from "./Componenet Reactstrap/TableCompo";
import TooltipExampleMulti from "./Componenet Reactstrap/TooltipCompo";

const App = () => {
  // Dynamic content
  let myName = "Rushi";
  let num = 545;
  let fullName = () => {
    return "Rushikesh Ingole";
  };
  return (
    <div className="container mt-3">
      {/* Display Bootstrap and Reactstrap components */}
      <h2>Navbar Component</h2>
      <NavbarComponent />
      <hr />

      <h2>Accordion Component</h2>
      <AccordianCompo />
      <hr />

      <h2>Alert Component</h2>
      <AlertCompo />
      <hr />

      <h2>Buttons Component</h2>
      <ButtonsCompo />
      <hr />

      <h2>Breadcrumb Component</h2>
      <BreadcrumpCompo />
      <hr />

      <h2>Radio & Checkbox Component</h2>
      <RadioCheckboxCompo />
      <hr />

      <h2>Card Component</h2>
      <CardCompo />
      <hr />

      <h2>Carousel Component</h2>
      <CarousalCompo />
      <hr />

      <h2>Collapse Component</h2>
      <CollapseCompo />
      <hr />

      <h2>Dropdown Component</h2>
      <DropdownCompo />
      <hr />

      <h2>Fade Component</h2>
      <FadeCompo />
      <hr />

      <h2>Form Component</h2>
      <FormCompo />
      <hr />

      <h2>Input Group Component</h2>
      <InputGroupComp />
      <hr />

      <h2>Layout Component</h2>
      <LayoutCompo />
      <hr />

      <h2>List Group Component</h2>
      <ListGroupCompo />
      <hr />

      <h2>Modal Component</h2>
      <ModalCompo />
      <hr />

      <h2>Offcanvas Component</h2>
      <OffcanvasCompo />
      <hr />

      <h2>Pagination Component</h2>
      <PaginationCompo />
      <hr />

      <h2>Popover Component</h2>
      <PopoverCompo />
      <hr />

      <h2>Progress Component</h2>
      <ProgressCompo />
      <hr />

      <h2>Spinner Component</h2>
      <SpinnerCompo />
      <hr />

      <h2>Table Component</h2>
      <TableCompo />
      <hr />

      <h2>Tooltip Component</h2>
      <TooltipExampleMulti />
      <hr />

      {/* Extra Content */}
      <h2>Here we test bootstrap components</h2>
      <h1>Hello World</h1>
      <p>
        I am revising React JS. I am {fullName()}. Message No: {num}
      </p>

      <Hello />
      <RanDom />
      <RanDom />
      <RanDom />
      <RanDom />
    </div>
  );
};

export default App;

// above is row arrow functional component
// we use functional components mostly
// in React component name must start with uppercase letter
