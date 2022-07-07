// Desafio
// Escreva um algoritmo que leia 2 valores inteiros A e B calcule a soma dos números que não são múltiplos de 13 entre A e B, incluindo ambos.

// Entrada
// O arquivo de entrada contém 2 valores inteiros quaisquer, não necessariamente em ordem crescente.

// Saída
// Imprima a soma de todos os valores não divisíveis por 13 entre os dois valores lidos na entrada, inclusive ambos se for o caso.

 
// Sample Input	Sample Output
// 100             13954
// 200

// TODO: complete os espaços em branco com sua solução para o problema
// Abaixo segue um exemplo de código que você pode ou não utilizar

import java.util.Locale;
import java.util.Scanner;

public class Main {

		public static void main(String[] args) {
		
		int X, Y;
		Scanner input =new Scanner(System.in);
		X = input.nextInt();
		Y = input.nextInt();
		if (X > Y) {
			int total = 0;
			for (int i = Y; i <= X; i++) {
				if (i % 13 != 0) {
					total +=i;
				}
			}
			System.out.print(total+"\n");
		}else if(X < Y){
			int total2 = 0;
			for (int i = X; i <= Y; i++) {
				if (i % 13 != 0) {
					total2 +=i;
				}
			}

			System.out.print(total2+"\n");
		}
		
	}

}