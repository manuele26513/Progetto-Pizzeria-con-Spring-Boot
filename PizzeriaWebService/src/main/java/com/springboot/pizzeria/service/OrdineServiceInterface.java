package com.springboot.pizzeria.service;

import java.util.List;

import com.springboot.pizzeria.dto.OrdineDto;

public interface OrdineServiceInterface {
	
	List<OrdineDto> selTutti() throws Exception;
	
	OrdineDto selById(Integer id) throws Exception;
	
	void inserisci(OrdineDto ordineDto) throws Exception;
	
	void elimina (OrdineDto ordineDto) throws Exception;
	
	void updateStatoOrdine(OrdineDto ordineDto) throws Exception;
	
	void updateCodiceOrdine(OrdineDto ordineDto) throws Exception;
	
	

}
