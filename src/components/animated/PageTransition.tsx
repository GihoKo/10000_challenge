"use client";

import { PAGE_TRANSITION_VARIANTS } from "@/constants/FRAMER_MOTION";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
    children: React.ReactNode;
    direction: "up" | "left";
}

export default function PageTransition({
    children,
    direction,
}: PageTransitionProps) {
    const pathName = usePathname();

    return (
        <AnimatePresence>
            <motion.div
                key={pathName}
                variants={PAGE_TRANSITION_VARIANTS[direction]}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
