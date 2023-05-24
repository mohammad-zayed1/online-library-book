import { Footer } from "../../components/Footer";
import { NavbarLanding } from "../../components/NavbarLanding";
import { Day } from "./Day";
import { Motivation } from "./Motivation";
import { Other } from "./Other";
export const QuotesPage = () => {
  return (
    <>
      <NavbarLanding />
      <Day />
      <Motivation />
      <Other/>
      <Footer />
    </>
  );
};
