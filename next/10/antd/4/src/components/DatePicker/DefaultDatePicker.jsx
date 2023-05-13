import React from 'react';
import { DatePicker } from 'antd';

export function DefaultDatePicker({ value, onChange }) {
  return <DatePicker value={value} onChange={onChange} />;
}
