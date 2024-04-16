package com.example.lucenstuff.TaskApp.model;

import jakarta.persistence.*;

@Entity
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private boolean isDone;
    private int priority;

    public Task() {
    }

    @ManyToOne
    @JoinColumn(name = "page_id")
    private Page page;

    public Task(String name, boolean isDone, int priority) {
        this.name = name;
        this.isDone = isDone;
        this.priority = priority;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isDone() {
        return isDone;
    }

    public void setDone(boolean done) {
        isDone = done;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        if (priority < 1 || priority > 4) {
            throw new IllegalArgumentException("Priority must be between 1 and 4");
        } else {
            this.priority = priority;
        }
    }

    public Page getPage() {
        return page;
    }

    public void setPage(Page page) {
        this.page = page;
    }


}
