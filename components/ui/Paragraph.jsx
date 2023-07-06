import React from 'react';
import {  cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const paragraphVariants = cva(
  'max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center',
  {
    variants: {
      size: {
        default: 'text-base sm:text-lg',
        sm: 'text-sm sm:text-base',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

const Paragraph = React.forwardRef(
  function Paragraph({ className, size, children, ...props }, ref) {
    return (
      React.createElement('p', {
        ref: ref,
        ...props,
        className: cn(paragraphVariants({ size, className })),
      }, children)
    );
  }
);

Paragraph.displayName = 'Paragraph';

export default Paragraph;
