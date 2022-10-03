package com.MicroChallenge.MicroChallenge.Repository;

import com.MicroChallenge.MicroChallenge.Model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<Product, String> {


}
