import React from "react"

const Footer = () => {
    return (
        <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
            <hr className="w-full border-t-1 border-gray-300 mx-auto mt-8"></hr>
            <div className="mx-auto p-4 flex flex-col text-neutral-900 md:flex-row md:justify-center">
                <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
                    © 2025 Jim<a href="/" className="hover:underline"></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
