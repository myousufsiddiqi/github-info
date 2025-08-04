import React from "react";

function ImageLoader({
    label,
    value,
    count,
}){
    
    const isCheck = label === "Avatar:" && value;
    const isCheck02 = label === "Repositories:" && value;

    const isAnylink = isCheck || isCheck02

    return(
        <>
            {
                isCheck && (
                    <img
                        src={value}
                        alt={value}
                        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto shadow-md"
                    />
                )
            }

            {
                isCheck02 && (
                    <>
                        <h2 className="text-lg font-bold mb-2">{label}</h2>
                        <p className="text-gray-700">{count || "N/A"}</p>
                    </>
                )
            }

            {
                !isAnylink && (
                    <>
                        <h2 className="text-lg font-bold mb-2">{label}</h2>
                        <p className="text-gray-700">{value || "N/A"}</p>
                    </>
                )
            }
        </>
    )
}

export default ImageLoader