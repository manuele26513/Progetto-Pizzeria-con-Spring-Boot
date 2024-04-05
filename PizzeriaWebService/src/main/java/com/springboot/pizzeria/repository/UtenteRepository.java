package com.springboot.pizzeria.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.springboot.pizzeria.entities.Utente;

@Repository
public interface UtenteRepository extends JpaRepository<Utente, Integer> { //Il primo paramentro rappresenta il tipo, il secondo rappresenta il tipo della chiave primaria.
	
		//Spring Data JPA -  Criteria API
		 Utente findUtenteById(Integer id);
		 
		//Spring Data JPA -  Criteria API
		 Utente findByEmailAndPassword(String email, String password); 
	
	
		//Native Query
		 @Modifying
		 @Query(value = "UPDATE utente SET PASSWORD = ?2 WHERE ID = ?1", nativeQuery = true)
		 void updatePassword(Integer id, String password);
		 
		//Native Query
		 @Modifying
		 @Query(value = "UPDATE utente SET EMAIL = ?2 WHERE ID = ?1", nativeQuery = true)
		 void updateEmail(Integer id, String email);
		 
		
}
