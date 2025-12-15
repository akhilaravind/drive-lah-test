import { createContext, useContext, useState } from "react";

const defaultForm = {
        subscription:{
                plan: '',
                addon: '',
                cardInfo:{
                    cardNumber:'',
                    expiry:'',
                    cvc:''
                }
            },
        device:{}
    }

const FormValidityContext = createContext({
    canProceed: false,
    setCanProceed: () => { },
    addFormData: ()=>{},
    onBoardFormData: defaultForm
});

export const FormValidityProvider = ({ children }) => {
    const [canProceed, setCanProceed] = useState(false);

    const [onBoardFormData, setOnBoardFormData] = useState(defaultForm);

    const addFormData =(module, values) =>{
        setOnBoardFormData(prev => ({
            ...prev,
            [module]: values
        }))
    }

    return (
        <FormValidityContext.Provider value={{ canProceed, setCanProceed, onBoardFormData, addFormData }}>
            {children}
        </FormValidityContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFormValidity = () => useContext(FormValidityContext);
