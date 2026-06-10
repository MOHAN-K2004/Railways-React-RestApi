# ---------- FRONTEND BUILD ----------
FROM node:18 AS frontend-build

WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build


# ---------- BACKEND BUILD ----------
FROM maven:3.9.6-eclipse-temurin-17 AS backend-build

WORKDIR /app/backend
COPY backend /app/backend
RUN mvn clean package -DskipTests


# ---------- FINAL IMAGE ----------
FROM eclipse-temurin:17-jdk

WORKDIR /app

# Copy backend jar
COPY --from=backend-build /app/backend/target/*.jar app.jar

# Copy frontend build
COPY --from=frontend-build /app/frontend/build /app/static

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]