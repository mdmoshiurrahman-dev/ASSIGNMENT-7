"use client";
import { signIn } from "@/lib/auth-client";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const SignInPage = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };
    const { data: res, error } = await signIn.email({
      email: data.email,
      password: data.password,
      callbackURL: "/",
    });
    if (res?.user) {
      toast.success("Login success");
    }
    if (error) {
      toast.error(error.message || "Login failed");
    }
  };
  return (
    <div className="flex justify-center items-center flex-col mt-5">
      <h2 className="font-bold text-2xl">সাইন ইন</h2>
      <p className="text-gray-600 text-[14px]">
        বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
      </p>
      <div className="mt-5 bg-white flex justify-center flex-col items-center min-w-87.5 p-3 rounded-box mx-4">
        <form className="w-full" onSubmit={onSubmit}>
          <fieldset className="fieldset    w-full p-4 bg-white">
            <label className="label font-bold text-black">ইমেইল</label>
            <input
              required
              name="email"
              type="email"
              className="input w-full outline-0"
              placeholder="you@example.com"
            />

            <label className="label font-bold text-black">পাসওয়ার্ড</label>
            <input
              required
              minLength={8}
              name="password"
              type="password"
              className="input w-full outline-0"
              placeholder="কমপক্ষে ৮ অক্ষর"
            />

            <button
              type="submit"
              className={`btn btn-neutral mt-4 bg-[#05893E] text-white shadow-md shadow-[#05893E]`}
            >
              সাইন ইন
            </button>
          </fieldset>
        </form>
        <div className="divider my-1 text-[14px] font-semibold">অথবা</div>
        <div className="flex gap-2 justify-center items-center flex-col md:flex-row w-full">
          <button className="btn w-full md:w-1/2 bg-white">
            <FcGoogle className="inline " /> Google দিয়ে চালিয়ে যান
          </button>
          <button className="btn w-full md:w-1/2 bg-white">
            <FaGithub className="inline" /> GitHub দিয়ে চালিয়ে যান
          </button>
        </div>
        <p className="text-[14px] mt-4">
          অ্যাকাউন্ট আছে?{" "}
          <Link href={"/sign-up"} className="text-[#05893E]">
            সাইন আপ করুন
          </Link>
        </p>
      </div>
      <p className="text-[14px] my-5">
        <Link href={"/"}>← হোম পেজে ফিরে যান</Link>
      </p>
    </div>
  );
};

export default SignInPage;
