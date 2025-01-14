import { Variants } from "framer-motion"

export const container = (delayChildren: number = 0.9) => ({
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.08,
            delayChildren,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: delayChildren,
            staggerDirection: -1,
        },
    },
})

export const childVariants: Variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
}
