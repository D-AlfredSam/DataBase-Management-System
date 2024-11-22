package com.samarundbms.DBMS;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface CustomTourRepository {

//    To find documents based on multiple criteria
    Optional<List<tourism>> findByMultipleConditions(Map<String, Object> conditions);

//      To update documents based on mutiple criteria and multiple updates
    String updateBusesByConditions(Map<String, Object> conditions, Map<String, Object> updates);

    public void deleteByField(String field1Value);
}
