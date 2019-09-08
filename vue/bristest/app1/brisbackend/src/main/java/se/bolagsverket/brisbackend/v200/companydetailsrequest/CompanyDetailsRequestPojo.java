package se.bolagsverket.brisbackend.v200.companydetailsrequest;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class CompanyDetailsRequestPojo {

	private String wsurl;
	private String correlationID;
	private String messageID;
	private String messageHeaderBusinessRegisterID;
	private String messageHeaderBusinessRegisterCountry;
	private String testSessionID;
	private String testPackageID;
	private String testCaseID;
	private String testConditionID;
	private String testExecutionID;
    private String companyRegistrationNumber;
	private String businessRegisterID;
	private String businessRegisterCountry;
	public String getWsurl() {
		return wsurl;
	}
	public void setWsurl(String wsurl) {
		this.wsurl = wsurl;
	}
	public String getCorrelationID() {
		return correlationID;
	}
	public void setCorrelationID(String correlationID) {
		this.correlationID = correlationID;
	}
	public String getMessageID() {
		return messageID;
	}
	public void setMessageID(String messageID) {
		this.messageID = messageID;
	}
	public String getMessageHeaderBusinessRegisterID() {
		return messageHeaderBusinessRegisterID;
	}
	public void setMessageHeaderBusinessRegisterID(String messageHeaderBusinessRegisterID) {
		this.messageHeaderBusinessRegisterID = messageHeaderBusinessRegisterID;
	}
	public String getMessageHeaderBusinessRegisterCountry() {
		return messageHeaderBusinessRegisterCountry;
	}
	public void setMessageHeaderBusinessRegisterCountry(String messageHeaderBusinessRegisterCountry) {
		this.messageHeaderBusinessRegisterCountry = messageHeaderBusinessRegisterCountry;
	}
	public String getTestSessionID() {
		return testSessionID;
	}
	public void setTestSessionID(String testSessionID) {
		this.testSessionID = testSessionID;
	}
	public String getTestPackageID() {
		return testPackageID;
	}
	public void setTestPackageID(String testPackageID) {
		this.testPackageID = testPackageID;
	}
	public String getTestCaseID() {
		return testCaseID;
	}
	public void setTestCaseID(String testCaseID) {
		this.testCaseID = testCaseID;
	}
	public String getTestConditionID() {
		return testConditionID;
	}
	public void setTestConditionID(String testConditionID) {
		this.testConditionID = testConditionID;
	}
	public String getTestExecutionID() {
		return testExecutionID;
	}
	public void setTestExecutionID(String testExecutionID) {
		this.testExecutionID = testExecutionID;
	}
	public String getCompanyRegistrationNumber() {
		return companyRegistrationNumber;
	}
	public void setCompanyRegistrationNumber(String companyRegistrationNumber) {
		this.companyRegistrationNumber = companyRegistrationNumber;
	}
	public String getBusinessRegisterID() {
		return businessRegisterID;
	}
	public void setBusinessRegisterID(String businessRegisterID) {
		this.businessRegisterID = businessRegisterID;
	}
	public String getBusinessRegisterCountry() {
		return businessRegisterCountry;
	}
	public void setBusinessRegisterCountry(String businessRegisterCountry) {
		this.businessRegisterCountry = businessRegisterCountry;
	}
}
