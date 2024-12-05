import { motion } from "framer-motion";

export default function AnimatedLinkPage({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 45 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 45 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
}
