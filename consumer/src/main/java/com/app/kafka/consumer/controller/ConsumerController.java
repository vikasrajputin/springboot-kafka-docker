package com.app.kafka.consumer.controller;

import com.app.kafka.consumer.service.KafkaConsumerService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ConsumerController {

    private final KafkaConsumerService kafkaConsumerService;

    public ConsumerController(KafkaConsumerService kafkaConsumerService) {
        this.kafkaConsumerService = kafkaConsumerService;
    }

    @GetMapping("/api/chat/consume/messages")
    public List<String> getMessages() {
        return kafkaConsumerService.getMessages();
    }
}
