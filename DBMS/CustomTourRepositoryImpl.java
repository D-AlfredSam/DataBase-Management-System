package com.samarundbms.DBMS;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Repository
public class CustomTourRepositoryImpl implements CustomTourRepository {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public Optional<List<tourism>> findByMultipleConditions(Map<String, Object> conditions) {
        Criteria criteria = new Criteria();

        // Loop through each condition to add them to the criteria
        conditions.forEach((field, value) -> criteria.and(field).is(value));

        // Create and execute the query
        Query query = new Query(criteria);
        return Optional.ofNullable(mongoTemplate.find(query, tourism.class));
    }

    @Override
    public String updateBusesByConditions(Map<String, Object> conditions,Map<String, Object> updates) {

        Criteria criteria = new Criteria();
        conditions.forEach((field, value) -> criteria.and(field).is(value));


        Query query = new Query(criteria);


        Update update = new Update();
        updates.forEach(update::set);


        mongoTemplate.updateMulti(query, update, tourism.class);
        return "Update occurred";
    }

    public void deleteByField(String field1Value) {
        Query query = new Query();
        query.addCriteria(Criteria.where("ac_non_ac").is(field1Value));
        mongoTemplate.remove(query, tourism.class);
    }
}
