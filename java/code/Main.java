import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.SQLException;

public class Main {

  Connection connection = null;

  public Main() {

    try {
      Class.forName("com.mysql.jdbc.Driver");
      connection = DriverManager.getConnection("jdbc:mysql://mysql:3306/docker","docker", "welcome1");

      if (connection != null) {
        System.out.println("You made it, take control your database now!");
      } else {
        System.out.println("Failed to make connection!");
      }
    } catch (ClassNotFoundException e) {
    		System.out.println("Where is your MySQL JDBC Driver?");
    		e.printStackTrace();
    		return;
    } catch (SQLException ex) {
        System.out.println("Unable to connect");
        ex.printStackTrace();
        return;
    }

  }

  public static void main(String[] args) {
    Main m = new Main();
  }
}
