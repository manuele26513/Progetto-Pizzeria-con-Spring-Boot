package com.springboot.pizzeria.service;

import java.util.List;

import com.springboot.pizzeria.dto.UtenteDto;

public interface UtenteServiceInterface {
	
	List<UtenteDto> selTutti();
	
	UtenteDto selById(Integer id);
	
	UtenteDto selByEmailPassword(UtenteDto utenteDto);	
	
	void elimina(UtenteDto utenteDto);
	
	void inserisci(UtenteDto utenteDto);
	
	void updatePassword(UtenteDto utenteDto);
	
	void updateEmail(UtenteDto utenteDto);
	


}
