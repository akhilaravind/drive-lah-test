import { useId, useState } from "react";
import "./CreditCardInput.scss";

export default function CreditCardInput({ value = {}, onChange }) {
    const id = useId();
    const [expiryError, setExpiryError] = useState("");

    const handleCardNumberChange = (e) => {
        const digitsOnly = e.target.value.replace(/\D/g, "");

        onChange?.({
            ...value,
            cardNumber: digitsOnly,
        });
    };

    const handleChange = (field) => (e) => {
        onChange?.({ ...value, [field]: e.target.value });
    };

    /* ---- Expiry Handling ---- */
    const handleExpiryChange = (e) => {
        let input = e.target.value.replace(/\D/g, "");

        if (input.length >= 3) {
            input = `${input.slice(0, 2)}/${input.slice(2, 4)}`;
        }

        if (input.length > 5) return;

        validateExpiry(input);
        onChange?.({ ...value, expiry: input });
    };

    const validateExpiry = (expiry) => {
        if (!expiry) {
            setExpiryError("");
            return;
        }

        const match = expiry.match(/^(0[1-9]|1[0-2])\/\d{2}$/);

        if (!match) {
            setExpiryError("Enter expiry date in MM/YY format");
            return;
        }

        setExpiryError("");
    };

    return (
        <div className="cc-wrapper">
            <fieldset className="cc-input">
                <legend className="sr-only">Credit card details</legend>

                <span className="cc-icon" aria-hidden="true">💳</span>

                <div className="input-group">
                    {/* Card Number */}
                    <label htmlFor={`${id}-number`} className="sr-only">
                        Card number
                    </label>
                    <input
                        id={`${id}-number`}
                        type="text"
                        inputMode="numeric"
                        autoComplete="cc-number"
                        placeholder="1234 5678 1234 5678"
                        maxLength={19}
                        value={value.cardNumber || ""}
                        onChange={handleCardNumberChange}
                        className="cc-number"
                        aria-label="Card number"
                    />

                    {/* Expiry */}
                    <label htmlFor={`${id}-expiry`} className="sr-only">
                        Expiry date (MM/YY)
                    </label>
                    <input
                        id={`${id}-expiry`}
                        type="text"
                        inputMode="numeric"
                        autoComplete="cc-exp"
                        placeholder="MM/YY"
                        maxLength={5}
                        value={value.expiry || ""}
                        onChange={handleExpiryChange}
                        className="cc-expiry"
                        aria-invalid={!!expiryError}
                        aria-describedby={expiryError ? `${id}-expiry-error` : undefined}
                    />

                    {/* CVC */}
                    <label htmlFor={`${id}-cvc`} className="sr-only">
                        CVC
                    </label>
                    <input
                        id={`${id}-cvc`}
                        type="password"
                        inputMode="numeric"
                        autoComplete="cc-csc"
                        placeholder="CVC"
                        maxLength={4}
                        value={value.cvc || ""}
                        onChange={handleChange("cvc")}
                        className="cc-cvc"
                        aria-label="Security code"
                    />
                </div>
            </fieldset>

            {/* Expiry Error */}
            {expiryError && (
                <p
                    id={`${id}-expiry-error`}
                    className="cc-error"
                    role="alert"
                >
                    {expiryError}
                </p>
            )}

            <p className="cc-hint" id={`${id}-hint`}>
                You will not be charged right now. Subscription will only start once your
                listing is published and live.
            </p>
        </div>
    );
}
