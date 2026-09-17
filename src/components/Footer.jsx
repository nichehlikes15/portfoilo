import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export default function Footer() {
    const [visitors, setVisitors] = useState(null);

    useEffect(() => {
        const loadVisitors = async () => {
            try {
                const hasVisited = sessionStorage.getItem("portfolio-visited");

                if (!hasVisited) {
                    sessionStorage.setItem("portfolio-visited", "true");

                    const response = await fetch("/api/visitors", {
                        method: "POST",
                    });

                    if (!response.ok) {
                        throw new Error("Failed to record visit");
                    }

                    const data = await response.json();
                    setVisitors(data.count);
                    return;
                }

                const response = await fetch("/api/visitors");

                if (!response.ok) {
                    throw new Error("Failed to fetch visitor count");
                }

                const data = await response.json();
                setVisitors(data.count);
            } catch (error) {
                console.error("Visitor counter error:", error);
            }
        };

        loadVisitors();
    }, []);

    return (
        <footer className="mt-16 border-t border-divider py-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-[13px] italic text-muted">
                        Keep building until it becomes second nature.
                    </p>

                    <div className="mt-3 flex items-center gap-2 text-xs">
                        <span className="text-primary">
                            Oliver
                        </span>

                        <span className="text-subtle">
                            /
                        </span>

                        <span className="text-muted">
                            Still building
                        </span>

                        <span className="text-subtle">
                            /
                        </span>

                        <span className="text-muted">
                            UK
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-dashed border-divider px-4 py-2">
                    <Eye
                        size={14}
                        strokeWidth={1.6}
                        className="text-muted"
                    />

                    <span className="text-xs text-muted">
                        Visited by{" "}
                        <span className="text-primary">
                            {visitors === null
                                ? "..."
                                : visitors.toLocaleString()}
                        </span>{" "}
                        {visitors === 1 ? "person" : "people"}
                    </span>
                </div>
            </div>
        </footer>
    );
}