import { createContext, useContext, ReactNode, useState, useCallback } from 'react';
import { AnamneseFormData } from '@/types/anamnesetypes';
import { submitAnamnese } from '@/service/anamneseService';
import { showErrorToast, showSuccessToast } from '@/utils/toastUtils';

// Define specific error types for better error handling
export type AnamneseError = {
    code?: string;
    message: string;
    details?: unknown;
};

// Define the submission status for tracking state
export type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

// Enhanced context type with additional functionality
export type AnamneseContextType = {
    // Core submission functionality
    submitForm: (formData: AnamneseFormData) => Promise<void>;

    // Status indicators
    isLoading: boolean;
    submissionStatus: SubmissionStatus;
    error: AnamneseError | null;
    isSuccess: boolean;

    // Reset functions
    resetSubmission: () => void;
    resetError: () => void;

    // Last submission data for reference or retry
    lastSubmittedData: AnamneseFormData | null;
};

// Create the context with undefined initial value
const AnamneseContext = createContext<AnamneseContextType | undefined>(undefined);

export const AnamneseProvider = ({ children }: { children: ReactNode }) => {
    // State management
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');
    const [error, setError] = useState<AnamneseError | null>(null);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [lastSubmittedData, setLastSubmittedData] = useState<AnamneseFormData | null>(null);

    // Submit form with enhanced error handling
    const submitForm = useCallback(async (formData: AnamneseFormData) => {
        console.log('Anamnese submission started', {
            timestamp: new Date().toISOString(),
        });

        setIsLoading(true);
        setSubmissionStatus('submitting');
        setError(null);
        setIsSuccess(false);
        setLastSubmittedData(formData);

        const startTime = performance.now();

        try {
            console.log('Calling submitAnamnese API');

            await submitAnamnese(formData);

            const responseTime = performance.now() - startTime;
            console.log(`Anamnese submission successful`, {
                timestamp: new Date().toISOString(),
                responseTimeMs: responseTime.toFixed(2),
            });

            setIsSuccess(true);
            setSubmissionStatus('success');

            // ✅ Show success toast
            showSuccessToast("Anamnese submitted successfully!");
        } catch (err) {
            const responseTime = performance.now() - startTime;

            let errorCode = 'UNKNOWN_ERROR';
            let errorMessage = 'An unknown error occurred during submission';
            let errorDetails = {};

            if (err instanceof Error) {
                errorCode = err.name === 'TypeError' ? 'NETWORK_ERROR' : 'SUBMISSION_ERROR';
                errorMessage = err.message;
                errorDetails = {
                    name: err.name,
                    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
                };

                setError({
                    message: errorMessage,
                    code: errorCode,
                    details: err,
                });
            } else if (typeof err === 'string') {
                errorCode = 'STRING_ERROR';
                errorMessage = err;
                setError({ message: err });
            } else {
                setError({ message: errorMessage });
            }

            console.error('Anamnese submission failed', {
                timestamp: new Date().toISOString(),
                responseTimeMs: responseTime.toFixed(2),
                errorCode,
                errorMessage,
                details: errorDetails,
            });

            setSubmissionStatus('error');

            // ❌ Show error toast
            showErrorToast(errorMessage);
        } finally {
            setIsLoading(false);
            console.log('Anamnese submission process completed');
        }
    }, []);

    // Reset the entire submission state
    const resetSubmission = useCallback(() => {
        setIsSuccess(false);
        setError(null);
        setSubmissionStatus('idle');
    }, []);

    // Reset just the error state
    const resetError = useCallback(() => {
        setError(null);
        if (submissionStatus === 'error') {
            setSubmissionStatus('idle');
        }
    }, [submissionStatus]);

    const contextValue: AnamneseContextType = {
        submitForm,
        isLoading,
        submissionStatus,
        error,
        isSuccess,
        resetSubmission,
        resetError,
        lastSubmittedData
    };

    return (
        <AnamneseContext.Provider value={contextValue}>
            {children}
        </AnamneseContext.Provider>
    );
};

/**
 * Custom hook to use the anamnese context
 * @returns The anamnese context
 * @throws Error if used outside of an AnamneseProvider
 */
// eslint-disable-next-line react-refresh/only-export-components
export const useAnamnese = (): AnamneseContextType => {
    const context = useContext(AnamneseContext);

    if (context === undefined) {
        throw new Error('useAnamnese must be used within an AnamneseProvider');
    }

    return context;
};