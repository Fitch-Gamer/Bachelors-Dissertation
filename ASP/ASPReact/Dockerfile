FROM node:22-bookworm-slim AS client-build
WORKDIR /src/aspreact.client

# Install client dependencies
COPY aspreact.client/package*.json ./
RUN npm ci

# Build React app
COPY aspreact.client/. ./
RUN npm run build


FROM mcr.microsoft.com/dotnet/sdk:10.0 AS server-build

# Install Node.js (required by Microsoft.VisualStudio.JavaScript.Sdk even when not building client)
RUN apt-get update && apt-get install -y curl \
    && curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /src

# Copy server project and full client directory (JS SDK targets require package.json at minimum)
COPY ASPReact.Server/ ASPReact.Server/
COPY aspreact.client/ aspreact.client/

# Copy built frontend into server static assets
COPY --from=client-build /src/aspreact.client/dist ./ASPReact.Server/wwwroot

# Publish server; project references are already handled above
RUN dotnet publish ASPReact.Server/ASPReact.Server.csproj -c Release -o /app/publish /p:BuildProjectReferences=false


FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app

COPY --from=server-build /app/publish .

EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:8080

ENTRYPOINT ["dotnet", "ASPReact.Server.dll"]
