import { Ids, SignUpForm } from './Form';
import { Given, Then, When } from "#/mocks/behaviors/scenarios"
import { render, screen } from '@testing-library/react';

import { noAction } from '#/mocks/behaviors/noAct';
import { Placeholders } from './constants';

const renderForm = () => {
  render(<SignUpForm />)
}

const checkPlaceholderByLabelText = <T extends string>(labelText: string, placeholder: T) => () => {
  const idInput: HTMLInputElement = screen.getByLabelText(labelText);
  expect(idInput).toBeInTheDocument();
  expect(idInput.placeholder).toEqual(placeholder)
}

test("Id placeholder is to be equal our Policy", () => {
  const given = new Given(renderForm)
  const when = new When(noAction)
  const then = new Then(checkPlaceholderByLabelText("아이디", Placeholders.아이디입력))

  given.run();
  when.run();
  then.run();
})

test("Password placeholder is to be equal our Policy", () => {
  const given = new Given(renderForm)
  const when = new When(noAction)
  const then = new Then(checkPlaceholderByLabelText("비밀번호", Placeholders.비밀번호입력))

  given.run();
  when.run();
  then.run();
})

test("Password Confirm placeholder is to be equal our Policy", () => {
  const given = new Given(renderForm)
  const when = new When(noAction)
  const then = new Then(checkPlaceholderByLabelText("비밀번호 확인", Placeholders.비밀번호확인))

  given.run();
  when.run();
  then.run();
})