import moment from 'moment';
import { dateFormat } from './format';

export const getDate = (date, format) => moment(date).format(format);

export const getDateWithoutTime = (date) => moment(date).format(dateFormat.withoutTime);
