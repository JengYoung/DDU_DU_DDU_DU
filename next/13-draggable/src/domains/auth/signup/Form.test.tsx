import { Ids, SignUpForm } from './Form';
import { Given, Then, When } from "#/mocks/behaviors/scenarios"
import { render, screen } from '@testing-library/react';

import { noAction } from '#/mocks/behaviors/noAct';
import { Placeholders } from './constants';

const renderForm = () => {
  render(<SignUpForm />)
}

test("Id placeholder is to be equal our Policy", () => {
  const given = new Given(renderForm)
  
  const when = new When(noAction)

  const then = new Then(() => {
    const idInput: HTMLInputElement = screen.getByLabelText("아이디");
    expect(idInput).toBeInTheDocument();
    expect(idInput.placeholder).toEqual(Placeholders.아이디입력)
  })

  given.run();
  when.run();
  then.run();
})