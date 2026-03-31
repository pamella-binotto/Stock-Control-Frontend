package com.binotto.stock.repository;


import com.binotto.stock.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface Repository extends JpaRepository<Product, Long> {
   List<Product> findByName (String name);
}
