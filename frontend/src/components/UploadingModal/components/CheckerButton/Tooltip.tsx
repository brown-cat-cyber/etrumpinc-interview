import React, { useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

type Props = {
  children: React.ReactNode;
  text: string;
  isVisible?: boolean;
};

export default function CustomTooltip({
  text,
  children,
  isVisible = true,
}: Props) {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>

        <Tooltip.Content
          sideOffset={6}
          className={`px-2 py-1 bg-black/70 text-white rounded-md ${
            !isVisible && "invisible"
          }`}
        >
          {text}
          <Tooltip.Arrow
            className={`fill-black/70 ${!isVisible && "invisible"}`}
          />
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
