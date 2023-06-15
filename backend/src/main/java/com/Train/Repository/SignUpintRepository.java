package com.Train.Repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.Train.Entity.SignupEntity;

public interface SignUpintRepository extends JpaRepository<SignupEntity, Integer> {

	// public boolean existsByfirstName(String firstname);

    public SignupEntity findByMailAndPass(String mail, String pass);

    public boolean existsByMail(String firstname);
	

}
	