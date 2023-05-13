import { useState } from 'react';

import { DefaultInput } from '../components/Input/DefaultInput';
import { DefaultDatePicker } from '../components/date-picker/DefaultDatePicker';
import { dateFormat } from '../../utils/date/format';
import { getDate } from '../../utils/date/getDate';

export default function IndexPage() {
  const [todoDate, setTodoDate] = useState(null);

  const onChangeDatePicker = (date) => {
    setTodoDate(getDate(date, dateFormat.default));
  };

  return (
    <div>
      <DefaultDatePicker onChange={onChangeDatePicker} />
      <DefaultInput />
    </div>
  );
}
