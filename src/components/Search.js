import React from "react";

export default function Search(props) {
  const { onChange, search, className } = props;
  return (
    <div
      className={[
        "flex sticky top-0 z-10  py-4 gap-10 bg-[#410088]" + className,
      ]}
    >
      <img className="h-[50px]" src="../images/logo.png" alt="logo" />
      <input
        className=" h-[40px] border rounded-lg p-4 shadow-md border-[#66666669] bg-white w-[100%] p-[10px] box-border font-['Roboto'] text-[#666]   transition-all duration-300 ease-in-out "
        name="search"
        type="text"
        placeholder="Search"
        onChange={(e) => onChange(e.target.value)}
        value={search}
      />
    </div>
  );
}
