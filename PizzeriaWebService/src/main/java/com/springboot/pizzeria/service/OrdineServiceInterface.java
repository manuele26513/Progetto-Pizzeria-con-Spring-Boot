package com.springboot.pizzeria.service;

import java.util.List;

import com.springboot.pizzeria.dto.OrdineDto;

public interface OrdineServiceInterface {
	
	List<OrdineDto> selTutti();
	
	OrdineDto selById(Integer id);
	
	void inserisci(OrdineDto ordineDto);
	
	void elimina (OrdineDto ordineDto);
	
	void updateStatoOrdine(OrdineDto ordineDto);
	
	void updateCodiceOrdine(OrdineDto ordineDto);
	
	

}
