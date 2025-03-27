import { ThemeProvider } from "./components/ThemeContextProvider";
import Header from "./components/Header";
import "./App.css";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        {children}
      </ThemeProvider>
    </>
  );
}
