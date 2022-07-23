import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class PropertiesService {
  public requestTimeout = 100000;
  public apiUrl = environment.url;

  public defaultPattern = '^[a-zA-ZÀ-ÿ0-9 ]*$';
  public stringAndSpacePattern = '^[a-zA-ZÀ-ÿ ]*$';
  public stringPattern = '^[a-zA-ZÀ-ÿ]*$';
  public numberPattern = '^[0-9]+$';
  public cpfPattern = '[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}';
  public stringSpaceSpecialCharacters = '^[a-zA-ZÀ-ÿ., ]*$';
  public addressPattern = '^[a-zA-ZÀ-ÿ0-9, ]*$';
  public passwordPattern =
    '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^ws]).{6,}$';
  public emailPattern = '^[a-z0-9.]+@.[a-z0-9.]*$';
  public dataPattern = '^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$';
  public stringMinLength = 1;
  public stringMaxLength = 50;
  public usernameMinLength = 4;
  public usernameMaxLength = 15;
  public passwordMinLength = 6;
  public passwordMaxLength = 20;
  public dateMinLength = 10;
  public dateMaxLength = 10;
  public ageMinLength = 1;
  public ageMaxLength = 3;
  public cpfMinLength = 14;
  public cpfMaxLength = 14;
  public cnsMinLength = 0;
  public cnsMaxLength = 20;
  public phoneMinLength = 9;
  public phoneMaxLength = 14;
  public defaultFieldPasswordMessage =
    'É necessário uma letra maiúscula, uma mínuscula e um número, caracteres especiais são opcionais.';
  public defaultPatterAndSpecialCharactersMessage =
    'São permitidos somente números, letras, caracteres especiais e espaços';
  public defaultFieldRequiredMessage = 'Preencha o campo corretamente.';
  public defaultFieldMinLengthMessage =
    'A quantidade mínima de caracteres é de ';
  public defaultFieldMaxLengthMessage =
    'A quantidade máxima de caracteres é de ';
  public defaultOnlyNumberMessage = 'É permitido somente números.';
  public defaultOnlyStringMessage = 'É permitido somente letras.';
  public defaultPatternMessage =
    'São permitidos somente números, letras e espaços';
  public defaultDataPatternMessage = 'O formato permitido é: DD/MM/AAAA';
  public cpfPatternMessage = 'O formato permitido é: 000.000.000-00';
  public emailPatternMessage = 'O formato do e-mail é: email@email.com';

  public pageSize: number = 5;
  public firstPage: number = 0;

  constructor() { }
}
