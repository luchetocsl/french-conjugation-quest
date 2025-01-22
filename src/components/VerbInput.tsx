import React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface VerbInputProps {
  infinitive: string;
  onChange: (value: string) => void;
  value: string;
  isCorrect: boolean | null;
}

const VerbInput = ({ infinitive, onChange, value, isCorrect }: VerbInputProps) => {
  return (
    <span className="inline-block mx-1">
      <Input
        type="text"
        className={cn(
          "w-32 inline-block",
          isCorrect === true && "border-green-500 bg-green-50",
          isCorrect === false && "border-red-500 bg-red-50"
        )}
        placeholder="Type here..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <span className="text-sm text-gray-500 ml-1">({infinitive})</span>
    </span>
  );
};

export default VerbInput;