import { InputError } from "./InputError"; 

interface RadioGroupProps {
    name: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: { value: string; label: string }[];
    error?: string;
    className?: string;
    labelClassName?: string;
    required?: boolean;
}

export function RadioGroup({
    name,
    label,
    value,
    onChange,
    options,
    error,
    className = "",
    labelClassName = "block mb-2 font-medium text-gray-700",
    required = false,
}: RadioGroupProps) {
    return (
        <div className={`w-full ${className}`}>
            <label htmlFor={name} className={labelClassName}>
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>

            <div className="flex space-x-6 mt-2">
                {options.map((option) => (
                    <RadioButton
                        key={option.value}
                        name={name}
                        value={option.value}
                        label={option.label}
                        checked={value === option.value}
                        onChange={() => onChange(option.value)}
                    />
                ))}
            </div>

            {error && <InputError message={error} />}
        </div>
    );
}

// Standalone RadioButton (can be moved to a separate file if reused elsewhere)
interface RadioButtonProps {
    name: string;
    value: string;
    label: string;
    checked: boolean;
    onChange: () => void;
}

function RadioButton({ name, value, label, checked, onChange }: RadioButtonProps) {
    return (
        <label className="flex items-center space-x-2 cursor-pointer">
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className="h-5 w-5 text-blue-5600 cursor-pointer focus:ring-blue-600 border-gray-300"
            />
            <span className="text-gray-700">{label}</span>
        </label>
    );
}