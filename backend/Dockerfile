FROM java:8
COPY target/src src/
CMD ["ls"]
EXPOSE 8443
ADD /target/SpringDocker.jar SpringDocker.jar
ENTRYPOINT ["java","-jar","SpringDocker.jar"]

