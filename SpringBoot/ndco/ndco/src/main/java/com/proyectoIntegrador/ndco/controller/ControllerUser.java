package com.proyectoIntegrador.ndco.controller;

import com.proyectoIntegrador.ndco.UserService;
import com.proyectoIntegrador.ndco.models.users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/user")
public class ControllerUser {
    private final UserService _UserService;

    @Autowired
    public ControllerUser(UserService _UserService){
        this._UserService = _UserService;
    }//constructor
    @GetMapping
    public List<users> getUser(){return _UserService.getAllUser();}

    @GetMapping(path = "{userId}")
    public users getUser(@PathVariable("userId") Long userId){
        return _UserService.getUser(userId);
    }//getUser

    @DeleteMapping(path = "userId")
    public void deleteUser(@PathVariable("userId") Long UserId){
        _UserService.deleteUser(UserId);
    }//deleteUser

    @PutMapping(path = "{userId}")
    public void updateUser(
            @PathVariable("userId") Long userId,
            @RequestParam(required = false)String originalPassword,
            @RequestParam(required = false)String newPassword)
    {
        _UserService.updateUser(userId,originalPassword,newPassword);
    }//updateUser

    @PostMapping
    public void addUser(@RequestBody users user){
        _UserService.addUser(user);
    }//addUser
}//class
