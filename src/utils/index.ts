/**
 * 格式化金额
 * @param amount 金额
 * @param fixnum 需要保留的小数点
 */
export function formatAmount(amount: number, fixnum: number): string {
  let amountStr = amount.toFixed(fixnum);
  let fixedNumberStr = '';
  if (fixnum > 0) {
    [amountStr, fixedNumberStr] = amountStr.split('.');
  }

  const len = amountStr.length;
  let last = len - 1;
  let count = 0;
  let formatStr = '';

  while (last >= 0) {
    count += 1;

    formatStr += amountStr[last];

    last -= 1;

    if (count % 3 === 0 && last >= 0) {
      formatStr += ',';
    }
  }

  formatStr = formatStr.split('').reverse().join('');

  if (fixedNumberStr.length > 0) {
    formatStr += `.${fixedNumberStr}`;
  }

  return formatStr;
}
