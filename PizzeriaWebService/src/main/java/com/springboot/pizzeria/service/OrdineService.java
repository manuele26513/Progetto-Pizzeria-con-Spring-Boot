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
	private OrdineRepository ordineRepository;

	@Override
	public OrdineDto selById(Integer id) throws Exception {

		try {
			Ordine ordine = ordineRepository.findOrdineById(id);

			return OrdineMapper.MAPPER.mapToOrdineDto(ordine);
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}

	}

	@Override
	public List<OrdineDto> selTutti() throws Exception {
		try {
			List<Ordine> listaOrdini = ordineRepository.findAll();

			return listaOrdini.stream().map((Ordine) -> OrdineMapper.MAPPER.mapToOrdineDto(Ordine))
					.collect(Collectors.toList());
		}catch(Exception e) {
			throw new Exception(e.getMessage());
		}
		
	}

	@Override
	public void inserisci(OrdineDto ordineDto) throws Exception {
		try {
			Ordine ordine = OrdineMapper.MAPPER.mapToOrdine(ordineDto);
			ordineRepository.saveAndFlush(ordine);
		}catch(Exception e) {
			throw new Exception(e.getMessage());
		}
		
	}

	@Override
	public void elimina(OrdineDto ordineDto) throws Exception {
		try {

			Ordine ordine = OrdineMapper.MAPPER.mapToOrdine(ordineDto);

			ordineRepository.delete(ordine);

		} catch (Exception e) {
			throw new Exception(e.getMessage());

		}

	}

	@Override
	public void updateStatoOrdine(OrdineDto ordineDto) throws Exception {
		try {
			Ordine ordine = OrdineMapper.MAPPER.mapToOrdine(ordineDto);
			ordineRepository.updateStatoOrdine(ordine.getId(), ordine.getStatoOrdine());
		}catch(Exception e){
			throw new Exception(e.getMessage());
			
		}
		
	}

	@Override
	public void updateCodiceOrdine(OrdineDto ordineDto) throws Exception {
		try {
			Ordine ordine = OrdineMapper.MAPPER.mapToOrdine(ordineDto);
			ordineRepository.updateCodiceOrdine(ordine.getId(), ordine.getCodice());
		}catch(Exception e) {
			throw new Exception(e.getMessage());
		}
		

	}

}
