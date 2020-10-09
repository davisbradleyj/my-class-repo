function libraryFine(d1, m1, y1, d2, m2, y2) {
  let date1 = new Date(y1, m1 - 1, d1);
  let date2 = new Date(y2, m2 - 1, d2);
  if (date1 <= date2) return 0
  else if (d1 > d2) {
    return (d1 - d2) * 15
  } else if (d1 > d2 && m1 > m2) {
    return (m1 - m2) * 500
  } else if (d1 <= d2 && m1 > m2) {
    return (m1 - m2) * 500
  } else if (d1 > d2 && m1 > m2 && y1 > y2) {
    return 10000
  } else if (d1 <= d2 && m1 > m2 && y1 > y2) {
    return 10000
  } else if (d1 > d2 && m1 <= m2 && y1 > y2) {
    return 10000
  } else if (d1 <= d2 && m1 <= m2 && y1 > y2) {
    return 10000
  }
}

console.log(libraryFine(9, 6, 2015, 6, 6, 2015));
console.log(libraryFine(2, 7, 1014, 1, 1, 1015));

function libraryFine2(d1, m1, y1, d2, m2, y2) {
  let date1 = new Date(y1, m1 - 1, d1);
  let date2 = new Date(y2, m2 - 1, d2);
  if (date1 <= date2) return 0
  else if (y1>y2) {
    return 10000
  } else if ((m1 > m2) && (y1 == y2)) {
    return (m1 - m2) * 500
  } else if ( (d1>d2) && (m1 == m2) && (y1 == y2) ) {
    return (d1 - d2) * 15
  }
}

console.log(libraryFine2(9, 6, 2015, 6, 6, 2015));
console.log(libraryFine2(2, 7, 1014, 1, 1, 1015));