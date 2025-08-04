import React from "react";

function LinkOpener({
    label,
    value,
    // type = "button",
}){

    const isCheck = (label === "Profile:" || label === "Repositories:") && value;

    return(
        <>
            {
                isCheck && (
                    <a
                        href={value}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md border-2 border-white hover:bg-blue-700 italic mb-4 text-center block"
                    >
                        {label} Visit
                    </a>
                )
            }

            {
                !isCheck && (
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md border-2 border-white hover:bg-blue-700 italic mb-4 block">
                        {label}
                    </button>
                )
            }
        </>
    )
} 

export default LinkOpener