package com.example.lucenstuff.TaskApp.controller;

import com.example.lucenstuff.TaskApp.model.Page;
import com.example.lucenstuff.TaskApp.repository.PageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/pages")
public class PageController {

    @Autowired
    private PageRepository pageRepository;

    // Create a new page
    @PostMapping
    public Page createPage(@RequestBody Page page) {
        return pageRepository.save(page);
    }

    @GetMapping
    public List<Page> getAllPages() {
        return (List<Page>) pageRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Page> getPageById(@PathVariable(value = "id") Long pageId) {
        Optional<Page> page = pageRepository.findById(pageId);
        return page.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Page> updatePage(@PathVariable(value = "id") Long pageId,
                                           @RequestBody Page pageDetails) {
        return pageRepository.findById(pageId).map(existingPage -> {
            existingPage.setName(pageDetails.getName());
            existingPage.setProgress(pageDetails.getProgress());
            existingPage.setTasks(pageDetails.getTasks());
            Page updatedPage = pageRepository.save(existingPage);
            return ResponseEntity.ok(updatedPage);
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePage(@PathVariable(value = "id") Long pageId) {
        return pageRepository.findById(pageId).map(page -> {
            pageRepository.delete(page);
            return ResponseEntity.ok().build();
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }
}