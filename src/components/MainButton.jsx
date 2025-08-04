import React from 'react'
import { LinkOpener, ImageLoader } from "./index"

function MainButton({
    label = "No label passed.",
    value,
    count,
}) {

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="pb-2">
                    <LinkOpener
                        label={label}
                        value={value}
                    />
                </div>

                <div className="p-4 bg-white rounded shadow-md w-80 h-auto min-h-50 text-center">
                    <ImageLoader
                        label={label}
                        value={value}
                        count={count}
                    />
                </div>
            </div>
        </>
    );
}

export default MainButton;

