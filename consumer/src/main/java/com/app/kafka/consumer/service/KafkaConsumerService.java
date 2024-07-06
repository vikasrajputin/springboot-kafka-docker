package com.app.kafka.consumer.service;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class KafkaConsumerService {

    private final List<String> messages = new ArrayList<>();



    @KafkaListener(topics = "chat-topic", groupId = "chat-group")
    public void listen(String message) {
        messages.add(message);
    }

    public List<String> getMessages() {
        return new ArrayList<>(messages);
    }
}
