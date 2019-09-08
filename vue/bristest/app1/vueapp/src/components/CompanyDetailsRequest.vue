<template>
  <div>
    <header>
      <div role="heading">
        <abbr lang="en" title="Business Registers Interconnection System">BRIS</abbr>
        Test&shy;verk&shy;tyg f&ouml;r
        <abbr lang="en" title="European Central Platform">ECP</abbr>/<abbr title="Sammankopplat f&ouml;retagsregister">SFR</abbr>
      </div>
    </header>
    <main class="message-form">
      <h1 lang="en" class="reception">BR-CompanyDetailsRequest<span class="version">1.4.1</span></h1>
      <p>Skickas fr&aring;n <abbr lang="en" title="European Central Platform">ECP</abbr> till <abbr title="Sammankopplat f&ouml;retagsregister">SFR</abbr>, exempelvis n&auml;r en anv&auml;ndare i <span lang="en">e-Justice</span>-portalen best&auml;llt information om ett svenskt bolag.</p>

      <form v-on:submit.prevent>

        <button class="secondary" @click="toggleValidaton">{{validationMessage}}</button>
        <Url v-bind:showErrors="showErrors" v-on:dataUpdated="onUrlUpdated"/>
        <MessageHeader v-bind:showErrors="showErrors" v-on:dataUpdated="onMessageHeaderUpdated" v-bind:validationOn="validationOn"/>

        <fieldset id="fs-CompanyRegistrationNumber">
          <legend>Company Registration Number</legend>
          <p>
            <label for="CompanyRegistrationNumber">Company Registration Number *</label>
            <span class="error" v-if="showErrors && !$v.form.companyRegistrationNumber.maxLength">{{maxCompanyRegistrationMessage}}</span>
            <span class="error" v-if="showErrors && !$v.form.companyRegistrationNumber.minLength">{{minCompanyRegistrationMessage}}</span>
            <span class="error" v-if="showErrors && !$v.form.companyRegistrationNumber.required">Fyll i det här fältet</span>
            <input type="text" v-model="$v.form.companyRegistrationNumber.$model" class="CompanyRegistrationNumber" pattern=".*[^\s].*" id="CompanyRegistrationNumber">
          </p>
        </fieldset>
        <fieldset id="fs-BusinessRegisterReference">
          <legend>Business Register Reference</legend>
          <p>
            <label for="BusinessRegisterReference-BusinessRegisterID">Business Register ID *</label>
            <span class="error" v-if="showErrors && !$v.form.businessRegisterID.maxLength">{{maxBusinessRegisterIDMessage}}</span>
            <span class="error" v-if="showErrors && !$v.form.businessRegisterID.minLength">{{minBusinessRegisterIDMessage}}</span>
            <span class="error" v-if="showErrors && !$v.form.businessRegisterID.required">Fyll i det här fältet</span>
            <input type="text" v-model="$v.form.businessRegisterID.$model" class="BusinessRegisterID" pattern=".*[^\s].*" id="BusinessRegisterReference-BusinessRegisterID">
          </p>
          <p>
            <label for="BusinessRegisterReference-BusinessRegisterCountry">Business Register Country *</label>
            <span class="error" v-if="showErrors && !$v.form.businessRegisterCountry.required">Fyll i det här fältet</span>
            <select v-model="$v.form.businessRegisterCountry.$model" id="BusinessRegisterReference-BusinessRegisterCountry" class="BusinessRegisterCountry">
              <option v-for="c in countries" v-bind:value="c.id" v-bind:key="c.id">{{c.name}}</option>           
            </select>
          </p>

        </fieldset>
        <span class="error" v-if="showErrors">Formuläret innehåller fel.</span>
        <span class="error" v-if="showSendError">Kunde inte skicka meddelandet.</span>
        <span class="success" v-if="showSendSuccess">Meddelandet skickat.</span>
        <div ref="loading" class="loading"/>
        <p ref="sendbutton" lang="sv">
          <button name="sendMessage" @click="onSendMessage">Skicka</button>
        </p>

      </form>
    </main>
    <footer>
      <ul>
        <li><a href="/bris.php/1.4.1">Meny</a></li>
      </ul>
    </footer>
  </div>
</template>

<script>

import { required, minLength, maxLength } from 'vuelidate/lib/validators'

import Url from "./Url.vue"
import MessageHeader from "./MessageHeader.vue"
import countries from "./countries.js"
import axios from 'axios'
import {Spinner} from 'spin.js';

var spinnerOpts = {
  length: 25,
  top: '70%', // Top position relative to parent
  speed: 1
};

export default {
  name: 'CompanyDetailsRequest',
  components: {
    Url,
    MessageHeader
  },
  mounted : function(){
    this.countries = countries.countries;
  },
  data : function(){
    return {
      spinner : new Spinner(spinnerOpts),
      countries : undefined,
      validationOn : true,
      validationMessage : "Validering på",
      sendState : undefined,
      urlInvalid : false,
      messageHeaderInvalid : false,
      showSendError : false,
      showSendSuccess : false,
      form : {
        wsurl : undefined,
        correlationID : undefined,
        messageID : undefined,
        messageHeaderBusinessRegisterID : undefined,
        messageHeaderBusinessRegisterCountry : undefined,
        testSessionID : undefined,
        testPackageID : undefined,
        testCaseID: undefined,
        testConditionID : undefined,
        testExecutionID : undefined,
        companyRegistrationNumber : "5560125790",
        businessRegisterID : "BOLREG",
        businessRegisterCountry : "SE"
      },
    }
  },
  validations : function() {
    if(this.validationOn){
      return {
        form : {
          companyRegistrationNumber : {
            required,
            minLength : minLength(3),
            maxLength : maxLength(35)    
          },
          businessRegisterID : {
            required,
            minLength : minLength(2),
            maxLength : maxLength(15)    
          },
          businessRegisterCountry : {
            required    
          }
        }
      };
    } else {
      return {
        form : {
          companyRegistrationNumber : {},
          businessRegisterID : {},
          businessRegisterCountry : {}
          }
        };
      }
  },
  methods : {
    toggleValidaton : function(){
      this.validationOn = !this.validationOn;
      if(this.validationOn){
        this.validationMessage = "Validering på";
      } else {
        this.validationMessage = "Validering av";
      }
    },
    onUrlUpdated : function(event){
      this.form.wsurl = event.wsurl;
      this.urlInvalid = event.v.$invalid;
    },
    onMessageHeaderUpdated : function(event){
      this.form.correlationID = event.correlationID;
      this.form.messageID = event.messageID;
      this.form.messageHeaderBusinessRegisterID = event.businessRegisterID;
      this.form.messageHeaderBusinessRegisterCountry = event.businessRegisterCountry;
      this.form.testSessionID = event.testSessionID;
      this.form.testPackageID = event.testPackageID;
      this.form.testCaseID = event.testCaseID;
      this.form.testConditionID = event.testConditionID;
      this.form.testExecutionID = event.testExecutionID;
      this.messageHeaderInvalid = event.v.$invalid;
    },
    onSendMessage : function(){
      this.sendState = "TRYING";
      this.showSendError = false;
      this.showSendSuccess = false;
      var data = this.$data;
      var refs = this.$refs;
      if(this.$v.$invalid){
        this.sendState = "INVALID";
      }
      if(this.messageHeaderInvalid){
        this.sendState = "INVALID";
      }
      if(this.urlInvalid){
        this.sendState = "INVALID";
      }
      this.$v.$reset();

      if(this.sendState !== "INVALID"){


        var spinnerElem = refs.loading;
        data.spinner.spin(spinnerElem);
        spinnerElem.style.display = "block";

        var url = "http://localhost:8080/brisbackend/v2.0.0/companydetailsrequest";
        axios
        .post(url, this.form)
        .then(function(response){
          data.showSendSuccess = true;
          data.spinner.stop();
          spinnerElem.style.display = "none";

        })
        .catch(function(err){
          data.showSendError = true;
          data.spinner.stop();
          spinnerElem.style.display = "none";
        });
      }
    },
  },
  computed : {
    maxCompanyRegistrationMessage(){
      if(this.$v.form.companyRegistrationNumber.$params.maxLength){
        return "Maximalt "+ this.$v.form.companyRegistrationNumber.$params.maxLength.max + "tecken";
      } else {
        return "";
      }
    },
    minCompanyRegistrationMessage(){
      if(this.$v.form.companyRegistrationNumber.$params.minLength){
        return "Minst " + this.$v.form.companyRegistrationNumber.$params.minLength.min + " tecken";
      } else {
        return "";
      }
    },
    minBusinessRegisterIDMessage(){
      if(this.$v.form.businessRegisterID.$params.minLength){
        return "Minst " + this.$v.form.businessRegisterID.$params.minLength.min + " tecken";
      } else {
        return "";
      }
    },    
    maxBusinessRegisterIDMessage(){
      if(this.$v.form.businessRegisterID.$params.maxLength){
        return "Maximalt "+ this.$v.form.businessRegisterID.$params.maxLength.max + "tecken";
      } else {
        return "";
      }
    },    
    showErrors : function(){
      if(this.sendState === "INVALID"){
        return true;
      }
      if(this.$v.$anyDirty){
        return false;
      }
      return false;
    }
  }
}
</script>

<style>
</style>
