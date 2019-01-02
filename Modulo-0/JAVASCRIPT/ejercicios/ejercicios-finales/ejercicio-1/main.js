
function palindromo(str) {
    return str.replace(/[\W_]/g, '').toLowerCase() ===
           str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
  }

  console.log(palindromo('A cavar a caravaca'));

  