package com.register.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "person")
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Basic
    @Column(name = "name")
    private String name;

    @Basic
    @Column(name = "cpf", unique = true)
    private String cpf;

    @Basic
    @Column(name = "birth_date")
    private Date birthDate;

    @OneToOne
    @JoinColumn(name = "id_address", referencedColumnName = "id")
    private Address address;

    @OneToOne
    @JoinColumn(name = "id_contact", referencedColumnName = "id")
    private Contact contact;

}
