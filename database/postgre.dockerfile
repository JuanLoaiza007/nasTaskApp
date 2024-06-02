# Database Dockerfile in database/Dockerfile
FROM postgres:12

ADD /database/postgre.sql /docker-entrypoint-initdb.d

RUN chmod a+r /docker-entrypoint-initdb.d/*

EXPOSE 5432