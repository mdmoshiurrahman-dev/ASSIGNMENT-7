"use client";

import { useSession } from "@/lib/auth-client";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import SignOutBtn from "./SignOutBtn";
import { usePathname } from "next/navigation";

const UserDropdownOnMobileResponsive = () => {
  const pathName = usePathname();
  const { data } = useSession();
  return data?.user ? (
    <>
      <div className="mb-3">
        <p className="font-bold text-[18px]">{data.user.name}</p>
        <p>{data.user.email}</p>
      </div>
      <li className="mb-1">
        <Link href={"/profile"}>
          <CgProfile className="inline" /> আমার প্রোফাইল
        </Link>
      </li>
      <li>
        <SignOutBtn />
      </li>
    </>
  ) : (
    <>
      <Link
        href={"/sign-in"}
        className={`${pathName === "/sign-in" ? "text-[#05893E] border-gray-300 border p-1 rounded-md" : "border border-transparent"} mb-1  p-1  font-semibold`}
      >
        সাইন ইন
      </Link>
      <Link
        href={"/sign-up"}
        className={`${pathName === "/sign-up" ? "text-[#05893E] border-gray-300 border p-1 rounded-md" : "border border-transparent"}  p-1  font-semibold`}
      >
        সাইন আপ
      </Link>
    </>
  );
};

export default UserDropdownOnMobileResponsive;
