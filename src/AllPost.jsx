import React from "react";

function AllPost({ title, content }) {
  return (
    <div className="flex justify-center my-16 items-center">
      <div className="w-[46rem] bg-[#F5EBE0] rounded-md py-3 px-2">
        <div className=" p-2">
          <h1 className="text-[#DBA39A]  font-bold font-mono cursive text-2xl">
            {title}
          </h1>
        </div>
        <div className="py-3 px-2 ">
          <p className="font-mono cursive ">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default AllPost;
