package com.samarundbms.DBMS;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface tourrepository extends MongoRepository<tourism, ObjectId>,CustomTourRepository{
   @Query("{ ?0: ?1 }")
   Optional<List<tourism>> findByAcNonAcType(String field,String acNonAc);

   void deleteByAcNonAc(String acNonAc);
}

