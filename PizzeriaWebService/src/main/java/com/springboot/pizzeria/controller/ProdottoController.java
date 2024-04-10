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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.pizzeria.dto.ProdottoDto;
import com.springboot.pizzeria.service.ProdottoServiceInterface;

@RestController
@RequestMapping("rest/prodotto")
public class ProdottoController {

	@Autowired
	private ProdottoServiceInterface prodottoService;

	private static final Logger logger = LoggerFactory.getLogger(ProdottoController.class);

	@PostMapping(value = "/insertOrUpdate")
	public ResponseEntity<?> insertProdotto(@RequestBody ProdottoDto prodottoDto) {
		
		try {
			
			if (null == prodottoDto.getId()) {

				logger.info("**** Inserisco un prodotto con codice " + prodottoDto.getCodice() + "****");

				prodottoService.inserisci(prodottoDto);

				logger.info("**** Prodotto con Codice: " + prodottoDto.getCodice() + " inserito ****");

				return new ResponseEntity<>(new HttpHeaders(), HttpStatus.CREATED);

			} 
				
				logger.info("**** Modifico il prodotto con id " + prodottoDto.getId() + "****");
				
				prodottoService.inserisci(prodottoDto);
				
				logger.info("**** Prodotto con Id " + prodottoDto.getId() + " modificato ****");

				return new ResponseEntity<>(new HttpHeaders(), HttpStatus.CREATED);
			}catch (Exception e){
				logger.error("Errore durante l'operazione", e);

				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		



	@GetMapping(value = "/findAll", produces = "application/json")
	public ResponseEntity<List<ProdottoDto>> findAllProdotto() {

		logger.info("**** Otteniamo tutti i Prodotti ****");
		
		try {
			List<ProdottoDto> listaProdotti = prodottoService.selTutti();

			if (listaProdotti.size() == 0) {

				return new ResponseEntity<List<ProdottoDto>>(HttpStatus.NO_CONTENT);
			}

			logger.info("Numero dei record: " + listaProdotti.size());

			return new ResponseEntity<List<ProdottoDto>>(listaProdotti, HttpStatus.OK);
		}catch (Exception e) {
			logger.error("Errore durante l'operazione", e);

			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

		

	}

	@GetMapping(value = "/findById/{id}", produces = "application/json")
	public ResponseEntity<ProdottoDto> findById(@PathVariable("id") Integer id) {

		logger.info("**** Otteniamo il Prodotto con Id: " + id + "****");
		
		try {
			ProdottoDto prodottoDto = prodottoService.selById(id);

			if (null == prodottoDto) {


				logger.warn("Impossibile trovare il Prodotto con id: " + id);

				return new ResponseEntity<ProdottoDto>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<ProdottoDto>(prodottoDto, HttpStatus.OK);
		}catch (Exception e) {
			logger.error("Errore durante l'operazione", e);

			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

		

	}

	@DeleteMapping(value = "/delete/{id}")
	public ResponseEntity<?> deleteById(@PathVariable("id") Integer id) {

		logger.info("**** Eliminiamo il Prodotto con Id: " + id + "****");
		
		try {
			ProdottoDto prodottoDto = prodottoService.selById(id);

			if (null == prodottoDto) {


				logger.warn("Impossibile trovare il Prodotto con id: " + id);

				return new ResponseEntity<>(HttpStatus.NO_CONTENT);

			}

			prodottoService.elimina(prodottoDto);

			return new ResponseEntity<>(new HttpHeaders(), HttpStatus.OK);

		}catch (Exception e) {
			logger.error("Errore durante l'operazione", e);

			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		}

		

}
