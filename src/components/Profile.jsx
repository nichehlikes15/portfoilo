import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Profile() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-5"
        >
            <img
                src="https://github.com/nichehlikes15.png"
                alt="Oliver"
                className="h-40 w-40 rounded-full border border-zinc-700 object-cover"
            />

            <div>
                <h2 className="text-2xl font-semibold">
                    Oliver Tappin
                </h2>

                <div className="mt-3 flex items-center gap-4 text-xs text-zinc-500">
                    <a
                        href="https://github.com/nichehlikes15"
                        target="_blank"
                        rel="noreferrer"
                        className="transition hover:text-white"
                    >
                        GitHub
                    </a>

                    <a
                        href="mailto:olivertappin08@gmail.com"
                        className="flex items-center gap-1.5 transition hover:text-white"
                    >
                        <Mail size={15} />
                        Email
                    </a>
                </div>
            </div>
        </motion.div>
    );
}