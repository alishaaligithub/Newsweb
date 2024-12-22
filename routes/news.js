const express = require('express');
const router = express.Router();
const News = require('../models/news');

// Create news
router.post('/', async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newArticle = new News({ title, content, author });
    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (error) {
    res.status(500).json({ error: 'Error creating news article' });
  }
});

// Read all news
router.get('/', async (req, res) => {
  try {
    const articles = await News.find();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching news articles' });
  }
});

// Read a single news article by ID
router.get('/:id', async (req, res) => {
  try {
    const article = await News.findById(req.params.id);
    if (!article) return res.status(404).json({ error: 'News article not found' });
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching news article' });
  }
});

// Update a news article by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedArticle = await News.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedArticle) return res.status(404).json({ error: 'News article not found' });
    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(500).json({ error: 'Error updating news article' });
  }
});

// Delete a news article by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedArticle = await News.findByIdAndDelete(req.params.id);
    if (!deletedArticle) return res.status(404).json({ error: 'News article not found' });
    res.status(200).json({ message: 'News article deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting news article' });
  }
});

module.exports = router;
