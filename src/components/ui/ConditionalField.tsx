import { ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, ChevronDown } from 'lucide-react';

interface ConditionalFieldProps {
    isVisible: boolean;
    label: string;
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    placeholder?: string;
    rows?: number;
    fieldType?: 'textarea' | 'text' | 'email' | 'number' | 'password';
    error?: string;
}

export const ConditionalField: React.FC<ConditionalFieldProps> = ({
    isVisible,
    label,
    name,
    value,
    onChange,
    placeholder = "",
    rows = 2,
    fieldType = "textarea",
    error
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
                >
                    <div className={`absolute left-0 top-0 h-full w-1 ${error ? 'bg-red-500' : 'bg-blue-500'}`}></div>

                    <motion.div
                        className="flex items-center mb-2"
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        <ChevronDown className={`${error ? 'text-red-500' : 'text-blue-500'} mr-2`} size={16} />
                        <label className={`font-medium ${error ? 'text-red-600' : 'text-gray-700'}`}>{label}</label>
                    </motion.div>

                    {fieldType === "textarea" ? (
                        <>
                            <motion.textarea
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                name={name}
                                value={value}
                                onChange={onChange}
                                className={`w-full p-3 border ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'} rounded-lg focus:ring-2 focus:border-transparent`}
                                rows={rows}
                                placeholder={placeholder}
                            />
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-1 flex items-center gap-1 text-sm text-red-600"
                                >
                                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                    <span>{error}</span>
                                </motion.div>
                            )}
                        </>
                    ) : (
                        <>
                            <motion.input
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                type={fieldType}
                                name={name}
                                value={value}
                                onChange={onChange}
                                className={`w-full p-3 border ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'} rounded-lg focus:ring-2 focus:border-transparent`}
                                placeholder={placeholder}
                            />
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-1 flex items-center gap-1 text-sm text-red-600"
                                >
                                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                    <span>{error}</span>
                                </motion.div>
                            )}
                        </>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};