let teleRegex = /^[6|7|9]{1}[0-9]{8}$/;

if (teleRegex.test('760606060')) {
    console.log('Es un teléfono valido');
}else{
    console.log('No valido')
}