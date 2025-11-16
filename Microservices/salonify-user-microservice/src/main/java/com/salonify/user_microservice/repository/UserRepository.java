package com.salonify.user_microservice.repository;

import com.salonify.user_microservice.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
