package com.register.models;

import javax.persistence.*;

@Entity
@Table(name="state")
public class State {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Basic
    @Column(name="initials")
    private String initials;

    @Basic
    @Column(name="name")
    private String name;
}
