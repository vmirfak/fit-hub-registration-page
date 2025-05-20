import { useState, useRef, useEffect } from 'react';
import { Target, ChevronDown, Trophy, Dumbbell, Scale, Sparkles, Heart, Activity } from 'lucide-react';

interface FormData {
    objetivoExercicio: string;
}

interface FormErrors {
    objetivoExercicio?: string;
}

interface DropdownOption {
    value: string;
    label: string;
    icon: React.ElementType;
}

export default function CustomDropdown() {
    const [formData, setFormData] = useState<FormData>({
        objetivoExercicio: ""
    });
    const [errors, ] = useState<FormErrors>({});
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const options: DropdownOption[] = [
        { value: "Alta Performance", label: "Alta Performance", icon: Trophy },
        { value: "Aumento de massa muscular", label: "Aumento de massa muscular", icon: Dumbbell },
        { value: "Perda de peso", label: "Perda de peso", icon: Scale },
        { value: "Estética", label: "Estética", icon: Sparkles },
        { value: "Saúde / Qualidade de vida", label: "Saúde / Qualidade de vida", icon: Heart },
        { value: "Condicionamento Físico", label: "Condicionamento Físico", icon: Activity },
    ];

    const handleSelect = (value: string): void => {
        setFormData(prev => ({
            ...prev,
            objetivoExercicio: value
        }));
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

    const getSelectedOptionLabel = (): string => {
        const selected = options.find(opt => opt.value === formData.objetivoExercicio);
        return selected ? selected.label : "Selecione uma opção";
    };

    const getSelectedOptionIcon = (): React.ElementType => {
        const selected = options.find(opt => opt.value === formData.objetivoExercicio);
        return selected ? selected.icon : Target;
    };

    const SelectedIcon = getSelectedOptionIcon();

    return (
        <div className="w-full"> 
            <div className="relative" ref={dropdownRef}>
                {/* Dropdown trigger */}
                <div
                    className={`flex items-center w-full p-3 border ${errors.objetivoExercicio ? 'border-red-500' : 'border-gray-300'} rounded-lg cursor-pointer bg-white hover:bg-gray-50 transition-colors`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="flex items-center flex-1">
                        <span className="text-gray-500 mr-2">
                            <SelectedIcon size={18} />
                        </span>
                        <span className="text-gray-700 truncate flex-1">
                            {getSelectedOptionLabel()}
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
                                        key={option.value}
                                        className={`flex items-center p-3 hover:bg-blue-50 cursor-pointer transition-colors ${formData.objetivoExercicio === option.value ? 'bg-blue-100' : ''
                                            }`}
                                        onClick={() => handleSelect(option.value)}
                                    >
                                        <span className="text-gray-500 mr-3">
                                            <Icon size={18} />
                                        </span>
                                        <span className="text-gray-800">{option.label}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>

            {errors.objetivoExercicio && (
                <p className="mt-1 text-sm text-red-500">{errors.objetivoExercicio}</p>
            )}
        </div>
    );
}