import { motion } from "framer-motion"
import type { FC } from "react"
import { forwardRef } from "react"

const Path: FC<any> = ({ ...props }) => (
  <motion.path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2.5}
    {...props}
  />
)

export const HamburgerButton = forwardRef<
  HTMLButtonElement,
  { reveal: boolean; toggle: () => void }
>(({ reveal, toggle }, ref) => {
  return (
    <button
      ref={ref}
      aria-label="Mobile Menu"
      className="relative z-30 block cursor-pointer md:hidden"
      onClick={(e) => {
        e.stopPropagation()
        toggle()
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 pt-1 text-defGray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
          animate={reveal ? "open" : "closed"}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
          animate={reveal ? "open" : "closed"}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
          animate={reveal ? "open" : "closed"}
        />
      </svg>
    </button>
  )
})

HamburgerButton.displayName = "HamburgerButton"
