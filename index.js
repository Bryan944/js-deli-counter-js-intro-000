

//var otherDeli = ["Steven", "Blake", "Avi"];

function takeANumber(katzDeliLine,name){
    katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}



// var katzDeliLine = ['Ada','grace','Kent']
function nowServing(katzDeliLine){
  //var katzDeliLine = ['Ada','Grace','Kent'];

    if(katzDeliLine.length > 0){
          return 'Currently serving ' + katzDeliLine.shift() + '.';

}else{
          return"There is nobody waiting to be served!";
}
}



function currentLine(katzDeliLine){

    if(katzDeliLine.length > 0){
      for(var n = 0; n < katzDeliLine.length; n++)
    var outPut = katzDeliLine.slice(0,-2);
          return 'The line is currently:' + ' ' + '1. ' +katzDeliLine[n] + ' ' + '2. ' + katzDeliLine[n] + ' ' + '3. ' + katzDeliLine[n];
    }else{
          return 'The line is currently empty.';
    }
}
