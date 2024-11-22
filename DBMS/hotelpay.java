package com.samarundbms.DBMS;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "Hotel_receipt")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class hotelpay {
    private String fullName;
    private String email;
    private String phone;
    private String hotelName;
    private String roomType;
    private String cardNumber;
    private String expiryDate;
    private String cvv;
    private String upiId;
}
