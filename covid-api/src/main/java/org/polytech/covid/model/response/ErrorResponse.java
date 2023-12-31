package org.polytech.covid.model.response;

import org.springframework.http.HttpStatus;

public class ErrorResponse {
    HttpStatus status;
    String message;

    public ErrorResponse(HttpStatus status, String message) {
        this.status = status;
        this.message = message;
    }

    public HttpStatus getStatus(){
        return status;
    }

    public String getMessage(){
        return message;
    }

    public void setStatus(HttpStatus status){
        this.status = status;
    }

    public void setMessage(String message){
        this.message = message;
    }
}
