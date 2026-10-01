import { useMemo } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";

function toDateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

export default function GithubActivity({ isDark, disableAnimation = false }) {
    const currentYear = new Date().getFullYear();

    const futureDayRule = useMemo(() => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const cursor = new Date(today);
        cursor.setDate(cursor.getDate() + 1);

        const endOfYear = new Date(currentYear, 11, 31);
        const selectors = [];

        while (cursor <= endOfYear) {
            if (cursor.getFullYear() === currentYear) {
                selectors.push(
                    `.github-calendar rect[data-date="${toDateKey(cursor)}"]`
                );
            }
            cursor.setDate(cursor.getDate() + 1);
        }

        if (selectors.length === 0) {
            return "";
        }

        return `${selectors.join(", ")} { fill: var(--control); }`;
    }, [currentYear]);

    return (
        <section className="mt-20">
            <motion.h2
                initial={disableAnimation ? false : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold tracking-[-0.02em]"
            >
                GitHub Activity
            </motion.h2>

            <motion.div
                initial={disableAnimation ? false : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="github-calendar mt-6 flex w-full justify-center overflow-hidden rounded-lg border border-dashed border-control bg-panel-muted p-4"
            >
                {futureDayRule && <style>{futureDayRule}</style>}

                <GitHubCalendar
                    username="nichehlikes15"
                    year={currentYear}
                    colorScheme={isDark ? "dark" : "light"}
                    blockSize={10}
                    blockMargin={3}
                    blockRadius={2}
                    fontSize={13}
                />
            </motion.div>
        </section>
    );
}