# WilkyFinance
### A site to track stocks... for now.
## Commands to Create Project
- Create Solution File to contain projects
  - dotnet new sln
- Create class library files
  - API project - Web API 
    - dotnet new webapi -n API
  - Application project - Contains business logic
    - dotnet new classlib -n Application
  - Domain project - Contains domain entities
    - dotnet new classlib -n Domain
  - Persistance project - Responsible for communicating with database
    - dotnet new classlib -n Persistence
- 