import { createContext, useContext, useRef, useState } from "react";

const FormActionContext = createContext(null);

export const FormActionProvider = ({ children }) => {
    const submitRef = useRef(null);
    const [isSubmitting, setSubmitting] = useState(false);
    
    const registerSubmit = (fn) => {
        submitRef.current = fn;
    };

    const triggerSubmit = async () => {
        if (!submitRef.current) return false;
        
        setSubmitting(true);
        const result = await submitRef.current();
        setSubmitting(false);
        return result;
    };

    return (
        <FormActionContext.Provider
            value={{ registerSubmit, triggerSubmit, isSubmitting }}
        >
            {children}
        </FormActionContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFormAction = () => useContext(FormActionContext);
