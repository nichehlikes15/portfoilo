import { motion } from "framer-motion";

const education = [
    {
        institution: "Ada, the National College for Digital Skills",
        qualification: "T Level in Digital Software Development",
        date: "2025 — Present",
        status: "Currently studying",
        description:
            "Currently studying Digital Software Development, including software development, programming, databases and computer science, alongside half an A-level in Core Maths.",
    },
    {
        institution: "Debden Park High School",
        qualification: "Secondary Education",
        date: "2019 — 2025",
        status: "Completed",
        description:
            "Completed secondary education before progressing to Ada, the National College for Digital Skills.",
    },
];

export default function Education({ disableAnimation = false }) {
    return (
        <section className="mt-20">
            <motion.h2
                initial={disableAnimation ? false : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold"
            >
                Education
            </motion.h2>

            <div className="mt-8 space-y-10">
                {education.map((item, index) => (
                    <motion.div
                        key={item.institution}
                        initial={
                            disableAnimation
                                ? false
                                : { opacity: 0, y: 15 }
                        }
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.08,
                        }}
                        className="group relative border-l border-control pl-6"
                    >
                        <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-control bg-background transition-all duration-200 group-hover:scale-125 group-hover:bg-white" />

                        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <h3 className="text-base font-medium transition-colors duration-200 group-hover:text-white">
                                    {item.institution}
                                </h3>

                                <p className="mt-1 text-sm text-muted">
                                    {item.qualification}
                                </p>
                            </div>

                            <div className="flex flex-col items-start sm:items-end">
                                <span className="text-xs text-muted">
                                    {item.date}
                                </span>

                                <span className="mt-1 text-xs text-muted">
                                    {item.status}
                                </span>
                            </div>
                        </div>

                        <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}