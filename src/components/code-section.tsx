import React, { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import { Copy, CheckCircle } from "lucide-react";

interface CodeSectionProps {
  language: string;
  children: string;
}

const CodeSection = ({ language, children }: CodeSectionProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formattedCode = children
    .split("\\n")
    .join("\n")
    .split("\\t")
    .join("    ");

  return (
    <div className="rounded-lg overflow-hidden border border-border my-4">
      <div className="bg-muted px-4 py-2 flex justify-between items-center">
        <span className="text-sm font-mono text-muted-foreground">{language}</span>
        <Button 
          size="sm" 
          variant="ghost" 
          onClick={handleCopyCode}
          className="flex items-center space-x-1"
        >
          {copied ? (
            <>
              <CheckCircle className="h-4 w-4" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              <span>Copy</span>
            </>
          )}
        </Button>
      </div>
      <div className="bg-card p-4 overflow-x-auto">
        <pre className="font-mono text-sm whitespace-pre">{formattedCode}</pre>
      </div>
    </div>
  );
};

export default CodeSection;
