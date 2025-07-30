import React from "react";

export default function ItemProduct(props) {
  let CardName = `color_bg _${(props.index % 12) + 1}`;
  let bg_img = `url(${props.image})`;
  let { title, price } = props;
  return (
    <div
      key={props.index}
      className="w-[100%] transition-all duration-300 ease-in-out"
    >
      <div className=" mt-[60px] mx-[10px] pt-[300px] box-border relative shadow-[0_0_20px_10px_rgba(25,25,25,0.1)] transition-all duration-300 ease-in-out transform hover:translate-y-[-10px]">
        <div className={CardName}></div>
        <div
          className="bg-contain bg-no-repeat bg-[position:center] absolute bottom-[calc(100%-300px)] w-full h-[300px] transition-all duration-300 ease-in-out hover:h-[350px]"
          style={{ backgroundImage: bg_img }}
        ></div>
        <div className="block pt-5 px-[10px] pb-[5px] box-border font-['Roboto'] text-[#666">
          <h2 className="w-full text-sm text-center">{title}</h2>
          <div className="cont_info">
            <h3 className="w-full text-sm text-center">Q {price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
