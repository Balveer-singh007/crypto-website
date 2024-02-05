export function convertDate(number) {
  let mydate = new Date(number);
  return mydate.getDate() + "/" + (mydate.getMonth() + 1);
}
