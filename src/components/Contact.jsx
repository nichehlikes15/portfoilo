import { ArrowUpRight } from "lucide-react";

export default function Contact() {
    return (
        <section
            id="contact"
            className="mt-24 border-t border-zinc-900 py-16"
        >
            <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                Contact
            </p>

            <h2 className="mt-3 text-2xl font-medium text-white">
                Let's build something.
            </h2>

            <a
                href="mailto:hello@example.com"
                className="mt-5 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
            >
                Get in touch
                <ArrowUpRight size={15} />
            </a>
        </section>
    );
}