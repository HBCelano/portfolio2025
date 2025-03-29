import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "@/assets/css/globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Toolbar } from "@mui/material";
import CssBaseline, { ThemeProvider, darkTheme } from '@/presentation/theme/components';
import { NavbarWithDrawer } from "@/presentation/shared/components";

// const geistSans = Geist({
//     variable: "--font-geist-sans",
//     subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//     variable: "--font-geist-mono",
//     subsets: ["latin"],
// });

export const metadata: Metadata = {
    title: "CV Web - Homero Celano",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <html lang="es">
                <body
                // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                >
                    <header>
                        <NavbarWithDrawer />
                    </header>
                    {/* <main> */}
                    {/* <div id="main"> */}
                    <Box component="main" sx={{ p: 3 }}>
                        <Toolbar />
                        {children}
                    </Box>
                    {/* </div> */}
                    {/* </main> */}
                    <footer></footer>
                </body>
            </html>
        </ThemeProvider>
    );
};
