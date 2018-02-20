module.exports = function solveEquation(equation) {
  const eqationArr = equation.split(' ');
  let a = parseInt(eqationArr[0]);
  let b = parseInt(eqationArr[3] + eqationArr[4]);
  let c = parseInt(eqationArr[7] + eqationArr[8]);
  let Discr = b*b-4*a*c;
  let result = [];
  if(Discr > 0) {
    Discr = Math.sqrt(Discr);
    let x1 = (-b + Discr)/(2*a);
    let x2 = (-b - Discr)/(2*a);
    result.push(Math.round(x1), Math.round(x2));
  }
  return result.sort((a,b) => a-b);
}
