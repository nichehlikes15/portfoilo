export default function About() {
    return (
        <section
            id="about"
            className="mt-24 border-t border-zinc-900 pt-12"
        >
            <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                About
            </p>

            <h2 className="mt-3 text-2xl font-medium text-white">
                A developer who likes building things.
            </h2>

            <p className="mt-5 text-sm leading-7 text-zinc-500">
                I'm a software developer interested in building useful
                applications and learning how different technologies work.
                I enjoy working with Rust, React and creating projects from
                the ground up.
            </p>
        </section>
    );
}