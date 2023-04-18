import React from "react";

interface Props {
  children: React.ReactNode;
  span?: string;
}

const OnBoardingTemplate = ({ children, span }: Props) => {
  const customSpan = span ? span : "medium";
  return (
    <main className="main-auth">
      <div className="grid">
        <div className={`grid-span-${customSpan}`}>{children}</div>
      </div>
    </main>
  );
};

export default OnBoardingTemplate;
