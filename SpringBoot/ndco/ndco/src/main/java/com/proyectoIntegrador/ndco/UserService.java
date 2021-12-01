package com.proyectoIntegrador.ndco;

import com.proyectoIntegrador.ndco.models.users;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;
@Service
public class UserService {
    public final ArrayList<users> lista = new ArrayList<users>();

    public UserService(){
        lista.add(new users(1,"areligarcia@gmail.com", "Pa$$w0rd"));
        lista.add(new users(2,"arielgonzalez@gmail.com", "Pa$$w0rd"));
        lista.add(new users(1,"mauriciosuarez@gmail.com", "Pa$$w0rd"));
    }//constructor
    public List<users> getAllUser(){return lista;}
    public users getUser(Long userId){
        if (userId<=lista.size()){
            return lista.get((userId.intValue()-1));
        }
        return new users(0,"not found","password");
    }//getUser

    public boolean deleteUser(Long userId){
        boolean res=false;
       if (userId<=lista.size()){
           lista.remove(userId.intValue()-1);
            res=true;
        }
       return res;
    }//delete user

    public void updateUser(Long userId, String originalPassword, String newPassword)
    {
        if (userId<= lista.size())
        {
            users user = lista.get((userId.intValue()-1));
            if (user.getPassword().equals(originalPassword)){
                user.setPassword(newPassword);
            }//irOriginal
        }//ifUserId<=size
    }//updateUser
    public void addUser(users user){lista.add(user);}
}//class
