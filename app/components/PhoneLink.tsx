import React from "react";
import Image from "next/image";

const phone = "+373 69 000 000";

const PhoneLink = () => {
  return (
    <a href={`tel:${phone}`} className="flex items-center">
      <Image
        src="/phone.svg"
        height={0}
        width={0}
        alt="Phone Icon"
        className="h-14 w-auto transform rotate-x-180"
      />
      <div className="hidden lg:flex pl-4 text-2xl">{phone}</div>
    </a>
  );
};

export default PhoneLink;
