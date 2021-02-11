# Project Plan
Interview rubric creator
by Sunday

#Features:
- User will be hiring manager or recruiter making a slate of onsites for engineers
- They need to be able to answer questions about the sort of candidate and share the slate with their team
- The first step will be selecting the level (L3-5) and the domain (FE/BE/Infra)
- The next page will be a unique shareable link to send to their team
- Each slate will have the industry standard mix of questions such as 3 coding, 1 system design and 1 behavioral for L5 Backend.


#Technical specs:
Backend:
- Two models (mongo) to store questions with the type of interviews each question can be used for (by level and domain)
- Routes to fetch the API 
- Create a unique link show page for each new slate.

#Conditional Logic:
- How do I  create a slate before fetching random questions?
    - what are the conditions for a level and domain? Each slate has a unique set of questions. That needs to be hard coded in models.
    - Eg: L5 Backend would require xyz mix. 
      The resulting model needs to be used in a higher order function to fetch random questions that are: 
      1. the right level AND 2. the right domain AND 3. is not an ID that's been used in this slate already.

#Frontend/React:
- React form and a unique show page for each slate
- Question database for admin with full CRUD (stretch goal) 
- Try bootstrap rather than SCSS



## About this starter kit.

**Install Gulp Globally**
```bash
npm i -g gulp-cli
```

**Start the dev server**
```bash
npm run dev
```
### or
```bash
yarn dev
```

**Start the dev server with proxy**
```bash
npm run proxy
```

**Build files for production**
```bash
yarn build
```
### or

```bash
npm run build
```

**Deploy for production script**
```bash
npm start
```
### or
```bash
yarn start
```
# interview-slate-creator
