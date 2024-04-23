package net.javaguides.todo.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;

@Component
public class JwtTokenProvider {

    @Value("${app.jwt-secret}")
    private String jwtSecret;

    @Value("${app.jwt-expiration-milliseconds}")
    private long jwtExpirationInMs;

    // Generate JWT from user authentication information
    public String generateToken(Authentication authentication) {
        String username = authentication.getName();
        Date now = new Date(); // Capture the current date/time once for consistency
        Date expiryDate = new Date(now.getTime() + jwtExpirationInMs); // Compute the expiry date

        // Build JWT with claims

        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(expiryDate)
                .signWith(key())
                .compact();
    }

   private Key key() {
        return Keys.hmacShaKeyFor(
                Decoders.BASE64.decode(jwtSecret)
        );
   }

    // Get username from JWT
    public String getUsernameFromToken(String token) {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(key())
                .build()
                .parseClaimsJws(token)
                .getBody();
        return claims.getSubject();
    }

    //Validate JWT Token
    public boolean validateToken(String token) {
        Jwts.parserBuilder().setSigningKey(key())
                .build()
                .parse(token);
        return true;
    }
}
