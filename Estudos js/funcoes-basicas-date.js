//============== Criação de data e hora artifiais. =================================

var jeito1 = new Date(2010, 0 ,1); //O 1º dia do 1º mês de 2010
//jeito1 new Date(Ano, mes, dia)


var jeito2 = new Date(2010, 0, 1, 17, 10, 30); // O mesmo dia, às 5:10:30 da tarde.
//jeito2 new Date(Ano, mes, dia, hora, minutos, segundos)


var jeito3 = new Date(); // A data e hora atuais


//====================== Manipulações das variaveis com data e hora =========================



jeito2.getFullYear() // => retorna apenas o ano (2010).

jeito2.getMonth() // => retorna apenas o mês com base em zero (0).

jeito2.getDate() // => retorna dias com base em um (1).

jeito2.getDay() // => retorna dia da semana. (5) 0 é domingo, 5 é sexta feira. 

jeito2.getHours() // Retorna as horas (17).

jeito2.getUTCHours() // Retorna as horas em UTC; Depende do fuso horário.

jeito2.toString() // Retorna a hora com string (Fri Jan 01 2010 17:10:30 GMT-0400 (Horário Padrão do Amazonas))

jeito2.toUTCString() // Retorna (Fri, 01 Jan 2010 21:10:30 GMT)

jeito2.toLocaleDateString() // Retona em dia/mês/ano

jeito2.toLocaleTimeString() // Retorna hora:minutos:segundo Pm ou Am

jeito2.toISOString() // Retorna 2010-01-01T21:10:30.000Z
