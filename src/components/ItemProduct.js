import React from "react";

export default function ItemProduct(props) {
  let CardName = `color_bg _${(props.index % 12) + 1}`;
  let bg_img = `url(${props.image})`;
  let { title, price, click, item } = props;
  return (
    <div
      key={props.index}
      className="w-[100%] transition-all duration-300 ease-in-out cursor-pointer max-sm:mt-[40px] group "
      onClick={() => click(item)}
    >
      <div className=" pt-[230px] box-border relative shadow-[0_0_20px_10px_rgba(25,25,25,0.1)] transition-all duration-300 ease-in-out transform ">
        <div className="bg-white w-[100%] h-[100%] absolute top-0 left-0 rounded-lg"></div>
        <div className={CardName}></div>
        <div
          className="bg-contain bg-no-repeat bg-[position:center] absolute bottom-[calc(100%-250px)] w-[100%]
          h-[250px] transition-all duration-300 ease-in-out 
          left-[50%] translate-x-[-50%]
          group-hover:w-[120%] group-hover:bottom-[calc(100%-250px)] group-hover:h-[100%]
          "
          style={{ backgroundImage: bg_img }}
        ></div>
        <div className="block pt-5 px-[10px] pb-[15px] box-border font-['Roboto'] text-[#666] group-hover:tet-[#000] relative z-9">
          <h2 className="w-full text-sm text-center font-bold text-base">
            {title}
          </h2>
          <div className="cont_info">
            <h3 className="w-full text-xl text-center font-bold text-base">
              Q {price}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
