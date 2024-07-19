"use client";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Logo } from "@/components/logo";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.2, // Each child will appear in sequence
        },
    }),
};
function NavItem({ href, children, custom }) {
    return (
        <motion.div
            layout
            custom={custom}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            variants={containerVariants}
            transition={{ duration: 0.5, delay: custom * 0.2 }}
        >
            {href ? (
                <motion.div
                    layout
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                >
                    <Link href={href}>{children}</Link>
                </motion.div>
            ) : (
                <motion.div layout>
                    <p>{children}</p>
                </motion.div>
            )}
        </motion.div>
    );
}
export default function Home() {
    return (
        <section className="flex flex-col sm:flex-row items-center justify-center gap-8 h-full">
            <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <motion.div
                    layout
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                >
                    <Link href="/">
                        <Logo />
                    </Link>
                </motion.div>
            </motion.div>
            <div className="flex flex-col justify-between items-between h-24 text-center sm:text-left py-4">
                <NavItem custom={2}>Benji Wallis</NavItem>
                <NavItem href="mailto:benji@benjiwallis.xyz" custom={3}>
                    benji@benjiwallis.xyz
                </NavItem>
            </div>
        </section>
    );
}
