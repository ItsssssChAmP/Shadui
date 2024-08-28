import * as React from "react"

import { cn } from "@/lib/utils"

interface AvatarGroupProps {
  className?: string
  orientation?: "horizontal" | "vertical"
  limit?: number
  children: React.ReactNode
}

export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    { children, className = "", orientation = "horizontal", limit, ...props },
    ref
  ) => {
    const childrenArray = React.Children.toArray(children)
    const limitedChildren = limit
      ? childrenArray.slice(0, limit)
      : childrenArray

    const styledChildren = React.Children.map(
      limitedChildren,
      (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement, {
            className: cn(
              "relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-background bg-background text-foreground",
              child.props.className
            ),
            style: {
              zIndex: index !== 0 ? index : undefined,
              margin:
                index > 0
                  ? orientation === "horizontal"
                    ? "0 0 0 -0.75rem"
                    : "0 -0.75rem 0 0"
                  : undefined,
            },
          })
        }
        return child
      }
    )

    if (limit && childrenArray.length > limit) {
      styledChildren.push(
        <span
          key="more"
          className="relative z-10 -ml-3 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-background bg-secondary text-foreground"
        >
          +{childrenArray.length - limit}
        </span>
      )
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex select-none",
          orientation === "vertical" ? "flex-col" : "flex-row",
          className
        )}
        {...props}
      >
        {styledChildren}
      </div>
    )
  }
)

AvatarGroup.displayName = "AvatarGroup"
