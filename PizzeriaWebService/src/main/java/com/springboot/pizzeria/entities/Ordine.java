package com.springboot.pizzeria.entities;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "ordine")
@Data
public class Ordine implements Serializable {

	
	private static final long serialVersionUID = -1837972511692380461L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Integer id;
	
	@Column(name = "CODICE")
	private String codice;
	
	@Column(name = "STATO_ORDINE")
	private String statoOrdine;
	
	@Column(name = "TIPO_CONSEGNA")
	private String tipoConsegna;
	
	@Column(name = "TIPO_PAGAMENTO")
	private String tipoPagamento;
	
	
	@ManyToOne
	@JoinColumn(name="ID_UTENTE", referencedColumnName = "id" , insertable=false, updatable=false, nullable=true)
	@JsonBackReference
	@EqualsAndHashCode.Exclude
	private Utente utente;
	

}
