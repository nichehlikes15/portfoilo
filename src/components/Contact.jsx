import { ArrowUpRight } from "lucide-react";

export default function Contact() {
    return (
        <section
            id="contact"
            className="mt-24 border-t border-divider py-16"
        >
            <p className="text-[10px] uppercase tracking-[0.25em] text-subtle">
                Contact
            </p>

            <h2 className="mt-3 text-2xl font-medium text-primary">
                Let's build something.
            </h2>

            <a
                href="mailto:hello@example.com"
                className="mt-5 inline-flex items-center gap-2 text-sm text-muted transition hover:text-primary"
            >
                Get in touch
                <ArrowUpRight size={15} />
            </a>
        </section>
    );
}