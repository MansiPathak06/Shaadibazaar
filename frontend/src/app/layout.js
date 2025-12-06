import FloatingAstrologer from "@/components/FloatingAstrologer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      
        <CartProvider>
        {children}
        </CartProvider>
        

      
        </body>
    </html>
  );
}
