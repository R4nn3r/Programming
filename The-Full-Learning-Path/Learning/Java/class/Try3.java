public class Try3 {
  public static void main(String[] args) {
    int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7, 8} };

    for(int i = 0; i < myNumbers.length; i++) {
      for (int j = 0; j < myNumbers[i].length; j++){
        System.out.print(myNumbers[i][j] + " ");
      }
      System.out.println();
    }

    System.out.println();

    String [] cars = {"BMW","Mazda", "Volvo"};
    int carsLength = cars.length;

    for (String i : cars){
      System.out.println(i);
    }

    System.out.println(carsLength);

  }
}