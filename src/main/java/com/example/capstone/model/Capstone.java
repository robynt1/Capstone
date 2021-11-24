package com.example.capstone.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Capstone {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String prefix;
    private String firstName;
    private String lastName;
    private String telNumber;
    private String address1;
    private String address2;
    private String city;
    private String postCode;
    private String carType;
    private String engineSize;
    private String additionalDrivers;
    private String commercialPurposes;
    private String outsideState;
    private String dateRegistered;
    private String vehicleValue;
    private String quote;


    public Capstone(Long id, String prefix, String firstName, String lastName, String telNumber, String address1, String address2, String city, String postCode, String carType, String engineSize, String additionalDrivers, String commercialPurposes, String outsideState, String dateRegistered, String vehicleValue) {
        this.id = id;
        this.prefix = prefix;
        this.firstName = firstName;
        this.lastName = lastName;
        this.telNumber = telNumber;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.postCode = postCode;
        this.carType = carType;
        this.engineSize = engineSize;
        this.additionalDrivers = additionalDrivers;
        this.commercialPurposes = commercialPurposes;
        this.outsideState = outsideState;
        this.dateRegistered = dateRegistered;
        this.vehicleValue = vehicleValue;
        this.quote = null;
    }


    public Capstone() {
    }

    public String getQuote() {
        return quote;
    }

    public void setQuote(String quote) {
        this.quote = quote;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPrefix() {
        return prefix;
    }

    public void setPrefix(String prefix) {
        this.prefix = prefix;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getTelNumber() {
        return telNumber;
    }

    public void setTelNumber(String telNumber) {
        this.telNumber = telNumber;
    }

    public String getAddress1() {
        return address1;
    }

    public void setAddress1(String address1) {
        this.address1 = address1;
    }

    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPostCode() {
        return postCode;
    }

    public void setPostCode(String postCode) {
        this.postCode = postCode;
    }

    public String getCarType() {
        return carType;
    }

    public void setCarType(String carType) {
        this.carType = carType;
    }

    public String getEngineSize() {
        return engineSize;
    }

    public void setEngineSize(String engineSize) {
        this.engineSize = engineSize;
    }

    public String getAdditionalDrivers() {
        return additionalDrivers;
    }

    public void setAdditionalDrivers(String additionalDrivers) {
        this.additionalDrivers = additionalDrivers;
    }

    public String getCommercialPurposes() {
        return commercialPurposes;
    }

    public void setCommercialPurposes(String commercialPurposes) {
        this.commercialPurposes = commercialPurposes;
    }

    public String getOutsideState() {
        return outsideState;
    }

    public void setOutsideState(String outsideState) {
        this.outsideState = outsideState;
    }

    public String getDateRegistered() {
        return dateRegistered;
    }

    public void setDateRegistered(String dateRegistered) {
        this.dateRegistered = dateRegistered;
    }

    public String getVehicleValue() {
        return vehicleValue;
    }

    public void setVehicleValue(String vehicleValue) {
        this.vehicleValue = vehicleValue;
    }

}