package com.springboot.pizzeria.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.springboot.pizzeria.dto.ProdottoDto;
import com.springboot.pizzeria.entities.Prodotto;

@Mapper
public interface ProdottoMapper {
	
	ProdottoMapper MAPPER = Mappers.getMapper(ProdottoMapper.class);
	
	ProdottoDto mapToProdottoDto(Prodotto prodotto);
	
	Prodotto mapToProdotto(ProdottoDto prodottoDto);
	

}
