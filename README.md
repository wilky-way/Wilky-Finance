# WilkyFinance
### A site to track stocks... for now.
## Table of Contents
**[Walking Skeleton API](#walking-skeleton-api)**<br>
**[Walking Skeleton Client](#walking-skeleton-client)**<br>
**[Building CRUD Application](#building-crud-application)**<br>

## Walking Skeleton API
### Architecture
- https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html
  - Entities = Domain project
  - Use Cases = Application
  - Controllers = What we use in API

  - API -> Application -> Domain
  - Application -> Persistence -> Domain
- Create Solution File to contain projects
  - dotnet new sln
- Create web api and class library files
  - API project - Web API 
    - dotnet new webapi -n API
  - Application project - Contains business logic
    - dotnet new classlib -n Application
  - Domain project - Contains domain entities
    - dotnet new classlib -n Domain
  - Persistance project - Responsible for communicating with database
    - dotnet new classlib -n Persistence
- Add projects to solution file
  - dotnet sln add .\Domain\
  - dotnet sln add .\Application\
  - dotnet sln add .\Persistence\
  - dotnet sln add .\API\
  - Check if projects are in solution list
    - dotnet sln list
- Add references - lets each project know what it's dependencies are
  - Domain is the center, has no dependencies on other projects
  - Application needs dependency on Domain and Persistence projects
    - cd .\Application\
    - dotnet add reference ..\Domain\
    - dotnet add reference ..\Persistence\
  - API needs reference to Application. 
    - Will have transitive dependency on Domain
    - cd ..\API\
    - dotnet add reference ..\Application\
  - Persistence has dependency on Domain
    - cd ..\Persistence\
    - dotnet add reference ..\Domain\
- Add Nuget Packages to create DbContext and service
  - Use 3.0.0 because of runtime used.
  - Microsoft.EntityFrameworkCore@3.0.0 to Persistence project
  - Microsoft.EntityFrameworkCore.Sqlite@3.0.0 to Persistence project
  - Then we have to update projects to netstandard 2.1 because of an error when we restore
- Add first Entity Framework Core code migration
  - dotnet tool install --global dotnet-ef
  - Add Nuget package Microsoft.EntityFrameworkCore.Design@3.0.0 to API project or there will be an error on command below
  - dotnet ef migrations add InitialCreate -p .\Persistence\ -s .\API\
- Seed Data using EF fluent configuration
  - dotnet ef migrations add SeedValues -p .\Persistence\ -s .\API\

## Walking Skeleton Client
- Create React App
  - npx create-react-app client-app --use-npm
  - npm start
- Install axios
  - npm install axios
    - run from client-app directory
- Install semantic ui
  - npm install semantic-ui-react

## Building CRUD Application
- Adding the Stock Entity
  - dotnet ef migrations add "StockEntityAdded" -p .\Persistence\ -s .\API\
- 