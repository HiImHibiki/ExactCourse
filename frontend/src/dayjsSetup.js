import dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import * as timezone from 'dayjs/plugin/timezone';
import * as isToday from 'dayjs/plugin/isToday';
import * as isSameOrAfter from 'dayjs/plugin/isSameOrAfter';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isToday);
dayjs.extend(isSameOrAfter);

dayjs.tz.setDefault('Asia/Jakarta');

export default dayjs;
