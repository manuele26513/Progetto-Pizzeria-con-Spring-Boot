package com.springboot.pizzeria.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.springboot.pizzeria.dto.OrdineDto;
import com.springboot.pizzeria.entities.Ordine;

@Mapper
public interface OrdineMapper {
	
	OrdineMapper MAPPER = Mappers.getMapper(OrdineMapper.class);
	
	OrdineDto mapToOrdineDto(Ordine ordine);
	
	Ordine mapToOrdine(OrdineDto ordineDto);

}
