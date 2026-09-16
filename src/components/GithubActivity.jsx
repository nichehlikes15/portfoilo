import { GitHubCalendar } from "react-github-calendar";

export default function GithubActivity({ isDark }) {
    return (
        <section className="py-12">
            <h2 className="mb-6 text-2xl font-bold">
                GitHub Activity
            </h2>

            <div className="overflow-hidden">
                <GitHubCalendar username="nichehlikes15" colorScheme={isDark ? "dark" : "light"} />
            </div>
        </section>
    );
}