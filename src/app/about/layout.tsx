export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <h1>About Layout</h1>
            {children}
        </>
    )
} 