import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="md:grid flex flex-col md:grid-cols-2 container mx-auto bg-white">
      <div className="p-3">
        <p className="text-[12px] bg-[#E1F1E7] text-[#05893E] py-0.75 px-2 inline rounded-xl font-bold">মঙ্গলবার, ৬ অক্টোবর, ২০২৬</p>
        <h1 className="text-2xl font-bold mt-2 mb-6">আজকের বাজারের দাম এক নজরে</h1>
        <p className="text-gray-500">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>
        <Link href={""}>
          <button className="bg-[#05893E] cursor-pointer text-white font-semibold py-2 px-3 text-[14px] rounded-xl mt-4 shadow-sm shadow-[#05893E]">সব পণ্য দেখুন</button>
        </Link>
      </div>
      <div className="flex justify-center md:justify-end">
        <Image src={'/bazar-hero.png'} height={300} width={300} alt="banner-image"/>
      </div>
    </div>
  );
};

export default Banner;
