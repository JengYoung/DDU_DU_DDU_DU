import { useState } from 'react';

import { DefaultInput, DefaultDatePicker } from '#components';
import { dateFormat, getDate } from '#utils';
import { DefaultCard } from '../components/Card';

export default function IndexPage() {
  const [todoDate, setTodoDate] = useState(getDate(new Date(), dateFormat.default));

  const onChangeDatePicker = (date) => {
    setTodoDate(getDate(date, dateFormat.default));
  };

  return (
    <div>
      <DefaultDatePicker onChange={onChangeDatePicker} />
      <DefaultInput />

      <DefaultCard
        loading={false}
        title="재영"
        description="현재 투두리스트 만드는 중입니다 :)"
        avatarUrl="https://w7.pngwing.com/pngs/441/722/png-transparent-pikachu-thumbnail.png"
        date={todoDate}
      />
    </div>
  );
}
