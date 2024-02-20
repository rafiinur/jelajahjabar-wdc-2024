import { Link } from "react-router-dom";
import { footerLinks } from "../constant";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-7xl p-3">
      <div className="flex justify-between">
        <div className="flex flex-col gap-10 w-[30%]">
          <p className="text-3xl font-bold">JelajahJabar.</p>
          <p className="text-xl font-semibold max-w-[90%]">
            Temukan dan Nikmati Kekayaan Alam di Jawa Barat bersama JelajahJabar
          </p>
        </div>

        {footerLinks.flatMap((item, index) => (
          <div className="flex flex-col gap-10" key={index}>
            <p className="text-2xl font-extrabold">{item.title}</p>
            <ul>
              {item.links.map((link) => (
                <li key={link.href} className="mb-5">
                  <Link className="text-xl">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-24 mb-6 text-xl">Copyright 2024 . JelajahJabar</div>
    </footer>
  );
};

export default Footer;
