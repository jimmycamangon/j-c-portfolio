// filepath: d:\JimFiles\j-c-portfolio\j-c-portfolio\app\components\ThemeProviderWrapper.tsx
"use client";

import { ThemeProvider } from "next-themes";

const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            {children}
        </ThemeProvider>
    );
};

export default ThemeProviderWrapper;