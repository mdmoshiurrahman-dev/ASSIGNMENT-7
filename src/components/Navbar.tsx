import { CategoryTypesResponse } from "@/types/category";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import MarqueeTextBox from "./MarqueeTextBox";
import CurrentDateInNav from "./CurrentdateInNav";
import { Suspense } from "react";

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
              className="flex flex-col items-center gap-3 menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {/* <button className=" bg-transparent active:bg-transparent shadow-none border-transparent">
              সাইন ইন
            </button>
            <button className="">সাইন আপ</button> */}
              <p className="font-medium">
                <Link href={""} className="justify-between">
                  প্রোফাইল
                </Link>
              </p>
            </div>
          </div>
          <Link href={"/"}>
            <div className="flex gap-2">
              <div className="flex justify-center items-center bg-[#05893E] px-4 rounded-xl">
                <FiShoppingCart className="text-white" />
              </div>
              <div>
                <p className="font-bold text-[18px]">বাজার দর</p>
                <Suspense fallback={"Loading"}>
                  <CurrentDateInNav />
                </Suspense>
              </div>
            </div>
          </Link>
        </div>
        {/* sign in and sign up button  */}
        {/* <div className="navbar-end gap-3">
        <button className="btn bg-transparent active:bg-transparent shadow-none border-transparent">সাইন ইন</button>
        <button className="btn bg-[#05893E] text-white">সাইন আপ</button>
      </div> */}

        {/* profile image while device is in large display  */}
        <div
          tabIndex={0}
          className=" navbar-end dropdown dropdown-end cursor-pointer hidden md:flex"
        >
          <div role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <div className="mt-6">
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href={""} className="justify-between">
                  প্রোফাইল
                </Link>
              </li>
              <li>
                <a>লগ আউট</a>
              </li>
            </ul>
          </div>
          <div className="hover:bg-gray-100 py-1.5 rounded-xs mx-1">
            <p className="font-bold text-[17px] px-1">
              UserName <IoMdArrowDropdown className="inline" />
            </p>
          </div>
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
