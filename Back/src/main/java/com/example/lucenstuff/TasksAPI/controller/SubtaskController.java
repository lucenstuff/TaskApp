package com.example.lucenstuff.TasksAPI.controller;

import com.example.lucenstuff.TasksAPI.model.Subtask;
import com.example.lucenstuff.TasksAPI.model.SuperTask;
import com.example.lucenstuff.TasksAPI.repository.SubtaskRepository;
import com.example.lucenstuff.TasksAPI.repository.SuperTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/subtasks")
public class SubtaskController {

    @Autowired
    private SubtaskRepository subtaskRepository;

    @Autowired
    private SuperTaskRepository superTaskRepository;

    @GetMapping
    public List<Subtask> getAllSubtasks() {
        return (List<Subtask>) subtaskRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Subtask> getSubtaskById(@PathVariable Long id) {
        Optional<Subtask> subtaskOptional = subtaskRepository.findById(id);
        return subtaskOptional.map(subtask -> new ResponseEntity<>(subtask, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/{superTaskId}")
    public ResponseEntity<SuperTask> createSubtask(@PathVariable Long superTaskId, @RequestBody Subtask subtask) {
        Optional<SuperTask> superTaskOptional = superTaskRepository.findById(superTaskId);
        if (superTaskOptional.isPresent()) {
            SuperTask superTask = superTaskOptional.get();
            subtask.setSuperTask(superTask);
            Subtask savedSubtask = subtaskRepository.save(subtask);
            superTask.getSubtasks().add(savedSubtask);
            SuperTask savedSuperTask = superTaskRepository.save(superTask);
            return new ResponseEntity<>(savedSuperTask, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Subtask> updateSubtask(@PathVariable Long id, @RequestBody Subtask subtask) {
        Optional<Subtask> subtaskOptional = subtaskRepository.findById(id);
        if (subtaskOptional.isPresent()) {
            Subtask existingSubtask = subtaskOptional.get();
            existingSubtask.setTitle(subtask.getTitle());
            existingSubtask.setDescription(subtask.getDescription());
            existingSubtask.setStatus(subtask.getStatus());
            existingSubtask.setPriority(subtask.getPriority());
            Subtask updatedSubtask = subtaskRepository.save(existingSubtask);
            return new ResponseEntity<>(updatedSubtask, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSubtask(@PathVariable Long id) {
        subtaskRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
