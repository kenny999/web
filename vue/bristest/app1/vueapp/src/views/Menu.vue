<template>
  <div>
    <header><div role="heading">
        <abbr lang="en" title="Business Registers Interconnection System">BRIS</abbr>
        Test&shy;verk&shy;tyg f&ouml;r
        <abbr lang="en" title="European Central Platform">ECP</abbr>/<abbr title="Sammankopplat f&ouml;retagsregister">SFR</abbr>
      </div>
    </header>
    <main class="menu"><h1>Meddelanden</h1>

<router-view/>

      <form method="post" accept-charset="utf-8" action="/bris.php">
        <p><label for="version">Schemaversion</label>
          <select name="version" id="version"><option value="2.0.0">2.0.0</option>
<option value="1.4.1" selected>1.4.1</option>
<option value="1.4.0">1.4.0</option>
<option value="1.3.0">1.3.0</option>
<option value="1.2.0">1.2.0</option></select><button type="submit">&Auml;ndra</button></p>
      </form>

      <div class="reception message-list">
        <h2>Inkommande meddelanden fr&aring;n <abbr lang="en" title="European Central Platform">ECP</abbr>
</h2>
        <ul class="requests">
<li class="br"><a href="/bris.php/messages/1.4.1/BR-BranchDisclosureReceptionNotification" lang="en">Branch&shy;Disclosure&shy;Reception&shy;Notification</a></li>
<li class="ap"><router-link to="/CompanyDetailsRequest">CompanyDetailsRequest</router-link></li>
<li class="br"><a href="/bris.php/messages/1.4.1/BR-CrossBorderMergerReceptionNotification" lang="en">Cross&shy;Border&shy;Merger&shy;Reception&shy;Notification</a></li>
<li class="ap"><a href="/bris.php/messages/1.4.1/BR-RetrieveDocumentRequest" lang="en">Retrieve&shy;Document&shy;Request</a></li>
</ul>
<h3>Inkommande svarsmeddelanden</h3>
        <ul class="responses">
<li class="ack"><a href="/bris.php/messages/1.4.1/BR-BranchDisclosureSubmissionNotificationAcknowledgement" lang="en">Branch&shy;Disclosure&shy;Submission&shy;Notification&shy;Acknowledgement</a></li>
<li class="ack"><a href="/bris.php/messages/1.4.1/BR-CrossBorderMergerSubmissionNotificationAcknowledgement" lang="en">Cross&shy;Border&shy;Merger&shy;Submission&shy;Notification&shy;Acknowledgement</a></li>
<li class="ack"><a href="/bris.php/messages/1.4.1/BR-FullUpdateLEDAcknowledgment" lang="en">Full&shy;Update&shy;LED&shy;Acknowledgment</a></li>
<li class="status"><a href="/bris.php/messages/1.4.1/BR-ManageSubscriptionStatus" lang="en">Manage&shy;Subscription&shy;Status</a></li>
<li class="status"><a href="/bris.php/messages/1.4.1/BR-UpdateLEDStatus" lang="en">Update&shy;LED&shy;Status</a></li>
</ul>
</div>

      <div class="submission message-list">
        <h2>Utg&aring;ende meddelanden fr&aring;n <abbr title="Sammankopplat f&ouml;retagsregister">SFR</abbr>
</h2>
        <ul class="requests">
<li class="br"><a href="/bris.php/messages/1.4.1/BR-BranchDisclosureSubmissionNotification" lang="en">Branch&shy;Disclosure&shy;Submission&shy;Notification</a></li>
<li class="br"><a href="/bris.php/messages/1.4.1/BR-CrossBorderMergerSubmissionNotification" lang="en">Cross&shy;Border&shy;Merger&shy;Submission&shy;Notification</a></li>
<li class="led"><a href="/bris.php/messages/1.4.1/BR-FullUpdateLEDRequest" lang="en">Full&shy;Update&shy;LED&shy;Request</a></li>
<li class="led"><a href="/bris.php/messages/1.4.1/BR-ManageSubscriptionRequest" lang="en">Manage&shy;Subscription&shy;Request</a></li>
<li class="led"><a href="/bris.php/messages/1.4.1/BR-UpdateLEDRequest" lang="en">Update&shy;LED&shy;Request</a></li>
</ul>
<h3>Utg&aring;ende svarsmeddelanden</h3>
        <ul class="responses">
<li class="ack"><a href="/bris.php/messages/1.4.1/BR-BranchDisclosureReceptionNotificationAcknowledgement" lang="en">Branch&shy;Disclosure&shy;Reception&shy;Notification&shy;Acknowledgement</a></li>
<li class="ap"><a href="/bris.php/messages/1.4.1/BR-CompanyDetailsResponse" lang="en">Company&shy;Details&shy;Response</a></li>
<li class="ack"><a href="/bris.php/messages/1.4.1/BR-CrossBorderMergerReceptionNotificationAcknowledgement" lang="en">Cross&shy;Border&shy;Merger&shy;Reception&shy;Notification&shy;Acknowledgement</a></li>
<li class="ap"><a href="/bris.php/messages/1.4.1/BR-RetrieveDocumentResponse" lang="en">Retrieve&shy;Document&shy;Response</a></li>
</ul>
</div>

      <div class="other message-list">
        <h2>&Ouml;vriga meddelanden</h2>
        <ul class="requests"><li class="ping"><a href="/bris.php/messages/1.4.1/BR-ConnectivityRequest" lang="en">Connectivity&shy;Request</a></li></ul>
<h3>&Ouml;vriga svarsmeddelanden</h3>
        <ul class="responses">
<li class="error"><a href="/bris.php/messages/1.4.1/BR-BusinessError" lang="en">Business&shy;Error</a></li>
<li class="ping"><a href="/bris.php/messages/1.4.1/BR-ConnectivityResponse" lang="en">Connectivity&shy;Response</a></li>
</ul>
</div>

      <div class="upload message-list">
        <h2>Sparade meddelanden</h2>
        <form method="post" enctype="multipart/form-data" action="/bris.php/messages/1.4.1/upload">
          <div>
<input name="uploadXML" type="file"><button type="submit" class="secondary">Ladda upp</button>
</div>
        </form>
      </div>
    </main><footer></footer>
  </div>
</template>

<script>
  export default {
    data : function(){
      return {}

    }
  }

</script>

<style>
</style>