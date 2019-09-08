package se.bolagsverket.brisbackend.v200.companydetailsrequest;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class CompanyDetailsRequestPojo {

	private String wsurl;
	private String message;
	public String getWsurl() {
		return wsurl;
	}
	public void setWsurl(String wsurl) {
		this.wsurl = wsurl;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
}
