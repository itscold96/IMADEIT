export const VALID_OPTIONS = {
  passwordPattern: {
    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    message: '영문, 숫자를 포함하여 8자 이상으로 작성해주세요',
  },
  emailPattern: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: '이메일 형식으로 작성해주세요',
  },
  minLength2: { value: 2, message: '2자 이상으로 입력해주세요.' },
  maxLength10: { value: 10, message: '10자 이내로 입력해주세요.' },
  maxLength16: { value: 16, message: '16자 이내로 입력해주세요' },
  required: '필수 입력값입니다.',
  min1: { value: 1, message: '한 개 이상으로 입력해주세요' },
  max99: { value: 99, message: '100 세트 이상은 불가능합니다.' },
  max999: { value: 999, message: '1000회 이상은 불가능합니다.' },
  min1Sec: { value: 1, message: '1초 이상으로 입력해주세요' },
  max3600Sec: { value: 3600, message: '1시간 미만으로 입력해주세요' },
};
