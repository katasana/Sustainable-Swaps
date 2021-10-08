package com.lightningducks.sustainableswaps.data;

import org.springframework.data.repository.CrudRepository;
import com.lightningducks.sustainableswaps.data.Product;

// This will be AUTO IMPLEMENTED by Spring into a Bean called productRepository
// CRUD refers to Create, Read, Update, Delete ; Methods used for accessing databases

public interface ProductRepository extends CrudRepository<Product, Integer> {

}
