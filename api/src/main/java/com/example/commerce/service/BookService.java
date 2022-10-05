package com.example.commerce.service;

import com.example.commerce.domain.Book;
import com.example.commerce.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class BookService {

    private final BookRepository bookRepository;

    public Book create(Book book){
        return bookRepository.save(book);
    }



}
