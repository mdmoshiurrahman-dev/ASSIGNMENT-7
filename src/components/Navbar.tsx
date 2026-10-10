import { CategoryTypesResponse } from "@/types/category";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import MarqueeTextBox from "./MarqueeTextBox";
import { Suspense } from "react";
import CurrentDate from "./CurrentDate";
import { CgProfile } from "react-icons/cg";
import SignOutBtn from "./SignOutBtn";
import LoginAndSignUpBtn from "./LoginAndSignUpBtn";
import UserDropdownOnMobileResponsive from "./UserDropdownOnMobileResponsive";

const Navbar = async () => {
  const categoryApiNavbar = process.env.PRODUCT_CATEGORY_API_URL_NAVBAR;
  if (!categoryApiNavbar) {
    throw new Error(
      "API Error: The endpoint URL is invalid or returned a 404 Not Found status.",
    );
  }
  const res = await fetch(categoryApiNavbar, { next: { revalidate: 86400 } });
  if (!res.ok) {
    throw new Error(`ERROR: ${res.status} - ${res.statusText}`);
  }
  const data: CategoryTypesResponse = await res.json();

  return (
    <div className="flex flex-col">
      <div className="navbar  bg-base-100 border-b border-gray-200">
        <div className="navbar-start w-full">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <div
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <UserDropdownOnMobileResponsive />
            </div>
          </div>
          <Link href={"/"}>
            <div className="flex gap-2">
              <div className="flex justify-center items-center bg-[#05893E] px-4 rounded-xl">
                <FiShoppingCart className="text-white" />
              </div>
              <div>
                <p className="font-bold text-[18px]">বাজার দর</p>
                <p className="text-gray-700 text-[12px]">
                  <Suspense fallback={"Loading..."}>
                    <CurrentDate />
                  </Suspense>
                </p>
              </div>
            </div>
          </Link>
        </div>
        {/* profile  while device is in large display  */}
          <div className="lg:flex lg:justify-end hidden">
            <LoginAndSignUpBtn />
          </div>
      </div>

      <div className="flex justify-start items-center py-2 md:py-4 border-b border-gray-200">
        <ul className="flex gap-2 md:gap-4 lg:gap-8 ml-2">
          {data.map((x) => (
            <Link key={x.id} href={`/category/${x.slug}`}>
              <li className="font-semibold text-[14px] md:text-[16px] hover:underline">{`${x.icon} ${x.nameBn}`}</li>
            </Link>
          ))}
        </ul>
      </div>
      <MarqueeTextBox />
    </div>
  );
};

export default Navbar;
