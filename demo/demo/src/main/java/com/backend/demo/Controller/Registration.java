package com.backend.demo.Controller;

import com.backend.demo.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class Signup {
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            response.put("message", "Email already exists");
            return ResponseEntity.badRequest().body(response);
        }
        userRepository.save(user);

        response.put("message", "Register successfully");
        return ResponseEntity.ok(response);
    }
}
