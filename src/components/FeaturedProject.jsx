import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

export default function FeaturedProject({ disableAnimation = false }) {
    const project = projects.find((project) => project.featured);
    const isInternal = Boolean(project.page);
    const navigate = useNavigate();

    function openProject(event) {
        if (
            event.button === 0 &&
            !event.metaKey &&
            !event.ctrlKey &&
            !event.shiftKey &&
            !event.altKey
        ) {
            event.preventDefault();
            navigate(project.page);
        }
    }

    return (
        <motion.a
            id="work"
            href={project.page ?? project.github}
            target={isInternal ? undefined : "_blank"}
            rel={isInternal ? undefined : "noreferrer"}
            onClick={isInternal ? openProject : undefined}
            initial={disableAnimation ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={disableAnimation ? { duration: 0 } : { duration: 0.5, delay: 0.2 }}
            whileHover={
                disableAnimation
                    ? undefined
                    : {
                          y: -6,
                          transition: { duration: 0.25, ease: "easeOut" },
                      }
            }
            className="group mt-24 block overflow-hidden rounded-lg border border-dashed border-control bg-panel transition hover:border-control-hover hover:shadow-[0_24px_48px_-30px_rgba(0,0,0,0.55)]"
        >
            <div className="grid md:grid-cols-[42%_58%]">
                <div className="flex min-h-[220px] items-center justify-center border-b border-divider bg-panel-muted md:border-b-0 md:border-r">
                    <div className="text-center">
                        <p className="text-xs uppercase tracking-[0.25em] text-accent">
                            Featured
                        </p>

                        <p className="mt-3 text-2xl font-medium text-muted">
                            {project.title}
                        </p>
                    </div>
                </div>

                <div className="p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted">
                        Featured Build
                    </p>

                    <h2 className="mt-4 text-xl font-medium">
                        {project.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-muted">
                        {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-full border border-control px-2.5 py-1 text-[10px] text-control transition-colors hover:border-control-hover hover:text-primary"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>

                    <span className="mt-5 inline-flex items-center gap-2 rounded-md bg-action px-4 py-2.5 text-xs font-medium text-action-foreground">
                        View project
                        <ArrowUpRight
                            size={14}
                            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </span>
                </div>
            </div>
        </motion.a>
    );
}