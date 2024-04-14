package com.example.lucenstuff.TasksAPI.repository;

import com.example.lucenstuff.TasksAPI.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
    boolean existsByUsername(String username);
}
