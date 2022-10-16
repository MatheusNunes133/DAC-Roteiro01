package com.dac.exercicio1.dacexercicio1.controllers;

import com.dac.exercicio1.dacexercicio1.models.UserModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping
public class UserController {

    @GetMapping("/")
    public String home(){
        return "Bem vindo, acesse a rota '/allUsers' para ver todos os usuários";
    }

    @GetMapping("/allUsers")
    public ResponseEntity<List<UserModel>> findAllUsers(){
        var user1 = new UserModel(1L, "Matheus Nunes", "matheus.nunes@gmail.com", "83 91234-4321");
        var user2 = new UserModel(2L, "José Miguel", "josemiguel@gmail.com", "83 99132-1212");
        return ResponseEntity.ok().body(Arrays.asList(user1, user2));
    }
}
