"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function FormPost() {
  const defaultImage = "/pfp.png";
  // const [selectedImageOne, setSelectedImageOne] =
  //   useState<string>(defaultImage);
  // const [selectedImageTwo, setSelectedImageTwo] =
  //   useState<string>(defaultImage);
  // const [selectedImageThree, setSelectedImageThree] =
  //   useState<string>(defaultImage);

  const [images, setImages] = useState({
    1: defaultImage,
    2: defaultImage,
    3: defaultImage,
  });
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [currentImage, setCurrentImage] = useState<number>(1);

  const handleClick = (event: any) => {
    fileInputRef.current = event.target;
  };

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      //set event listener, once reader is finished loading, setSelectedImage to image base64 string
      reader.onloadend = () => {
        // if (currentImage == 1) {
        //   setSelectedImageOne(reader.result as string);
        // } else if (currentImage == 2) {
        //   setSelectedImageTwo(reader.result as string);
        // } else if (currentImage == 3) {
        //   setSelectedImageThree(reader.result as string);
        // }
        setImages({ ...images, [id]: reader.result as string });
      };
      //the async event that converts the image to base64, where its stored in reader.result
      reader.readAsDataURL(file);
    } else {
      alert("Please select an image file");
    }
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    //the actual <input> comes with text that I don't want displayed, so its hidden
    //this function manually triggers the click event on fileInputRef, a pointer to the hidden input
    fileInputRef.current?.click();
    const target = e.target as HTMLButtonElement;
    setCurrentImage(parseInt(target.id));
  };

  return (
    <>
      <form className="flex flex-col gap-5 border-2 border-black items-center pt-10">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageChange(e, currentImage)}
          ref={fileInputRef}
          className="hidden"
        />

        {Object.entries(images).map(([id, image]) => (
          <>
            <input
              type="text"
              className="hidden"
              name={`image-${id}`}
              value={image}
              readOnly={true}
            />
          </>
        ))}

        {/* <input
          type="string"
          className="hidden"
          value={selectedImageOne ? selectedImageOne : ""}
          name="f"
          readOnly={true}
        />

        <input
          type="string"
          className="hidden"
          value={selectedImageTwo ? selectedImageTwo : ""}
          name="imageTwo"
          readOnly={true}
        />

        <input
          type="string"
          className="hidden"
          value={selectedImageThree ? selectedImageThree : ""}
          name="imageThree"
          readOnly={true}
        /> */}

        <button
          className="px-4 py-2 bg-black text-white rounded-full"
          onClick={handleButtonClick}
          type="button"
          id={currentImage.toString()}
        >
          Upload Image
        </button>
        <input
          type="text"
          name="title"
          placeholder="Clothing Piece Name"
          className="border-[1px] border-black"
        />
        <input
          type="text"
          name="size"
          placeholder="Clothing Size"
          className="border-[1px] border-black"
        />
        <input
          type="text"
          name="condition"
          placeholder="Clothing condition"
          className="border-[1px] border-black"
        />
        <input
          type="text"
          name="swap"
          placeholder="Clothing swap"
          className="border-[1px] border-black"
        />
        <input
          type="text"
          name="description"
          placeholder="Clothing description"
          className="border-[1px] border-black"
        />
        <button type="submit" className="p-2 border-2 border-red-500 w-min">
          Gayyyyyy
        </button>
      </form>

      <div className="flex">
        {Object.entries(images).map(([id, image]) => (
          <>
            <div className="w-[200px] h-[200px] relative">
              <Image src={image} alt="clothing image" layout="fill"></Image>
              <div className="z-20 absolute opacity-0 w-full h-full hover:opacity-100 flex justify-center items-center">
                <button
                  onClick={handleButtonClick}
                  id={id}
                  className="bg-black text-orange-500 font-bold text-xl border-2 border-orange-500 px-3 py-1"
                >
                  EDIT
                </button>
              </div>
            </div>
          </>
        ))}
        {/* <div className="w-[200px] h-[200px] relative">
          <Image src={selectedImageOne} alt="imageOne" layout="fill"></Image>
          <div className="z-20 absolute opacity-0 w-full h-full hover:opacity-100 flex justify-center items-center">
            <button
              onClick={handleButtonClick}
              id="1"
              className="bg-black text-orange-500 font-bold text-xl border-2 border-orange-500 px-3 py-1"
            >
              EDIT
            </button>
          </div>
        </div>
        <div className="w-[200px] h-[200px] relative">
          <Image src={selectedImageTwo} alt="imageOne" layout="fill"></Image>
          <div className="z-20 absolute opacity-0 w-full h-full hover:opacity-100 flex justify-center items-center">
            <button
              onClick={handleButtonClick}
              id="2"
              className="bg-black text-orange-500 font-bold text-xl border-2 border-orange-500 px-3 py-1"
            >
              EDIT
            </button>
          </div>
        </div>
        <div className="w-[200px] h-[200px] relative">
          <Image src={selectedImageThree} alt="imageOne" layout="fill"></Image>
          <div className="z-20 absolute opacity-0 w-full h-full hover:opacity-100 flex justify-center items-center">
            <button
              onClick={handleButtonClick}
              id="3"
              className="bg-black text-orange-500 font-bold text-xl border-2 border-orange-500 px-3 py-1"
            >
              EDIT
            </button>
            <button className="bg-black text-orange-500 font-bold text-xl border-2 border-red-500 px-3 py-1">
              DEL
            </button>
          </div>
        </div> */}
        `
      </div>

      <p>{currentImage}</p>
    </>
  );
}
