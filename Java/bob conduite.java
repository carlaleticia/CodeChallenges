import java.io.IOException;
import java.util.Scanner;

public class Main {
  public static void main(String[] args) throws IOException {
    Scanner scan = new Scanner(System.in);
    int T = scan.nextInt();
    
//TODO: Complete os espaços em branco com uma possível solução para o desafio

    for (int i = 0; i < T; i++) {
      int R1 = scan.nextInt();
      int R2 = scan.nextInt();
      int R3 = R1 + R2;
      System.out.println(R3);
    }
  }
}
	