import React from "react"

const Footer = () => {
    return (
        <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
            <div className="mx-auto p-4 flex flex-col md:flex-row md:justify-center">
                <div className="flex flex-row items-center justify-center space-x-1 font-mono text-2xs tracking-wide text-muted">
                    © 2026 Jim<a href="/" className="hover:underline"></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
