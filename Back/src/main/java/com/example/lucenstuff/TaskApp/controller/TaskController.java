package com.example.lucenstuff.TaskApp.controller;

import com.example.lucenstuff.TaskApp.model.Page;
import com.example.lucenstuff.TaskApp.model.Task;
import com.example.lucenstuff.TaskApp.repository.PageRepository;
import com.example.lucenstuff.TaskApp.repository.TaskRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired
    private PageRepository pageRepository;

    @Autowired
    private TaskRepository taskRepository;

    @PostMapping
    @Transactional
    public ResponseEntity<Task> createTask(@RequestBody Task task) {
        Optional<Page> optionalPage = pageRepository.findById(task.getPage().getId());

        if (optionalPage.isPresent()) {
            Page page = optionalPage.get();

            task.setPage(page);

            Task newTask = taskRepository.save(task);

            updatePageProgress(page);

            return ResponseEntity.ok(newTask);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public List<Task> getAllTasks() {
        return (List<Task>) taskRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable(value = "id") Long taskId) {
        Optional<Task> task = taskRepository.findById(taskId);
        return task.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity<Task> updateTask(@PathVariable(value = "id") Long taskId,
                                           @RequestBody Task taskDetails) {
        return taskRepository.findById(taskId).map(existingTask -> {
            existingTask.setName(taskDetails.getName());
            existingTask.setDone(taskDetails.isDone());
            existingTask.setPriority(taskDetails.getPriority());
            existingTask.setPage(taskDetails.getPage());
            Task updatedTask = taskRepository.save(existingTask);
            updatePageProgress(updatedTask.getPage());
            return ResponseEntity.ok(updatedTask);
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTask(@PathVariable(value = "id") Long taskId) {
        return taskRepository.findById(taskId).map(task -> {
            taskRepository.delete(task);
            return ResponseEntity.ok().build();
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    private void updatePageProgress(Page page) {
        List<Task> tasks = taskRepository.findByPage(page);

        if(tasks.isEmpty()) {
            page.setProgress(0);
            pageRepository.save(page);
            return;
    }
        double totalWeight = tasks.stream().mapToDouble(Task::getPriority).sum();

        double weightedProgressSum = tasks.stream()
                .filter(Task::isDone)
                .mapToDouble(Task::getPriority)
                .sum();

        double progress = (weightedProgressSum / totalWeight) * 100;
        page.setProgress((int) Math.round(progress));
        pageRepository.save(page);
    }
}