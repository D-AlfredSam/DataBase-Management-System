package com.samarundbms.DBMS;

import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class service {
    @Autowired
    private tourrepository rep;
    @Autowired
    private hotelrepository hotelrep;
    @Autowired
    private placerepository placerep;

    public List<tourism> allbuses(){
        return rep.findAll();
    }

//    public Optional<tourism> onebus(ObjectId id){
//        return rep.findById(id);
//    }

//    public Optional<List<tourism>> findBysleeper_seater(String sleeper_seater){
//        return rep.findCustomTourismBySelected(sleeper_seater);
//    }

    public Optional<List<tourism>> findac(List<String> field,String ac){
        String s_fields = field.get(0);
        return rep.findByAcNonAcType(s_fields,ac);
    }

    public Optional<List<tourism>> findMany(Map<String, Object> conditions) {
        return rep.findByMultipleConditions(conditions);
    }

    public String updateMany(Map<String, Object> conditions, Map<String, Object> updates) {
        return rep.updateBusesByConditions(conditions, updates);
    }

    public Object insertOne(tourism buses) {
        return rep.save(buses);
    }

    public Object insertOneHotelPay(hotelpay payment) {
        return hotelrep.save(payment);
    }

    public Object insertOnePlacePay(placepay payment) {
        return placerep.save(payment);
    }

    public String deleteByAcNonAc(String acNonAcValue) {
        rep.deleteByField(acNonAcValue);
        return "a document is deleted";
    }



}
