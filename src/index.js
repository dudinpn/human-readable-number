module.exports = function toReadable (number) {
    let answer= '';

  const arrOne=['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  const arrTen=['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const arrTens= ['','ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

  let arr = number.toString().split('').map(Number); 

  if (arr.length == 3) {
    answer += arrOne[arr[0]] + ' hundred';
  if (arr[1] == 1) {
    answer += ' ' + arrTen[arr[2]];
  } else if (arr[2] > 0){
    answer += (arr[1]==0? '':' ') + arrTens[arr[1]] + ' ' + arrOne[arr[2]];
  }else{
    answer += (arr[1]==0? '':' ') + arrTens[arr[1]];
  }
} else if (arr.length == 2) {
  if (arr[0] == 1) {
    answer += arrTen[arr[1]];
  } else if(arr[1] > 0){
    answer += arrTens[arr[0]] + ' ' + arrOne[arr[1]];
  } else {
    answer += arrTens[arr[0]];
  }
} else {
    answer += arrOne[arr[0]];
}
return answer;
}
