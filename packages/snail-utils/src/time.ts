// 用毫秒表示分钟、小时、天、周、月
const minute = 1000 * 60;
const hour = minute * 60;

// 传入时间格式或时间戳，这里传入的时间格式示例: '2022-08-05T08:17:14.000+00:00'
export function convertTimeToHumanReadable(dateTime: string | number, all = false) {
  // 获取当前时间并转换为时间戳
  const timestampCurrent = Date.now();

  // 将传入的时间转换为Date对象，支持字符串或时间戳输入
  const inputDate = typeof dateTime === 'string' ? new Date(dateTime) : new Date(dateTime);

  // 计算时间差（单位：毫秒）
  const timestampDiff = timestampCurrent - inputDate.getTime();

  // 计算具体时间差
  const minutesC = Math.floor(timestampDiff / minute);
  const hoursC = Math.floor(timestampDiff / hour);
  if (all)
    return `${inputDate.getFullYear()}/${inputDate.getMonth() + 1}/${inputDate.getDate()} ${inputDate.getHours()}:${inputDate.getMinutes()}`;
  if (hoursC >= 1 && hoursC < 24) {
    return `${hoursC}小时前`;
  }
  if (minutesC >= 1 && minutesC < 60) {
    return `${minutesC}分钟前`;
  }
  if (timestampDiff >= 0 && timestampDiff <= minute) {
    return '刚刚';
  }
  return `${inputDate.getFullYear()}-${inputDate.getMonth() + 1}-${inputDate.getDate()} ${inputDate.getHours()}:${inputDate.getMinutes()}`;
}
