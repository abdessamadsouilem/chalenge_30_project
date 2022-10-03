package com.MicroChallenge.MicroChallenge.Service;


import com.MicroChallenge.MicroChallenge.Dto.ProductRequest;
import com.MicroChallenge.MicroChallenge.Dto.ProductResponse;
import com.MicroChallenge.MicroChallenge.Model.Product;
import com.MicroChallenge.MicroChallenge.Repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProductService {

    private final ProductRepository productRepository;


    public void createProduct(ProductRequest productRequest) {

        Product product = Product.builder()
                .name(productRequest.getName())
                .description(productRequest.getDescription())
                .price(productRequest.getPrice())
                .build();

        productRepository.save(product);
        log.info("Product {} created successfully", product.getId());

    }


    public List<ProductResponse> getAllProducts() {
        List<Product> products = productRepository.findAll();

       return products.stream().map(this::mapToProductResponse).toList();
    }

    private ProductResponse mapToProductResponse(Product product) {
        return ProductResponse.builder()
                .id(product.getId())
                .name(product.getName())
                .description(product.getDescription())
                .price(product.getPrice())
                .build();
    }
}
