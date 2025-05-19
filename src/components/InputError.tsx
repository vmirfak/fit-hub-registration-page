import { AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";

interface InputErrorProps {
    message?: string;
}

export const InputError = ({ message }: InputErrorProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (message) {
            // Small delay before animation for better effect
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 50);

            return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
        }
    }, [message]);

    if (!message) return null;

    return (
        <div
            className={`flex items-center gap-2 mt-1 text-sm text-red-600 transition-all duration-300 ease-in-out ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2"
                }`}
        >
            <AlertCircle className={`w-4 h-4 transition-transform duration-300 ${isVisible ? "scale-100" : "scale-0"
                }`} />
            <p className="animate-pulse-once">{message}</p>
        </div>
    );
};