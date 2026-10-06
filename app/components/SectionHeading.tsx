import React from "react";

const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-4 mb-10">
      <h2 className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-accent">
        {children}
      </h2>
      <div className="h-px flex-1 bg-line" />
    </div>
  );
};

export default SectionHeading;
