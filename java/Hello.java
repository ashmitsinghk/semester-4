class Hello {
    public static void main(String[] args) {
        System.out.println("Hello "+args[0]+" "+args[1]);
        add();
        final int b = 10;
        System.out.println(b);
        System.out.println(b);
    }

    public static void add(){
        int a = 20;
        System.out.println(a);
    }
}
