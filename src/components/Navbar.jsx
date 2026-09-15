export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 border-b border-[#354052] backdrop-blur-md">
            <div className="mx-auto flex h-[65px] max-w-[680px] items-center justify-between px-5">
                <a
                    href="#"
                    className="text-sm font-semibold tracking-wide text-white"
                >
                    OLIVER
                </a>

                <div className="flex items-center gap-5 text-sm text-zinc-500">
                    <a href="#work" className="transition hover:text-white">
                        Projects
                    </a>

                    <a href="#about" className="transition hover:text-white">
                        About
                    </a>

                    <a href="#contact" className="transition hover:text-white">
                        Contact
                    </a>

                    <span className="h-4 w-px bg-zinc-800" />

                    <button
                        className="text-zinc-500 transition hover:text-white"
                        aria-label="Toggle theme"
                    >
                        ◐
                    </button>
                </div>
            </div>
        </nav>
    );
}