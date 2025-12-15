import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

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
        device:[]
    }

const FormValidityContext = createContext({
    canProceed: false,
    setCanProceed: () => { },
    addFormData: ()=>{},
    onBoardFormData: {...defaultForm},
    clearFormData:()=>{}
});

export const FormValidityProvider = ({ children }) => {
    const [canProceed, setCanProceed] = useState(false);
    const [storedValue, setValue] = useLocalStorage('formData', {})
    const [onBoardFormData, setOnBoardFormData] = useState(Object.keys(storedValue).length ? storedValue : {...defaultForm});
    
    const addFormData =(module, values) =>{
        try {
            if(module){
                setOnBoardFormData(prev => {
                    const next = {
                        ...prev,
                        [module]: values,
                    };
                    setValue(next);
                    return next;
                });

            }
            else{
                setOnBoardFormData(values)
            }
        // eslint-disable-next-line no-unused-vars
        } catch (error) {
            console.error('Error saving data')        
        }
    }

    const clearFormData=()=>{
        try {
            setCanProceed(false)
            setOnBoardFormData(defaultForm)
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <FormValidityContext.Provider value={{ canProceed, setCanProceed, onBoardFormData, addFormData, clearFormData }}>
            {children}
        </FormValidityContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFormValidity = () => useContext(FormValidityContext);
