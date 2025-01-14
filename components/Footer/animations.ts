import { Variants } from "framer-motion"

export const container: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 4,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.5,
        },
    },
}

export const children: Variants = {
    initial: {
        opacity: 0,
        x: 12,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            ease: "backOut",
        },
    },
    exit: {
        opacity: 0,
        x: -12,
    },
}
