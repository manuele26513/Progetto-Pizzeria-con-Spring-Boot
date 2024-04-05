package com.springboot.pizzeria.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.pizzeria.dto.UtenteDto;
import com.springboot.pizzeria.exception.NotFoundException;
import com.springboot.pizzeria.service.UtenteServiceInterface;

@RestController
@RequestMapping("rest/utente")
public class UtenteController {

	@Autowired
	UtenteServiceInterface utenteService;

	private static final Logger logger = LoggerFactory.getLogger(UtenteController.class);
	
	
	@PostMapping(value = "/insert")
	public ResponseEntity<?> insertUtente(@RequestBody UtenteDto utenteDto) throws NotFoundException {	
		
		logger.info("**** Registrazione utente " + utenteDto.getNome() + " " + utenteDto.getCognome() + " in corso... ****");
		
		UtenteDto utenteLoggato = utenteService.selByEmailPassword(utenteDto);

		if (null == utenteLoggato ) {
			
			utenteService.inserisci(utenteDto);
			
			logger.info("**** Registrazione avvenuta con successo ****");
			
			return new ResponseEntity<>(new HttpHeaders(), HttpStatus.CREATED);
		}
		
//		logger.warn("UtenteDto " + utenteDto.getNome() + " " + utenteDto.getCognome() + " già registrato");
//		
//		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		
		throw new NotFoundException("Utente già registrato");

	}
	

	@PutMapping(value = "/updatePassword")
	public ResponseEntity<?> updatePassword(@RequestBody UtenteDto utenteDto) {

		logger.info("**** Modifico la password dell'utente con id: " + utenteDto.getId() + "****");

		utenteService.updatePassword(utenteDto);

		return new ResponseEntity<>(HttpStatus.CREATED);

	}
	
	@PutMapping(value = "/updateEmail")
	public ResponseEntity<?> updateEmail(@RequestBody UtenteDto utenteDto) {

		logger.info("**** Modifico la mail dell'utente con Id: " + utenteDto.getId() + "****");

		utenteService.updateEmail(utenteDto);

		return new ResponseEntity<>(HttpStatus.CREATED);

	}
	

	@GetMapping(value = "/findAll", produces = "application/json")
	public ResponseEntity<List<UtenteDto>> findAllUtente() {

		logger.info("**** Otteniamo tutti gli utenti ****");

		List<UtenteDto> listaUtenti = utenteService.selTutti();

		if (null == listaUtenti) {
			

			return new ResponseEntity<List<UtenteDto>>(HttpStatus.NO_CONTENT);
		}

		logger.info("Numero dei record: " + listaUtenti.size());

		return new ResponseEntity<List<UtenteDto>>(listaUtenti, HttpStatus.OK);

	}

	@GetMapping(value = "/findById/{id}", produces = "application/json")
	public ResponseEntity<UtenteDto> findById(@PathVariable("id") Integer id) throws NotFoundException{

		logger.info("**** Otteniamo l'utente con Id: " + id + "****");

		UtenteDto utenteDto = utenteService.selById(id);

		if (null == utenteDto) {
			
			throw new NotFoundException("Utente Assente o Id Errato");

			// return new ResponseEntity<Utente>(HttpStatus.NO_CONTENT);
		}

		return new ResponseEntity<UtenteDto>(utenteDto, HttpStatus.OK);

	}
	
	@PostMapping(value = "/login")
	public ResponseEntity<UtenteDto> login(@RequestBody UtenteDto utenteDto) throws NotFoundException {

		logger.info("**** Verifichiamo le credenziali dell'Utente con Email: " + utenteDto.getEmail() + "****");

		utenteDto = utenteService.selByEmailPassword(utenteDto);

		if (null == utenteDto) {
			
//			logger.warn("Credenziali errate");
//			
//			return new ResponseEntity<Utente>(HttpStatus.INTERNAL_SERVER_ERROR);
			
			throw new NotFoundException("Credenziali Errate");
		}
		
		logger.info("**** Utente: " + utenteDto.getNome() + " " + utenteDto.getCognome() + " autenticato con successo ****");

		return new ResponseEntity<UtenteDto>(utenteDto, HttpStatus.OK);

	}
	
	

	@DeleteMapping(value = "/delete/{id}")
	public ResponseEntity<?> deleteById(@PathVariable("id") Integer id) throws NotFoundException {

		logger.info("**** Eliminiamo l'utente con id " + id + "****");

		UtenteDto utenteDto = utenteService.selById(id);

		if (null == utenteDto) {
			
			throw new NotFoundException("Utente Assente o Id Errato");
			
//			logger.warn("Impossibile trovare l'utente con id: " + id);
//
//			return new ResponseEntity<>(HttpStatus.NO_CONTENT);

		}

		utenteService.elimina(utenteDto);

		return new ResponseEntity<>(new HttpHeaders(), HttpStatus.OK);

	}

}
