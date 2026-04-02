package com.binotto.stock.service;

import com.binotto.stock.model.Product;
import com.binotto.stock.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product save(Product p) {
        return productRepository.save(p);
    }

    public List<Product> findAll() {
        return productRepository.findAll();
    }

    public List<Product> findByName(String name) {
        return productRepository.findByNameContainingIgnoreCase(name);
    }

    public Product findById (long id){
        return productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
    }

    public Product update(Long id, Product p) {
        Product existingProduct = findById(id);

        existingProduct.setName(p.getName());
        existingProduct.setPrice(p.getPrice());
        existingProduct.setQuantity(p.getQuantity());
        existingProduct.setCategory(p.getCategory());

        return productRepository.save(existingProduct);
    }

}