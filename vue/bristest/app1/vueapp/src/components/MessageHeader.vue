<template>
        <fieldset>
          <legend>Message Header</legend>
          <p>
            <label for="MessageHeader-CorrelationID">Correlation ID *</label>
            <span class="error" v-if="showErrors && !$v.correlationID.maxLength">Maximalt {{$v.correlationID.$params.maxLength.max}} tecken</span>
            <span class="error" v-if="showErrors && !$v.correlationID.required">Fyll i det här fältet</span>
            <input type="text" v-model="$v.correlationID.$model" @input="onDataUpdated" class="CorrelationID" id="MessageHeader-CorrelationID">
            </p>
          <p>
            <label for="MessageHeader-MessageID">Message ID *</label>
            <span class="error" v-if="showErrors && !$v.messageID.maxLength">Maximalt {{$v.messageID.$params.maxLength.max}} tecken</span>
            <span class="error" v-if="showErrors && !$v.messageID.required">Fyll i det här fältet</span>
            <input type="text" v-model="$v.messageID.$model" @input="onDataUpdated" class="MessageID" id="MessageHeader-MessageID">
          </p>

          <fieldset id="fs-MessageHeader-BusinessRegisterReference">
            <legend>Business Register Reference</legend>
            <p>
              <label for="MessageHeader-BusinessRegisterReference-BusinessRegisterID">Business Register ID *</label>
              <span class="error" v-if="showErrors && !$v.businessRegisterID.maxLength">Maximalt {{$v.businessRegisterID.$params.maxLength.max}} tecken</span>
              <span class="error" v-if="showErrors && !$v.businessRegisterID.minLength">Minst {{$v.businessRegisterID.$params.minLength.min}} tecken</span>
              <span class="error" v-if="showErrors && !$v.businessRegisterID.required">Fyll i det här fältet</span>
              <input type="text" v-model="$v.businessRegisterID.$model" @input="onDataUpdated" class="BusinessRegisterID" pattern=".*[^\s].*" id="MessageHeader-BusinessRegisterReference-BusinessRegisterID">
            </p>
            <p>
              <label for="MessageHeader-BusinessRegisterReference-BusinessRegisterCountry">Business Register Country *</label>
              <span class="error" v-if="showErrors && !$v.businessRegisterCountry.required">Fyll i det här fältet</span>
              <select v-model="$v.businessRegisterCountry.$model" @input="onDataUpdated" id="MessageHeader-BusinessRegisterReference-BusinessRegisterCountry" class="BusinessRegisterCountry">
              <option v-for="c in countries" v-bind:value="c.id" v-bind:key="c.id">{{c.name}}</option>           
              </select>
            </p>
          </fieldset>

          <fieldset id="fs-MessageHeader-TestData" class="optional">
            <legend>Test Data</legend>
            <button @click="expandTestdata" class="secondary">{{expandTestdataMessage}}</button>
            <transition name="fade">
            <div v-if="testdataExpanded">
            <p>
              <label for="MessageHeader-TestData-TestSessionID">Test Session ID</label>
              <input type="text" v-model="testSessionID" @input="onDataUpdated" class="TestSessionID" id="MessageHeader-TestData-TestSessionID">
            </p>
            <p>
              <label for="MessageHeader-TestData-TestPackageID">Test Package ID</label>
              <input type="text" v-model="testPackageID" @input="onDataUpdated" class="TestPackageID" id="MessageHeader-TestData-TestPackageID">
            </p>
            <p>
              <label for="MessageHeader-TestData-TestCaseID">Test Case ID</label>
              <input type="text" v-model="testCaseID" @input="onDataUpdated" class="TestCaseID" id="MessageHeader-TestData-TestCaseID">
            </p>
            <p>
              <label for="MessageHeader-TestData-TestConditionID">Test Condition ID</label>
              <input type="text" v-model="testConditionID" @input="onDataUpdated" class="TestConditionID" id="MessageHeader-TestData-TestConditionID">
            </p>
            <p>
              <label for="MessageHeader-TestData-TestExecutionID">Test Execution ID</label>
              <input type="text" v-model="testExecutionID" @input="onDataUpdated" class="TestExecutionID" id="MessageHeader-TestData-TestExecutionID">
            </p>
            </div>
            </transition>
          </fieldset>


        </fieldset>
</template>

<script>

import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import countries from "./countries.js"

export default {
  name: 'MessageHeader',
    props : {
      showErrors : {
        type :  Boolean,
        required : true
      },
      validationOn : {
        type :  Boolean,
        required : true
      }
    },
    data: function(){
      return {
        countries : undefined,
        testdataExpanded : false,
        expandTestdataMessage : "Expandera",
        testSessionID : undefined,
        testPackageID : undefined,
        testCaseID: undefined,
        testConditionID : undefined,
        testExecutionID : undefined,
        correlationID : "2cc73c59-9bdd-3eb6-e9b5-ca934a9a5d87",
        messageID : "2cc73c59-9bdd-3eb6-e9b5-ca934a9a5d87",
        businessRegisterID : "BOLREG",
        businessRegisterCountry : "SE"
      }
  },
  mounted : function(){
    this.countries = countries.countries;
    this.sendDataUpdatedEvent();
  },
  validations : function() {
    if(this.validationOn){
      return {
        correlationID : {
          required,
          maxLength : maxLength(64)
        },
        messageID : {
          required,
          maxLength : maxLength(64)    
        },
        businessRegisterID : {
          required,
          minLength : minLength(2),
          maxLength : maxLength(15)    
        },
        businessRegisterCountry : {
          required    
        },
      };
    } else {
      return {
        correlationID : {},
        messageID : {},
        businessRegisterID : {},
        businessRegisterCountry : {},
      };
    }
  },
  methods : {
    expandTestdata : function(){
      this.testdataExpanded = ! this.testdataExpanded;
      if(this.expandTestdataMessage === "Expandera"){
        this.expandTestdataMessage = "Stäng"
      } else {
        this.expandTestdataMessage = "Expandera"      
      }
    },
    sendDataUpdatedEvent : function(){
      var payload = { correlationID : this.correlationID,
                      messageID : this.messageID,
                      businessRegisterID : this.businessRegisterID,
                      businessRegisterCountry : this.businessRegisterCountry,
                      testSessionID : this.testSessionID,
                      testPackageID : this.testPackageID,
                      testCaseID: this.testCaseID,
                      testConditionID : this.testConditionID,
                      testExecutionID : this.testExecutionID,
                      v : this.$v
                    };
      this.$emit("dataUpdated", payload);

    },
    onDataUpdated : function(){
      this.sendDataUpdatedEvent();
    }
  },
}
</script>

<style scoped>
</style>
