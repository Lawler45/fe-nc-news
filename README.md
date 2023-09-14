# Lawler News Front End

**Hosted link:** [Lawler News](https://main--lawler-news.netlify.app/)

## About

This Front End project connects with the API created in the [Back End project](https://github.com/Lawler45/lawler-news-back-end) at [Northcoders](https://www.northcoders.com/). This full stack application took 2 weeks in total to create, a week for each project. The technologies used for this project are detailed below:


- JSX
- React
- React Router
- Vite
- CSS

This web application allows users to read news articles that they can filter down by specific topic as well as sort them by either the date the article was published or the amount of votes an article in ascending or decsending order. Please see the applications features below:


- Sort and filter articles
- Add and delete comments
- User context for the comments and article authors
- Fully responsive layout for all devices



## Instructions

### 1. First clone the repo in your terminal

```
git clone https://github.com/Lawler45/lawler-news-back-end.git
```

### 2. Ensure that you install the required dependencies

```
npm i
```

### 3. Create .env files in root directory

```sql
npm run dev
```

### 4. Setup and seed the local database if you want to send local requests

```
npm run setup-dbs

npm run seed
```

### 5. Test database using jest.

```
npm t
```