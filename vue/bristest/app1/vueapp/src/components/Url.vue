<template>
        <fieldset>
          <legend>Web Service</legend>

          <p>
            <label for="wsurl"><abbr>URL *</abbr></label>
            <span class="error" v-if="showErrors && !$v.wsurl.url">Använd URL-format</span>
            <span class="error" v-if="showErrors && !$v.wsurl.required">Fyll i det här fältet</span>
            <input v-model="$v.wsurl.$model" @input="onDataUpdated" type="url" list="wsurl-data" id="wsurl"/>
            <datalist id="wsurl-data">
              <option>http://proj5-jas131.proj5.bolagsverket.se:13180/sfr-dft-web/services/sfrGateway</option>
              <option>http://proj5-jas131.proj5.bolagsverket.se:13180/ecp-dft-web/services/ecpGateway</option>
              <option>http://system-jas131.system.bolagsverket.se:13180/sfr-dft-web/services/sfrGateway</option>
              <option>http://system-jas131.system.bolagsverket.se:13180/ecp-dft-web/services/ecpGateway</option>
            </datalist>
          </p>
        </fieldset>

</template>

<script>

import { required, url } from 'vuelidate/lib/validators'

export default {
  name: 'Url',
    props : {
      showErrors : {
        type :  Boolean,
        required : true
      }
    },
    data: function(){
      return {
        wsurl : "http://proj5-jas131.proj5.bolagsverket.se:13180/sfr-dft-web/services/sfrGateway"
      }
  },
  mounted : function(){
    this.sendDataUpdatedEvent();
  },
  validations : {
    wsurl : {
      required,
// TODO      url
    },
  },
  methods : {
    onDataUpdated : function(){
      this.sendDataUpdatedEvent();
    },
    sendDataUpdatedEvent : function(){
      var payload = { wsurl : this.wsurl,
                      v : this.$v
                    };
      this.$emit("dataUpdated", payload);
    }
  },
}
</script>

<style scoped>
</style>
