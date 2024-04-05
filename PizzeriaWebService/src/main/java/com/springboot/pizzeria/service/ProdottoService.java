package com.springboot.pizzeria.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.springboot.pizzeria.dto.ProdottoDto;
import com.springboot.pizzeria.entities.Prodotto;
import com.springboot.pizzeria.mapper.ProdottoMapper;
import com.springboot.pizzeria.repository.ProdottoRepository;

@Service
@Transactional
public class ProdottoService implements ProdottoServiceInterface{
	
	@Autowired
	ProdottoRepository prodottoRepository;

	@Override
	public ProdottoDto selById(Integer id) {
		
		Prodotto prodotto = prodottoRepository.findProdottoById(id);
		
		return ProdottoMapper.MAPPER.mapToProdottoDto(prodotto);
	}

	@Override
	public List<ProdottoDto> selTutti() {
		
		List<Prodotto> listaProdotti = prodottoRepository.findAll();
		
		return listaProdotti.stream()
				.map((Prodotto) -> ProdottoMapper.MAPPER.mapToProdottoDto(Prodotto))
				.collect(Collectors.toList());
	}

	@Override
	public void inserisci(ProdottoDto prodottoDto) {
		
		Prodotto prodotto = ProdottoMapper.MAPPER.mapToProdotto(prodottoDto);
		prodottoRepository.saveAndFlush(prodotto);
		
	}

	@Override
	public void elimina(ProdottoDto prodottoDto) {
		
		Prodotto prodotto = ProdottoMapper.MAPPER.mapToProdotto(prodottoDto);
		prodottoRepository.delete(prodotto);
		
	}

	

}
