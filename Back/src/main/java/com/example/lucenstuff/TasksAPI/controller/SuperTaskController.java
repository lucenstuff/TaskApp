package com.example.lucenstuff.TasksAPI.controller;

import com.example.lucenstuff.TasksAPI.model.SuperTask;
import com.example.lucenstuff.TasksAPI.repository.SuperTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/supertasks")
public class SuperTaskController {

    @Autowired
    private SuperTaskRepository superTaskRepository;

    @GetMapping
    public List<SuperTask> getAllSuperTasks() {
        return (List<SuperTask>) superTaskRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<SuperTask> getSuperTaskById(@PathVariable Long id) {
        Optional<SuperTask> superTaskOptional = superTaskRepository.findById(id);
        return superTaskOptional.map(superTask -> new ResponseEntity<>(superTask, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<SuperTask> createSuperTask(@RequestBody SuperTask superTask) {
        SuperTask savedSuperTask = superTaskRepository.save(superTask);
        return new ResponseEntity<>(savedSuperTask, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<SuperTask> updateSuperTask(@PathVariable Long id, @RequestBody SuperTask superTask) {
        Optional<SuperTask> superTaskOptional = superTaskRepository.findById(id);
        if (superTaskOptional.isPresent()) {
            SuperTask existingSuperTask = superTaskOptional.get();
            existingSuperTask.setTitle(superTask.getTitle());
            existingSuperTask.setStatus(superTask.getStatus());
            existingSuperTask.setProgress(superTask.getProgress());
            SuperTask updatedSuperTask = superTaskRepository.save(existingSuperTask);
            return new ResponseEntity<>(updatedSuperTask, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSuperTask(@PathVariable Long id) {
        superTaskRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
