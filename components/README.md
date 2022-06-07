# Backend directory
`/components/backend/`
Common use Django + Django Rest Framework, but sometimes we use FastAPI. We don't included their instalation in this
repo, becouse maybe tomorow we will started project with Falkon or Flast

```dockerfile
# example Dockerfile for Django

FROM python:3.10-slim-buster
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY . /app/
RUN pip install -r requirements.txt

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
```
# Frontend directory

`/components/frontend/` We usually use NuxtJS as frontend framework for us awsome projects.

### Frontend components:

- NuxrJS 3 ([latest release](https://github.com/nuxt/framework)) 
- Bootstrap 5
- [Pinia Store](https://pinia.vuejs.org/) with [persist](https://github.com/prazdevs/pinia-plugin-persistedstate)
- Dockerfile for use in Docker Compose