import React from "react";

function SearchBar({
    userName, 
    onChange, 
    placeholder = "Type username",
}){

    return(
        <>
            <div className="flex items-center gap-2 w-full max-w-sm sm:max-w-md">
              <input
                type="text"
                value={userName}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="flex-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                 Search
                </button>
            </div>
        </>
    );
}

export default SearchBar;

