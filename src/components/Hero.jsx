import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRust, faReact } from "@fortawesome/free-brands-svg-icons";

import Profile from "./Profile";

export default function Hero({ disableAnimation = false }) {
    return (
        <section id="about" className="pt-14">
            <Profile disableAnimation={disableAnimation} />

            <motion.div
                initial={disableAnimation ? false : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                    disableAnimation
                        ? { duration: 0 }
                        : { duration: 0.5, delay: 0.1 }
                }
                className="mt-7"
            >
                <h1 className="flex flex-wrap items-center gap-2 text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl">
                    <span>Software Developer</span>

                    <span
                        className="tech-pill self-center"
                        style={{ "--pill-accent": "#dea584" }}
                    >
                        <FontAwesomeIcon icon={faRust} className="text-base" />
                        Rust
                    </span>

                    <span
                        className="tech-pill self-center"
                        style={{ "--pill-accent": "#61dafb" }}
                    >
                        <FontAwesomeIcon icon={faReact} className="text-base" />
                        React
                    </span>
                </h1>

                <p className="mt-6 max-w-xl text-sm leading-7 text-muted">
                    I'm a junior software developer with a passion for building useful
                    applications and learning new technologies. I enjoy
                    working with Rust, React, and building projects from
                    scratch.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                    <a
                        href="/resume.pdf"
                        className="inline-flex items-center gap-2 rounded-md bg-action px-5 py-3 text-sm font-medium text-action-foreground transition hover:-translate-y-0.5 hover:bg-action-hover"
                    >
                        View Resume
                        <ArrowUpRight size={15} />
                    </a>

                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-md border border-control px-5 py-3 text-sm font-medium text-primary transition hover:-translate-y-0.5 hover:border-control-hover"
                    >
                        Get in touch
                    </a>
                </div>
            </motion.div>
        </section>
    );
}