package com.binotto.stock.controller;


import com.binotto.stock.model.Product;
import com.binotto.stock.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")

public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public List<Product> listProducts() {
        return productService.listAll();
    }
    }

@PostMapping
public Product createProduct(@RequestBody Product product) {
    return productService.save(product);
}

    @GetMapping("/{id}")
    public String findById (@PathVariable long id){
        return "Buscando por ID: " + id;
    }
}
