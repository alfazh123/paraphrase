import React, { useState } from "react"

export function TextAreaInput({ inputLimit = 5000 }) {
    const [input, setInput] = useState("")

    React.useEffect(() => {
        const cachedText = localStorage.getItem("cachedText")
        if (cachedText) {
            setInput(cachedText)
        }
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.target.value
        if (text.length > inputLimit) {
            text = text.slice(0, inputLimit)
        }
        setInput(text)
        localStorage.setItem("cachedText", text)
    }

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => setInput(e.target?.result as string)
            reader.readAsText(file)
        }
    }

    const charCounts = (str: string) => {
        return str.length
    }

    return (
        <div className="flex flex-col p-5 space-y-4 bg-white rounded-lg shadow-md">
            <label
                htmlFor="input"
                className="text-gray-700 font-semibold select-none"
            >
                Input Text
            </label>
            <textarea
                title="Enter your text here"
                name="User Input"
                rows={15}
                className="p-4 outline-none w-full bg-gray-100 rounded shadow-inner"
                onChange={handleChange}
                draggable={false}
                style={{ resize: "none", fontFamily: "Inter, sans-serif" }}
                placeholder="Enter your text here..."
            >{input}</textarea>
            <div className="flex justify-between items-center">
                <div>
                    <input
                        type="file"
                        accept=".doc,.docx,.pdf,.txt"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="fileUpload"
                    />
                    <label
                        htmlFor="fileUpload"
                        className="bg-slate-500 text-white py-1 px-2 md:py-2 md:px-4 rounded cursor-pointer hover:bg-slate-600 transition duration-200 md:text-sm text-xs select-none"
                    >
                        Select File .Doc / .Docx / .Pdf /.Txt
                    </label>
                </div>
                <p className="text-gray-700 md:text-sm text-xs">
                    Characters : {charCounts(input)}/{inputLimit}
                </p>
            </div>
        </div>
    )
}
