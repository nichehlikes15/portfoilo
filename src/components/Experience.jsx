import { motion } from "framer-motion";

const experiences = [
    {
        title: "Work Experience",
        company: "Veridian AI & Urban Sustainability",
        date: "Aug 2026",
        description:
            "Work experience focused on AI, technology and urban sustainability, gaining experience applying software and problem-solving skills in a professional environment.",
    },
    {
        title: "Industry Experience",
        company: "HSBC",
        date: "2026",
        description:
            "Industry experience exploring technology within financial services and gaining insight into how software and digital technology are used in a large organisation.",
    },
    {
        title: "Industry Project",
        company: "Bank of America × Ada",
        date: "2026",
        description:
            "Worked as part of a team on a real-world financial data project. Analysed and cleaned financial data, used the results to inform investment decisions and developed experience working to an industry brief.",
    },
    {
        title: "Hackathon",
        company: "Just Eat",
        date: "2026",
        description:
            "Participated in a team-based hackathon, developing ideas and solutions under time constraints while collaborating with other students.",
    },
    {
        title: "Volunteer",
        company: "The Scouts",
        date: "Apr 2013 — Apr 2024",
        description:
            "Spent over a decade involved with The Scouts, developing teamwork, communication, leadership and problem-solving skills through activities, challenges and volunteering.",
    },
];

export default function Experience({ disableAnimation = false }) {
    return (
        <section className="mt-20">
            <motion.h2
                initial={disableAnimation ? false : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold"
            >
                Experience
            </motion.h2>

            <div className="mt-8 space-y-10">
                {experiences.map((experience, index) => (
                    <motion.div
                        key={`${experience.company}-${experience.title}`}
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
                                    {experience.title}
                                </h3>

                                <p className="mt-1 text-sm text-muted">
                                    {experience.company}
                                </p>
                            </div>

                            <span className="text-xs text-muted">
                                {experience.date}
                            </span>
                        </div>

                        <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
                            {experience.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}