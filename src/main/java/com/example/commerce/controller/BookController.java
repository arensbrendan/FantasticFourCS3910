package com.example.commerce.controller;

import com.example.commerce.domain.Book;
import com.example.commerce.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class BookController {

    private final BookService bookService;


    @GetMapping("/book")
    public List<Book> findAll() {
        return bookService.findAll();
//        return new ResponseEntity<String>("ok", HttpStatus.OK);
    }


    @PostMapping("/book")
    public ResponseEntity<?> save(@RequestBody Book book){
        System.out.println("title " + book.getTitle());
        System.out.println("author " + book.getAuthor());
        return new ResponseEntity<>(bookService.create(book), HttpStatus.CREATED);

    }

}
