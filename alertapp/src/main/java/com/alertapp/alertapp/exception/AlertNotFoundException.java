package com.alertapp.alertapp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * This Class will Be called when the http status have the NOT_FOUND value.
 * @author NAGS
 *
 */
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class AlertNotFoundException extends Exception {
	private static final long serialVersionUID = 1L;
	
	public AlertNotFoundException(String messageToUser) {
		super(messageToUser);
	}
}