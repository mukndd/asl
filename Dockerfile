FROM tomcat:latest
RUN cp -R /usr/local/tomcat/webapps.dist/* /usr/local/tomcat/webapps
COPY target/SignEz-1.0.0.jar /usr/local/tomcat/webapps/
