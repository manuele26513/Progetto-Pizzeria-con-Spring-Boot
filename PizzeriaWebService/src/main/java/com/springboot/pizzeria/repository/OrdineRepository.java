package com.springboot.pizzeria.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.springboot.pizzeria.entities.Ordine;

@Repository
public interface OrdineRepository extends JpaRepository<Ordine, Integer> {
	
	Ordine findOrdineById(Integer id);
	
	
	 @Modifying
	 @Query(value = "UPDATE ordine SET STATO_ORDINE = ?2 WHERE ID = ?1", nativeQuery = true)
	 void updateStatoOrdine(Integer id, String statoOrdine);
	 
	 @Modifying
	 @Query(value = "UPDATE ordine SET CODICE = ?2 WHERE ID = ?1", nativeQuery = true)
	 void updateCodiceOrdine(Integer id, String codice);

}
                       