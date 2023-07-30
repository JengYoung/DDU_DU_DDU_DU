import { SignUpForm } from './Form';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Given, Then, When } from "#/mocks/behaviors/scenarios"
import { noAction } from '#/mocks/behaviors/noAct';

import { Hints, Placeholders } from './constants';

const renderForm = () => {
  render(<SignUpForm />)
}

const checkPlaceholderByLabelText = <T extends string>(labelText: string, placeholder: T) => () => {
  const idInput: HTMLInputElement = screen.getByLabelText(labelText);
  expect(idInput).toBeInTheDocument();
  expect(idInput.placeholder).toEqual(placeholder)
}

const checkHintsRendered = (hints: string) => () => {
  const IdHint = screen.queryByText(hints);

  expect(IdHint).not.toBeInTheDocument();
}

const clickAction = (elem: HTMLElement) => () => {
  userEvent.click(elem);
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

test("ID hint should be not rendered when user doesn't act", () => {
  const given = new Given(renderForm)
  const when = new When(noAction)
  const then = new Then(checkHintsRendered(Hints.아이디_미입력));
  
  given.run();
  when.run();
  then.run();
})

test("ID hint should be rendered when focused Input with no Action", async () => {
  const inputElem = screen.getByLabelText(Placeholders.아이디입력);

  const given = new Given(renderForm)
  const when = new When(clickAction(inputElem))
  const then = new Then(checkHintsRendered(Hints.아이디_미입력));
  
  given.run();
  when.run();
  then.run();
})