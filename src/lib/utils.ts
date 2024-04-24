export function formatDate(inputDate?: string, format: string = "YYYY/MM/DD") {
  if (!inputDate) {
    return "";
  }
  const date = new Date(inputDate);
  if (Number.isNaN(date.getTime())) {
    return "";
  }

  const year = date.getFullYear() + "";
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 月は0から始まるため+1
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  const days = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ  7"];
  const weekday = days[date.getDay()];

  format = format.replace("YYYY", year);
  format = format.replace("MM", month);
  format = format.replace("DD", day);
  format = format.replace("HH", hours);
  format = format.replace("mm", minutes);
  format = format.replace("ss", seconds);
  format = format.replace("WD", weekday);

  return format;
}

export function numberWithCommas(number: number | undefined) {
  return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export function objectToQueryParams<T extends Object>(obj: T) {
  return Object.entries(obj)
    .map(
      ([key, value]) => value == undefined ? '' : `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    ).filter(Boolean)
    .join("&");
}

export function abbreviateNumber(num: number, digits = 1) {
  const suffixes = ["K", "M", "B", "T"];
  const divisor = Math.floor(Math.log(Math.abs(num)) / Math.log(1000));

  if (divisor === 0) return num;

  return (num / Math.pow(1000, divisor)).toFixed(digits) + suffixes[divisor - 1];
}

export function getTimeAgo(thenStr: string | Date): string {
  const now = new Date();
  const then = thenStr instanceof Date ? thenStr.getTime() : new Date(thenStr).getTime();
  const differenceInMilliseconds = now.getTime() - then;
  const seconds = Math.floor(differenceInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);
  if (years > 0) {
    return `${years} năm`;
  } else if (months > 0) {
    return `${months} tháng`;
  } else if (days > 0) {
    return `${days} ngày`;
  } else if (hours > 0) {
    return `${hours} giờ trước`;
  } else if (minutes > 0) {
    return `${minutes} phút trước`;
  } else {
    return "mới đăng";
  }
}