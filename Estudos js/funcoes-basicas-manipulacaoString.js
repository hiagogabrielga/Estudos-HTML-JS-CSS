var texto = "hello, world"


//================================= Funções basicas ========================================


texto.length // => 12 : Retorna a qualtidade de caracteres em uma string.

texto.charAt(0) // => "h": retornara o racactere da pocição começada em 0 exigida dentro de ().

texto.charAt(texto.length-1) // => retornará o ultimo caractere.

texto.substring(1,4) // => "ell" : retorna os caracteres dentro do espaço exigido
//Nesse caso retornou a 2°, 3° e 4° caractere.

texto.slice(1,4) // => "ell" : retorna os caracteres dentro do espaço exigido
//Nesse caso retornou a 2°, 3° e 4° caractere.

texto.slice(-3) // => "rld" : com o número negativo, tornara os ultimos caracteres na string

texto.indexOf("l") // => 2: retorna a primeira posição iniciada do 0 da letra dentro da string

texto.lastIndexOf("l") // => 10: retorna a ultima posição iniciada do 0 da letra dentro da string

texto.indexOf("l", 3) // => 3: posição do primeiro "l" em ou após 3

texto.split(", ") // => ["hello", "world"] : divide em substrings

texto.replace("h", "H") // => "Hello, world" : substitui todas as intâncias

texto.toLowerCase() // => Retorna a string toda minúscula.

texto.toUpperCase() // => Retorna a string toda maiuscula.


