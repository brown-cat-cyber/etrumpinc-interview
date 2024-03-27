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
        <Tooltip.Trigger>{children}</Tooltip.Trigger>
        {isVisible && (
          <Tooltip.Content className="px-2 py-1 bg-black text-white rounded-md">
            {text}
            <Tooltip.Arrow />
          </Tooltip.Content>
        )}
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
