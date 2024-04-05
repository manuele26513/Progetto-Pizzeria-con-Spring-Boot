package com.springboot.pizzeria.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.springboot.pizzeria.dto.UtenteDto;
import com.springboot.pizzeria.entities.Utente;
import com.springboot.pizzeria.mapper.UtenteMapper;
import com.springboot.pizzeria.repository.UtenteRepository;

@Transactional // Si inserisce quando questa classe andrà ad interagire con il database
@Service
public class UtenteService implements UtenteServiceInterface {

	@Autowired
	UtenteRepository utenteRepository;
	
	
	
	@Override
	public List<UtenteDto> selTutti() {

		List<Utente> listaUtenti = utenteRepository.findAll();
		
		return listaUtenti.stream()
				.map((Utente) -> UtenteMapper.MAPPER.mapToUtenteDto(Utente))
				.collect(Collectors.toList());
	}

	@Override
	public void elimina(UtenteDto utenteDto) {

		Utente utente = UtenteMapper.MAPPER.mapToUtente(utenteDto);
		utenteRepository.delete(utente);

	}

	@Override
	public void inserisci(UtenteDto utenteDto) {

		Utente utente = UtenteMapper.MAPPER.mapToUtente(utenteDto);
		utenteRepository.saveAndFlush(utente);
		
	}

	@Override
	public void updatePassword(UtenteDto utenteDto) {
		
		
		Utente utente = UtenteMapper.MAPPER.mapToUtente(utenteDto);
		utenteRepository.updatePassword(utente.getId(), utente.getPassword());

	}

	@Override
	public UtenteDto selById(Integer id) {
		
		Utente utente = utenteRepository.findUtenteById(id);
		
		return UtenteMapper.MAPPER.mapToUtenteDto(utente);
		
		
	}

	@Override
	public void updateEmail(UtenteDto utenteDto) {

		Utente utente = UtenteMapper.MAPPER.mapToUtente(utenteDto);
		utenteRepository.updateEmail(utente.getId(), utente.getEmail());

	}

	@Override
	public UtenteDto selByEmailPassword(UtenteDto utenteDto) {
		
		Utente utente = UtenteMapper.MAPPER.mapToUtente(utenteDto);
		
		utente = utenteRepository.findByEmailAndPassword(utenteDto.getEmail(), utenteDto.getPassword());
		
		return UtenteMapper.MAPPER.mapToUtenteDto(utente); 
		
		
	}

	
	

	

}
