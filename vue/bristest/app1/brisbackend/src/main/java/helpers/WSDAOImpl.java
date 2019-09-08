package helpers;

import java.net.MalformedURLException;
import java.net.URL;
import java.nio.charset.StandardCharsets;

import javax.activation.DataHandler;
import javax.mail.util.ByteArrayDataSource;
import javax.xml.namespace.QName;
import javax.xml.ws.Service;

import eu.domibus.plugin.bris.endpoint.delivery.DeliveryEnvelopeInterface;
import eu.domibus.plugin.bris.jaxb.aggregate.AddressInfoType;
import eu.domibus.plugin.bris.jaxb.aggregate.MessageContentType;
import eu.domibus.plugin.bris.jaxb.aggregate.ReceiverType;
import eu.domibus.plugin.bris.jaxb.aggregate.SenderType;
import eu.domibus.plugin.bris.jaxb.delivery.DeliveryBody;
import eu.domibus.plugin.bris.jaxb.delivery.DeliveryHeader;
import eu.domibus.plugin.bris.jaxb.delivery.DeliveryMessageInfoType;

public class WSDAOImpl {

	public static final String SUBMISSION_ENVELOPE_NAMESPACE_URI = "http://eu.domibus.plugin/bris/wsdl/endpoint/delivery/envelope/1.0";
	public static final String SUBMISSION_ENVELOPE_LOCAL_PART = "DeliveryEnvelopeService";
	public static final String SUBMISSION_ENVELOPE_WSDL = "domibus.bris.plugin.wsdl";

	public eu.domibus.plugin.bris.jaxb.delivery.Acknowledgement send(String messageID, String endpointURL, String message) throws Exception {
		
		byte[] bytes = message.getBytes(StandardCharsets.UTF_8);
		DeliveryBody DeliveryBody = wrap(bytes);
		DeliveryHeader DeliveryHeader = createDeliveryHeader(messageID);
		return getDeliveryEnvelopeInterface(endpointURL).submit(DeliveryHeader, DeliveryBody);
	}
	
	private DeliveryBody wrap(byte[] message) {
		DeliveryBody DeliveryBody = new DeliveryBody();
		MessageContentType messageContent = new MessageContentType();
		messageContent.setValue(new DataHandler(new ByteArrayDataSource(message, "text/plain; charset=UTF-8")));
		DeliveryBody.setMessageContent(messageContent);
		return DeliveryBody;
	}
	
	private DeliveryHeader createDeliveryHeader(String messageID) {
		DeliveryHeader DeliveryHeader = new DeliveryHeader();
		DeliveryMessageInfoType messageInfo = new DeliveryMessageInfoType();
		messageInfo.setMessageID(messageID);
		AddressInfoType addressInfo = new AddressInfoType();
		SenderType sender = new SenderType();
		sender.setId("domibus-blue");
		addressInfo.setSender(sender);
		ReceiverType receiver = new ReceiverType();
		receiver.setId("domibus-red");
		addressInfo.setReceiver(receiver);
		DeliveryHeader.setAddressInfo(addressInfo);
		DeliveryHeader.setDeliveryMessageInfo(messageInfo);
		return DeliveryHeader;
	}

	private DeliveryEnvelopeInterface getDeliveryEnvelopeInterface(String endpointUrl) throws MalformedURLException {
		URL url = new URL(endpointUrl + "?wsdl");
		QName qName = new QName(SUBMISSION_ENVELOPE_NAMESPACE_URI, SUBMISSION_ENVELOPE_LOCAL_PART);
		Service service = Service.create(url, qName);
		return service.getPort(DeliveryEnvelopeInterface.class);
	}
}
