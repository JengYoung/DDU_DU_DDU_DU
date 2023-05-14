import { useEffect, useState } from 'react';

import { DefaultInput, DefaultDatePicker, InputForm, DefaultCard, DefaultModal } from '#components';
import { dateFormat, getDate } from '#utils';
import { createPortal } from 'react-dom';
import { DefaultList } from '../components';
import { useLocalStorage } from '../hooks/useLocalStorage';

const data = [
  {
    title: '투두리스트 만들기',
    description: '투두리스트 만드는 중입니다.',
    createdAt: '2023-05-14',
    completed: false,
    avatarUrl: 'https://w7.pngwing.com/pngs/441/722/png-transparent-pikachu-thumbnail.png',
  },
  {
    title: '투두리스트 만들기',
    description: '투두리스트 만드는 중입니다.',
    createdAt: '2023-05-14',
    completed: false,
    avatarUrl: 'https://w7.pngwing.com/pngs/441/722/png-transparent-pikachu-thumbnail.png',
  },
  {
    title: '투두리스트 만들기',
    description: '투두리스트 만드는 중입니다.',
    createdAt: '2023-05-14',
    completed: false,
    avatarUrl: 'https://w7.pngwing.com/pngs/441/722/png-transparent-pikachu-thumbnail.png',
  },
  {
    title: '투두리스트 만들기',
    description: '투두리스트 만드는 중입니다.',
    createdAt: '2023-05-14',
    completed: false,
    avatarUrl: 'https://w7.pngwing.com/pngs/441/722/png-transparent-pikachu-thumbnail.png',
  },
];

export default function IndexPage() {
  const [todoDate, setTodoDate] = useState(getDate(new Date(), dateFormat.default));
  const [inputValue, setInputValue] = useState('');

  const [todos, setTodos] = useLocalStorage('todos', []);

  const [visible, setVisible] = useState(true);

  const onChangeDatePicker = (date) => {
    setTodoDate(getDate(date ?? new Date(), dateFormat.default));
  };

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
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

          <DefaultList
            data={data}
            render={(item) => (
              <DefaultList.Item>
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
