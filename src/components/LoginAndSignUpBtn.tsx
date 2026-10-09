import Link from "next/link";

const LoginAndSignUpBtn = () => {
  return (
    <div className="navbar-end gap-3">
      <Link href={'/sign-in'} className="btn bg-transparent active:bg-transparent shadow-none border-transparent">
        সাইন ইন
      </Link>
      <Link href={'/sign-up'} className="btn bg-[#05893E] text-white">সাইন আপ</Link>
    </div>
  );
};

export default LoginAndSignUpBtn;
