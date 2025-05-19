
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, ChevronDown } from 'lucide-react';

interface ConditionalMealSectionProps {
    isVisible: boolean;
    title: string;
    error?: string;
    children: React.ReactNode;
    onVisibilityChange?: (isVisible: boolean) => void;
}

export const ConditionalMealSection: React.FC<ConditionalMealSectionProps> = ({
    isVisible,
    title,
    error,
    children,
    onVisibilityChange,
}) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className={`mb-6 border-l-4 ${error ? 'border-red-500' : 'border-blue-500'} pl-4 relative overflow-hidden`}
                    initial={{ opacity: 0, height: 0, y: -20 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -20 }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                        opacity: { duration: 0.2 }
                    }}
                    onAnimationComplete={() => onVisibilityChange?.(true)}
                >
                    <div className={`absolute left-0 top-0 h-full w-1 ${error ? 'bg-red-500' : 'bg-blue-500'}`}></div>

                    <div className={`border rounded-lg p-4 ${error
                            ? 'border-red-300 bg-red-50'
                            : 'border-gray-200 bg-gray-50'
                        }`}>
                        <motion.div
                            className="flex items-center mb-4"
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            <ChevronDown className={`${error ? 'text-red-500' : 'text-blue-500'} mr-2`} size={16} />
                            <h3 className={`font-medium ${error ? 'text-red-600' : 'text-gray-700'}`}>
                                {title}
                                {error && <span className="sr-only">(contém erro)</span>}
                            </h3>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            {children}
                        </motion.div>

                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-3 flex items-center gap-1 text-sm text-red-600"
                            >
                                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                <span>{error}</span>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};