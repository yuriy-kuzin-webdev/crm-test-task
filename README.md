## Running the app

```bash
$ docker compose up --build
```

## Get token
POST http://localhost:3000/auth/login

## Post user
POST http://localhost:3000/api/v1/add-user
Content-Type: application/json
Authorization: Bearer <your_access_token_here>
```JSON
{
  "name": "John2",
  "email": "john2@example.com",
  "phone": "1334567890"
}
```

## Get user
GET http://localhost:3000/api/v1/get-user/<user_id_here>
Authorization: Bearer <your_access_token_here>

## React login page
http://localhost:5000/login
