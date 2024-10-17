'use client';

import type { ChangeEvent, FormEvent } from 'react';
import { useState, type ReactElement } from 'react';

import Button, { BtnTypeEnum } from '../Button/Button';
import Container from '../Container/Container';

const validateEmail = (value: string): boolean => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(value);
};

const FormSection = (): ReactElement => {
  const [message, setMessage] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleMessage = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(event.target.value);
  };
  const handleEMail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
    if (validateEmail(event.target.value)) {
      setEmailError(null);
    } else {
      setEmailError('Неправильно указана почта');
    }
  };

  const handleCheck = (): void => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  const isButtonDisabled = !email || !!emailError || !isChecked;

  return (
    <section className="bg-gray3 pb-[26px] pt-[81px] md:pt-[53px] lg:pb-[220px] lg:pt-[130px]">
      <Container>
        <form className="flex flex-col gap-[35px] lg:gap-[60px]" onSubmit={handleSubmit}>
          <h5 className="text-[24px] font-[700] leading-[31px] md:text-[28px] md:leading-[120%] lg:text-[32px]">
            Заполните форму
          </h5>
          <div className="flex flex-col gap-[35px] lg:flex-row">
            <textarea
              value={message}
              onChange={handleMessage}
              placeholder="Напишите свой вопрос"
              className="min-h-[223px] rounded-lg border-[1px] border-gray1 bg-transparent p-[17px] text-[14px] leading-[18px] placeholder-black transition-all duration-300 focus:border-black focus:outline-none lg:w-[61%] lg:text-[18px] lg:leading-[22px]"
            />
            <div className="flex flex-col gap-[35px] lg:mt-[10px]">
              <div className="relative w-full">
                <input
                  value={email}
                  onChange={handleEMail}
                  type="text"
                  placeholder="Введите e-mail"
                  className="w-full border-b-[1px] border-b-gray1 bg-transparent pb-[14px] text-[14px] leading-[20px] placeholder-black transition-all duration-300 focus:border-b-black focus:outline-none lg:text-[18px] lg:leading-[22px]"
                />
                {emailError && (
                  <p className="absolute left-0 top-[38px] text-[10px] font-[500] leading-[13px] text-error">
                    {emailError}
                  </p>
                )}
              </div>
              <div className="flex gap-[8px]">
                <input
                  type="checkbox"
                  id="privacyPolicy"
                  checked={isChecked}
                  onChange={handleCheck}
                  className="hidden"
                />
                <label
                  htmlFor="privacyPolicy"
                  className={`flex h-[14px] min-w-[14px] cursor-pointer items-center justify-center rounded-[4px] border-[1px] border-gray1 transition-all duration-300 ${isChecked ? 'bg-checkBox border-orange bg-orange bg-center' : 'bg-transparent'}`}
                ></label>
                <span className="mt-[-3px] pr-[3px] text-[14px]">
                  Я ознакомлен(а) с{' '}
                  <span className="underline underline-offset-[3px]">политикой конфиденциальности</span> и согласен(на)
                  на обработку <span className="underline underline-offset-[3px]">персональных данных.</span>
                </span>
              </div>
              <Button
                disabled={isButtonDisabled}
                submit
                text="Опправить"
                variant={BtnTypeEnum.black}
                styles="mt-[-7px] md:mt-[29px] lg:mt-[13px]"
              />
            </div>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default FormSection;
