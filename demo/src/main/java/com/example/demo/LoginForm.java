package com.example.demo;

import com.mysql.cj.protocol.Resultset;
import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.MACSigner;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.sql.*;

@Path("/login")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class LoginForm {

    public LoginForm() throws ClassNotFoundException {
        Class.forName("com.mysql.jdbc.Driver");
    }

    public static final String JWT_SECRET = "this-should-be-a-very-long-secretthis-should-be-a-very-long-secretthis-should-be-a-very-long-secretthis-should-be-a-very-long-secretthis-should-be-a-very-long-secret";

    public String createJWT(LoginData loginData) throws JOSEException {
        String user = loginData.getEmail();
        JWSObject jwsObject = new JWSObject(
                new JWSHeader(JWSAlgorithm.HS256),
                new Payload(user)
        );
        jwsObject.sign(new MACSigner(JWT_SECRET.getBytes()));
        return jwsObject.serialize();
    }

    @POST
    public Response login(LoginData loginData) throws SQLException {

        final String DB_URL = "jdbc:mysql://localhost:3306/StoredData";
        final String USERNAME = "root";
        final String PASSWORD = "351xmc282";
        Connection conn = DriverManager.getConnection(DB_URL, USERNAME, PASSWORD);
        Statement stmt = conn.createStatement();

        try {
            Class.forName("com.mysql.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

        String email = loginData.getEmail();
        String password = loginData.getPassword();

        PreparedStatement ps = conn.prepareStatement("SELECT * FROM users WHERE email = ? AND password = ?");
        ps.setString(1, email);
        ps.setString(2, password);
        ResultSet rs = ps.executeQuery();

        if (rs.next()) {
            if (!rs.getString(3).toString().equals(loginData.getEmail()) || !rs.getString(4).toString().equals(loginData.getPassword())) {
                return Response.status(Response.Status.UNAUTHORIZED).build();
            }
            try {
                String jwtStr = createJWT(loginData);
                return Response.ok().header("Authorization", jwtStr).build();
            } catch (JOSEException e) {
                return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(e).build();
            }
        }
        return Response.status(Response.Status.UNAUTHORIZED).build();
    }
}
