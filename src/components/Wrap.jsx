import React from "react";

const Wrap = (props) => {
  return (
    <section className="container mb-20 bg-white p-4 shadow-lg rounded-lg hover:shadow-xl">
      <div className="border-l-8 border-primary p-2 uppercase">
        <div className="text-[12px] tracking-[6px] text-[#888888]">
          {props.subtitle}
        </div>
        <h1 className="text-3xl tracking-wide font-semibold">
          {props.title}
        </h1>
      </div>
      <div className="my-4">{props.children}</div>
    </section>
  );
};

export default Wrap;
