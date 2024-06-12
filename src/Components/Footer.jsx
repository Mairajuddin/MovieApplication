import React from "react";

const lists = [
  {
    label: "Home",
    headings: [
      "Brownze arnold",
      "Chronograph blue",
      "Smart phones",
      "Automatic watch",
      "Hair straighteners",
    ],
  },
  {
    label: "Services",
    headings: [
      "About us",
      "Contact us",
      "Return policy",
      "Privacy policy",
      "Payment policy",
    ],
  },
  {
    label: "Help",
    headings: ["News", "Service", "Our policy", "Custmer care", "Faq’s"],
  },
];

const Footer = () => {
  const footerLine = "64 st james boulevard hoswick ,<br/> ze2 7zj";

  return (
    <div className="bg-[#14143c] text-white py-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-2">
        <div className="flex flex-col justify-center items-start md:items-center px-6 md:px-2 gap-2">
          <img src="./logo.png" className="h-30 w-62" alt="logo" />
          <p
            className="text-center"
            dangerouslySetInnerHTML={{ __html: footerLine }}
          />
        </div>
        <div className="col-span-1 md:col-span-3  text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-0">
          {lists.map((list, index) => (
            <div key={index}>
              <h3 className="font-sans text-lg font-semibold text-white mb-2">
                {list.label}
              </h3>
              <ul>
                {list.headings.map((subList, subListIndex) => (
                  <li
                    key={subListIndex}
                    className="text-white text-sm font-light mb-1"
                  >
                    {subList}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
