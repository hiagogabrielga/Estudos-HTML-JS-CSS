var x = 5;
var y = 7;
var z = 3;

//================================= Potência ===================================================

Math.pow(2,3)  // => 9: 2 elevado à potência 3
//eleva o número antes da virgula pelo número após a vígula
//Math.pow(base,potência)





//=============================== Arredondamento ============================

Math.round(.6) // => 1.0: arredonda para o inteiro mais próximo

Math.ceil(.6) // => 1.0: arredonda para cima para um inteiro

Math.floor(.6) // => 0.0: arredonda para baixo para um inteiro




//=============================== Valor absoluto ============================

/*obs: O valor absoluto de um número é a sua distância de 0. 
Por exemplo, o valor absoluto de 4 é 4 : Isto parece um pouco óbvio. 
É claro que a distância de 0 a 4 é 4. 
Os valores absolutos ficam mais interessantes com os números negativos. */

Math.abs (-5) // => 5: valor absoluto





//==================== Retorno do maior e menor argumento ===========================


Math.max(x,y,z) //Retorna o maior argumento 

Math.min(x,y,z)  //Retorna o menor argumento



//============================== Número aleatório ===========================

Math.random() /// Número pseudoaleatório x, onde 0 <= x < 1.0



// ======================================== Pi ================================================

Math.PI //  π: circunfência de um cículo / diâmetro


// Circunfêrencia 
2 * Math.PI * raio 


// Área de uma circunfêrencia 
Math.PI * (raio * raio) 

Math.PI * Math.pow(raio, 2)


// Área de uma esfera

(4/3) * Math.PI * (raio * raio * raio) 

(4/3) * Math.PI * Math.pow(raio, 3)


//========================== Logarimo ===============================

Math.E // e: A base do lograitmo natural

Math.log(10) //Logaritmo natural de 10

Math.log(100)/Math.LN10 //Logaritmo de base 10 de 100

Math.log(512)/Math.LN2 //Logaritmo de base 2 de 512

Math.exp(3) // Math.E ao cubo



//========================== Raiz quadrada e Raiz "Cúbica" ==========================

Math.sqrt(3) // Retornará a raiz quadra de 3

Math.pow(3, 1/3) // Uma forma simple de retornar a raiz cúbica de qualquer número



//======================= Trigonometri ===================================

Math.sin(0) // Retorna o seno de um número.
//um forma de usar
Math.sin(radianos) * raio


Math.cos() // Retorna o cosseno de um ângulo, que deve estar em radianos. 
//um forma de usar
Math.cos(radianos) * raio


Math.atan(x) /*  retorna a arco tangente (em radianos) de um número, onde

Math.atan(𝑥) = arctan (𝑥) = the unique𝑦 ∊[-𝜋/2 ; 𝜋/2]such thattan(𝑦) = 𝑥

*/

