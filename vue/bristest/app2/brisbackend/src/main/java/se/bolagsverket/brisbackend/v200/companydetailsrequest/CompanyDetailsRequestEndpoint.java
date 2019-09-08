package se.bolagsverket.brisbackend.v200.companydetailsrequest;

import java.util.Base64;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import helpers.WSDAOImpl;

@Path("companydetailsrequest/")
public class CompanyDetailsRequestEndpoint {
	
	private	WSDAOImpl impl = new WSDAOImpl();

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response g(CompanyDetailsRequestPojo pojo) throws Exception {
		String xml = new String(Base64.getDecoder().decode(pojo.getMessage()));
		impl.send("", pojo.getWsurl(), xml);
		return Response.status(200).header("Access-Control-Allow-Origin", "*")
				.header("Access-Control-Allow-Credentials", "true")
				.header("Access-Control-Allow-Headers", "origin, content-type, accept, authorization")
				.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD")
				.build();
	}
}
