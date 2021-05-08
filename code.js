package com.company;
import java.util.Scanner;

public class Main {

  public static void main(String[] args) {
    boolean quit = false;
    Scanner input = new Scanner(System.in);
    while (!quit) {
      int text = 0;
      System.out.println("Enter in the message you would like to encrypt:");
      String message = input.nextLine();
      message = message.toLowerCase();
      for (int i = 0; i < message.length(); i++) {
        char letter = message.charAt(i);
        if(letter != ' ') {
          letter -= 96; //for a lowercase letter rather than other characters
          text += letter;
        }
        System.out.println("Here: " + text);
      }
    }
  }
}
