import Input from 'components/@shared/Input';
import { VALID_OPTIONS } from 'constants/validOption';
import { useValidForm, ValidationConfig } from 'hooks/useValidForm';
import { FieldValues } from 'react-hook-form';

const tabataFormConfig: ValidationConfig = {
  name: {
    required: VALID_OPTIONS.required,
    maxLength: VALID_OPTIONS.maxLength16,
  },
  sets: {
    required: VALID_OPTIONS.required,
    min: VALID_OPTIONS.min1,
    max: VALID_OPTIONS.max99,
  },
  workout_sec: {
    required: VALID_OPTIONS.required,
    min: VALID_OPTIONS.min1Sec,
    max: VALID_OPTIONS.max3600Sec,
  },
  rest_sec: {
    required: VALID_OPTIONS.required,
    min: VALID_OPTIONS.min1Sec,
    max: VALID_OPTIONS.max3600Sec,
  },
};

export default function TabataForm() {
  const { register, errors, handleSubmit } = useValidForm({ validationConfig: tabataFormConfig, mode: 'onSubmit' });

  const handleFormSubmit = (formData: FieldValues) => {
    console.log('formData:', formData);
  };

  return (
    <form className={'flex flex-col gap-3'} onSubmit={handleSubmit(handleFormSubmit)}>
      <Input
        htmlFor={'name'}
        label={'운동 이름'}
        error={errors.name}
        message={errors.name?.message}
        placeholder={'운동 이름을 입력해주세요'}
        register={register.name}
      />
      <Input
        htmlFor={'sets'}
        label={'세트 수'}
        error={errors.sets}
        message={errors.sets?.message}
        placeholder={'세트 수를 입력해주세요'}
        register={register.sets}
        type={'number'}
      />
      <Input
        htmlFor={'workout_sec'}
        label={'운동 시간( 초 )'}
        error={errors.workout_sec}
        message={errors.workout_sec?.message}
        placeholder={'운동 시간를 입력해주세요'}
        register={register.workout_sec}
        type={'number'}
      />
      <Input
        htmlFor={'rest_sec'}
        label={'휴식 시간( 초 )'}
        error={errors.rest_sec}
        message={errors.rest_sec?.message}
        placeholder={'휴식 시간을 입력해주세요'}
        register={register.rest_sec}
        type={'number'}
      />

      <div className={'text-end pt-3'}>
        <button className={'button-secondary'}>제출</button>
      </div>
    </form>
  );
}
