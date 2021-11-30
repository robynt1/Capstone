FROM maven:3.6.3-openjdk-11 AS package
COPY . /usr/src/mymaven
WORKDIR /usr/src/mymaven
RUN mvn -Dmaven.test.skip=false clean package

FROM openjdk:11
COPY --from=package /usr/src/mymaven/target/capstone-0.0.1-SNAPSHOT.jar app.jar
ENV JAVA_OPTS=""
EXPOSE 8080
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/urandom -jar /app.jar" ]