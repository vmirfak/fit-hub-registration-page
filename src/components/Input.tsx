interface InputFieldProps {
    type?: string;
    name: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    error?: string;
    className?: string;
    inputClassName?: string;
    labelClassName?: string;
    required?: boolean;
    icon?: React.ElementType;
    placeholder?: string;
    disabled?: boolean;
    min?: number; 
    max?: number;
}

export function InputField({
    type = 'text',
    name,
    value,
    onChange,
    label,
    error,
    className = '',
    inputClassName = '',
    labelClassName = 'block mb-1 font-medium text-gray-700',
    required = false,
    icon: Icon,
    placeholder = '',
    disabled = false,
    min,                // Destructured min prop
    max,                // Destructured max prop
}: InputFieldProps) {
    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label htmlFor={name} className={labelClassName}>
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}

            <div className="relative">
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    className={`w-full p-3 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${Icon ? 'pl-10' : ''} ${inputClassName}`}
                    required={required}
                    min={type === 'number' ? min : undefined}
                    max={type === 'number' ? max : undefined}
                />

                {Icon && (
                    <Icon className="absolute left-3 top-3.5 text-gray-400" size={18} />
                )}
            </div>

            {error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
        </div>
    );
}