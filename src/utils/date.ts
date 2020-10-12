import moment from "moment";

export function calcValidDate(date: string): boolean {
  const currentDate = moment().format("YYYY-MM-DD");
  const diffDate = moment(currentDate).isAfter(date, "date");

  return diffDate;
}
