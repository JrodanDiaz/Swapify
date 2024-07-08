"use client";
import Navbar from "../../_components/common/Navbar";
import Image from "next/image";
import Sidebar from "../../_components/account/Sidebar";
import { useUserContext } from "../../_lib/_context/UserContext";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import updateUserAction from "@/app/_actions/updateUserAction";

export default function AccountPage() {
  const user = useUserContext();
  const router = useRouter();

  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);
  const [password, setPassword] = useState(user.password);
  const [location, setLocation] = useState(user.location);

  const [formState, updateAction] = useFormState(updateUserAction, user.id);

  useEffect(() => {
    if (user.id === -1) {
      router.push("/login");
    } else {
      setEmail(user.email);
      setUsername(user.username);
      setPassword(user.password);
      setLocation(user.location);
    }
  }, [user]);

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

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "username") {
      setUsername(e.target.value);
    } else if (e.target.id === "location") {
      setLocation(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };
  return (
    <>
      <Navbar />
      <div className="pt-20 flex justify-around border-red-600 border-4">
        <Sidebar />
        <div className="border-blue-600 border-2 w-3/5 flex flex-wrap justify-around">
          <form action={updateAction} className="flex flex-col">
            <label htmlFor="username" className="font-semibold">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="border-black border-[1px] px-3 py-2 mb-6"
              value={email}
              onChange={onInputChange}
            />
            <label htmlFor="username" className="font-semibold">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="border-black border-[1px] px-3 py-2 mb-6"
              value={username}
              onChange={onInputChange}
            />
            <label htmlFor="location" className="font-semibold">
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              className="border-black border-[1px] px-3 py-2 mb-6"
              value={location}
              onChange={onInputChange}
            />
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={onInputChange}
              className="border-black border-[1px] px-3 py-2 mb-2"
            />
            <button
              className=" px-4 py-2 bg-black text-white rounded-full"
              type="submit"
            >
              Gayyyyyyyy
            </button>
          </form>
          <div className="flex flex-col items-center">
            <div className="border-black border-2 w-[250px] h-[250px] mb-2 overflow-hidden rounded-full relative">
              {selectedImage && (
                <>
                  <Image
                    src={selectedImage}
                    layout="fill"
                    objectFit="contain"
                    alt="selected image"
                  />
                </>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
              className="hidden"
            />
            <button
              onClick={handleButtonClick}
              className=" px-4 py-2 bg-black text-white rounded-full"
            >
              Change Profile Picture
            </button>
          </div>
        </div>

        {/* <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            className="border-black border-[1px] mb-2"
            value={username}
            onChange={onInputChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={onInputChange}
            className="border-black border-[1px] mb-2"
          />
        </div> */}
      </div>
    </>
  );
}
