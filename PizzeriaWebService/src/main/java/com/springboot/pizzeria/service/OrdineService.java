package com.springboot.pizzeria.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.springboot.pizzeria.dto.OrdineDto;
import com.springboot.pizzeria.entities.Ordine;
import com.springboot.pizzeria.mapper.OrdineMapper;
import com.springboot.pizzeria.repository.OrdineRepository;

@Service
@Transactional
public class OrdineService implements OrdineServiceInterface {
	
	@Autowired
	OrdineRepository ordineRepository;

	@Override
	public OrdineDto selById(Integer id) {
		
		Ordine ordine = ordineRepository.findOrdineById(id);
		
		return OrdineMapper.MAPPER.mapToOrdineDto(ordine);
	}

	@Override
	public List<OrdineDto> selTutti() {
		
		List<Ordine> listaOrdini = ordineRepository.findAll();
		
		return listaOrdini.stream()
				.map((Ordine) -> OrdineMapper.MAPPER.mapToOrdineDto(Ordine))
				.collect(Collectors.toList());
	}

	@Override
	public void inserisci(OrdineDto ordineDto) {
		
		Ordine ordine = OrdineMapper.MAPPER.mapToOrdine(ordineDto);
		ordineRepository.saveAndFlush(ordine);
	}

	@Override
	public void elimina(OrdineDto ordineDto) {
		
		Ordine ordine= OrdineMapper.MAPPER.mapToOrdine(ordineDto);
		
		ordineRepository.delete(ordine);
		           
	}

	@Override
	public void updateStatoOrdine(OrdineDto ordineDto) {
		
		Ordine ordine = OrdineMapper.MAPPER.mapToOrdine(ordineDto);
		ordineRepository.updateStatoOrdine(ordine.getId(), ordine.getStatoOrdine());
	}

	@Override
	public void updateCodiceOrdine(OrdineDto ordineDto) {
		
		Ordine ordine = OrdineMapper.MAPPER.mapToOrdine(ordineDto);
		ordineRepository.updateCodiceOrdine(ordine.getId(), ordine.getCodice());
		
	}

}
