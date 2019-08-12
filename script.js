// const appState = {};

// // Format As Money
// const formatAsMoney = (amount, buyerCountry) => {
//   const country = countries.find(country => country.country == buyerCountry);
//   if (country) {
//     return amount.toLocaleString('en-' + country.code, {style: "currency", currency: country.currency});
//   }
// else {
//   return amount.toLocaleString('en-' + countries[0].code,{style: "currency", currency: countries[0].currency});
// }
// };

// // Flag If Invalid
// const flagIfInvalid = (field, isValid) => {
//   if (isValid) {
//     field.classList.remove("is-invalid");
//   } else {
//     field.classList.add("is-invalid");
//   }
// };

// // Expiry Date Format Is Valid
// const expiryDateFormatIsValid = (target) => {
//   const input = target.value.split("/");
//   const date = new Date();
//   const year = Number(date.getFullYear()) - 2000;
//   if (input.length==2) {
//     if(input[1]==year){
//       if(input[0]>(date.getMonth()+1)){
//         return true;
//       }else{
//         return false;
//       }
//     }else {
//       if(input[1]>year){
//         return true;
//       }else {
//         return false;
//       }
//     }
//     return true;
//   }else {
//     return false;
//   }
// };

// //Detect Card Type
// const detectCardType = ({target}) => {
//   const val = target.value[0];
//   let result = "";
//   const creditCard = document.querySelector('[data-credit-card]');
//   const cardLogo = document.querySelector('[data-card-type]');
  
//   if(val==4) {
//     creditCard.classList.add('is-visa');
//     creditCard.classList.remove('is-mastercard');
//     cardLogo.src = supportedCards.visa;
//     result = 'is-visa'
//   } else {
//     creditCard.classList.remove('is-visa');
//     creditCard.classList.add('is-mastercard');
//     cardLogo.src = supportedCards.mastercard;
//     result = 'is-mastercard';
//   }
//   return result;
// };


// // Validate Card Expiry Date
const validateCardExpiryDate = ({target}) => {
  const validity = expiryDateFormatIsValid(target);
  flagIfInvalid(target, validity);
  return validity;
};

// Validate Card Holder Name
const validateCardHolderName = ({target}) => {
  const value = target.value.split(" ");
  if ((value.length==2) && (value[0].length > 3) && (value[1].length >=3)){
    validity = true;
    flagIfInvalid(target, validity);
  }
  else {
    validity = false;
    flagIfInvalid(target, validity);
  }
  return validity;
};

//  // Validate with Luhn
//  const validateWithLuhn = (digits) => {
//   let hasInvalidChars = digits.some(digit => {
//     return (typeof digit !== 'number');
//   });
  
//   let hasValidChecksum = (digits => {
//     let checksum = digits.reverse().map((digit, index) => {
//       let computedDigit = digit;
      
//       if((index + 1) % 2 == 0) {
//         computedDigit *= 2;
//         if(computedDigit > 9){
//           computedDigit -= 9;
//         }
//       }
//       return computedDigit;
//     }).reduce(((sum,digit) => {
//       return sum + digit;
//     }),0);
//     return ((checksum % 10) == 0);
//   })(digits);
//   return (digits.length == 16) && !hasInvalidChars && hasValidChecksum;
// };


// // Validate Card Number
// const validateCardNumber = () => {
//   let values = '';
//   document.querySelectorAll('[data-cc-digits] input').forEach(inputField => {
//     values += inputField.value;
//   }, validateCardNumber);
  
//   let digits = values.split('').map(value => {
//     return parseInt(value);
//   });
  
//   let isValidCardNumber = validateWithLuhn(digits);
  
//   if(isValidCardNumber){
//     document.querySelector('[data-cc-digits]').classList.remove('is-invalid');
//   } else{
//     document.querySelector('[data-cc-digits]').classList.add('is-invalid');
//   }
  
//   return isValidCardNumber;
// };

// // UI Can Interact
// const uiCanInteract = () => {
//   document.querySelector('[data-cc-digits] input').addEventListener('blur', detectCardType);
//   document.querySelector('[data-cc-info] input').addEventListener('blur', validateCardHolderName);
//   document.querySelector('[data-cc-info] input:nth-child(2)').addEventListener('blur', validateCardExpiryDate);
//   document.querySelector('[data-pay-btn]').addEventListener('click', validateCardNumber);
//   document.querySelector('[data-cc-digits] input').focus();
// };
    
// // Display Cart Total
// const displayCartTotal = ({results}) => {
//   const [data]= results;
//   let {itemsInCart, buyerCountry} = data;
  
//   appState.items = itemsInCart;
//   appState.country = buyerCountry;
  
//   appState.bill = itemsInCart.reduce((total, currentValue) => total + currentValue.price * currentValue.qty,0);
//   appState.billFormatted = formatAsMoney(appState.bill, buyerCountry);
//   document.querySelector('[data-bill]').textContent = appState.billFormatted;
  
//   uiCanInteract();
// };

// const fetchBill = () => {
//   const api = "https://randomapi.com/api/006b08a801d82d0c9824dcfdfdfa3b3c";
  
//   fetch(api).then(response => response.json()).then(displayCartTotal).catch(error => console.warn(error))
// };

// const startApp = () => {
//   fetchBill();
// }

// const supportedCards = {
//   visa, mastercard
// };

// const countries = [
//   {
//     code: "US",
//     currency: "USD",
//     country: 'United States'
//   },
//   {
//     code: "NG",
//     currency: "NGN",
//     country: 'Nigeria'
//   },
//   {
//     code: 'KE',
//     currency: 'KES',
//     country: 'Kenya'
//   },
//   {
//     code: 'UG',
//     currency: 'UGX',
//     country: 'Uganda'
//   },
//   {
//     code: 'RW',
//     currency: 'RWF',
//     country: 'Rwanda'
//   },
//   {
//     code: 'TZ',
//     currency: 'TZS',
//     country: 'Tanzania'
//   },
//   {
//     code: 'ZA',
//     currency: 'ZAR',
//     country: 'South Africa'
//   },
//   {
//     code: 'CM',
//     currency: 'XAF',
//     country: 'Cameroon'
//   },
//   {
//     code: 'GH',
//     currency: 'GHS',
//     country: 'Ghana'
//   }
// ];

// startApp();


// 1. Name Concatenation
/*
//Variant 1
const firstName = prompt('Enter your First name');
const lastName = prompt('Enter your Last name');
const age = prompt('Enter your age');

alert(`Welcome, ${firstName} ${lastName} ${age}`);


// Variant 2
const firstName = prompt('Enter your First name');
const lastName = prompt('Enter your Last name');
const year = prompt('Enter your year of birth');

const dob = new Date().getFullYear() - parseInt(year);

alert(`Welcome, ${firstName} ${lastName} ${dob}`);

// Variant 3 Request the user's gender
const genderFilter = () => {
  const firstName = prompt('Enter your First name');
  const gender = prompt('Enter your gender');
  const lastName = prompt('Enter your Last name');
  const year = prompt('Enter your year of birth');
  const dob = new Date().getFullYear() - parseInt(year);
  
    if (gender === 'male' || 'Male' || 'MALE' ) {
      console.log(`Welcome, ${firstName} son of ${lastName} ${dob}`);
    } 
    else if (gender === 'female' || 'Female' || 'FEMALE') {
      console.log(`Welcome, ${firstName} Daughter of ${lastName} ${dob}`);
  }
};

genderFilter();

*/

// 2. Lottery
