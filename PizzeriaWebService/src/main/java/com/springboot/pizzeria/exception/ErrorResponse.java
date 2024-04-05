package com.springboot.pizzeria.exception;

import lombok.Data;

@Data
public class ErrorResponse {
	
	private Integer codice;
	private String messaggio;

}
