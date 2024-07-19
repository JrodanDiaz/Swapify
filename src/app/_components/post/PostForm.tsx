import { useRef, useState } from "react";

export default function FormPost() {
  // image (cap of 3) (database, image column has to be string[])
  // title
  // size (shirt, pant, ring, necklace) string for now
  // clothing condiiton
  // Swapping preference
  // description

  const defaultImage = "/pfp.png";
  const [selectedImage, setSelectedImage] = useState<string | null>(
    defaultImage
  );
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      //set event listener, once reader is finished loading, setSelectedImage to image base64 string
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
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
      <form action="">
        <input
          type="file"
          accept="image/*"
          onChange={handleButtonClick}
          ref={fileInputRef}
          className="hidden"
        />
        <input type="text" name="title" placeholder="Clothing Piece Name" />
        <input type="text" name="size" />
        <input type="text" name="condition" />
        <input type="text" name="swap" />
        <input type="text" name="description" />
      </form>
    </>
  );
}
