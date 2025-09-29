import React from "react";

export const FooterSection = (): JSX.Element => {
  const socialIcons = [
    {
      className: "absolute top-[232px] left-[108px] w-[30px] h-[30px]",
      alt: "Instagram",
      src: "/instagram.svg",
    },
    {
      className: "absolute top-[232px] left-[169px] w-[30px] h-[30px]",
      alt: "New twitter",
      src: "/new-twitter-rectangle.svg",
    },
    {
      className: "absolute top-[232px] left-[230px] w-[30px] h-[30px]",
      alt: "Facebook",
      src: "/facebook-01.svg",
    },
  ];

  const socialCircles = [
    {
      className:
        "absolute top-[221px] left-[97px] w-[52px] h-[52px] bg-pry rounded-[26px]",
    },
    {
      className:
        "absolute top-[221px] left-[158px] w-[52px] h-[52px] bg-pry rounded-[26px]",
    },
    {
      className:
        "absolute top-[221px] left-[219px] w-[52px] h-[52px] bg-pry rounded-[26px]",
    },
    {
      className:
        "absolute top-[221px] left-[280px] w-[52px] h-[52px] bg-pry rounded-[26px]",
    },
  ];

  const footerColumns = [
    {
      title: "Company",
      content: "Terms\nPrtivacy Policy",
      className:
        "flex flex-col w-[182px] items-start gap-[54px] absolute top-[93px] left-[489px]",
    },
    {
      title: "Join Us",
      content: "Investor\nArtist",
      className:
        "flex flex-col w-[138px] items-start gap-[54px] absolute top-[93px] left-[796px]",
    },
    {
      title: "Contact Us",
      content: "Email\npartner@voicevesta.com",
      className:
        "flex flex-col w-[278px] items-start gap-[54px] absolute top-[93px] left-[1059px]",
    },
  ];

  return (
    <footer className="w-full h-[438px] bg-dark bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(0deg,rgba(7,4,30,1)_0%,rgba(7,4,30,1)_100%)] relative">
      <img
        className="absolute top-[78px] left-[97px] w-[91px] h-[91px]"
        alt="Element"
        src="/2-1-.svg"
      />

      <img
        className="absolute top-[49px] left-[188px] w-36 h-36"
        alt="Element"
        src="/11.svg"
      />

      {socialCircles.map((circle, index) => (
        <div key={`circle-${index}`} className={circle.className} />
      ))}

      {footerColumns.map((column, index) => (
        <div key={`column-${index}`} className={column.className}>
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#ffffff] text-[40px] tracking-[0] leading-10">
            {column.title}
          </div>
          <div className="relative w-fit [font-family:'Manrope',Helvetica] font-normal text-[#ffffff] text-2xl tracking-[0] leading-[43.0px] whitespace-pre-line">
            {column.content}
          </div>
        </div>
      ))}

      <div className="absolute top-[361px] left-[97px] font-b1 font-[number:var(--b1-font-weight)] text-[#ffffff] text-[length:var(--b1-font-size)] tracking-[var(--b1-letter-spacing)] leading-[var(--b1-line-height)] whitespace-nowrap [font-style:var(--b1-font-style)]">
        © VOICEVESTA 2025
      </div>

      <div className="absolute top-[361px] left-[1130px] font-b1 font-[number:var(--b1-font-weight)] text-[#ffffff] text-[length:var(--b1-font-size)] text-right tracking-[var(--b1-letter-spacing)] leading-[var(--b1-line-height)] whitespace-nowrap [font-style:var(--b1-font-style)]">
        ALL RIGHTS RESERVED
      </div>

      <img
        className="absolute top-[333px] left-[calc(50.00%_-_616px)] w-[1233px] h-px object-cover"
        alt="Line"
        src="/line-1.svg"
      />

      {socialIcons.map((icon, index) => (
        <img
          key={`social-${index}`}
          className={icon.className}
          alt={icon.alt}
          src={icon.src}
        />
      ))}

      <img
        className="absolute w-0 h-[5.42%] top-[53.42%] left-[20.35%]"
        alt="Vector"
        src="/vector.svg"
      />

      <img
        className="absolute w-0 h-[3.44%] top-[54.42%] left-[20.70%]"
        alt="Vector"
        src="/vector-1.svg"
      />
    </footer>
  );
};
