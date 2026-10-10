"use client";

import SignOutBtn from "@/components/SignOutBtn";
import { updateUser, useSession } from "@/lib/auth-client";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const { data } = useSession();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as {
      name: string;
    };
    const { data: resData, error } = await updateUser({
      name: data.name,
    });
    console.log(resData?.status);
    if (resData?.status) {
      toast.success("Name update success");
    }
    if (error) {
      toast.error(error.message || "Failed to change");
    }
  };
  return (
    <div className="max-w-150 mx-auto mt-5">
      <h2 className="font-bold text-2xl">আমার প্রোফাইল</h2>
      <p className="text-gray-600">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
      <div>
        <div className="flex flex-col lg:flex-row bg-white mt-5 p-5 lg:justify-between rounded-2xl">
          <div className="flex gap-3">
            <div className="flex justify-center items-center">
              {data?.user.image ? (
                <Image
                className="rounded-xl"
                  src={data.user.image}
                  height={70}
                  width={70}
                  alt="user_image"
                />
              ) : (
                <FaUser className="text-2xl" />
              )}
            </div>
            <div>
              <p className="text-xl font-bold">{data?.user.name}</p>
              <p className="text-gray-600 text-[14px]">{data?.user.email}</p>
            </div>
          </div>
          <div className="flex justify-start lg:justify-center mt-2 lg:mt-0 items-center">
            <SignOutBtn />
          </div>
        </div>
        <div className="bg-white p-5 mt-5 rounded-2xl">
          <p className="mb-3 font-semibold">তথ্য</p>
          <form className="w-full" onSubmit={onSubmit}>
            <fieldset className="fieldset w-full">
              <label className="label font-bold text-black">নাম</label>
              <input
                required
                minLength={3}
                name="name"
                type="text"
                className="input w-full outline-0"
              />
              <button
                type="submit"
                className={`btn btn-neutral mt-4 bg-[#05893E] text-white shadow-md shadow-[#05893E]`}
              >
                আপডেট
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
