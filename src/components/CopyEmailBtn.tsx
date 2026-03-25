import { useState } from "react";

const CopyEmailBtn = () => {
    const email = "shuklanandalal@gmail.com";
    const [copied, setCopied] = useState(false);
    const handleCopy = async () => {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        }
    return (
      <button
        onClick={handleCopy}
        className={`px-4 py-2 rounded-lg text-white transition-all duration-300
        ${copied ? "bg-green-500" : "bg-gray-800 hover:bg-gray-700"}`}
      >
        {copied ? "Copied!" : "Copy Email"}
      </button>
    );
};

export default CopyEmailBtn;
