export function NumberFormat(number) {
  let format = "vi-VN";
  let style = "currency";
  let currency = "VND";
  let minimumFractionDigits = 0;
  return new Intl.NumberFormat(format, {
    style: style,
    currency: currency, 
    minimumFractionDigits: minimumFractionDigits
  }).format(number);
}


