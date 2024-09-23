# AgdataProj

This project includes both an Angular frontend (`agdataproj.client`) and a .NET Core Web API (`AgdataApp.Api`) for submitting and displaying user details.

## Prerequisites

- **Node.js**: Required to run the Angular frontend.
- **.NET 6 SDK**: Required to run the .NET Core Web API.
- **Git**: Required to clone the repository.

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/vj2254/AgdataProj.git
cd AgdataProj
```

### Run the .NET Core Web API

1) Navigate to the project directory

```bash
cd Agdata.Api
```

2) Restore the dependencies

```bash
dotnet restore
```

3) Run the Web API

```bash
dotnet run
```

The Web API will be running on https://localhost:7182

### Running the Angular Frontend

1) Navigate to the Angular project directory

```bash
cd ../agdataproj.client
```

2) Install dependencies

```bash
npm install
```

3) Start the Angular development server

```bash
ng serve
```

The Angular app will be running on http://localhost:4200

## Access the Application

- Open your browser and go to http://localhost:4200 to access the Angular frontend
- The Angular app will communicate with the Web API running on https://localhost:7182