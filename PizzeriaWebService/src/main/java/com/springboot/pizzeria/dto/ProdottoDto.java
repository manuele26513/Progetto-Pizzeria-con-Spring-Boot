package com.springboot.pizzeria.dto;

import lombok.Data;

@Data
public class ProdottoDto {
	
	
	private Integer id;
	
	private String nome;
	
	private String codice;
	
	private Double prezzo;
	
	private String tipoProdotto;
	
	private String descrizione;

}
