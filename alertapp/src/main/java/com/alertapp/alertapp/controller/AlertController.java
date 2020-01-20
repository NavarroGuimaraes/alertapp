package com.alertapp.alertapp.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alertapp.alertapp.exception.AlertNotFoundException;
import com.alertapp.alertapp.model.Alert;
import com.alertapp.alertapp.repository.AlertRepository;

@CrossOrigin(origins = "http://localhost:4200")//Enable CORS on the server.
@RestController 
@RequestMapping("/alertapi") //ensures that any http requests to alertpi are mapped to AlertController Class
public class AlertController {
	@Autowired
	private AlertRepository alertRepository;
	
	/**
	 * This method is used to return a list of all Alerts in the database.
	 * It's called at the HTTP GET method.
	 * @return List<Alert> A list of all Alerts in the database
	 */
	@GetMapping("/alerts")
	public List<Alert> getAllAlerts(){
		return alertRepository.findAll();
	}
	
	@GetMapping("/alerts/{id}")
	public ResponseEntity<Alert> getAlertById(@PathVariable(value = "id") Long alertId)
		throws AlertNotFoundException {
		//Serach the provided Id
		//If the Id was no found, thow the not found exception
		Alert alert = alertRepository.findById(alertId)
				.orElseThrow(() -> new AlertNotFoundException(
						"Não foi possível localizar um aviso com o Id ::" + alertId));
		//returns a builder with the ok status and the alert in the body
		return ResponseEntity.ok().body(alert);
	}
	
	@PostMapping("/alerts")
	public Alert createAlert(@Valid @RequestBody Alert alert) {
		alert.setCreatedAt(new Date());
		return alertRepository.save(alert);
	}
	
	@PutMapping("/alerts/{id}")
	public ResponseEntity<Alert> updateAlert(@PathVariable(value="id") Long alertId, 
			@Valid @RequestBody Alert alertDetails) 
		throws AlertNotFoundException {
		
		//Searches the alert with the id provided by the path 
		//and if it's not found throws a not fund excpetion
		Alert alert = alertRepository
				.findById(alertId)
				.orElseThrow(() -> new AlertNotFoundException(
						"Não será possível atualizar o aviso pois não foi encontrado um aviso com o Id : "+alertId));
		
		//Update the values provided by the user
		alert.setTitle(alertDetails.getTitle());
		alert.setDescription(alertDetails.getDescription());
		if (alert.getSeenAt() == null) {
			alert.setSeenAt(new Date());
		}
		//the save method returns the entyty and we're gonna return it in the ok status
		final Alert alertUpdated = alertRepository.save(alert);
		return ResponseEntity.ok(alertUpdated);
	}
	
	@DeleteMapping("/alerts/{id}") 
	public Map<String, Boolean> deleteAlert(@PathVariable(value="id") Long alertId)
		throws AlertNotFoundException {
		
		Alert alert = alertRepository.findById(alertId)
				.orElseThrow(() -> new AlertNotFoundException(
						"Não será possível deletar o aviso pois não foi encontrado um aviso com o Id ::"));
		alertRepository.delete(alert);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
	
	
}