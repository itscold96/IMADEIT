import classNames from 'classnames';
import { InputHTMLAttributes } from 'react';
import { FieldError, FieldErrorsImpl, Merge, UseFormRegisterReturn } from 'react-hook-form';

interface ValidInputProps extends InputHTMLAttributes<HTMLInputElement> {
  htmlFor?: string;
  label?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl>;
  message?: string | FieldError | Merge<FieldError, FieldErrorsImpl>;
  register?: UseFormRegisterReturn;
  className?: string;
}

export default function Input({ htmlFor, label, error, message, register, className, ...inputProps }: ValidInputProps) {
  return (
    <div className={classNames('flex flex-col gap-2', className)}>
      {label && (
        <label className={'text-md font-bold'} htmlFor={htmlFor}>
          {label}
        </label>
      )}
      <input id={htmlFor} className={classNames('input', error && 'border-red-500')} {...register} {...inputProps} />
      {message && <p className={'text-red-500 pl-3'}>{message.toString()}</p>}
    </div>
  );
}
