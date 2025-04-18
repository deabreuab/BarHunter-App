import Image from "next/image";
import React from "react";

interface ReviewProps {
  avatar: string;
  user: string;
  comment: string;
}

function Reviews({ avatar, user, comment }: ReviewProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src={avatar}
            alt={user}
            className="w-11 h-10 rounded-full mr-2"
            width={39}
            height={39}
          />
          <span className="font-semibold">{user}</span>
        </div>
        <button className="text-sm text-customcolors-brightpink font-bold">
          Responder
        </button>
      </div>
      <p className="text-gray-401 mt-1">{comment}</p>
    </div>
  );
}

export default Reviews;
