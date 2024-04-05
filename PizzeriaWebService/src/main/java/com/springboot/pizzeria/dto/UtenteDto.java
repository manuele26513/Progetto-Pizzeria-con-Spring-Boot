package com.springboot.pizzeria.dto;

import java.util.List;

import lombok.Data;


@Data
public class UtenteDto {

	private Integer id;
	
	private String nome;
	
	private String cognome;
	
	private String email;
	
	private String password;
	
	private String ruolo;
	
	private List<OrdineDto> listaOrdini;
}
