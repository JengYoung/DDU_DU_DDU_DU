import { SignUpForm } from './Form';

import { Screen, render, screen } from '@testing-library/react';

import { Given, Then, When } from "#/mocks/behaviors/scenarios"
import { noAction } from '#/mocks/behaviors/noAct';

import { Hints, Placeholders } from './constants';

const renderForm = () => {
  render(<SignUpForm />)
}

const whenFocusInput = (labelText: string) => async () => {
  const inputElem = screen.getByLabelText(labelText);
  await inputElem.focus()
}

const checkPlaceholderByLabelText = <T extends string>(labelText: string, placeholder: T) => () => {
  const idInput: HTMLInputElement = screen.getByLabelText(labelText);

  expect(idInput).toBeInTheDocument();
  expect(idInput.placeholder).toEqual(placeholder)
}

const checkHintsRendered = (screen: Screen, hint: string, shouldRendered: boolean = false) => () => {
  const IdHint = screen.queryByText(hint);

  if (shouldRendered) {
    expect(IdHint).toBeInTheDocument();
    return;
  }

  expect(IdHint).not.toBeInTheDocument();
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
  const then = new Then(checkHintsRendered(screen, Hints.아이디_미입력));
  
  given.run();
  when.run();
  then.run();
})

test("ID hint should be rendered when focused Input with click Action", async () => {
  const given = new Given(renderForm)
  const when = new When(whenFocusInput('아이디'))
  const then = new Then(checkHintsRendered(screen, Hints.아이디_미입력, true));
  
  given.run();
  await when.run();
  then.run();
})


test("password hint should be not rendered when user doesn't act", () => {
  const given = new Given(renderForm)
  const when = new When(noAction)
  const then = new Then(checkHintsRendered(screen, Hints.비밀번호_미입력));
  
  given.run();
  when.run();
  then.run();
})

test("password hint should be rendered when focused Input with click Action", async () => {
  const given = new Given(renderForm)
  const when = new When(whenFocusInput('비밀번호'))
  const then = new Then(checkHintsRendered(screen, Hints.비밀번호_미입력, true));
  
  given.run();
  when.run();
  then.run();
})