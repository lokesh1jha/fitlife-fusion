import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsTitle() {
  const words = ["Body", "Life", "fitness", "health"];

  return (
    <div className="flex justify-center items-center px-4">
      <div className="text-6xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Transform Your
        <FlipWords words={words} /> <br />
        Win Your Life
      </div>
    </div>
  );
}
