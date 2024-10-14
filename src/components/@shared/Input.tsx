import classNames from 'classnames';
import { FieldError, FieldErrorsImpl, Merge, UseFormRegisterReturn } from 'react-hook-form';
import { HTMLInputTypeAttribute } from 'react';

interface ValidInputProps {
  label?: string;
  htmlFor?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl>;
  message?: string | FieldError | Merge<FieldError, FieldErrorsImpl>;
  register?: UseFormRegisterReturn;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;
}

export default function Input({
  label,
  htmlFor,
  error,
  message,
  register,
  type = 'text',
  placeholder = '',
  className,
}: ValidInputProps) {
  return (
    <div className={classNames('flex flex-col gap-2', className)}>
      {label && (
        <label className={'text-md font-bold'} htmlFor={htmlFor}>
          {label}
        </label>
      )}
      <input
        id={htmlFor}
        type={type}
        className={classNames('input', error && 'border-red-500')}
        placeholder={placeholder}
        {...register}
      />
      {message && <p className={'text-red-500 pl-3'}>{message.toString()}</p>}
    </div>
  );
}
