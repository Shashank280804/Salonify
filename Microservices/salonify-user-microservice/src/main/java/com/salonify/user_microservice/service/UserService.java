package com.salonify.user_microservice.service;

import com.salonify.user_microservice.exception.UserException;
import com.salonify.user_microservice.model.User;

import java.util.List;

public interface UserService {
    User createUser(User user) ;
    User getUserById(Long id) throws UserException;
    List<User> getAllUsers();
    String deleteUser(Long id);
    User updateUser(Long id,User user) throws UserException;
}
