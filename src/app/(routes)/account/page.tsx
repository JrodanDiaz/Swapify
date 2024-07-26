"use client";
import Navbar from "../../_components/common/Navbar";
import Image from "next/image";
import Sidebar from "../../_components/account/Sidebar";
import {
  useUserContext,
  useUserDispatchContext,
} from "../../_lib/_context/UserContext";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import updateUserAction from "@/app/_actions/updateUserAction";
import { RegisterBody } from "@/app/_lib/_types/types";

export default function AccountPage() {
  const userContext = useUserContext();
  const updateUserContext = useUserDispatchContext();

  const [user, setUser] = useState<RegisterBody>({
    email: userContext.email,
    username: userContext.username,
    password: userContext.password,
    location: userContext.location,
  });

  const [formState, updateAction] = useFormState(updateUserAction, null);

  useEffect(() => {
    if (formState === null) return;

    if (formState.success) {
      updateUserContext(formState.user);
      console.log(formState.message);
    } else if (!formState.success) {
      console.log(formState.message);
    }
  }, [formState, updateUserContext]);

  useEffect(() => {
    setUser({
      email: userContext.email,
      username: userContext.username,
      password: userContext.password,
      location: userContext.location,
    });
  }, [userContext]);

  const defaultImage = "/pfp.png";
  const [selectedImage, setSelectedImage] = useState<string>(
    userContext.pfp || defaultImage
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
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <Navbar />
      <div className="pt-20 flex justify-around border-red-600 border-4">
        <Sidebar />
        <div className="border-blue-600 border-2 w-3/5 flex flex-wrap justify-around">
          <form action={updateAction} className="flex flex-col">
            <input type="hidden" name="id" value={userContext.id} />
            <label htmlFor="username" className="font-semibold">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="border-black border-[1px] px-3 py-2 mb-6"
              value={user.email}
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
              value={user.username}
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
              value={user.location}
              onChange={onInputChange}
            />
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={onInputChange}
              className="border-black border-[1px] px-3 py-2 mb-2"
            />
            <input
              type="text"
              name="pfp"
              value={selectedImage !== defaultImage ? selectedImage : ""}
              readOnly={true}
              hidden={true}
            />
            <button
              className="px-4 py-2 bg-black text-white rounded-full"
              type="submit"
            >
              Update Profile
            </button>
          </form>
          <div className="flex flex-col items-center">
            <div className="border-black border-2 w-[250px] h-[250px] mb-2 overflow-hidden rounded-full relative">
              {selectedImage && (
                <>
                  <Image
                    src={selectedImage}
                    layout="fill"
                    objectFit="cover"
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
      </div>
    </>
  );
}
