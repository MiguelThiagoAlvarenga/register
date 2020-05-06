package com.register.models;

import javax.persistence.*;

@Entity
@Table(name = "address")
public class Address {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Basic
    @Column(name = "address")
    private String address;

    @Basic
    @Column(name = "neighborhood")
    private String neighborhood;

    @OneToOne
    @JoinColumn(name = "id_county", referencedColumnName = "id")
    private County county;

    @Basic
    @Column(name = "zip_code")
    private String zipCode;
}
