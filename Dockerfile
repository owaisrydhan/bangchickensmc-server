# Use Java 17 for Minecraft 1.20.1 Forge
FROM eclipse-temurin:17-jdk

# Set working directory
WORKDIR /server

# Copy everything into container
COPY . /server

# Expose Minecraft default port
EXPOSE 25565

# Ensure run.sh can run
RUN chmod +x run.sh

# Launch server
CMD ["./run.sh", "nogui"]
