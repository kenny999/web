package com.kenneth.vueserver;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("books/")
public class BookResource {

	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Book g(@PathParam("id") String id) {

		if (id.equals("1")) {

			Book book = new Book();
			book.setIsbn("73673-89383");
			book.setTitle("Ringaren i Notre Dame");
			book.setNumPages(783);

			return book;
		} else {
			Book book = new Book();
			book.setIsbn("7373-90348");
			book.setTitle("Revolvermannen");
			book.setNumPages(998);
			return book;

		}
	}

}
