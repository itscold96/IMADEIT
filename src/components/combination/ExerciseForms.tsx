import Input from 'components/@shared/Input';
import { useValidForm, ValidationConfig } from 'hooks/useValidForm';
import { FieldValues } from 'react-hook-form';

const exerciseFormConfig: ValidationConfig = {
  name: {
    required: '필수 입력값입니다.',
  },
  sets: {
    required: '필수 입력값입니다.',
  },
  reps: {
    required: '필수 입력값입니다.',
  },
};

export default function ExerciseForm() {
  const { register, errors, handleSubmit } = useValidForm({ validationConfig: exerciseFormConfig });

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
        htmlFor={'reps'}
        label={'세트 당 횟수'}
        error={errors.reps}
        message={errors.reps?.message}
        placeholder={'세트 당 횟수를 입력해주세요'}
        register={register.reps}
        type={'number'}
      />

      <div className={'text-end pt-3'}>
        <button className={'button-secondary'}>제출</button>
      </div>
    </form>
  );
}
