import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "group/btn relative isolate inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-[10px] text-sm font-medium",
    "transition-[color,border-color,box-shadow] duration-500 ease-out",
    "disabled:pointer-events-none disabled:opacity-50",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2",
    // Icons only — no transform on text nodes (avoids fuzzy glyphs)
    "[&_svg]:relative [&_svg]:transition-transform [&_svg]:duration-500 [&_svg]:ease-out",
    "hover:[&_svg]:translate-x-1 active:[&_svg]:translate-x-0.5",
    // Progress-bar navy fill (left → right), behind content via isolate + -z-10
    "before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-navy-900 before:transition-transform before:duration-[600ms] before:ease-out",
    "hover:before:scale-x-100",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-orange-500 text-white shadow-[0_0_0_0_rgba(242,106,19,0)] hover:text-white hover:shadow-[0_14px_36px_-14px_rgba(4,39,95,0.45)]",
        secondary:
          "border border-navy-900 bg-transparent text-navy-900 hover:border-navy-900 hover:text-white hover:shadow-[0_14px_36px_-16px_rgba(4,39,95,0.35)]",
        ghost:
          "text-navy-900 before:bg-navy-900/90 hover:text-white",
        outline:
          "border border-border-200 bg-white text-text-900 hover:border-navy-900 hover:text-white hover:shadow-[0_14px_36px_-16px_rgba(4,39,95,0.28)]",
        danger:
          "bg-danger text-white before:bg-navy-900 hover:text-white hover:shadow-[0_14px_36px_-16px_rgba(4,39,95,0.35)]",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 rounded-[8px] px-3",
        lg: "h-12 rounded-[12px] px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
