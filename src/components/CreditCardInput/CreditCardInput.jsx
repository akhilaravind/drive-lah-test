import './CreditCardInput.scss';

export default function CreditCardInput({
  value = {},
  onChange,
}) {
  const handleChange = (field) => (e) => {
    onChange?.({ ...value, [field]: e.target.value });
  };

  return (
    <div className="cc-wrapper">
      <div className="cc-input">
        <span className="cc-icon">💳</span>
        <div className="input-group">
            <input
            type="text"
            placeholder="1234 5678 1234 5678"
            maxLength={19}
            value={value.cardNumber || ''}
            onChange={handleChange('cardNumber')}
            className="cc-number"
            />

            <input
                type="text"
                placeholder="MM/YY"
                maxLength={5}
                value={value.expiry || ''}
                onChange={handleChange('expiry')}
                className="cc-expiry"
            />

            <input
            type="text"
            placeholder="CVC"
            maxLength={4}
            value={value.cvc || ''}
            onChange={handleChange('cvc')}
            className="cc-cvc"
            />
        </div>
      </div>

      <p className="cc-hint">
        You will not be charged right now. Subscription will only start once your listing is published and live.
      </p>
    </div>
  );
}
