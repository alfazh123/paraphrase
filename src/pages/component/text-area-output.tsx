import {FaCopy, FaDownload} from "react-icons/fa";
import React from "react";

export function TextAreaOutput({...params}) {
    const textOutput = params.textOutput ? params.textOutput : "";

    function copyToClipboard() {
        navigator.clipboard.writeText(textOutput);
        alert("Copied to clipboard");
    }

    function downloadText() {
        const element = document.createElement("a");
        const file = new Blob([textOutput], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "output.txt";
        document.body.appendChild(element);
        element.click();
    }

    return (
        <div className="w-full flex flex-col">
            <div className="rounded-md">
                <div className="flex flex-col">
                    <label
                        htmlFor="output"
                        className="text-gray-800 text-opacity-80 bg-gray-200 rounded-t-md py-2 pl-4 font-semibold select-none"
                    >
                        Teks Parafrase
                    </label>
                    <textarea
                        title="output"
                        name="output"
                        id=""
                        rows={15}
                        className="text-gray-600 py-4 pl-4 outline-none w-full text-area-scrollbar pr-2"
                        readOnly
                        value={textOutput}
                        style={{resize: "none"}}
                        placeholder={"Teks hasil parafrase akan muncul disini..."}
                    ></textarea>
                </div>
                <div className="flex bg-gray-200 p-2 rounded-b-md justify-end w-full pr-4">
                    <div className="flex gap-4">
                        <button
                            onClick={copyToClipboard}
                            title="copyButton"
                            className="bg-white p-2 rounded-lg text-gray-700 hover:bg-sky-100 transition duration-200 ease-in-out"
                        >
                            <FaCopy/>
                        </button>

                        <button
                            onClick={downloadText}
                            title="downloadButton"
                            className="bg-white p-2 rounded-lg text-gray-700 hover:bg-sky-100 transition duration-200 ease-in-out"
                        >
                            <FaDownload/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}