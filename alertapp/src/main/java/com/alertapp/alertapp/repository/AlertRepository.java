package com.alertapp.alertapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alertapp.alertapp.model.Alert;

@Repository
public interface AlertRepository extends JpaRepository<Alert, Long>{
	
}