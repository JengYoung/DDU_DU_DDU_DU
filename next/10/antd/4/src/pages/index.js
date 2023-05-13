import { useEffect, useState } from 'react';

import { DefaultInput, DefaultDatePicker, InputForm, DefaultCard, DefaultModal } from '#components';
import { dateFormat, getDate } from '#utils';
import { createPortal } from 'react-dom';

export default function IndexPage() {
  const [todoDate, setTodoDate] = useState(getDate(new Date(), dateFormat.default));
  const [inputValue, setInputValue] = useState('');

  const [visible, setVisible] = useState(true);

  const onChangeDatePicker = (date) => {
    setTodoDate(getDate(date ?? new Date(), dateFormat.default));
  };

  const onChangeInput = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    console.log(e);
    setInputValue('');
  };

  const [body, setBody] = useState(null);

  useEffect(() => {
    setBody(() => document.querySelector('#__next'));
  }, []);

  return body ? (
    createPortal(
      <>
        <div>
          <DefaultDatePicker onChange={onChangeDatePicker} />
          <InputForm
            Input={<DefaultInput value={inputValue} onChange={onChangeInput} />}
            onSubmit={onSubmit}
          />

          <DefaultCard
            loading={false}
            title="재영"
            description="현재 투두리스트 만드는 중입니다 :)"
            avatarUrl="https://w7.pngwing.com/pngs/441/722/png-transparent-pikachu-thumbnail.png"
            date={todoDate}
          />
          <button onClick={() => setVisible(true)}>열기</button>
        </div>
        <DefaultModal open={visible} onClose={() => setVisible(false)} />
      </>,
      body
    )
  ) : (
    <div></div>
  );
}
