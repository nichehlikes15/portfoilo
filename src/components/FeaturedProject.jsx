import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function FeaturedProject() {
    const project = projects.find((project) => project.featured);

    return (
        <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group mt-24 block overflow-hidden rounded-lg border border-dashed border-zinc-700 bg-[#0a0a0a] transition hover:border-zinc-500"
        >
            <div className="grid md:grid-cols-[42%_58%]">
                <div className="flex min-h-[220px] items-center justify-center border-b border-zinc-800 bg-[#111111] md:border-b-0 md:border-r">
                    <div className="text-center">
                        <p className="text-xs uppercase tracking-[0.25em] text-zinc-700">
                            Featured
                        </p>

                        <p className="mt-3 text-2xl font-medium text-zinc-500">
                            {project.title}
                        </p>
                    </div>
                </div>

                <div className="p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-500">
                        Featured Build
                    </p>

                    <h2 className="mt-4 text-xl font-medium">
                        {project.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-zinc-500">
                        {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-full border border-zinc-700 px-2.5 py-1 text-[10px] text-zinc-400"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>

                    <span className="mt-5 inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-xs font-medium text-black">
                        View project
                        <ArrowUpRight size={14} />
                    </span>
                </div>
            </div>
        </motion.a>
    );
}