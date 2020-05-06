package com.register.models;

import javax.persistence.*;

@Entity
@Table(name="city")
public class County {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Basic
    @Column(name = "name")
    private String name;

    @OneToOne
    @JoinColumn(name = "id_state", referencedColumnName =  "id" )
    private State state;
}
