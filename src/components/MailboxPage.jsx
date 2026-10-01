import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { projects } from "../data/projects";

const facts = [
    { label: "Language", value: "Rust" },
    { label: "Interface", value: "GPUI" },
    { label: "Themes", value: "Dark, Light, Zed" },
    { label: "Mail API", value: "Mail.tm" },
];

const roadmap = [
    "Folder organisation for your inbox",
    "Gmail and Yahoo OAuth sign-in",
    "Customisable per-email notifications",
    "Theme upload and download",
    "Per-message actions like delete and rename",
];

function SectionHeading({ children }) {
    return (
        <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold tracking-[-0.02em]">
                {children}
            </h2>
            <span className="h-px flex-1 bg-divider" />
        </div>
    );
}

export default function MailboxPage({ disableAnimation = false }) {
    const project = projects.find((project) => project.featured);

    function rise(delay = 0) {
        return {
            initial: disableAnimation ? false : { opacity: 0, y: 15 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.15 },
            transition: { duration: 0.5, delay },
        };
    }

    return (
        <div className="pt-10">
            <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-primary"
            >
                <ArrowLeft size={15} />
                Back
            </Link>

            <motion.div
                className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-start"
                {...rise()}
            >
                <img
                    src="/projects/mailbox.png"
                    alt="Mail Box icon"
                    className="h-16 w-16 shrink-0 rounded-full border border-control"
                />

                <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-accent">
                        Featured Project
                    </p>

                    <h1 className="mt-2 text-4xl font-semibold tracking-[-0.03em]">
                        {project.title}
                    </h1>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
                        {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                            <span key={technology} className="tech-pill">
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>

            <motion.div className="mt-7 flex flex-wrap gap-3" {...rise(0.08)}>
                <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-action px-5 py-3 text-sm font-medium text-action-foreground transition hover:-translate-y-0.5 hover:bg-action-hover"
                >
                    View on GitHub
                    <ArrowUpRight size={15} />
                </a>

                <a
                    href="#build"
                    className="inline-flex items-center gap-2 rounded-md border border-control px-5 py-3 text-sm font-medium text-primary transition hover:-translate-y-0.5 hover:border-control-hover"
                >
                    Build it yourself
                </a>
            </motion.div>

            <motion.div
                className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
                {...rise(0.16)}
            >
                {facts.map((fact) => (
                    <div
                        key={fact.label}
                        className="rounded-lg border border-divider bg-panel p-4"
                    >
                        <p className="text-[10px] uppercase tracking-[0.2em] text-subtle">
                            {fact.label}
                        </p>
                        <p className="mt-1.5 text-sm text-primary">
                            {fact.value}
                        </p>
                    </div>
                ))}
            </motion.div>

            <motion.section className="mt-20" {...rise()}>
                <SectionHeading>About</SectionHeading>

                <div className="mt-5 space-y-4 text-sm leading-7 text-muted">
                    <p>
                        Mail Box is an open source, multi-compatible mail app — a
                        desktop email client built from scratch with Rust and
                        GPUI, with no Electron and no browser tab in sight. It
                        talks directly to the Mail.tm API to deliver a fast,
                        native inbox.
                    </p>

                    <p>
                        GPUI is the GPU-accelerated UI framework behind Zed, and
                        the app ships with three built-in themes: dark, light,
                        and a Zed-inspired palette. The entire codebase is Rust,
                        from the networking layer to the UI.
                    </p>
                </div>
            </motion.section>

            <motion.section className="mt-20" {...rise()}>
                <SectionHeading>Roadmap</SectionHeading>

                <p className="mt-5 text-sm leading-7 text-muted">
                    Planned work, tracked in the{" "}
                    <a
                        href="https://github.com/nichehlikes15/mailbox/blob/main/todo.txt"
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-4 transition hover:text-primary"
                    >
                        repository todo list
                    </a>
                    .
                </p>

                <ul className="mt-5 space-y-3">
                    {roadmap.map((item) => (
                        <li
                            key={item}
                            className="flex items-start gap-3 text-sm leading-6 text-muted"
                        >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {item}
                        </li>
                    ))}
                </ul>
            </motion.section>

            <motion.section id="build" className="mt-20" {...rise()}>
                <SectionHeading>Build</SectionHeading>

                <p className="mt-5 text-sm leading-7 text-muted">
                    Mail Box is built with the Rust toolchain. Clone the
                    repository, then run it in development or produce a release
                    build.
                </p>

                <div className="mt-5 space-y-4">
                    <div>
                        <p className="text-xs text-muted">Development</p>
                        <div className="mt-2 overflow-x-auto rounded-lg border border-divider bg-panel px-4 py-3">
                            <code className="font-mono text-[13px] text-primary">
                                <span className="mr-2 text-subtle">$</span>cargo run
                            </code>
                        </div>
                    </div>

                    <div>
                        <p className="text-xs text-muted">
                            Release build — ARM (Windows)
                        </p>
                        <div className="mt-2 overflow-x-auto rounded-lg border border-divider bg-panel px-4 py-3">
                            <code className="font-mono text-[13px] text-primary">
                                <span className="mr-2 text-subtle">$</span>cargo build
                                --target aarch64-pc-windows-msvc --release
                            </code>
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.div
                className="mt-20 flex flex-wrap items-center justify-between gap-4"
                {...rise()}
            >
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-primary"
                >
                    <ArrowLeft size={15} />
                    Back to all projects
                </Link>

                <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-control px-4 py-2.5 text-xs font-medium text-primary transition hover:-translate-y-0.5 hover:border-control-hover"
                >
                    Star on GitHub
                    <ArrowUpRight size={14} />
                </a>
            </motion.div>
        </div>
    );
}