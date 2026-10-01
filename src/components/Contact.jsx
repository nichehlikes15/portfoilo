import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact({ disableAnimation = false }) {
    return (
        <section id="contact" className="mt-20">
            <motion.div
                initial={disableAnimation ? false : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4"
            >
                <h2 className="text-2xl font-semibold tracking-[-0.02em]">
                    Contact
                </h2>
                <span className="h-px flex-1 bg-divider" />
            </motion.div>

            <motion.p
                initial={disableAnimation ? false : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="mt-6 max-w-xl text-sm leading-7 text-muted"
            >
                Have a project in mind? My inbox is always open, Feel free to send me a email.
            </motion.p>

            <motion.a
                href="mailto:olivertappin08@gmail.com"
                initial={disableAnimation ? false : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-action px-5 py-3 text-sm font-medium text-action-foreground transition hover:-translate-y-0.5 hover:bg-action-hover"
            >
                Get in touch
                <ArrowUpRight size={15} />
            </motion.a>
        </section>
    );
}