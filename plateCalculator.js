'use strict';
function getQuotientAndRemainder(dividend, divisor) {
  const remainder = dividend % divisor;
  const quotient = parseInt(dividend / divisor);
  return [quotient, remainder];
}

function findTheNumberPlate(customerID) {
  if (customerID > 17558423) {
    throw Error('Invalid or Non existing ID');
  }
  const alphabets = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  let [alphCount, rem] = getQuotientAndRemainder(customerID, 999);
  rem = rem + 1;
  let digitNo;
  if (rem < 10) {
    digitNo = `00${rem}`;
  } else if (rem < 100) {
    digitNo = `0${rem}`;
  } else {
    digitNo = `${rem}`;
  }
  //   let digitNo = rem.toString();
  //   if (digitNo.length === 1) {
  //     let digitNo = `00${digitNo}`;
  //   } else if (digitNo.length === 2) {
  //     let digitNo = `0${digitNo}`;
  //   }

  const [rem2, alph1] = getQuotientAndRemainder(alphCount, 26);
  const [alph3, alph2] = getQuotientAndRemainder(rem2, 26);
  const numberPlate = `${alphabets[alph1]}${alphabets[alph2]}${alphabets[alph3]}${digitNo}`;
  return numberPlate;
}
const displayMessage = message =>
  (document.querySelector('.message').textContent = message);
const alterMessageColor = color =>
  (document.querySelector('.message').style.color = color);

document.querySelector('.generate').addEventListener('click', function () {
  const customerID = Number(document.querySelector('.number').value);
  if (customerID > 17558423 || customerID < 0 || !customerID) {
    // document.querySelector('.message').textContent = 'Invalid customer ID';
    displayMessage('Invalid customer ID');
    alterMessageColor('red');
    document.querySelector('.result').textContent = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('body').style.color = '#eee';
    document.querySelector('.endmessage').textContent = '';
  } else {
    document.querySelector('.result').textContent =
      findTheNumberPlate(customerID);
    displayMessage('Plate Number successfully generated');
    document.querySelector('body').style.backgroundColor = 'rgb(102, 184, 204)';
    document.querySelector('body').style.color = '#222';
    alterMessageColor('#222');
    document.querySelector('.endmessage').textContent =
      'Thanks for using our service';
  }
});

document.querySelector('.reload').addEventListener('click', function () {
  document.querySelector('.result').textContent = '';
  displayMessage('');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('body').style.color = '#eee';
  document.querySelector('.endmessage').textContent = '';
  document.querySelector('.number').value = '';
  alterMessageColor('#eee');
});
