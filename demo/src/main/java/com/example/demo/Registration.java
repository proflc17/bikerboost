package com.example.demo;

import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Statement;

@Path("/register")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class Registration {
    public User user;

    public Registration() throws ClassNotFoundException {
        Class.forName("com.mysql.jdbc.Driver");
    }

    @POST
    public Response addUserToDatabase(RegistrationData registrationData) {

        final String DB_URL = "jdbc:mysql://localhost:3306/StoredData";
        final String USERNAME = "root";
        final String PASSWORD = "351xmc282";

        String name = registrationData.getFirstname();
        String username = registrationData.getUsername();
        String email = registrationData.getEmail();
        String password = registrationData.getPassword();


        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection conn = DriverManager.getConnection(DB_URL, USERNAME, PASSWORD);
            Statement stmt = conn.createStatement();
            String sql = "INSERT INTO users (name, username, email, password) " +
                    "VALUES (?, ?, ?, ?)";
            PreparedStatement preparedStatement = conn.prepareStatement(sql);
            preparedStatement.setString(1, name);
            preparedStatement.setString(2, username);
            preparedStatement.setString(3, email);
            preparedStatement.setString(4, password);

            int addedRows = preparedStatement.executeUpdate();
            if (addedRows > 0) {
                user = new User();
                user.name = name;
                user.username = username;
                user.email = email;
                user.password = password;
            }

            stmt.close();
            conn.close();
        }catch(Exception e){
            e.printStackTrace();
        }
        return Response.ok().build();
    }
}