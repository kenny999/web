package helpers;

import java.io.StringWriter;
import java.util.HashMap;
import java.util.Map;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;

import eu.domibus.plugin.bris.jaxb.delivery.Acknowledgement;
import eu.domibus.plugin.bris.jaxb.delivery.DeliveryBody;
import eu.domibus.plugin.bris.jaxb.submission.SubmissionBody;
import eu.domibus.plugin.bris.jaxb.submission.SubmissionHeader;
import eu.europa.ec.bris.jaxb.br.branch.disclosure.notification.reception.request.v1_4.BRBranchDisclosureReceptionNotification;
import eu.europa.ec.bris.jaxb.br.branch.disclosure.notification.reception.response.v1_4.BRBranchDisclosureReceptionNotificationAcknowledgement;
import eu.europa.ec.bris.jaxb.br.branch.disclosure.notification.submission.request.v1_4.BRBranchDisclosureSubmissionNotification;
import eu.europa.ec.bris.jaxb.br.branch.disclosure.notification.submission.response.v1_4.BRBranchDisclosureSubmissionNotificationAcknowledgement;
import eu.europa.ec.bris.jaxb.br.company.details.request.v1_4.BRCompanyDetailsRequest;
import eu.europa.ec.bris.jaxb.br.company.details.response.v2_0.BRCompanyDetailsResponse;
import eu.europa.ec.bris.jaxb.br.connection.request.v1_4.BRConnectivityRequest;
import eu.europa.ec.bris.jaxb.br.connection.response.v1_4.BRConnectivityResponse;
import eu.europa.ec.bris.jaxb.br.crossborder.merger.notification.reception.request.v1_4.BRCrossBorderMergerReceptionNotification;
import eu.europa.ec.bris.jaxb.br.crossborder.merger.notification.reception.response.v1_4.BRCrossBorderMergerReceptionNotificationAcknowledgement;
import eu.europa.ec.bris.jaxb.br.crossborder.merger.notification.submission.request.v1_4.BRCrossBorderMergerSubmissionNotification;
import eu.europa.ec.bris.jaxb.br.crossborder.merger.notification.submission.response.v1_4.BRCrossBorderMergerSubmissionNotificationAcknowledgement;
import eu.europa.ec.bris.jaxb.br.document.retrieval.request.v1_4.BRRetrieveDocumentRequest;
import eu.europa.ec.bris.jaxb.br.document.retrieval.response.v1_4.BRRetrieveDocumentResponse;
import eu.europa.ec.bris.jaxb.br.error.v1_4.BRBusinessError;
import eu.europa.ec.bris.jaxb.br.generic.acknowledgement.v2_0.BRAcknowledgement;
import eu.europa.ec.bris.jaxb.br.generic.notification.v2_0.BRNotification;
import eu.europa.ec.bris.jaxb.br.led.update.full.request.v1_4.BRFullUpdateLEDRequest;
import eu.europa.ec.bris.jaxb.br.led.update.full.response.v1_4.BRFullUpdateLEDAcknowledgment;
import eu.europa.ec.bris.jaxb.br.led.update.request.v2_0.BRUpdateLEDRequest;
import eu.europa.ec.bris.jaxb.br.led.update.response.v2_0.BRUpdateLEDStatus;
import eu.europa.ec.bris.jaxb.br.subscription.response.v2_0.BRManageSubscriptionStatus;
import eu.europa.ec.digit.message.container.jaxb.v1_0.MessageContainer;

public class JAXBHelper {

	private static final long serialVersionUID = 5050441567725011723L;
	private static Map<Class<?>, JAXBContext> jaxbInstances = new HashMap<>();
	
	public static String marshallObjectToXml(java.lang.Object obj) throws JAXBException {
		JAXBContext jaxbContext = getInstance(obj.getClass());
		Marshaller marshaller = jaxbContext.createMarshaller();
		// Fixar till så att xml blir indenterad och radbruten
		marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
		StringWriter sw = new StringWriter();
		marshaller.marshal(obj, sw);
		return sw.toString();
	}
	
	private static synchronized JAXBContext getInstance(Class<?> c) throws JAXBException {
		JAXBContext context = jaxbInstances.get(c);
		if (context == null) {

			context = JAXBContext.newInstance(c, BRConnectivityRequest.class, BRConnectivityResponse.class,
					BRCompanyDetailsRequest.class, BRCompanyDetailsResponse.class,

					BRRetrieveDocumentRequest.class, BRRetrieveDocumentResponse.class,

					BRUpdateLEDRequest.class, BRUpdateLEDStatus.class,
					eu.europa.ec.bris.jaxb.br.led.update.response.v1_4.BRUpdateLEDStatus.class,

					BRFullUpdateLEDRequest.class, BRFullUpdateLEDAcknowledgment.class,

					BRBranchDisclosureSubmissionNotification.class,
					BRBranchDisclosureSubmissionNotificationAcknowledgement.class,
					BRBranchDisclosureReceptionNotification.class,
					BRBranchDisclosureReceptionNotificationAcknowledgement.class,

					BRCrossBorderMergerSubmissionNotification.class,
					BRCrossBorderMergerSubmissionNotificationAcknowledgement.class,
					BRCrossBorderMergerReceptionNotification.class,
					BRCrossBorderMergerReceptionNotificationAcknowledgement.class,

					BRManageSubscriptionStatus.class,
					eu.europa.ec.bris.jaxb.br.subscription.response.v1_4.BRManageSubscriptionStatus.class,

					BRBusinessError.class,

					SubmissionHeader.class, SubmissionBody.class,

					DeliveryBody.class, Acknowledgement.class, SubmissionBody.class, BRNotification.class,

					eu.europa.ec.bris.jaxb.br.generic.notification.template.company.euid.change.v2_0.ObjectFactory.class,
					eu.europa.ec.bris.jaxb.br.generic.notification.template.br.addition.v2_0.ObjectFactory.class,
					eu.europa.ec.bris.jaxb.br.generic.notification.template.br.removal.v2_0.ObjectFactory.class,
					eu.europa.ec.bris.jaxb.br.generic.notification.template.br.code.change.v2_0.ObjectFactory.class,
					eu.europa.ec.bris.jaxb.br.generic.notification.template.legalform.addition.v2_0.ObjectFactory.class,
					eu.europa.ec.bris.jaxb.br.generic.notification.template.legalform.removal.v2_0.ObjectFactory.class,
					eu.europa.ec.bris.jaxb.br.generic.notification.template.legalform.change.v2_0.ObjectFactory.class,

					BRAcknowledgement.class,

					eu.europa.ec.bris.jaxb.br.generic.acknowledgement.template.company.euid.change.v2_0.ObjectFactory.class,
					eu.europa.ec.bris.jaxb.br.generic.acknowledgement.template.br.addition.v2_0.ObjectFactory.class,
					eu.europa.ec.bris.jaxb.br.generic.acknowledgement.template.br.removal.v2_0.ObjectFactory.class,
					eu.europa.ec.bris.jaxb.br.generic.acknowledgement.template.br.code.change.v2_0.ObjectFactory.class,
					eu.europa.ec.bris.jaxb.br.generic.acknowledgement.template.legalform.addition.v2_0.ObjectFactory.class,
					eu.europa.ec.bris.jaxb.br.generic.acknowledgement.template.legalform.removal.v2_0.ObjectFactory.class,
					eu.europa.ec.bris.jaxb.br.generic.acknowledgement.template.legalform.change.v2_0.ObjectFactory.class,
					MessageContainer.class);
			jaxbInstances.put(c, context);
		}
		return context;
	}

}
