module.exports = function toReadable(n) {
    let unit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let dozen = ['000', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let elevenToNinteen = ['000', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen' , 'eighteen', 'nineteen'];
  
    str = String(n); 
    
    let a = str[0];
    let b = str[1];
    let c = str[2];
  
    let lastTwoDigits = Number(str.slice(-2));
    
    isMoreTenLessTwenty = lastTwoDigits > 10 && lastTwoDigits < 20;
  
    if(str.length === 3) {
      if(n % 100 === 0) {return unit[a] + ' hundred'}
      if(n % 10 === 0) {return unit[a] + ' hundred ' + dozen[b]}
      if(isMoreTenLessTwenty) {return unit[a] + ' hundred ' + elevenToNinteen[c]}
      if(b == 0) {return unit[a] + ' hundred ' + unit[c]}
      return unit[a] + ' hundred ' + dozen[b] + ' ' + unit[c]
    }
  
    if(str.length === 2) {
      if(n % 10 === 0) {return dozen[a]}
      if(isMoreTenLessTwenty) {return elevenToNinteen[b]}
      return dozen[a] + ' ' + unit[b]
    }
  
    if(str.length === 1) {
      return unit[a];
    }  
  }
