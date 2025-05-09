package com.backend.demo.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
public class User {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String fullname;
    private String email;

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    private String password;
    public User() {
    }
    public User(String name, String email, String phone, String password) {
        this.fullname = name;
        this.email = email;
        this.password = password;
    }
}