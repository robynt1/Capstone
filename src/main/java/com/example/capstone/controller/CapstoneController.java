package com.example.capstone.controller;

import com.example.capstone.model.Capstone;
import com.example.capstone.service.CapstoneService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CapstoneController {

    private final CapstoneService service;

    public CapstoneController(CapstoneService service) {
        this.service = service;
    }

    @GetMapping("/capstone")
    List<Capstone> getAll() {
        return service.getAll();
    }

    @GetMapping("/capstone/applicant")
    Optional<Capstone> getApplicant(@RequestParam("id") Long id) {
        return service.getCustomer(id);
    }

    @PostMapping("/capstone")
    Capstone save(@RequestBody Capstone capstone) {
        return service.save(capstone);
    }

    @DeleteMapping("/capstone/delete")
    void delete(@RequestParam("id") Long id) {
        service.deleteCustomer(id);
    }

    @PutMapping("/capstone/customerDetails")
    void update(@RequestParam("id") Long id, @RequestParam("newTelephoneNumber") String newTelephoneNumber) {
        service.updateCustomer(id, newTelephoneNumber);
    }
}

