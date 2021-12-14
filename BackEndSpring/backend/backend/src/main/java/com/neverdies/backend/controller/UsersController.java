package com.neverdies.backend.controller;

import com.neverdies.backend.UsersService;
import com.neverdies.backend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")
public class UsersController {
    private final UsersService usersService;
    @Autowired
    public UsersController (UsersService usersService){
        this.usersService=usersService;
    }// constructor

    @GetMapping
    public List <User> getAllUsers(){
        return usersService.getAllUsers();
    }// get all user

    @PostMapping
    public void addUsers(@RequestBody User users){
        usersService.addUsers(users);
    }// add user

    @PutMapping(path = "{id}")
    public void updateUsers(@PathVariable("id") Long id,
                            @RequestParam(required = true)String CurrentPassword,
                            @RequestParam (required = true) String password,
                            @RequestParam (required = false)String name,
                            @RequestParam(required = false)String phone)
    {
        usersService.updateUsers(id,CurrentPassword, password, name, phone);
    }// update user
}//class UserController
