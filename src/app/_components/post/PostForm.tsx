'use client'

import { useRef, useState } from "react";
import Image from "next/image";

export default function FormPost() {
  // image (cap of 3) (database, image column has to be string[])
  // title
  // size (shirt, pant, ring, necklace) string for now
  // clothing condiiton
  // Swapping preference
  // description

  const defaultImage = "/pfp.png";
  const [selectedImageOne, setSelectedImageOne] = useState<string>(
    defaultImage
  );
  const [selectedImageTwo, setSelectedImageTwo] = useState<string>(
    defaultImage
  );
  const [selectedImageThree, setSelectedImageThree] = useState<string>(
    defaultImage
  );
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = (event: any) => {
    fileInputRef.current = event.target
  }
 
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log("Hit")
    if (file) {
      console.log("YAAAAAYYYYY")
    }
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      //set event listener, once reader is finished loading, setSelectedImage to image base64 string
      reader.onloadend = () => {
        console.log("reached")
        setSelectedImageOne(reader.result as string);
      };
      //the async event that converts the image to base64, where its stored in reader.result
      reader.readAsDataURL(file);
    } else {
      alert("Please select an image file");
    }
  };

  const handleButtonClick = () => {
    //the actual <input> comes with text that I don't want displayed, so its hidden
    //this function manually triggers the click event on fileInputRef, a pointer to the hidden input
    fileInputRef.current?.click();
  };

  return (
    <>
      <form action="" className="flex flex-col gap-5 border-2 border-black items-center pt-10">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInputRef}
          className="hidden"
        />

         <input
          type="string"
          className="hidden"
          value={selectedImageOne ? selectedImageOne : ""}
          name="imageOne"
        />

         <input
          type="string"
          className="hidden"
          value={selectedImageTwo ? selectedImageTwo : ""}
          name="imageTwo"
        />
        
        <input
          type="string"
          className="hidden"
          value={selectedImageThree ? selectedImageThree : ""}
          name="imageThree"
        />
        
        <button className="px-4 py-2 bg-black text-white rounded-full" onClick={handleButtonClick}>Upload Image</button>
        <input type="text" name="title" placeholder="Clothing Piece Name"  className="border-[1px] border-black"/>
        <input type="text" name="size" placeholder="Clothing Size" className="border-[1px] border-black"/>
        <input type="text" name="condition" placeholder="Clothing condition" className="border-[1px] border-black"/>
        <input type="text" name="swap" placeholder="Clothing swap" className="border-[1px] border-black"/>
        <input type="text" name="description" placeholder="Clothing description" className="border-[1px] border-black"/>
        <button type="submit" className="p-2 border-2 border-red-500 w-min">Gayyyyyy</button>
      </form>

      <div className="flex">
        <div className="w-[200px] h-[200px] relative">
          <Image src={selectedImageOne} alt="imageOne" layout="fill"></Image>
          <div className="z-20 absolute opacity-0 w-full h-full hover:opacity-100 flex justify-center items-center">
            <button className="bg-black text-orange-500 font-bold text-xl border-2 border-orange-500 px-3 py-1">EDIT</button>
          </div>
        </div>

        <div className="w-[200px] h-[200px] relative">
          <Image src={selectedImageTwo} alt="imageOne" layout="fill"></Image>
          <div className="z-20 absolute opacity-0 w-full h-full hover:opacity-100 flex justify-center items-center">
            <button className="bg-black text-orange-500 font-bold text-xl border-2 border-orange-500 px-3 py-1">EDIT</button>
          </div>
        </div>

        <div className="w-[200px] h-[200px] relative">
          <Image src={selectedImageThree} alt="imageOne" layout="fill"></Image>
          <div className="z-20 absolute opacity-0 w-full h-full hover:opacity-100 flex justify-center items-center">
            <button className="bg-black text-orange-500 font-bold text-xl border-2 border-orange-500 px-3 py-1">EDIT</button>
          </div>
        </div>`
      </div>

      {selectedImageOne}
    </>
  );
}
