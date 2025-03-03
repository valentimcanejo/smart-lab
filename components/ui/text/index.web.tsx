import React from "react";
import type { VariantProps } from "@gluestack-ui/nativewind-utils";
import { textStyle } from "./styles";

type ITextProps = React.ComponentProps<"span"> & VariantProps<typeof textStyle>;

const CustomText = React.forwardRef<React.ElementRef<"span">, ITextProps>(
  (
    {
      className,
      isTruncated,
      bold,
      underline,
      strikeThrough,
      size = "md",
      sub,
      italic,
      highlight,
      ...props
    }: { className?: string } & ITextProps,
    ref
  ) => {
    return (
      <span
        className={textStyle({
          isTruncated,
          bold,
          underline,
          strikeThrough,
          size,
          sub,
          italic,
          highlight,
          class: className,
        })}
        {...props}
        ref={ref}
      />
    );
  }
);

CustomText.displayName = "Text";

export { CustomText };
