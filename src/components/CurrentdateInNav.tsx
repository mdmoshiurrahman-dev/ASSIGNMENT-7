"use client";
const CurrentDateInNav = () => {
  const currentDate = new Date().toLocaleDateString("bn-BD", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <>
      <p className="text-gray-700 text-[12px]">{currentDate}</p>
    </>
  );
};

export default CurrentDateInNav;
