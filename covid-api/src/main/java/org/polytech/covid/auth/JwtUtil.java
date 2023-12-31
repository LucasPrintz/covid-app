package org.polytech.covid.auth;

import java.util.Date;
import java.util.concurrent.TimeUnit;

import org.polytech.covid.domain.AccessEnum;
import org.polytech.covid.domain.User;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.*;
import jakarta.servlet.http.HttpServletRequest;

@Component
public class JwtUtil {
    
    private final String jwtSecret = "ZUEmc3Y0Sm1lYXpDOTc2NTQkKiNhenNkZ2chZWZAJmF6ZWZnaDQzNDU2RUo1WmF6c2RmelNTUURGKnphZGZGRVoxMjNSVFk2NVU3KUZFQVNkdmRmemcmYXplYXMxMjM0NFRZR0ZER0ZmLGdydGloaXVndCdfJ2hlZnpmMzM0NQo=";

    private long jwtExpirationMs = 86400000;

    private final JwtParser jwtParser;

    private final String TOKEN_HEADER = "Authorization";
    private final String TOKEN_PREFIX = "Bearer ";

    public JwtUtil() {
        this.jwtParser = Jwts.parser().setSigningKey(jwtSecret);
    }

    public String generateJwtToken(User user) {
        Claims claims = Jwts.claims().setSubject(user.getMail());
        claims.put("id", user.getId());
        claims.put("firstName", user.getFirstName());
        claims.put("lastName", user.getLastName());
        claims.put("access", user.getAccess());
        claims.put("vaccinationCenter", user.getVaccinationCenter());

        Date tokenCreateTime = new Date();
        Date tokenExpirationTime = new Date(tokenCreateTime.getTime() + TimeUnit.MINUTES.toMillis(jwtExpirationMs));

        return Jwts.builder()
            .setClaims(claims)
            .setExpiration(tokenExpirationTime)
            .signWith(SignatureAlgorithm.HS512, jwtSecret)
            .compact();
    }

    private Claims parseJwtClaims(String token) {
        return jwtParser.parseClaimsJws(token).getBody();
    }

    public Claims resolveClaims(HttpServletRequest req) {
        try{
            String token = resolveToken(req);
            if(token != null) {
                return parseJwtClaims(token);
            }
            return null;
        } catch (ExpiredJwtException e) {
            req.setAttribute("expired", e.getMessage());
            throw e;
        } catch (Exception e) {
            req.setAttribute("invalid", e.getMessage());
            throw e;
        }
    }

    public String resolveToken(HttpServletRequest req) {
        String bearerToken = req.getHeader(TOKEN_HEADER);
        if(bearerToken != null && bearerToken.startsWith(TOKEN_PREFIX)) {
            return bearerToken.substring(TOKEN_PREFIX.length());
        }
        return null;
    }

    public boolean validateClaims(Claims claims) throws AuthenticationException {
        try {
            return claims.getExpiration().after(new Date());
        } catch (Exception e) {
            throw e;
        }
    }

    public String getMail(Claims claims) {
        return claims.getSubject();
    }

    private AccessEnum getAccess(Claims claims) {
        return AccessEnum.valueOf((String) claims.get("access"));
    }
}
