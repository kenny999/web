package se.bolagsverket.brisbackend.v200.companydetailsrequest;

import eu.europa.ec.bris.jaxb.br.company.details.request.v1_4.BRCompanyDetailsRequest;
import eu.europa.ec.bris.jaxb.br.components.aggregate.v1_4.MessageHeaderType;
import eu.europa.ec.bris.jaxb.components.aggregate.v1_4.BusinessRegisterReferenceType;
import eu.europa.ec.bris.jaxb.components.basic.v1_4.BusinessRegisterIDType;
import eu.europa.ec.bris.jaxb.components.basic.v1_4.CompanyRegistrationNumberType;
import eu.europa.ec.bris.jaxb.components.basic.v1_4.CorrelationIDType;
import eu.europa.ec.bris.jaxb.components.basic.v1_4.CountryType;
import eu.europa.ec.bris.jaxb.components.basic.v1_4.MessageIDType;
import helpers.JAXBHelper;

public class CompanyDetailsRequestFactory {
	
	public static String createXml(CompanyDetailsRequestPojo pojo) throws Exception {
		BRCompanyDetailsRequest r = new BRCompanyDetailsRequest();
		BusinessRegisterReferenceType businessRegisterReference = new BusinessRegisterReferenceType();
		CountryType country = new CountryType();
		country.setValue(pojo.getBusinessRegisterCountry());
		businessRegisterReference.setBusinessRegisterCountry(country);
		BusinessRegisterIDType businessRegisterID = new BusinessRegisterIDType();
		businessRegisterID.setValue(pojo.getBusinessRegisterID());
		businessRegisterReference.setBusinessRegisterID(businessRegisterID);
		r.setBusinessRegisterReference(businessRegisterReference);
		MessageHeaderType messageHeader = createMessageHeader(pojo);
		r.setMessageHeader(messageHeader);
		CompanyRegistrationNumberType companyRegistrationNumber = new CompanyRegistrationNumberType();
		companyRegistrationNumber.setValue(pojo.getCompanyRegistrationNumber());
		r.setCompanyRegistrationNumber(companyRegistrationNumber);

		String xml = null;
		xml = JAXBHelper.marshallObjectToXml(r);
		return xml;
	}
	
	private static MessageHeaderType createMessageHeader(CompanyDetailsRequestPojo pojo) {
		MessageHeaderType messageHeader = new MessageHeaderType();
		BusinessRegisterReferenceType businessRegisterReference = new BusinessRegisterReferenceType();
		CountryType country = new CountryType();
		country.setValue(pojo.getMessageHeaderBusinessRegisterCountry());
		businessRegisterReference.setBusinessRegisterCountry(country);
		BusinessRegisterIDType businessRegisterID = new BusinessRegisterIDType();
		businessRegisterID.setValue(pojo.getMessageHeaderBusinessRegisterID());
		businessRegisterReference.setBusinessRegisterID(businessRegisterID);
		messageHeader.setBusinessRegisterReference(businessRegisterReference);
		CorrelationIDType correlationID = new CorrelationIDType();
		correlationID.setValue(pojo.getCorrelationID());
		messageHeader.setCorrelationID(correlationID);
		MessageIDType messageID = new MessageIDType();
		messageID.setValue(pojo.getMessageID());
		messageHeader.setMessageID(messageID);
		
		return messageHeader;		
	}
}
