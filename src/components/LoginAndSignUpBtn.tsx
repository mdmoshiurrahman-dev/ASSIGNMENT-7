"use client";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import SignOutBtn from "./SignOutBtn";
import { IoMdArrowDropdown } from "react-icons/io";
import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import { FaUser } from "react-icons/fa";

const LoginAndSignUpBtn = () => {
  const { data, isPending } = useSession();

  console.log("user-->", data);

  return (
    <>
      {data?.user ? (
        <div
          tabIndex={0}
          className=" navbar-end dropdown dropdown-end cursor-pointer hidden md:flex"
        >
          <div role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full flex justify-center items-center">
              {data.user.image ? (
                <Image
                  src={data.user.image}
                  height={50}
                  width={50}
                  alt="user-logo"
                />
              ) : (
                <FaUser className="text-xl" />
              )}
            </div>
          </div>
          <div className="mt-6">
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <div className="mb-3">
                <li className="font-bold text-[18px]">{data.user.name}</li>
                <li>{data.user.email}</li>
              </div>
              <li className="mb-1">
                <Link href={""}>
                  <CgProfile className="inline" /> আমার প্রোফাইল
                </Link>
              </li>
              <li>
                <SignOutBtn />
              </li>
            </ul>
          </div>
          <div className="hover:bg-gray-100 py-1.5 rounded-xs mx-1">
            <p className="font-bold text-[17px] px-1">
              {data.user.name} <IoMdArrowDropdown className="inline" />
            </p>
          </div>
        </div>
      ) : (
        <div className="navbar-end gap-3">
          <Link
            href={"/sign-in"}
            className="btn bg-transparent active:bg-transparent shadow-none border-transparent"
          >
            সাইন ইন
          </Link>
          <Link href={"/sign-up"} className="btn bg-[#05893E] text-white">
            সাইন আপ
          </Link>
        </div>
      )}
    </>
  );
};

export default LoginAndSignUpBtn;
