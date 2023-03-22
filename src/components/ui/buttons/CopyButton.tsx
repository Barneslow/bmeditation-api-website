"use client";

import { Copy } from "lucide-react";
import { ButtonHTMLAttributes, FC } from "react";
import { toast } from "../toast";

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  valueToCopy: string;
}

const CopyButton: FC<CopyButtonProps> = ({ valueToCopy, className }) => {
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(valueToCopy);

        toast({
          title: "Copied",
          message: "API key copied to clipboard",
          type: "success",
        });
      }}
      className={`btn nav-btn ${className}`}
    >
      <Copy className="h-5 w-5" />
    </button>
  );
};

export default CopyButton;
