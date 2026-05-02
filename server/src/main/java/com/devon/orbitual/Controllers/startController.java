package com.devon.orbitual.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class startController {
    
    @GetMapping("/health")
    public String health() {
        return "OK";
    }
}
