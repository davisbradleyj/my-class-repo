

function solve(st,a,b){
    // console.log(st)
    let len = st.length
    let endHold = st.slice(b+1,len)
    // console.log(endHold)
    let rev = st.slice(a,b+1)
    rev = rev.split('').reverse().join('')
    // console.log(rev)
    st = "'"+st.slice(0,a)+rev+endHold+"'"
    // console.log(st)
    return st
}

console.log(solve("codewars",1,5))