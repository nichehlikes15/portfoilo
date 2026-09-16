import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Profile from "./Profile";

export default function Hero() {
    return (
        <section className="pt-14">
            <Profile />

            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-7"
            >
                <h1 className="text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl">
                    Software Developer
                    <span className="text-subtle">
                        {" "}
                        — Rust & React
                    </span>
                </h1>

                <p className="mt-6 text-sm leading-7 text-muted">
                    I'm a junior software developer with a passion for building useful
                    applications and learning new technologies. I enjoy
                    working with Rust, React, and building projects from
                    scratch.
                </p>

                <a
                    href="/resume.pdf"
                    className="mt-7 inline-flex items-center gap-2 rounded-md bg-action px-5 py-3 text-sm font-medium text-action-foreground transition hover:bg-action-hover"
                >
                    View Resume
                    <ArrowUpRight size={15} />
                </a>
            </motion.div>
        </section>
    );
}