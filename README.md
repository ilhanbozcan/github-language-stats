# Github Language Stats

List percentage of programming languages used by user

Live demo: https://github-language-stats.herokuapp.com/



## Instructions

Firstly clone repository

```bash
git clone https://github.com/ilhanbozcan/github-language-stats
```

Install packages 

```bash
npm install
```
Run project

```bash
npm run start
```

Other commands

```bash
npm run build -> To build a code
npm run lint -> To lint a code
npm run format -> To format a code

```

## Run with docker

```bash
docker build -t github-language-stats:latest .
docker run --name github-language-stats -d -p 3000:3000 github-language-stats:latest
```

