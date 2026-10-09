import { HiMiniArrowUturnLeft } from "react-icons/hi2";

const SignOutBtn = () => {
  return (
    <>
      <button className="flex justify-start text-red-600">
        <HiMiniArrowUturnLeft className="inline" /> সাইন আউট
      </button>
    </>
  );
};

export default SignOutBtn;
