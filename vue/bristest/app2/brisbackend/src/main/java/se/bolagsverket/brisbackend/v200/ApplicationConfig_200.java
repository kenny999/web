package se.bolagsverket.brisbackend.v200;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

@ApplicationPath("/v2.0.0/")
public class ApplicationConfig_200 extends Application {
    public Set<Class<?>> getClasses() {
        return new HashSet<Class<?>>(
        		Arrays.asList(
        				));
    }
}