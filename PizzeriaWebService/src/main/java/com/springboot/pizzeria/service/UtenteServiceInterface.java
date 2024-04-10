package com.springboot.pizzeria.service;

import java.util.List;

import com.springboot.pizzeria.dto.UtenteDto;

public interface UtenteServiceInterface {
	
	List<UtenteDto> selTutti() throws Exception;
	
	UtenteDto selById(Integer id) throws Exception;
	
	UtenteDto selByEmailPassword(UtenteDto utenteDto) throws Exception;	
	
	void elimina(UtenteDto utenteDto) throws Exception;
	
	void inserisci(UtenteDto utenteDto) throws Exception;
	
	void updatePassword(UtenteDto utenteDto) throws Exception;
	
	void updateEmail(UtenteDto utenteDto) throws Exception;
	


}
