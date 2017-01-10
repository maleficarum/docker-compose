FROM java:7

RUN mkdir /java

WORKDIR /java
ADD ./code/Main.java /java/Main.java
ADD ./code/mysql-connector-java-5.1.40-bin.jar /java/mysql-connector-java-5.1.40-bin.jar
RUN javac -cp .:/java/mysql-connector-java-5.1.40-bin.jar Main.java

CMD java -cp .:/java/mysql-connector-java-5.1.40-bin.jar Main
