package com.springboot.pizzeria.service;

import java.util.List;

import com.springboot.pizzeria.dto.ProdottoDto;

public interface ProdottoServiceInterface {

	ProdottoDto selById(Integer id) throws Exception;
	
	List<ProdottoDto> selTutti() throws Exception;
	
	void inserisci(ProdottoDto prodottoDto) throws Exception;
	
	void elimina(ProdottoDto prodottoDto) throws Exception;
	
	
}
