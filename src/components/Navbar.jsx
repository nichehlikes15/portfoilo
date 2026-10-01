import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar({ isDark, onToggleTheme }) {
    return (
        <nav className="sticky top-0 z-50 border-b border-divider bg-surface/80 backdrop-blur-md">
            <div className="mx-auto flex h-[65px] max-w-[780px] items-center justify-between px-5">
                <Link
                    to="/"
                    className="text-sm font-semibold tracking-wide text-primary"
                >
                    OLIVER<span className="text-accent">.</span>
                </Link>

                <div className="flex items-center gap-5 text-sm text-muted">
                    <Link to="/#work" className="transition hover:text-primary">
                        Projects
                    </Link>

                    <Link to="/#about" className="transition hover:text-primary">
                        About
                    </Link>

                    <Link to="/#contact" className="transition hover:text-primary">
                        Contact
                    </Link>

                    <span className="h-4 w-px bg-divider" />

                    <button
                        className="theme-toggle text-muted transition hover:text-primary"
                        aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
                        aria-pressed={isDark}
                        onClick={onToggleTheme}
                    >
                        {isDark ? <Sun size={17} strokeWidth={1.8} /> : <Moon size={17} strokeWidth={1.8} />}
                    </button>
                </div>
            </div>
        </nav>
    );
}