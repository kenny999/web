package com.kenneth;

import java.io.IOException;
import java.io.StringWriter;
import java.io.Writer;

import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.kenneth.model.Book;

@Path("books/")
public class BookResource {

	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response g(@PathParam("id") String id) {

		Book b = new Book();
		b.setAuthor("Lars olsen");
		b.setIsbn("978-1-56619-909-4");
		b.setName("They called");

		JsonObjectBuilder objectBuilder = Json.createObjectBuilder().add("author", b.getAuthor())
				.add("isbn", b.getIsbn()).add("name", b.getName());
		JsonObject jsonObject = objectBuilder.build();
		String jsonString = null;
		try (Writer writer = new StringWriter()) {
			Json.createWriter(writer).write(jsonObject);
			jsonString = writer.toString();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return Response.status(200).header("Access-Control-Allow-Origin", "*")
				.header("Access-Control-Allow-Credentials", "true")
				.header("Access-Control-Allow-Headers", "origin, content-type, accept, authorization")
				.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD").entity(jsonString)
				.build();

	}

}
