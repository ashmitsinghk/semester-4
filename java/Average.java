import java.util.Scanner;
class Average {
    public static void main(String[] args) {
        int a, b, c;
        Scanner obj = new Scanner(System.in);
        System.out.println("Enter the first number: ");
        a = obj.nextInt();
        System.out.println("Enter the second number: ");
        b = obj.nextInt();
        System.out.println("Enter the third number: ");
        c = obj.nextInt();
        Average obj1 = new Average();
        obj1.avg(a, b, c);
    }
    public void avg(int a, int b, int c) {
        System.out.println("Average = "+ (a+b+c)/3.0);
    }
}