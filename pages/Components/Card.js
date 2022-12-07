import React from "react";
import Image from "next/image";
import Link from "next/link";
function Card({ item, isRounded, width,height , }) {
  return (
 
    <div className="   aspect-square text-center rounded-md shadow-m  ">
      <img className={" shadow-5xl object-center " + (isRounded ? "rounded-full" : "")}
       src={item.thumbnail} alt="/" width={width ? width : "348"} height={height? height :"448"} />
      <div className="flex flex-col justify-between p-6 ">
        <Link href={"/products/" + item.id}>
          <button type="button" className=" hover:bg-[#e4d895] -mt-12 flex items-center text-white justify-center w-full p-3 font-semibold tracking-wide rounded-m bg-[#a7b294]">
            {item.title}
          </button>
        </Link>
      </div>
    </div> 
    
    
  );
}
const Cards = ({ items = null, isRounded = true  , Text,width,height }) => {
  items = items ?? [
    { id: -1, thumbnail: "/d4.jpg", title: "fresh flowers" },
    { id: -2, thumbnail: "/d14.jpg", title: " Gifts" },
    { id: -3, thumbnail: "/d3.jpg", title: "Everlasting Flowers" },
  ];
  const itemsComponent = items.filter((item)=>item.id).map((item, index) => <Card item={item} key={index}   isRounded={isRounded}  width={width} height={height} />);

  return (
    <section className="py-6 items-baseline">
      <div className=" container flex flex-col justify-between items-center p-4 mx-auto">
        <h1 className=" font-bold text-3xl text-[#4e515a] p-4 pb-20 font-mono">{Text ? Text : 
        <Link href="/add-product">
           <button type="button" className="rounded-full hover:bg-[#e4d895] -mt-12 flex items-center text-white justify-center w-full p-3 font-semibold tracking-wide rounded-m bg-[#a7b294]">
         add product
           </button>
         </Link>
 } </h1>
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-3 sm:grid-cols-2 ">{itemsComponent}</div>
      </div>
      
    </section>
  );
};

export default Cards;