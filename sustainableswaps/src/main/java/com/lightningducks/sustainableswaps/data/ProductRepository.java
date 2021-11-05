package com.lightningducks.sustainableswaps.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

// This will be AUTO IMPLEMENTED by Spring into a Bean called productRepository
// CRUD refers to Create, Read, Update, Delete ; Methods used for accessing databases

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    List<Product> findByKeywordsContaining(String keywords);
}
