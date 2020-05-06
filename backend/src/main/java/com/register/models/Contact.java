package com.register.models;

import javax.persistence.*;

@Entity
@Table(name = "contact")
public class Contact {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Basic
    @Column(name = "email")
    private String email;

    @Basic
    @Column(name = "telephone")
    private String telephone;

    @Basic
    @Column(name = "skype")
    private String skype;
}
