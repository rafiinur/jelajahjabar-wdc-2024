/* eslint-disable react/prop-types */
import { Navbar, Hero } from "../components";

const Header = ({ bgimg, texthead, textpara }) => {
  const className = `relative w-full h-screen bg-center bg-no-repeat bg-cover ${bgimg} `;
  return (
    <header className={className}>
      <Navbar />
      <Hero texthead={texthead} textpara={textpara} />
    </header>
  );
};

export default Header;
