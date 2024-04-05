package com.springboot.pizzeria;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import com.springboot.pizzeria.entities.Utente;
import com.springboot.pizzeria.repository.UtenteRepository;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes = Application.class)
@SpringBootTest
public class UtenteRepositoryTest {
	
	@Autowired
	UtenteRepository utenteRepository;
	
	@Test
	public void TestfindUtenteById() {
		
		Integer id = 4;
		assertThat(utenteRepository.findUtenteById(id))
		.extracting(Utente::getEmail)
		.isEqualTo("manuele.alboni@hotmail.it");
		 
	}

}
