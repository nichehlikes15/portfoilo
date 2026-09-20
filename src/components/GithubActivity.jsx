import { GitHubCalendar } from "react-github-calendar";

export default function GithubActivity({ isDark }) {
    const currentYear = new Date().getFullYear();

    return (
        <section className="flex flex-col py-12">
            <h2 className="text-2xl font-semibold">
                GitHub Activity
            </h2>

            <div className="mt-6 flex w-full justify-center overflow-hidden rounded-lg border border-dashed border-control bg-background p-4">
                <GitHubCalendar
                    username="nichehlikes15"
                    year={currentYear}
                    colorScheme={isDark ? "dark" : "light"}
                    blockSize={10}
                    blockMargin={3}
                    blockRadius={2}
                    fontSize={13}
                />
            </div>
        </section>
    );
}