"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeftIcon } from "lucide-react"
import { backArrow } from "./animations"
import useNavigate from "@/hooks/useNavigate"
import SplitText from "@/components/SplitText"
import TextRipple from "@/components/TextRipple"
import { demos } from "./list"

const DemosPage = () => {
    const { isNavigating, navigateTo } = useNavigate()

    return (
        <section className="flex min-h-svh w-screen flex-col items-center justify-start">
            <main className="container flex min-h-svh max-w-md flex-col items-center justify-start gap-3 py-10">
                <div className="relative flex items-center justify-center gap-2">
                    <AnimatePresence>
                        {!isNavigating && (
                            <>
                                <motion.button
                                    initial={backArrow.initial}
                                    animate={backArrow.animate}
                                    exit={backArrow.exit}
                                    className="absolute -left-24"
                                    onClick={() => navigateTo("/")}
                                >
                                    <ChevronLeftIcon className="h-5 w-5" />
                                </motion.button>

                                <SplitText
                                    className="text-2xl font-bold"
                                    delay={0.3}
                                >
                                    demos
                                </SplitText>
                            </>
                        )}
                    </AnimatePresence>
                </div>
                <AnimatePresence>
                    {!isNavigating && (
                        <motion.ul className="mt-5 flex list-none flex-col items-start justify-center gap-2 p-0 *:p-0">
                            {demos.map((demo, index) => (
                                <motion.li
                                    key={demo.href}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{
                                        opacity: 0,
                                        y: -10,
                                        transition: {
                                            duration: 1,
                                            delay: index * 0.1,
                                            ease: "backOut",
                                        },
                                    }}
                                    transition={{
                                        duration: 1,
                                        delay: index * 0.1 + 1.5,
                                        ease: "backOut",
                                    }}
                                >
                                    <button
                                        onClick={() => navigateTo(demo.href)}
                                        className="relative flex items-center justify-center gap-3 underline"
                                    >
                                        {demo.new && (
                                            <TextRipple className="absolute -left-11 text-sm font-bold text-blue-500">
                                                NEW
                                            </TextRipple>
                                        )}
                                        {demo.icon}
                                        {demo.title}
                                    </button>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </main>
        </section>
    )
}

export default DemosPage
