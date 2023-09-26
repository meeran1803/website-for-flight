import React from "react";
import { ContactUsComp } from "../../components/ContactUsComp";
import { HeaderComp } from "../../components/HeaderComp";
import { FlightBookingFormComp } from "../../components/FlightBookingFormComp";
import { InputTextComp } from "../../components/InputTextComp";


export const LandingPage = () => {
  return (
    <div className="w-screen h-screen">
      <ContactUsComp />
      <HeaderComp />
      <FlightBookingFormComp />
      <InputTextComp />
      </div>
  );
};
