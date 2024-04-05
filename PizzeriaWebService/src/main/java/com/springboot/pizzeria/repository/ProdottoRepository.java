package com.springboot.pizzeria.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.pizzeria.entities.Prodotto;

@Repository
public interface ProdottoRepository extends JpaRepository<Prodotto, Integer>{
	
	Prodotto findProdottoById(Integer id);
	
	

	

}
