/*package com.example.capstone.controller;

import com.example.capstone.model.Capstone;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;


import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class CapstoneControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper objectMapper;


    @Test
    void givenDBInitilizedWith1Record1_whenGETPeople_shouldReturn1Item() throws Exception {
        final var mvcResult = mockMvc
                .perform(get("/capstone"))
                .andDo(print())
                .andReturn();

        final var contentAsString = mvcResult.getResponse().getContentAsString();

        List<Capstone> peopleFromDB = objectMapper.readValue(contentAsString, new TypeReference<>(){});

        assertEquals(1, peopleFromDB.size());
    }

    @Test
    void whenNoIdInDatabaseThrowException404() throws Exception {

    }

    @Test
    @DirtiesContext
    void givenDBInitilizedWith3Records_whenPOSTPeople_shouldSaveAndReturn() throws Exception {
        var firstName = "Robyn";
        var lastName = "Thompson";
        var id = 1L;
        var prefix = "Miss";
        var telNumber= "12345678910";
        var address1 = "123";
        var address2 = "Something Road";
        var city = "Belfast";
        var postCode = "BT123";
        var carType = "Cabriolet";
        var engineSize = "1000";
        var additionalDrivers = "2";
        var commercialPurposes = "Yes";
        var outsideState = "Yes";
        var dateRegistered = "10-02-2021";
        var vehicleValue = "5000";
        Capstone person = new Capstone(id, prefix, firstName, lastName,  telNumber, address1, address2, city, postCode, carType, engineSize, additionalDrivers, commercialPurposes, outsideState, dateRegistered, vehicleValue);

        final var personAsJSON = objectMapper.writeValueAsString(person);

        final var mvcResult = mockMvc
                .perform(post("/capstone")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(personAsJSON)
                )
                .andDo(print())
                .andReturn();

        final var contentAsString = mvcResult.getResponse().getContentAsString();

        Capstone savedPerson = objectMapper.readValue(contentAsString, Capstone.class);

        assertAll(
                () -> assertNotNull(savedPerson.getId()),
                () -> assertEquals(firstName, savedPerson.getFirstName()),
                () -> assertEquals(lastName, savedPerson.getLastName())
        );
    }

    @Test
    @DirtiesContext
    void givenDBInitilizedWith3Records_whenDELETEPeopleWithExistingID_shouldReturn200() throws Exception {
        var existingId= 1;

        final var mvcResult = mockMvc
                .perform(delete("/capstone/delete?id=" + existingId)
                        .contentType(MediaType.APPLICATION_JSON)
                )
                .andDo(print())
                .andExpect(status().isOk());
    }


}

 */