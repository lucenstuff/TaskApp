package com.example.lucenstuff.TaskApp.repository;

import com.example.lucenstuff.TaskApp.model.Page;
import com.example.lucenstuff.TaskApp.model.Task;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TaskRepository extends CrudRepository<Task, Long> {
    List<Task> findByPage(Page page);
}
