package com.example.lucenstuff.TasksAPI.model;

import jakarta.persistence.*;

@Entity
public class Subtask {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String description;
    private String status;
    private int priority;

    @ManyToOne
    @JoinColumn(name = "super_task_id")
    private SuperTask superTask;

    public Subtask() {
    }

    public Subtask(Long id, String title, String description, String status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        if (priority < 1 || priority > 5) {
            throw new IllegalArgumentException("Priority must be between 1 and 5");
        } else {
            this.priority = priority;
        }
    }

    public SuperTask getSuperTask() {
        return superTask;
    }

    public void setSuperTask(SuperTask superTask) {
        this.superTask = superTask;
    }
}


