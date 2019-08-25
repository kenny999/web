package com.kenneth.app;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

import com.kenneth.BookResource;

@ApplicationPath("/rest-prefix")
public class ApplicationConfig extends Application {
    public Set<Class<?>> getClasses() {
        return new HashSet<Class<?>>(
        		Arrays.asList(
        				BookResource.class));
    }
}