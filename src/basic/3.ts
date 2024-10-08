type Name = string | number;
type Liter = 'enable' | 'disable';

let userName: Name;
userName = "Alice";  // допустимо
userName = 123;      // допустимо
// userName = true;   // ошибка: тип boolean недопустим

let status: Liter;
status = 'enable';   // допустимо
status = 'disable';  // допустимо
// status = 'other'; // ошибка: значение должно быть либо 'enable', либо 'disable'
