# API Specifications

## 1. Authentication API

### 1.1 Register User
```typescript
POST /api/auth/register
Request:
{
  email: string;
  password: string;
  name: string;
}
Response:
{
  user: User;
  session: Session;
}
```

### 1.2 Login User
```typescript
POST /api/auth/login
Request:
{
  email: string;
  password: string;
}
Response:
{
  user: User;
  session: Session;
}
```

### 1.3 Logout User
```typescript
POST /api/auth/logout
Response:
{
  message: string;
}
```

## 2. User API

### 2.1 Get User Profile
```typescript
GET /api/users/profile
Response:
{
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  joinDate: string;
}
```

### 2.2 Update User Profile
```typescript
PUT /api/users/profile
Request:
{
  name?: string;
  email?: string;
  avatar?: string;
  bio?: string;
}
Response:
{
  user: User;
}
```

## 3. Services API

### 3.1 Get All Services
```typescript
GET /api/services
Response:
{
  services: Service[];
}
```

### 3.2 Get Service Details
```typescript
GET /api/services/:id
Response:
{
  service: Service;
  packages: Package[];
}
```

## 4. Orders API

### 4.1 Create Order
```typescript
POST /api/orders
Request:
{
  serviceId: string;
  packageId: string;
  details: {
    // Service-specific details
  };
}
Response:
{
  order: Order;
  paymentIntent: PaymentIntent;
}
```

### 4.2 Get User Orders
```typescript
GET /api/orders
Response:
{
  orders: Order[];
}
```

### 4.3 Get Order Details
```typescript
GET /api/orders/:id
Response:
{
  order: Order;
  status: OrderStatus;
  progress: OrderProgress;
}
```

## 5. Payments API

### 5.1 Create Payment Intent
```typescript
POST /api/payments/create-intent
Request:
{
  orderId: string;
  amount: number;
}
Response:
{
  clientSecret: string;
}
```

### 5.2 Confirm Payment
```typescript
POST /api/payments/confirm
Request:
{
  paymentIntentId: string;
}
Response:
{
  status: string;
  order: Order;
}
```

## 6. Content API

### 6.1 Upload Content
```typescript
POST /api/content/upload
Request:
{
  file: File;
  type: string;
  orderId: string;
}
Response:
{
  url: string;
  id: string;
}
```

### 6.2 Get Content
```typescript
GET /api/content/:id
Response:
{
  content: Content;
  url: string;
}
```

## 7. Error Responses

### 7.1 Standard Error Format
```typescript
{
  error: {
    code: string;
    message: string;
    details?: any;
  }
}
```

### 7.2 Common Error Codes
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

## 8. Rate Limiting

### 8.1 Limits
- Authentication: 5 requests per minute
- API endpoints: 100 requests per minute
- File uploads: 10 requests per minute

### 8.2 Headers
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1625097600
```

## 9. Webhooks

### 9.1 Payment Webhook
```typescript
POST /api/webhooks/payment
Request:
{
  type: string;
  data: {
    object: PaymentIntent;
  };
}
```

### 9.2 Order Webhook
```typescript
POST /api/webhooks/order
Request:
{
  type: string;
  data: {
    order: Order;
    status: string;
  };
}
```

## 10. Security

### 10.1 Authentication
- JWT tokens required for all endpoints
- Token expiration: 24 hours
- Refresh token rotation

### 10.2 Headers
```
Authorization: Bearer <token>
Content-Type: application/json
``` 