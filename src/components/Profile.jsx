import { Mail } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";

export default function Profile({ disableAnimation = false }) {
    return (
        <motion.div
            initial={disableAnimation ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={disableAnimation ? { duration: 0 } : { duration: 0.5 }}
            className="flex items-center gap-5"
        >
            <img
                src="https://github.com/nichehlikes15.png"
                alt="Oliver"
                className="h-40 w-40 rounded-full border border-control object-cover"
            />

            <div>
                <h2 className="text-3xl font-semibold">
                    Oliver Tappin
                </h2>

                <div className="mt-3 flex items-center gap-4 text-xs text-muted">
                    <motion.a
                        href="https://github.com/nichehlikes15"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5"
                        initial="rest"
                        whileHover="hover"
                        variants={{
                            rest: {
                                y: 0,
                                color: "currentColor",
                            },
                            hover: {
                                y: -2,
                                color: "#ffffff",
                                transition: {
                                    duration: 0.2,
                                    ease: "easeOut",
                                },
                            },
                        }}
                    >
                        <motion.span
                            variants={{
                                rest: {
                                    rotate: 0,
                                    scale: 1,
                                },
                                hover: {
                                    rotate: 360,
                                    scale: 1.15,
                                    transition: {
                                        duration: 0.4,
                                        ease: "easeOut",
                                    },
                                },
                            }}
                        >
                            <SiGithub size={15} />
                        </motion.span>

                        <motion.span
                            variants={{
                                rest: {
                                    x: 0,
                                },
                                hover: {
                                    x: 2,
                                    transition: {
                                        duration: 0.2,
                                        ease: "easeOut",
                                    },
                                },
                            }}
                        >
                            GitHub
                        </motion.span>
                    </motion.a>

                    <motion.a
                        href="mailto:olivertappin08@gmail.com"
                        className="flex items-center gap-1.5"
                        initial="rest"
                        whileHover="hover"
                        variants={{
                            rest: {
                                y: 0,
                                color: "currentColor",
                            },
                            hover: {
                                y: -2,
                                color: "#ffffff",
                                transition: {
                                    duration: 0.2,
                                    ease: "easeOut",
                                },
                            },
                        }}
                    >
                        <motion.span
                            variants={{
                                rest: {
                                    rotate: 0,
                                    scale: 1,
                                },
                                hover: {
                                    rotate: -12,
                                    scale: 1.15,
                                    transition: {
                                        duration: 0.25,
                                        ease: "easeOut",
                                    },
                                },
                            }}
                        >
                            <Mail size={15} />
                        </motion.span>

                        <motion.span
                            variants={{
                                rest: {
                                    x: 0,
                                },
                                hover: {
                                    x: 2,
                                    transition: {
                                        duration: 0.2,
                                        ease: "easeOut",
                                    },
                                },
                            }}
                        >
                            Email
                        </motion.span>
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
}