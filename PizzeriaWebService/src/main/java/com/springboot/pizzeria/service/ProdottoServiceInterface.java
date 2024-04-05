package com.springboot.pizzeria.service;

import java.util.List;

import com.springboot.pizzeria.dto.ProdottoDto;

public interface ProdottoServiceInterface {

	ProdottoDto selById(Integer id);
	
	List<ProdottoDto> selTutti();
	
	void inserisci(ProdottoDto prodottoDto);
	
	void elimina(ProdottoDto prodottoDto);
	
	
}
