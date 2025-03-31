import React from "react";

import type { VariantProps } from "@gluestack-ui/nativewind-utils";
import { Text as RNText } from "react-native";
import { textStyle } from "./styles";

type ITextProps = React.ComponentProps<typeof RNText> &
  VariantProps<typeof textStyle>;

const CustomText = React.forwardRef<
  React.ElementRef<typeof RNText>,
  ITextProps
>(
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
    },
    ref
  ) => {
    return (
      <RNText
        // style={{ fontFamily: "Poppins-Medium" }}
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
