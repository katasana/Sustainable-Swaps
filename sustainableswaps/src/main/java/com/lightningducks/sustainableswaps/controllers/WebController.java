package com.lightningducks.sustainableswaps.controllers;

import com.lightningducks.sustainableswaps.data.Product;
import com.lightningducks.sustainableswaps.data.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")
public class WebController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/test-get-all")
    public List<Product> testGetAll() {
        return (List<Product>) productRepository.findAll();
    }

    @GetMapping("/products")
    public ResponseEntity<List<Product>> searchResults(@RequestParam(required = false) String keywords) {
        try {
            System.out.println("In results method for keyword(s): " + keywords);
            List<Product> products = new ArrayList<Product>();

            if (keywords == null) {
                productRepository.findAll().forEach(products::add);
            } else {
                productRepository.findByKeywordsContaining(keywords).forEach(products::add);
            }

            if (products.isEmpty()) {
                System.out.println("No products found");
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            System.out.println("Number of products found: " + products.size());

            return new ResponseEntity<>(products, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
