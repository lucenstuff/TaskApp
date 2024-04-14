package com.example.lucenstuff.TasksAPI.repository;

import com.example.lucenstuff.TasksAPI.model.SuperTask;
import org.springframework.data.repository.CrudRepository;

public interface SuperTaskRepository extends CrudRepository<SuperTask, Long> {
}
