import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
    const isBrowser = typeof window !== "undefined";

    const readValue = () => {
        if (!isBrowser) return initialValue;

        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch {
            return initialValue;
        }
    };

    const [storedValue, setStoredValue] = useState(readValue);

    const setValue = (value) => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;

            setStoredValue(valueToStore);

            if (isBrowser) {
                window.localStorage.setItem(
                    key,
                    JSON.stringify(valueToStore)
                );
            }
        } catch {
            // ignore
        }
    };

    const remove = () => {
        if (!isBrowser) return;
        window.localStorage.removeItem(key);
        setStoredValue(initialValue);
    };

    useEffect(() => {
        if (!isBrowser) return;

        const handleStorage = (e) => {
            if (e.key === key) {
                setStoredValue(e.newValue ? JSON.parse(e.newValue) : initialValue);
            }
        };

        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);
    }, [key]);

    return [storedValue, setValue, remove];
}
