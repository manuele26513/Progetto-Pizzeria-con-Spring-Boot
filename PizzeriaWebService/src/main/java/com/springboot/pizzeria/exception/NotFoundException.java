package com.springboot.pizzeria.exception;

public class NotFoundException extends Exception{

	
	private static final long serialVersionUID = 2852278740991227656L;
	
	private String messaggio;
	
	public NotFoundException() {
		super();
	}
	
	public NotFoundException(String messaggio) {
		super(messaggio);
		this.messaggio= messaggio;
	}

	public String getMessaggio() {
		return messaggio;
	}

	public void setMessaggio(String messaggio) {
		this.messaggio = messaggio;
	}

}
