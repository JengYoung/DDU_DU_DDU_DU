import { useEffect, useState } from 'react';

import { DefaultInput, DefaultDatePicker, InputForm, DefaultCard, DefaultModal } from '#components';
import { dateFormat, getDate } from '#utils';
import { createPortal } from 'react-dom';
import { DefaultList } from '../components';
import { useLocalStorage } from '../hooks/useLocalStorage';

const initialInputsState = {
  title: '',
  description: '',
  createdAt: null,
  completed: false,
  avatarUrl: 'https://w7.pngwing.com/pngs/441/722/png-transparent-pikachu-thumbnail.png',
};

export default function IndexPage() {
  const [todoDate, setTodoDate] = useState(getDate(new Date(), dateFormat.default));
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
  });

  const [todos, setTodos] = useLocalStorage('todos', []);

  const [visible, setVisible] = useState(true);

  const onChangeDatePicker = (date) => {
    setTodoDate(getDate(date ?? new Date(), dateFormat.default));
  };

  const onChangeInput = (e, key) => {
    setInputs((state) => ({
      ...state,
      [key]: e.target.value,
    }));
  };

  const onSubmit = () => {
    setTodos([
      ...todos,
      {
        title: inputs.title,
        description: inputs.description,
        createdAt: getDate(new Date(), dateFormat.default),
        completed: false,
        avatarUrl: 'https://w7.pngwing.com/pngs/441/722/png-transparent-pikachu-thumbnail.png',
      },
    ]);

    setInputs({ ...initialInputsState });
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
            Input={
              <DefaultInput value={inputs.title} onChange={(e) => onChangeInput(e, 'title')} />
            }
            onSubmit={onSubmit}
          />
          <DefaultList
            data={todos}
            render={(item) => (
              <DefaultList.Item>
                {console.log(item)}
                <DefaultCard
                  loading={false}
                  title={item.title}
                  description={item.description}
                  avatarUrl={item.avatarUrl}
                  date={getDate(item.createdAt, dateFormat.default)}
                />
              </DefaultList.Item>
            )}
          />
        </div>
        <button onClick={() => setVisible(true)}>열기</button>
        <DefaultModal open={visible} onClose={() => setVisible(false)} />
      </>,
      body
    )
  ) : (
    <div></div>
  );
}
