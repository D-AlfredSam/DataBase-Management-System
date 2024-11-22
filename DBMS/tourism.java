package com.samarundbms.DBMS;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Available_buses")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class tourism {

    @Id
    private ObjectId id;
    private String sleeper_seater;
    private String ac_non_ac;
    private String price;
    private String aseats;
    private String depart_date;
    private String depart_place;
    private String depart_time;
    private String dropping_date;
    private String dropping_place;
    private String route;
    private String travels;
    private String dropping_time;
    private String reviews;


    // Getter and Setter for acNonAc
    public String getAcNonAc() {

        return ac_non_ac;
    }

    public void setAcNonAc(String acNonAc) {
        this.ac_non_ac = acNonAc;
    }


    public String getAseats() {
        return aseats;
    }

    public void setAseats(String aaseats) {
        this.aseats = aaseats;
    }

//   {
//
//  'sleeper/seater': 'sleeper',
//  'ac/non-ac': 'non-ac',
//  price: 400,
//  aseats: 10,
//  depart_date: '12-06-24',
//  depart_place: 'chennai-thenkasi',
//  depart_time: '7:00am',
//  dropping_date: '13-06-24',
//  dropping_place: 'thenkasi bus stand',
//  id: 'a10',
//  route: 'chennai - kanyakumari',
//  travels: 'setc',
//  dropping_time: '3:00pm',
//  reviews: 4
//}
}
