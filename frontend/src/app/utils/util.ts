export class Util {
  constructor() { }

  public static telephoneMask(v) {
    v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
  }

  public static zipCodeMask(v) {
    v = v.replace(/\D/g, ''); //Remove tudo o que não é dígito
    v = v.replace(/(\d{2})(\d)/, '$1.$2'); //Coloca um ponto entre o segundo e o terceiro dígitos
    v = v.replace(/(\d{3})(\d{2,3})$/, '$1/$2'); //Coloca uma barra entre o quint e o sexto dígitos
    return v;
  }

  public static cpfMask(v) {
    v = v.replace(/\D/g, ''); //Remove tudo o que não é dígito
    v = v.replace(/(\d{3})(\d)/, '$1.$2'); //Coloca um ponto entre o terceiro e o quarto dígitos
    v = v.replace(/(\d{3})(\d)/, '$1.$2'); //Coloca um ponto entre o terceiro e o quarto dígitos
    //de novo (para o segundo bloco de números)
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); //Coloca um hífen entre o terceiro e o quarto dígitos
    return v;
  }

  public static checkCPF(inputCPF){
    let soma = 0;
    let resto;
    inputCPF = inputCPF.replace(/\D/g, '');
    if(inputCPF === '00000000000') { return false; }

    for(let i=1; i <= 9; i++) {
      soma = soma + parseInt(inputCPF.substring(i - 1, i)) * (11 - i);

      resto = (soma * 10) % 11;
    }

    if((resto == 10) || (resto == 11)) { resto = 0; }
    if(resto != parseInt(inputCPF.substring(9, 10))){ return false; }

    soma = 0;
    for(let i = 1; i <= 10; i++) {

      soma = soma + parseInt(inputCPF.substring(i - 1, i)) * (12 - i);
      resto = (soma * 10) % 11;
    }

    if((resto == 10) || (resto == 11)){ resto = 0; }
    if(resto != parseInt(inputCPF.substring(10, 11))) { return false; }
    return true;
  }
}