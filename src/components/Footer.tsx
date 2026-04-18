function Footer() {
    return (
        <footer className="text-gray-500 py-10 text-center border-t border-white/3 md:border-white/5">
            <p className="text-xs md:text-sm font-mono tracking-widest titlecase opacity-70">
                &copy; {new Date().getFullYear()} Michael Olatunji.
                <span className="ml-2 text-neon-green">{"<"}</span>
                <span className="text-neon-purple">{"/"}</span>
                <span className="text-neon-green">{">"}</span>
            </p>
        </footer>
    )
}

export default Footer;