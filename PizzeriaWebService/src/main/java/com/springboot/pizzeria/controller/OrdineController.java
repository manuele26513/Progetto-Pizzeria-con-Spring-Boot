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

import com.springboot.pizzeria.dto.OrdineDto;
import com.springboot.pizzeria.service.OrdineServiceInterface;

@RestController
@RequestMapping("rest/ordine")
public class OrdineController {

	@Autowired
	private OrdineServiceInterface ordineService;

	private static final Logger logger = LoggerFactory.getLogger(OrdineController.class);

	@PostMapping(value = "/insert")
	public ResponseEntity<?> insertOrdine(@RequestBody OrdineDto ordineDto) {

		logger.info("**** Inserisco l'ordine ****");

		try {
			ordineService.inserisci(ordineDto);
			logger.info("**** Ordine inserito ****");

			return new ResponseEntity<>(new HttpHeaders(), HttpStatus.CREATED);
		} catch (Exception e) {

			logger.error("Errore durante l'operazione", e);

			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

		}

	}

	@PutMapping(value = "/updateStatoOrdine")
	public ResponseEntity<?> updateStatoOrdine(@RequestBody OrdineDto ordineDto) {

		logger.info("**** Modifico lo Stato dell'ordine con id: " + ordineDto.getId() + "****");

		try {
			ordineService.updateStatoOrdine(ordineDto);

			return new ResponseEntity<>(new HttpHeaders(), HttpStatus.CREATED);
		} catch (Exception e) {
			logger.error("Errore durante l'operazione", e);

			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@PutMapping(value = "/updateCodice")
	public ResponseEntity<?> updateCodice(@RequestBody OrdineDto ordineDto) {

		logger.info("**** Modifico il codice dell'ordine con Id: " + ordineDto.getId() + "****");

		try {
			ordineService.updateCodiceOrdine(ordineDto);

			return new ResponseEntity<>(HttpStatus.CREATED);
		} catch (Exception e) {
			logger.error("Errore durante l'operazione", e);

			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@GetMapping(value = "/findAll", produces = "application/json")
	public ResponseEntity<List<OrdineDto>> findAllOrdine() {

		logger.info("**** Otteniamo tutti gli ordini ****");

		try {
			List<OrdineDto> listaOrdini = ordineService.selTutti();

			if (null == listaOrdini) {

				return new ResponseEntity<List<OrdineDto>>(HttpStatus.NO_CONTENT);
			}

			logger.info("Numero dei record: " + listaOrdini.size());

			return new ResponseEntity<List<OrdineDto>>(listaOrdini, HttpStatus.OK);
		} catch (Exception e) {
			logger.error("Errore durante l'operazione", e);

			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@GetMapping(value = "/findById/{id}", produces = "application/json")
	public ResponseEntity<OrdineDto> findById(@PathVariable("id") Integer id) {
		
		logger.info("**** Otteniamo l'ordine con id " + id + "****");
		
		try {
			OrdineDto ordineDto = ordineService.selById(id);

			if (null == ordineDto) {

				logger.warn("Impossibile trovare l'ordine con id: " + id);

				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<OrdineDto>(ordineDto, HttpStatus.OK);

		} catch (Exception e) {
			logger.error("Errore durante l'operazione", e);

			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

		}

	}

	@DeleteMapping(value = "/delete/{id}")
	public ResponseEntity<?> deleteById(@PathVariable("id") Integer id) {

		logger.info("**** Eliminiamo l'ordine con Id: " + id + "****");

		try {
			OrdineDto ordineDto = ordineService.selById(id);

			if (null == ordineDto) {

				logger.warn("Impossibile trovare l'ordine con id: " + id);

				return new ResponseEntity<>(HttpStatus.NO_CONTENT);

			}

			ordineService.elimina(ordineDto);

			return new ResponseEntity<>(new HttpHeaders(), HttpStatus.OK);

		} catch (Exception e) {

			logger.error("Errore durante l'operazione", e);

			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
