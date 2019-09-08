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

        <fieldset>
          <p>
            <label for="wsurl"><abbr>URL *</abbr></label>
            <input v-model="wsurl" type="url" list="wsurl-data" id="wsurl"/>
            <datalist id="wsurl-data">
              <option>http://proj5-jas131.proj5.bolagsverket.se:13180/sfr-dft-web/services/sfrGateway</option>
              <option>http://proj5-jas131.proj5.bolagsverket.se:13180/ecp-dft-web/services/ecpGateway</option>
              <option>http://system-jas131.system.bolagsverket.se:13180/sfr-dft-web/services/sfrGateway</option>
              <option>http://system-jas131.system.bolagsverket.se:13180/ecp-dft-web/services/ecpGateway</option>
            </datalist>
          </p>
          <legend>Message</legend>
          <p>
            <label for="message">Message *</label>
            <textarea v-model="message" id="message"/>
          </p>
        </fieldset>
        <div ref="loading" class="loading"/>        
        <p lang="sv">
          <button ref="sendbutton" name="sendMessage" @click="onSendMessage">Skicka</button>
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
  },
  data : function(){
    return {      
      spinner : new Spinner(spinnerOpts),
      message : 

`<?xml version="1.0" encoding="UTF-8"?>
<br:BR-CompanyDetailsRequest xmlns:br="http://ec.europa.eu/bris/v1_4/br/CompanyDetailsRequest" xmlns="http://ec.europa.eu/bris/v1_4/common/BasicComponents" xmlns:bac="http://ec.europa.eu/bris/v1_4/common/AggregateComponents" xmlns:brac="http://ec.europa.eu/bris/v1_4/br/AggregateComponents" modelVersion="1.4.0">
   <brac:MessageHeader>
      <CorrelationID>242bf996-9d8b-6934-b00d-d46fa3a00c89</CorrelationID>
      <MessageID>242bf996-9d8b-6934-b00d-d46fa3a00c89</MessageID>
      <bac:BusinessRegisterReference>
         <BusinessRegisterID>BOLREG</BusinessRegisterID>
         <BusinessRegisterCountry>SE</BusinessRegisterCountry>
      </bac:BusinessRegisterReference>
   </brac:MessageHeader>
   <CompanyRegistrationNumber>5590875745</CompanyRegistrationNumber>
   <bac:BusinessRegisterReference>
      <BusinessRegisterID>BOLREG</BusinessRegisterID>
      <BusinessRegisterCountry>SE</BusinessRegisterCountry>
   </bac:BusinessRegisterReference>
</br:BR-CompanyDetailsRequest>`,

      wsurl :  undefined
    }
  },
  methods : {
    onSendMessage : function(){
    var data = this.$data;
    var url = "http://localhost:8080/brisbackend2/v2.0.0/companydetailsrequest";
    var tmp = window.btoa(data.message); // base64 encode xml
    var postdata = {
      wsurl : data.wsurl,
      message : tmp
    }
    var sendButton = this.$refs.sendbutton;
    sendButton.focus();
    var refs = this.$refs;
    var spinnerElem = refs.loading;
    data.spinner.spin(spinnerElem);
    spinnerElem.style.display = "block";

    axios
        .post(url, postdata)
        .then(function(response){
          data.showSendSuccess = true;
          sendButton.blur();
          data.spinner.stop();
          spinnerElem.style.display = "none";
        })
        .catch(function(err){
          data.showSendError = true;
          sendButton.blur();
          data.spinner.stop();
          spinnerElem.style.display = "none";
        });
    }
  }
}
</script>

<style>
</style>
