# Lead Management System - Frontend

## 🚀 Overview
This project is a **Lead Management System** developed with **Angular 13**. Users can submit leads via a form and view a list of submitted leads. The application communicates with a backend API to store and retrieve lead data.

## 🛠️ Technologies Used
- **Angular 13**: Frontend framework.
- **Bootstrap**: For responsive and clean UI styling.
- **RxJS**: For handling asynchronous operations.
- **Angular Environment Files**: To manage API URLs based on the environment.

## 📦 Project Structure
```
├── src/
│   ├── app/
│   │   ├── leads/
│   │   │   ├── leads.component.ts
│   │   │   ├── leads.component.html
│   │   │   ├── leads.component.css
│   │   ├── services/
│   │   │   └── leads.service.ts
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.prod.ts
├── README.md
└── angular.json
```

## 🔧 Setup Instructions

### 1. **Clone the Repository**
```bash
git clone https://github.com/your-username/lead-management-frontend.git
cd lead-management-frontend
```

### 2. **Install Dependencies**
```bash
npm install
```

### 3. **API URL Configuration**
This project uses Angular's built-in environment files to manage the API base URL. 

#### **Development Environment** (`src/environments/environment.ts`):
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000/leads',
};
```

I use the same apiUrl for both development and production environments for this exercise.
#### **Production Environment** (`src/environments/environment.prod.ts`):
```typescript
export const environment = {
  production: true,
  apiUrl: 'http://localhost:8000/leads'
};
```
> ℹ️ **Note:** No `.env` file is used. Angular handles environments through these TypeScript files.

### 4. **Run the Application**
#### Development Server:
```bash
ng serve --open
```
Access the application at `http://localhost:4200`.

#### Production Build:
```bash
ng build --prod
```

---

## 📝 Features
✅ Submit leads via a form with validation.  
✅ View a list of submitted leads.  
✅ Error messages displayed in a user-friendly bullet-point format.  
✅ Responsive design using Bootstrap.  
✅ Environment-based API URL configuration without the use of a `.env` file.

---

## 📊 API Endpoints
- **GET /leads**: Fetches all leads.
- **POST /leads**: Submits a new lead.

#### Sample Lead Payload:
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "+1 234 567 890",
  "source": "google"
}
```

---

## ⚠️ Error Handling
When the backend returns a validation error like:
```json
{
  "status": "error",
  "message": "Validation failed: {\"name\":\"Name must be between 3 and 50 characters.\",\"email\":\"A valid email address is required.\",\"source\":\"Source must be one of: facebook, google, linkedin, manual\"}"
}
```
The frontend displays:
- Name must be between 3 and 50 characters.  
- A valid email address is required.  
- Source must be one of: facebook, google, linkedin, manual.  

---

## 🏠 Pages Overview
- **Home Page:** Introduction with a "Get Started" button.  
- **Leads Page:** Lead submission form and a list of leads, with a navigation option back to the home page.