# Backend TODO - Reviews API

Your frontend is ready, but you need to add these endpoints to your backend:

## Required Endpoints

### 1. GET /reviews
- Returns all reviews
- Response: `Review[]`

### 2. GET /reviews/:id (optional)
- Returns a single review
- Response: `Review`

### 3. POST /reviews (optional - for admin)
- Creates a new review
- Body: `{ project_name, client_name, place, review, stars }`

### 4. PUT /reviews/:id (optional - for admin)
- Updates a review

### 5. DELETE /reviews/:id (optional - for admin)
- Deletes a review

## Sample Backend Code (Node.js/Express)

```javascript
// routes/reviews.js
router.get('/reviews', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

After deploying these endpoints, the reviews will display automatically on your About page!
