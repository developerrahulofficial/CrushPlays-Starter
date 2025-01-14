"use client"

import { FC } from "react"
import { cubicBezier, motion } from "framer-motion"
import { cn } from "@/lib/utils"

type LogoProps = {
    className?: string
}

const Logo: FC<LogoProps> = ({ className }) => {
    return (
        <motion.div
            layout="position"
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 1.6, duration: 0.5 } }}
            transition={{ duration: 0.5 }}
        >
            <svg
                className={cn("h-8 w-8 stroke-black stroke-[14px]", className)}
                width="100%"
                height="100%"
                viewBox="0 0 184 184"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    d="M32.6521 150.895C-28.6999 89.5427 32.6518 7.74029 94.0039 7.74021C155.356 7.74012 109.342 156.007 68.4408 115.106C27.5395 74.2046 175.806 28.1912 175.806 89.5432C175.806 150.895 94.0041 212.247 32.6521 150.895Z"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{ pathLength: 0 }}
                    transition={{
                        duration: 2,
                        ease: cubicBezier(0.645, 0.045, 0.355, 1.0), // power2.inOut
                    }}
                />
            </svg>
        </motion.div>
    )
}

export default Logo
