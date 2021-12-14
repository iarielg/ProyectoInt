package com.neverdies.backend.controller;

import com.neverdies.backend.UsersRepository;
import com.neverdies.backend.model.LoginData;
import com.neverdies.backend.model.Token;
import com.neverdies.backend.model.User;
import com.neverdies.backend.utils.SHAUtil;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import java.util.Calendar;
import java.util.Date;
import java.util.Optional;

@RestController
@RequestMapping("/api/login")
@CrossOrigin("*")
//CroosOrigin para peticiones de otro servidor
public class AuthController {
    private final UsersRepository usersRepository;

    public AuthController(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }// constructor

    @PostMapping
    public Token login(@RequestBody UsersController data) throws ServletException {
        Optional<User> userByEmail= usersRepository.findByEmail(data.getEmail());
        if (userByEmail.isPresent()) {
            if (SHAUtil.verifyHash(data.getPassword(), userByEmail.get().getPassword())){ // get va por el objeto almacenado y lo trae
                return new Token(generateToken(data.getEmail()));
            } // if verify token
        }// if is present
        throw new ServletException("Invalid login. Please check your credentials.");

    }// login

    private String generateToken( String producto )  {
        Calendar calendar = Calendar.getInstance();
        calendar.add( Calendar.HOUR,  10);
        String secret = "this-secret-is-not-very-secret-99";

        return Jwts.builder().setSubject( producto ).claim( "role", "producto" )
                .setIssuedAt( new Date() ).setExpiration(calendar.getTime() )
                .signWith( SignatureAlgorithm.HS256, secret ).compact();
    }//generateToken

}//class AuthController
