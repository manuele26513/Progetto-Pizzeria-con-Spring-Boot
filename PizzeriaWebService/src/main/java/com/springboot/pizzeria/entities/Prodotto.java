package com.springboot.pizzeria.entities;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "prodotto")
@Data
public class Prodotto implements Serializable{

	
	private static final long serialVersionUID = -3964859376990245885L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Integer id;
	
	@Column(name = "NOME")
	private String nome;
	
	@Column(name = "CODICE")
	private String codice;
	
	@Column(name = "PREZZO")
	private Double prezzo;
	
	@Column(name = "TIPO_PRODOTTO")
	private String tipoProdotto;
	
	@Column(name = "DESCRIZIONE")
	private String descrizione;

}
