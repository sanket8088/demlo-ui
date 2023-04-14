import React from "react";
import { spacings } from "../tokens";

export default {
  title: "Tokens/Spacings",
};

const Template = (args) => (
  <div>
    {spacings.map((s) => (
      <div key={s.key} className="token-example">
        <span>{s.key}</span>
        <span>{`${16 * parseFloat(s.value)}px`}</span>
        <span>{s.value}</span>
        <article
          style={{
            width: `var(${s.key})`,
          }}
        ></article>
      </div>
    ))}
  </div>
);

export const Spacings = Template.bind({});
