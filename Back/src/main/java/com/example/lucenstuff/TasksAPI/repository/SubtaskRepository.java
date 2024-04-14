package com.example.lucenstuff.TasksAPI.repository;

import com.example.lucenstuff.TasksAPI.model.Subtask;
import org.springframework.data.repository.CrudRepository;

public interface SubtaskRepository extends CrudRepository<Subtask, Long> {
}
