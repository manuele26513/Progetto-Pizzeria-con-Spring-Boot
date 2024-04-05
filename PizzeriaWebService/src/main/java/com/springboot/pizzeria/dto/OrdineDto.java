package com.springboot.pizzeria.dto;

import lombok.Data;

@Data
public class OrdineDto {
	
	private Integer id;
	
	private String codice;
	
	private String statoOrdine;
	
	private String tipoConsegna;
	
	private String tipoPagamento;
	
	
	

}
