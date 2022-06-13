// Neste problema, você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema abaixo, da esquerda para a direita.  Em seguida conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.

// Entrada
// A entrada contém 3 palavras, uma em cada linha, necessárias para identificar o animal segundo a figura acima, com todas as letras minúsculas.

// Saída
// Imprima o nome do animal correspondente à entrada fornecida.

 
// Exemplos de Entrada	Exemplos de Saída
// vertebrado
// mamifero
// onivoro

// homem

// vertebrado
// ave
// carnivoro

// aguia


let x = gets(); 
let y = gets(); 
let z = gets(); 

if ((x == "vertebrado") && (y == "ave")  && (z == "carnivoro")) {
  print("aguia\n");
}

//TODO: Complete os espaços em branco com uma possível solução para o desafio

if ((x == "vertebrado") && (y == "ave")  && (z == "onivoro")) {
  print("pomba\n");
}

if ((x == "vertebrado") && (y == "mamifero")  && (z == "onivoro")) {
  print("homem\n");
}

if ((x == "vertebrado") && (y == "mamifero")  && (z == "herbivoro")) {
  print("vaca\n");
}

if ((x == "invertebrado") && (y == "inseto")  && (z == "hematofago")) {
  print("pulga\n");
}

if ((x ==  "invertebrado") && (y == "inseto")  && (z == "herbivoro")) {
  print("lagarta\n");
}

if ((x  == "invertebrado") && (y == "anelideo") && (z == "hematofago")) {
  print("sanguessuga\n");
}

if ((x  == "invertebrado") && (y == "anelideo") && (z == "onivoro")) {
  print("minhoca\n");
}