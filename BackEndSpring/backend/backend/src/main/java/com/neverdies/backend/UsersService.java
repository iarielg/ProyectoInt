package com.neverdies.backend;

import com.neverdies.backend.model.User;
import com.neverdies.backend.utils.SHAUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class UsersService {
    private final UsersRepository usersRepository;
    @Autowired
    public UsersService (UsersRepository usersRepository){
        this.usersRepository = usersRepository;
    }//constructor

    public User getUser (Long id){
        return usersRepository.findById(id).orElseThrow(()-> new IllegalStateException("El usuario cone le id" +id +"no existe"));
    }// get user

    public List<User> getAllUsers() {
        return usersRepository.findAll();
    } // getAllUsers


    public void deletUser (Long id){
        if (usersRepository.existsById(id)){
            usersRepository.deleteById(id);
        }else {
            throw new IllegalStateException("EL usuario con el id" +id +"no exite");
        }// else
    }// delete users

    public void addUsers (User users){
        Optional<User> prodByEmail= usersRepository.findByEmail(users.getEmail());
        if(prodByEmail.isPresent()){
            throw new IllegalStateException("El usuario con el email [" + users.getEmail() + "] ya existe");
        }//is present
        //users.setPassword(SHAUtil.createHash(users.getPassword()));// para guardar la contrseña basada en el Has
        usersRepository.save(users);
    }// add users

    @Transactional
    public void  updateUsers(Long id, String currentPassword, String CurrentPassword, String newPassword, String name){
        User user= usersRepository.findById(id).orElseThrow(()-> new IllegalStateException("El usuario con el id" +id+ "no existe"));
        if ((CurrentPassword==null) || (newPassword==null)){
            throw new IllegalStateException("El ususario con el id" +id +"no existe");
        }// if null password
        // if para validar la contraseña en el nuevo

        if (!SHAUtil.verifyHash(CurrentPassword, user.getPassword())){
            throw new IllegalStateException("La contraseña del usuario con el " +id +" no coincide");
        }// verify password

        if(name != null)
            if((!name.isEmpty()) && (!name.equals(user.getName())) ){
                user.setName(name);
            }// if descripcion

        user.setPassword(newPassword);

    }//update users

}//class UsersService
