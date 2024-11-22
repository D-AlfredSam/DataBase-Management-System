package com.samarundbms.DBMS;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "Tourist_receipt")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class placepay {
    private String place;
    private String fullName;
    private String email;
    private String phone;
    private String date;
    private String cardNumber;
    private String expiryDate;
    private String cvv;
    private String upiId;



    public String getPlace() {
        return place;
    }

    public String getFullName() {
        return fullName;
    }

    public String getEmail() {
        return email;
    }

    public String getPhone() {
        return phone;
    }

    public String getDate() {
        return date;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public String getExpiryDate() {
        return expiryDate;
    }

    public String getCvv() {
        return cvv;
    }

    public String getUpiId() {
        return upiId;
    }


}


