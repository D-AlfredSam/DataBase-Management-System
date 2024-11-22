
package com.samarundbms.DBMS;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.origin.Origin;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "*", allowCredentials = "true")
@RestController
@RequestMapping("/api/company")
public class controller{

    @Autowired
    private service service;
    @GetMapping()
    public ResponseEntity<List<tourism>> resp(){
        //return new ResponseEntity<String>("ALL movies", HttpStatus.OK);
        System.out.println(service.allbuses());
        return new ResponseEntity<List<tourism>>(service.allbuses(),HttpStatus.OK);
    }



    @GetMapping("/{selection}")
    public ResponseEntity<Optional<List<tourism>>> single_bus_resp(@PathVariable String selection){
        //return new ResponseEntity<String>("ALL movies", HttpStatus.OK);
        List<String> values = new ArrayList<>();

        // Adding values to the list
        values.add("ac_non_ac");
        return new ResponseEntity<Optional<List<tourism>>>(service.findac(values,selection),HttpStatus.OK);
    }

    @GetMapping("/find")
    public ResponseEntity<Optional<List<tourism>>> multibus(){
        Map<String, Object> conditions = Map.of(
                "ac_non_ac", "ac",
                "aseats", "8"
        );
        return new ResponseEntity<Optional<List<tourism>>>(service.findMany(conditions),HttpStatus.OK);
    }

    @GetMapping("/update")
    public ResponseEntity<String> multiupdate(){
        Map<String, Object> conditions = Map.of(
                "ac_non_ac", "ac_non_ac",
                "aseats", "8"
        );

        Map<String, Object> updates = Map.of(
                "ac_non_ac", "ac",
                "aseats", "8"
        );
        
        return new ResponseEntity<>(service.updateMany(conditions,updates),HttpStatus.OK);
    }

    @GetMapping("/insert")
    public ResponseEntity<Object> insert(){
        tourism tour = new tourism();
        tour.setAcNonAc("ac");
        tour.setAseats("100");
        System.out.println(tour);
        return new ResponseEntity<Object>(service.insertOne(tour),HttpStatus.OK);
    }

    @GetMapping("/delete")
    public ResponseEntity<String> delete(){
        return new ResponseEntity<String>(service.deleteByAcNonAc("non-ac"),HttpStatus.OK);
    }

    @PostMapping("/hotel/book")
    public ResponseEntity<Object> bookHotel(@ModelAttribute hotelpay bookingRequest) {
        System.out.println(bookingRequest);
        return new ResponseEntity<Object>(service.insertOneHotelPay(bookingRequest),HttpStatus.OK);
    }

    @PostMapping("/place/book")
    public ResponseEntity<Object> bookHotel(@ModelAttribute placepay bookingRequest) {
        System.out.println(bookingRequest);
        return new ResponseEntity<Object>(service.insertOnePlacePay(bookingRequest),HttpStatus.OK);
    }



}