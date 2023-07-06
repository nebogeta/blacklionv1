import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";

const headingVariants = cva(
  "text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter",
  {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg:text-5xl",
        lg: "text-4xl md:text-5xl lg:text-5xl",
        sm: "text-2xl md:text-3xl lg:text-4xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const LargeHeading = ({ children, className, size, ...props }) => {
  return React.createElement(
    "h1",
    {
      ...props,
      className: cn(headingVariants({ size, className })),
    },
    children
  );
};

export default LargeHeading;
