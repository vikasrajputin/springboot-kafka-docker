package com.app.kafka.producer.controller;


import com.app.kafka.producer.service.KafkaProducerService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/chat")
public class ChatController {

    private final KafkaProducerService kafkaProducerService;

    public ChatController(KafkaProducerService kafkaProducerService) {
        this.kafkaProducerService = kafkaProducerService;
    }

    @PostMapping("/send")
    public void sendMessage(@RequestParam String message) {
        kafkaProducerService.sendMessage(message);
    }
}
