import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection,] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId.substring(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const navItems = [
        { href: "#how-it-works", label: "Como Funciona" },
        { href: "#features", label: "Características" },
        { href: "#testimonials", label: "Testemunhos" },
        { href: "#faq", label: "Perguntas Frequentes" },
        { href: "#pricing", label: "Preçário" }
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
            : 'bg-white/90 backdrop-blur-sm shadow-sm py-4'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-12">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <div className="relative group cursor-pointer">
                            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">
                                IMVE
                            </a>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-400 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block flex-1 max-w-2xl mx-8">
                        <div className="flex items-center justify-center space-x-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.href}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group cursor-pointer ${activeSection === item.href
                                        ? 'text-blue-600 '
                                        : 'text-gray-700 '
                                        }`}
                                >
                                    {item.label}
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right side actions */}
                    <div className="hidden md:flex items-center space-x-3">
                        <Button
                            onClick={() => scrollToSection("#letsbegin")}
                            className="relative cursor-pointer bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:shadow-xl hover:scale-105 transition-all duration-200 overflow-hidden"
                        >
                            <span className="relative z-10">Vamos Começar</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-transform duration-500"></div>
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50 focus:outline-none transition-all duration-200"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="px-4 py-4 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100">

                    {/* Mobile navigation links */}
                    <div className="space-y-2">
                        {navItems.map((item) => (
                            <button
                                key={item.href}
                                onClick={() => scrollToSection(item.href)}
                                className="w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-base font-medium"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile action buttons */}
                    <div className="border-t border-gray-100 pt-4 mt-4">

                        <Button
                            onClick={() => scrollToSection("#letsbegin")}
                            className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                        >
                            Vamos Começar
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;