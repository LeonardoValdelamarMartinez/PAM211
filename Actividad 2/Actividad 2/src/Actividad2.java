import java.util.*;
class InicioPAM
{
    String ReglamentoPOO;
    String LineamientosClassroom;
    String FechasdeParciales;
    String PorcentajesporParcial;

    public InicioPAM(String ReglamentoPOO, String LineamientosClassroom, String FechasdeParciales, String PorcentajesporParcial)
    {
        this.ReglamentoPOO = ReglamentoPOO;
        this.LineamientosClassroom = LineamientosClassroom;
        this.FechasdeParciales = FechasdeParciales;
        this.PorcentajesporParcial = PorcentajesporParcial;
    }

    void Mostrar()
    {
        System.out.println("Reglamento de POO: " + ReglamentoPOO);
        System.out.println("Lineamientos en Classroom: " + LineamientosClassroom);
        System.out.println("Fechas de parciales: " + FechasdeParciales);
        System.out.println("Porcentajes por parcial: " + PorcentajesporParcial);
    }
}
public class Actividad2
{
    public static void main(String[] args) throws Exception 
    {   List<InicioPAM> catalogo = new ArrayList<>();

        catalogo.add( new InicioPAM("\n 1. Respeto \n 2. Importante participación activa en orden \n 3. No entregar trabajos incompletos, \n 4. No se aplican examen fuera de tiempo \n 5. Plagio de trabajos = 0 para todos \n 6. 3 faltas = Final del parcial \n 7. Calificación máxima en final 8", "\n ENTREGAR los trabajos para su revisión \n Entregas en PDF \n Avisos de clase \n Entregas autorizadas con retraso, 5 Calif Max", "\n 1er Parcial 29-09-25 \n 2do Parcial 03-11-25 \n 3er Parcial 01-12-25 \n Final 08-12-25", "1er Parcial: Conocimiento: 40%, Desempeño: 20%, Producto: 30%, Integrador: 10% \n 2do Parcial: 40%, Desempeño: 20%, Producto: 20%, Integrador: 20%  \n 3er Parcial: 20%, Desempeño: 20%, Producto: 40%, Integrador: 30% "));
        
        
        String respuesta;
        Scanner scanner;
        do 
        {
            System.out.println("\n 1. Reglamento de POO \n 2. Lineamientos en Classroom \n3. Fechas de parciales \n4. Porcentajes por parcial");
        System.out.println("Seleccione una opción para ver:");
        scanner = new Scanner(System.in);
        int opcion = scanner.nextInt();
        switch (opcion) 
        {
            case 1:
                System.out.println("\nReglamento POO:");
                for (InicioPAM q : catalogo) 
                {
                    System.out.println(q.ReglamentoPOO);
                }
                break;
            case 2:
                System.out.println("\nLineamientos en Classroom:");
                for (InicioPAM q : catalogo) 
                {
                    System.out.println(q.LineamientosClassroom);
                }
                break;
            case 3:
                System.out.println("\nFechas Parciales:");
                for (InicioPAM q : catalogo) 
                {
                    System.out.println(q.FechasdeParciales);
                }
                break;
            case 4:
                System.out.println("\nPorcentajes por parcial:");
                for (InicioPAM q : catalogo) 
                {
                    System.out.println(q.PorcentajesporParcial);
                }
                break;
            default:
                System.out.println("Opción no válida.");
                return;
        }
        System.out.println("\n¿Desea ver otra opción? (s/n): ");
        respuesta = scanner.next();
        } while (respuesta.equalsIgnoreCase("s"));
        scanner.close();
    }
}
