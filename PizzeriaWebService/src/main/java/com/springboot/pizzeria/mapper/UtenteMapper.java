package com.springboot.pizzeria.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.springboot.pizzeria.dto.UtenteDto;
import com.springboot.pizzeria.entities.Utente;

@Mapper
public interface UtenteMapper {
	
	UtenteMapper MAPPER = Mappers.getMapper(UtenteMapper.class);
	
	UtenteDto mapToUtenteDto(Utente utente);
	
	Utente mapToUtente(UtenteDto utenteDto);

}
