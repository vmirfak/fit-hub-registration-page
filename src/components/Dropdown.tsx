import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownOption<T> {
    value: T;
    label: string;
    icon?: React.ElementType;
}

interface DropdownProps<T> {
    options: DropdownOption<T>[];
    value: T | null;
    onChange: (value: T) => void;
    placeholder?: string;
    label?: string;
    error?: string;
    className?: string;
    optionClassName?: string;
    disabled?: boolean;
    defaultIcon?: React.ElementType;
    required?: boolean;
    labelClassName?: string;
}

export function Dropdown<T>({
    options,
    value,
    onChange,
    placeholder = "Selecione uma opção",
    label,
    error,
    className = "",
    optionClassName = "",
    disabled = false,
    defaultIcon: DefaultIcon,
    required = false,
    labelClassName = "block mb-2 font-medium text-gray-700",
}: DropdownProps<T>) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const handleSelect = (value: T): void => {
        onChange(value);
        setIsOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const selectedOption = value ? options.find(opt => opt.value === value) : null;
    const SelectedIcon = selectedOption?.icon || DefaultIcon;

    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label className={labelClassName}>
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}

            <div className="relative" ref={dropdownRef}>
                {/* Dropdown trigger */}
                <div
                    className={`flex items-center w-full p-3 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg cursor-pointer bg-white hover:bg-gray-50 transition-colors ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => !disabled && setIsOpen(!isOpen)}
                >
                    <div className="flex items-center flex-1">
                        {SelectedIcon && (
                            <span className="text-gray-500 mr-2">
                                <SelectedIcon size={18} />
                            </span>
                        )}
                        <span className="text-gray-700 truncate flex-1">
                            {selectedOption?.label || placeholder}
                        </span>
                        <ChevronDown
                            className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                            size={18}
                        />
                    </div>
                </div>

                {/* Dropdown menu */}
                {isOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                        <div className="max-h-60 overflow-y-auto">
                            {options.map((option) => {
                                const Icon = option.icon;
                                return (
                                    <div
                                        key={String(option.value)}
                                        className={`flex items-center p-3 hover:bg-blue-50 cursor-pointer transition-colors ${value === option.value ? 'bg-blue-100' : ''} ${optionClassName}`}
                                        onClick={() => handleSelect(option.value)}
                                    >
                                        {Icon && (
                                            <span className="text-gray-500 mr-3">
                                                <Icon size={18} />
                                            </span>
                                        )}
                                        <span className="text-gray-800">{option.label}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>

            {error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
        </div>
    );
}