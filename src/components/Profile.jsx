import { Mail } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
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
                className="h-40 w-40 rounded-full border border-control object-cover"
            />

            <div>
                <h2 className="text-2xl font-semibold">
                    Oliver Tappin
                </h2>

                <div className="mt-3 flex items-center gap-4 text-xs text-muted">
                    <a
                        href="https://github.com/nichehlikes15"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 transition hover:text-primary"
                    >
                        <SiGithub size={15} />
                        GitHub
                    </a>

                    <a
                        href="mailto:olivertappin08@gmail.com"
                        className="flex items-center gap-1.5 transition hover:text-primary"
                    >
                        <Mail size={15} />
                        Email
                    </a>
                </div>
            </div>
        </motion.div>
    );
}