import { Activity } from 'react';
import './RadioButton.scss';

export default function RadioButton({
  name,
  value,
  label,
  checked,
  disabled = false,
  highlightText = '',
  onChange,
  ...rest
}) {
  return (
    <label
      className={
        `radio-card ${checked ? 'is-selected' : ''} ${disabled ? 'is-disabled' : ''}`
      }
      {...rest}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => !disabled && onChange?.(value)}
      />

      <div className="radio-card__content">
        <span className="radio-card__label">{label}</span>
        <Activity mode={highlightText.trim().length ? 'visible' : 'hidden'}>
            <span className="radio-card__tag">{highlightText}</span>
        </Activity>
      </div>

      <span className="radio-card__indicator" />
    </label>
  );
}
