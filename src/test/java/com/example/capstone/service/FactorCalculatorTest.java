/*package com.example.capstone.service;

import com.example.capstone.model.Capstone;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions.*;
import org.springframework.util.Assert;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

public class FactorCalculatorTest {

    @Test
    public void testCalculateVehicleTypeFactor(){

        FactorCalculator myCalculator = new FactorCalculator();

        assertEquals(1.6, myCalculator.calculateVehicleTypeFactor("Hatchback"), 0.0);
        assertEquals(1.3, myCalculator.calculateVehicleTypeFactor("Cabriolet"), 0.0);
        assertEquals(1.4, myCalculator.calculateVehicleTypeFactor("Coupe"), 0.0);
        assertEquals(1.5, myCalculator.calculateVehicleTypeFactor("Estate"), 0.0);
        assertEquals(1.7, myCalculator.calculateVehicleTypeFactor("Other"), 0.0);
    }

    @Test
    public void testCalculateVehicleTypeFactorDefault(){

        FactorCalculator myCalculator = new FactorCalculator();

        assertNotEquals(1.6, myCalculator.calculateVehicleTypeFactor("Hatchbackk"), 0.0);

    }


    @Test
    public void testCalculateEngineSizeFactor(){

        FactorCalculator myCalculator = new FactorCalculator();

        assertEquals(2.5, myCalculator.calculateEngineSizeFactor("2500"), 0.0);
        assertEquals(1.0, myCalculator.calculateEngineSizeFactor("1000"), 0.0);
        assertEquals(1.6, myCalculator.calculateEngineSizeFactor("1600"), 0.0);
        assertEquals(2.0, myCalculator.calculateEngineSizeFactor("2000"), 0.0);
        assertEquals(3.0, myCalculator.calculateEngineSizeFactor("3000"), 0.0);
        assertEquals(3.5, myCalculator.calculateEngineSizeFactor("Other"), 0.0);

    }

    @Test
    public void testCalculateEngineSizeFactorDefault(){

        FactorCalculator myCalculator = new FactorCalculator();

        assertNotEquals(2.5, myCalculator.calculateVehicleTypeFactor("25000"), 0.0);

    }

    @Test
    public void testCalculateVehicleValueFactor(){

        FactorCalculator myCalculator = new FactorCalculator();

        assertEquals(1.0, myCalculator.calculateVehicleValueFactor("2000"), 0.0);
        assertEquals(1.2, myCalculator.calculateVehicleValueFactor("6000"), 0.0);

    }

    @Test
    public void testCalculateAdditionalDriversFactor(){

        FactorCalculator myCalculator = new FactorCalculator();

        assertEquals(1.1, myCalculator.calculateAdditionalDriversFactor("1"), 0.0);
        assertEquals(1.2, myCalculator.calculateAdditionalDriversFactor("2"), 0.0);

    }

    @Test
    public void testCalculateCommercialUseFactor(){

        FactorCalculator myCalculator = new FactorCalculator();

        assertEquals(1.1, myCalculator.calculateCommercialUseFactor("Yes"), 0.0);
        assertEquals(1.0, myCalculator.calculateCommercialUseFactor("No"), 0.0);

    }

    @Test
    public void testCalculateOutsideStateUseFactor(){

        FactorCalculator myCalculator = new FactorCalculator();

        assertEquals(1.1, myCalculator.calculateOutsideStateUseFactor("Yes"), 0.0);
        assertEquals(1.0, myCalculator.calculateOutsideStateUseFactor("No"), 0.0);

    }

    @Test
    public void testCalculateInsurcanceQuote(){

        // setup driver
        var firstName = "Robyn";
        var lastName = "Thompson";
        var id = 1L;
        var prefix = "Miss";
        var telNumber= "12345678910";
        var address1 = "123";
        var address2 = "Something Road";
        var city = "Belfast";
        var postCode = "BT123";
        var carType = "Hatchback";
        var engineSize = "1600";
        var additionalDrivers = "3";
        var commercialPurposes = "Yes";
        var outsideState = "Yes";
        var dateRegistered = "11-05-1997";
        var vehicleValue = "5000";
        Capstone driver = new Capstone(id, prefix, firstName, lastName,  telNumber, address1,
                                        address2, city, postCode, carType, engineSize, additionalDrivers,
                                        commercialPurposes, outsideState, dateRegistered, vehicleValue);

        FactorCalculator myCalculator = new FactorCalculator();


        assertEquals(371.71, myCalculator.calculateInsurcanceQuote(driver), "0.1");
    }
}
*/