package com.samarundbms.DBMS;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface placerepository extends MongoRepository<placepay, ObjectId> {
}
