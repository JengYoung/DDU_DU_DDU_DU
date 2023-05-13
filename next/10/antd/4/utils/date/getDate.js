import moment from 'moment';

export const getDate = (date, format) => moment(date).format(format);
