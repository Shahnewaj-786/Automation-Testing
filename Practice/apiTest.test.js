const axios = require('axios');
const { expect } = require('chai');

// Define the base URL for the JSONPlaceholder API
const baseURL = 'https://jsonplaceholder.typicode.com';

describe('JSONPlaceholder API Tests', function () {
  it('GET /posts should return a list of posts', async function () {
    const response = await axios.get(`${baseURL}/posts`);
    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('array');
  });

  it('GET /posts/1 should return a specific post', async function () {
    const response = await axios.get(`${baseURL}/posts/1`);
    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('object');
  });

  it('GET /posts/1/comments should return comments for a specific post', async function () {
    const response = await axios.get(`${baseURL}/posts/1/comments`);
    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('array');
  });

  it('POST /posts should create a new post', async function () {
    const newPost = {
      title: 'New Post Title',
      body: 'New Post Body',
      userId: 1,
    };

    const response = await axios.post(`${baseURL}/posts`, newPost);
    expect(response.status).to.equal(201);
    expect(response.data).to.deep.include(newPost);
  });

  it('PUT /posts/1 should update a specific post', async function () {
    const updatedPost = {
      id: 1,
      title: 'Updated Post Title',
      body: 'Updated Post Body',
      userId: 1,
    };

    const response = await axios.put(`${baseURL}/posts/1`, updatedPost);
    expect(response.status).to.equal(200);
    expect(response.data).to.deep.include(updatedPost);
  });

  it('DELETE /posts/1 should delete a specific post', async function () {
    const response = await axios.delete(`${baseURL}/posts/1`);
    expect(response.status).to.equal(200);
  });
});