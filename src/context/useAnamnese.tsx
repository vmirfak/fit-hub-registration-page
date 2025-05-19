import { createContext, useContext, ReactNode, useState } from 'react';
import { AnamneseFormData } from '@/types/anamnesetypes';
import { submitAnamnese } from '@/service/anamneseService';

type AnamneseContextType = {
    submitForm: (formData: AnamneseFormData) => Promise<void>;
    isLoading: boolean;
    error: string | null;
    isSuccess: boolean;
    resetSubmission: () => void;
};

const AnamneseContext = createContext<AnamneseContextType | undefined>(undefined);

export const AnamneseProvider = ({ children }: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const submitForm = async (formData: AnamneseFormData) => {
        setIsLoading(true);
        setError(null);
        setIsSuccess(false);

        try {
            await submitAnamnese(formData);
            setIsSuccess(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    const resetSubmission = () => {
        setIsSuccess(false);
        setError(null);
    };

    return (
        <AnamneseContext.Provider value={{ submitForm, isLoading, error, isSuccess, resetSubmission }}>
            {children}
        </AnamneseContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAnamnese = () => {
    const context = useContext(AnamneseContext);
    if (context === undefined) {
        throw new Error('useAnamnese must be used within an AnamneseProvider');
    }
    return context;
};