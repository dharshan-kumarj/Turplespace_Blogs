import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

interface CodeSectionProps {
  language: string;
  children: string;
}

const CodeSection: React.FC<CodeSectionProps> = ({ language, children }) => {
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
    <div className="code-section">
      <div className="code-header">
        <div>{language}</div>
        <Button 
          variant="outline-light" 
          size="sm" 
          onClick={handleCopyCode}
        >
          {copied ? (
            <>
              <i className="bi bi-check-circle me-1"></i> Copied
            </>
          ) : (
            <>
              <i className="bi bi-clipboard me-1"></i> Copy
            </>
          )}
        </Button>
      </div>
      <div className="code-content">
        <pre>{formattedCode}</pre>
      </div>
    </div>
  );
};

export default CodeSection;