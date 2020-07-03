function timeConversion(s) {
    const arr = s.slice(0,8).split(':');
    console.log(arr)
    arr[0] = (s.indexOf('PM') > -1) ?
         (arr[0] == 12 ? '12' : Number(arr[0]) + 12) :
         (arr[0] == 12 ? '00' : arr[0]);
    console.log( arr.join(':') );
}

timeConversion("11:05:45PM")